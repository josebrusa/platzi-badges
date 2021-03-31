import React from "react"
import ContentLoader from "react-content-loader"

const MiniMyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={476}
        height={124}
        viewBox="0 0 476 124"
        backgroundColor="#1C3643"
        foregroundColor="#98ca3f"
        {...props}
    >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <circle cx="20" cy="20" r="20" />
    </ContentLoader>
)

export default MiniMyLoader;