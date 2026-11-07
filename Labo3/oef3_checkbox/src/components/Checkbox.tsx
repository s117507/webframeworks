import type { GridProps } from "../types/interfaces";

export default function CheckBox({size} : GridProps) {
    const grid: boolean [][] = 
        Array.from({length: size},
            () => Array.from({length: size}, () => false)
    )

    return(
        <div>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((_checked, colIndex) => (
                        <input key={colIndex} type="checkbox" onChange={(e) => alert(
                            `Position (${rowIndex}, ${colIndex}), is ${e.target.checked}`
                        )}/>
                    ))}    
                </div>
            ))}
        </div>
    )
}