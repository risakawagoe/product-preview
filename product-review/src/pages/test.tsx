import { FileInput } from '@mantine/core';
import React, { useState, useRef } from 'react';

export const DraggableMaskSVG: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
    const isDragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });

  // Handle mouse down event
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    offset.current = { x: e.clientX - maskPosition.x, y: e.clientY - maskPosition.y };
    e.preventDefault(); // Prevent text selection and other default behaviors
  };

  // Handle mouse move event
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const newX = e.clientX - offset.current.x;
    const newY = e.clientY - offset.current.y;
    setMaskPosition({ x: newX, y: newY });
  };

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Attach mouse events to the SVG or a container element
  return (
    <div>
        <FileInput
            value={file} 
            onChange={setFile} 
            label="Custom Image"
            description="Select an image you would like to have on the item."
            accept="image/png, image/jpg"
        />

        {file != null && 
            <div 
            style={{ display: 'inline-block', border: '1px solid black' }} 
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the container
          >
            <svg width="300" height="300">
              {/* Background rectangle to show where the mask will be */}
              <rect width="100%" height="100%" fill="lightgray" />
      
              {/* Define mask with a draggable image */}
              <defs>
                <mask id="mask1">
                  <image
                    x={maskPosition.x}
                    y={maskPosition.y}
                    href="https://example.com/your-image.jpg" // Replace with your mask image URL
                    width="100"
                    height="100"
                  />
                </mask>
              </defs>
      
              {/* Apply the mask to an element */}
              <rect
                x="50"
                y="50"
                width="200"
                height="200"
                fill="blue"
                mask="url(#mask1)"
              />
            </svg>
      
            <div
              style={{
                position: 'absolute',
                top: '50px',
                left: '50px',
                cursor: 'pointer',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '5px 10px',
              }}
              onMouseDown={handleMouseDown}
            >
              Drag Mask
            </div>
          </div>
        }
    </div>
  );
};
