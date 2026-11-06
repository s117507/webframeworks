import ColorSquare from "../components/Colorsquare";

const getRandomColors = () => {
const colors = [];
const chars = "0123456789ABCDEF";

for (let i = 0; i < 10; i++) {     
    let color = "#";               
    for (let j = 0; j < 6 ; j++) {
        let char = chars[Math.floor(Math.random() * chars.length)];
        color += char
    }
    colors.push(color);
}
return colors;
}

const ColorClicker = () => {
    const colors = getRandomColors();
    return(
        <div>
            {colors.map((color, index) => (
                <ColorSquare key={index} color={color} size={100}/> 
            ))}
        </div>
    )
}



export default function Color() {
    return(
        <>
            <ColorClicker />
        </>
    )
}