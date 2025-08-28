"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const ViewBasedAnimations = () => {

    const ref = useRef(null);  
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        console.log("Is in view? ", isInView);
    }, [isInView]);

    return (
         <div
            style= {{
                height: "150vh"
            }}>
            <h1>View Based Animations</h1>

            <motion.div // causes the color to fade in 
                style={{
                    height:'100vh', background: 'black'
                }}
                initial={{opacity: 0}}
                whileInView={{opacity: 1, background: 'pink'}}
                transition={{ duration: 1 }}
            />
            
            <div
                ref={ref} // ref above is a ref to this element here
                style = {{
                    height: "100vh",
                    background: isInView ? "black" : "red", 
                    transition: "is background"
                }}
            >

            </div>


        </div>
    );
}

export { ViewBasedAnimations };