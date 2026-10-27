import type React from "react";

interface ColorSquareProps {
    color   :   string,
    size    :   number;
}

const ColorSquare : React.FC<ColorSquareProps> = ({color, size}) => {
    const HandleClick : React.MouseEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();
        alert(`The color of this square is ${color}`);
    };

    const squareStyle = {
        width : `${size}px`,
        height: `${size}px`,
        backgroundcolor: color,
    }

    return (
        <div
            style={squareStyle}
            onClick={HandleClick}
        />
    )
};

export default ColorSquare;