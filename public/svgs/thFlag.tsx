import React from "react";

export interface Props {
    width?: number | string;
    height?: number | string;
    className?: string;
}

export default ({ width = 'auto', height = 'auto', className }: Props) => {
    return (
        <svg width={width} height={height} viewBox="0 0 5000 2638" fill="none" shapeRendering="crispEdges">
            <path d="M0 0 C1650 0 3300 0 5000 0 C5000 870.54 5000 1741.08 5000 2638 C3350 2638 1700 2638 0 2638 C0 1767.46 0 896.92 0 0 Z " fill="#FE1C0C" transform="translate(0,0)" />
            <path d="M0 0 C1650 0 3300 0 5000 0 C5000 296.34 5000 592.68 5000 898 C3350 898 1700 898 0 898 C0 601.66 0 305.32 0 0 Z " fill="#FE1C0C" transform="translate(0,1740)" />
            <path d="M0 0 C1650 0 3300 0 5000 0 C5000 277.86 5000 555.72 5000 842 C3350 842 1700 842 0 842 C0 564.14 0 286.28 0 0 Z " fill="#002DA0" transform="translate(0,898)" />
            <path d="M0 0 C1650 0 3300 0 5000 0 C5000 122.1 5000 244.2 5000 370 C3350 370 1700 370 0 370 C0 247.9 0 125.8 0 0 Z " fill="#FEFEFE" transform="translate(0,1740)" />
            <path d="M0 0 C1650 0 3300 0 5000 0 C5000 122.1 5000 244.2 5000 370 C3350 370 1700 370 0 370 C0 247.9 0 125.8 0 0 Z " fill="#FEFEFE" transform="translate(0,528)" />
        </svg>
    );
};