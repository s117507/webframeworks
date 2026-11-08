import React, { useState } from "react"
import { goodies } from "../data/data"
import type { Item } from "../types/Interfaces"

const Goodslist = ({goods : propsGood }: {goods: Item[]}) => {
    const [goods, setGoods] = useState(propsGood);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(500);
    const [inStock, setInStock] = useState(false)

    const addProduct : React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setGoods([...goods,{name: productName, price: price, inStock: inStock}]);
        setProductName("");
        setPrice(0);
        setInStock(false);
    }

    return(
        <section>
            <article>
                <form onSubmit={addProduct}>
                    <label>Product name:</label><input placeholder="product name" type="text" value={productName} onChange={(event) => setProductName(event.target.value)}/>
                    <label>Price</label><input placeholder="price" type="number" value={price} onChange={(event) => setPrice(parseInt(event.target.value))}/>
                    <label>In Stock</label><input type="checkbox" checked={inStock} onChange={(event) => setInStock(event.target.checked)}/>
                    <input type="submit" value="Add product" style={{gridColumnStart: 1, gridColumnEnd: "span 2"}}/>
                </form>
            </article>
            <article style={{display: "grid", gridTemplateColumns: "300px 100px"}}>
                {goods.map((item) => (
                    <React.Fragment key={item.name}>
                        <span style={{color: item.inStock ? "black" : "red"}}>{item.name}</span>
                        <span>€ {item.price}</span>
                    </React.Fragment>
                ))}
            </article>
        </section>
    )
}


export default function StoreWidget() {
    return(
        <Goodslist goods={goodies} />
    )
}