import { Container, Image } from '@mantine/core';
import React, { FC, useState } from 'react';
import Draggable from 'react-draggable';
import customImage from '../media/customimage.png';
import './canvas.css';

export const Canvas: FC = () => {
    const [state, setState] = useState({
        deltaPosition: { x: 0, y: 0 },
        controlledPosition: { x: 0, y: 0 }
        // controlledPosition: { x: -400, y: 200 }
    })
    const onStart = () => {
        setState({ deltaPosition: state.deltaPosition, controlledPosition: state.controlledPosition });
    };
    
    const onStop = () => {
        setState({ deltaPosition: state.deltaPosition, controlledPosition: state.controlledPosition });
    };
    const dragHandlers = {onStart: onStart, onStop: onStop};
    return(
        // <div style={{ backgroundColor: "rgb(233 231 231)", width: "100%", height: "75vh", position: "relative" }}>
        //     <Draggable bounds='parent' >
        //         <Image 
        //             id='design'
        //             h={200}
        //             w="auto"
        //             fit="contain" src={customImage} />
        //         {/* <div>I can now be moved around!</div> */}
        //     </Draggable>
        // </div>
        <div className="box" style={{height: '75vh', width: '100%', padding: '12px', position: 'relative', background: 'rgb(233 231 231)', borderRadius: '4px'}}>
            <Draggable bounds="parent" {...dragHandlers} scale={.6}>
                <div className="box" style={{ width: '200px', border: '2px solid black' }}>
                I can only be moved within my offsetParent.<br /><br />
                Both parent padding and child margin work properly.
                </div>
            </Draggable>
            <Draggable bounds="parent" {...dragHandlers} >
                <div style={{ display: 'inline-block'}}>
                    <img id='design' src={customImage} style={{ display: 'block', objectFit: 'contain', height: '200px', width: 'auto' }} />
                </div>

            </Draggable>

        </div>
    );
};