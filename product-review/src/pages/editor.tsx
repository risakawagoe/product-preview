import { FileInput, Image } from "@mantine/core";
import sample from '../media/drop-shape.svg';
import customImage from '../media/customimage.png';
import shape from '../media/bookmarktriangle.svg';
import './editor.css';
import { useRef, useState } from "react";

export function Editor() {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false)
    const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLImageElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        // imageRef.current = { x: e.clientX - maskPosition.x, y: e.clientY - maskPosition.y };
        e.preventDefault();
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        if(imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const newX = Math.min(Math.max(e.clientX - rect.left, 0), rect.right);
            const newY = Math.min(Math.max(e.clientY - rect.top, 0), rect.bottom);
            // const newX = e.clientX - offset.current.x;
            // const newY = e.clientY - offset.current.y;
            console.log({ x: newX, y: newY })
            console.log(maskPosition)
            const w = rect.right - rect.left;
            const h = rect.top - rect.bottom;
            setMaskPosition({ x: 100*newX/w, y: 100*newY/h });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const resetEditor = (file: null | File) => {
        setFile(file);
        setMaskPosition({ x: 0, y: 0 });
    }

    return (
        <div>
            <FileInput
                value={file} 
                onChange={resetEditor} 
                label="Custom Image"
                description="Select an image you would like to have on the item."
                accept="image/png, image/jpg"
            />
            {file != null && 
            <div className="bookmark">
                <img 
                    ref={imageRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp} 
                    src={URL.createObjectURL(file)} 
                    style={{ maskPosition: `${maskPosition.x}%, ${maskPosition.y}%`, cursor: 'pointer' }} />
            </div>}
        </div>
    );
}