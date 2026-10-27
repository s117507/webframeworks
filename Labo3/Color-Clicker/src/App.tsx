import ColorSquare from "./ColorSquare.tsx";
import styles from "./App.module.css"

function getRandomColor(): string{
    const letters = `01234556789ABCDEF`;
    let color = `#`
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

const colors = Array.from({length: 10}, getRandomColor)

function App() {

  return (
    <div>
        <h1>Color Clicker</h1>
        <div className={styles.colorSquareContainer}>
            {colors.map((color, i) =>(
                <ColorSquare key={i} color={color} size={100}/>
            ))}
        </div>
    </div>
  )
}

export default App
