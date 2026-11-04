import { slotsImages } from "../data/Arrays";
import type { SlotMachineProps, SlotProps } from "../types/types";
import styles from "./SlotMachine.module.css"

const Slot = ({value} : SlotProps) => {
    return <img src={slotsImages[value].image} alt={slotsImages[value].name} width="100" className={styles.slot}></img>
}

const getRandomSlots = (numberOfSlots: number) => {
    let slots: number[] = []
    for (let i= 0; i < numberOfSlots; i++) {
        slots.push(Math.floor(Math.random() * 5))
        
    }
    return slots;
}

export const SlotMachine = ({slots} : SlotMachineProps) => {
    let RandomSlots = getRandomSlots(slots);

    let winning : boolean = RandomSlots.every((slot) => slot === RandomSlots[0])

    return(
        <div className={styles.machine}>
            {winning ? <p>Je Hebt Gewonnen!</p> : <p>Je Hebt Verloren!</p>}

            {RandomSlots.map((slot, index) => 
                <Slot value={slot} key={index}/>
            )}
        </div>
    )
}