import type { NavItem, SlotItems } from "../types/types.tsx";
import Lemon from "../assets/lemon.png"
import Cherry from "../assets/cherry.png"
import Watermelon from "../assets/watermelon.png"
import Prune from "../assets/prune.png"
import Seven from "../assets/seven.png"

export const links : NavItem[] = [
    {to:"/", label:"Home", end: true},
    {to:"/about", label:"About"},
    {to:"/index", label: "Index"},
    {to:"/slots", label: "Slots"}
]

export const slotsImages: SlotItems[] = [
    {id: 0, name: "Lemon", image: Lemon },
    {id: 1, name: "Cherry", image: Cherry },
    {id: 2, name: "Watermelon", image: Watermelon },
    {id: 3, name: "Prune", image: Prune },
    {id: 4, name: "Seven", image: Seven },

]