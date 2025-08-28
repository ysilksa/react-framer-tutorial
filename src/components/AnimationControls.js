"use client";
import React from 'react';
import {motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
    const flipControls = useAnimationControls(); 

    const handleClick = () => {
        flipControls.start("flip"); // we can pass in the variant name 
    };

    return (
        <div
            style={{
            display: "grid",
            placeContent: "center",
            height: "100vh",
            gap: "0.8rem",
        }}>
            <h1>Animation Controls</h1>
            <p>this example: press button to make the square rotate</p>
            <p>practical uses: on form submit, confetti flies across the screen</p>

            <button 
                onClick={handleClick}
                className='example-button'>Flip it!</button>
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    background: "black"
                }}
                variants = {{
                    initial: {
                        rotate: "0deg"
                    },
                    flip: {
                        rotate: "360deg"
                    },
                    banana: {
                        rotate: "700deg"
                    },
                }}
                initial="initial"
                animate={flipControls}
            >
            </motion.div>

            

        </div>
    );
}

export { AnimationControls };