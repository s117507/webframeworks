import type { ColorProps } from "../types/interfaces"
import type React from "react"

export default function ColorSquare({color , size}: ColorProps){
    const handleClick : React.MouseEventHandler<HTMLDivElement> = () => {
        alert(`ColorSquare clicked with color ${color}`)
    }
    return(
        <div style={{backgroundColor: color, width: size, height: size }} onClick={handleClick}>

        </div>
    )
}

