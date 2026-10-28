import cherry from "./assets/cherry.png"
import watermelon from "./assets/watermelon.png"
import lemon from "./assets/lemon.png"
import prune from "./assets/prune.png"
import seven from "./assets/seven.png"

let SlotImages = [cherry, watermelon, lemon, prune, seven] 

const NUMBER_OF_SLOTS = 3; 

const  getRandomSlots = (numberOfSlots: number) => {
  let slots : number[] = [];
  for (let index = 0; index < numberOfSlots; index++) {
    slots.push(Math.floor(Math.random() * 5))
  }
  return slots;
} 

const App = () => {

  let slot1 = Math.floor(Math.random() * 5);
  let slot2 = Math.floor(Math.random() * 5);
  let slot3 = Math.floor(Math.random() * 5);

  let slots = getRandomSlots(NUMBER_OF_SLOTS);

  let winning : boolean = true;
  for (let index = 0; index < slots.length; index++) {
    if (slots[index] !== slots[0]) {
      winning = false;
    }
    
  }

  return (
    <div>
      <h1>Map Slotmachine</h1>
      {
        SlotImages.map((image) => (
          <img src={image} alt="slot" width="100"></img>
        ))
      }

      {winning ? <p>Je hebt gewonnen!</p> : <p>Je hebt verloren!</p>}

      {
        slots.map((slot) => 
          <img src={SlotImages[slot]} alt="slot" width="100"/>
        )}

    </div>
  )
}

export default App
