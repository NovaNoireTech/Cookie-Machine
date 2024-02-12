import { useState } from "react"
import Pizza from "./SinglePizza"

export const Pizzas = () => {

    const [ pizzas, setPizzas ] = useState([])

    useState( () => {
        (async ()=>{
            const res = await fetch('https://a-better-one.onrender.com/pizza/')
            if(res.ok){
                const data = await res.json()
                setPizzas(data);
                return
            }
            console.error('failed to get pizzas')
        })()
    }, [])
    return (
        <>
            {pizzas.length > 0 ? pizzas.map((pizza) => {
                return <Pizza key={pizza.id} pizza={pizza} />
            }) : <p>No Pizzas to Display</p>}
        </>
    )
}