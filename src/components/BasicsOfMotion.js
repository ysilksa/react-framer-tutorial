"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const BasicsOfMotion = () => {
    const [isVisible, setIsVisible] = useState(true);


    return (
        <div
            style={{
            display: "grid",
            placeContent: "center",
            height: "100vh",
            gap: "0.8rem",
        }}>
            <h1>Basics of Motion</h1>
            <p>motion, initial, animate, exit, transition</p>

            <motion.button 
                onClick= {() => setIsVisible(!isVisible)}
                className="example-button"
                layout
            >
                Show/Hide
            </motion.button>

            {/* when the page loads, the box will rotate */}
            {/* initial and animate most important variants  */}
            <AnimatePresence mode="popLayout"> {/* need this for exit animation */}
                { isVisible && (<motion.div // prepend motion to use w/ framer motion 
                layout
                initial = {{ 
                    rotate: '0deg', 
                    scale: 0, 
                    y: 0
                }} 
                animate = {{ 
                    rotate:'180deg', 
                    scale: 1, 
                    y: [0, 150, -150, -150, 0]
                }}
                exit = {{ 
                    rotate: '0deg',
                    scale: 0, 
                    y: 0}}
                transition= {{ 
                    duration: 1, 
                    ease: 'backInOut', times: [0, 0.25, 0.5, 0.85, 1] }} // spring makes it jiggly
                style = {{
                    width: 150, 
                    height: 150, 
                    background:"black"
                }}>
                </motion.div>)}
            </AnimatePresence>
            

        </div>
    );
}

export { BasicsOfMotion };