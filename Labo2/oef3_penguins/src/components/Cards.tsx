import Mcdo from "../assets/Mcdo.jpg"
import Kfc from "../assets/Kfc.jpg"
import Wendy from "../assets/Wendy.jpg"
import PizzaHut from "../assets/PizzaHut.jpg"
import Subway from "../assets/Subway.jpg"
import type { Cards } from "../types/Types"
import styles from "./Cards.module.css"

const cards : Cards[] = [
    {id: 1, name: "Kfc", image: Kfc, description: "Chicken", area: "Usa"},
    {id: 2, name: "Mc'Donalds", image: Mcdo, description: "Chicken Nuggets", area: "Usa"},
    {id: 3, name: "Wendy", image: Wendy, description: "Wok to go", area: "Usa"},
    {id: 4, name: "Subway", image: Subway, description: "Bigass Sandwiches", area: "Usa"},
    {id: 5, name: "Pizza Hut", image: PizzaHut, description: "Tasty pizza's", area: "Europe"}

]


export default function Cards() {
    return(
        <section className={styles.cards}>
            {cards.map((card) =>
                <article key={card.name}>
                    <img src={card.image} alt={card.name}/>
                    <h2>{card.name}</h2>
                    <p><b>Id:</b> {card.id}</p>
                    <p><b>Description:</b> {card.description}</p>
                    <p><b>Area:</b>{card.area}</p>
                </article>
            )}
        </section>
    )
}