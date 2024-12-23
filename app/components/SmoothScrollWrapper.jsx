'use client'
import ReactLenis from "@studio-freight/react-lenis"

const SmoothScrollWrapper = ({ children }) => {
    return (
        <>
            <ReactLenis root options={{ lerp: 0.5 }}>
                {children}
            </ReactLenis>
        </>
    )
}

export default SmoothScrollWrapper