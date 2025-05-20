import React from "react";
import Navbar from "./Navbar";
import ReactLenis from "lenis/react";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ReactLenis
                root
                options={{
                    lerp: 0.1,
                    smoothWheel: true,
                    duration: 1.8,
                }}>
                <Navbar />
                {children}
            </ReactLenis>
        </>
    );
}
