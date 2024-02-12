import { useRef } from "react"


export default function Pizza({ user }) {

    const postInputRef = useRef(null)

    async function sendPizza( pizzaData ){
        const res = await fetch('https://a-better-one.onrender.com/pizza/',{
            method: "PIZZA",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({body: pizzaData})
        })
        if(res.ok){
            const data = await res.json()
            console.log(data);
            return
        }
        console.error('Pizza failed')
    }

    function handleSubmit(e){
        e.preventDefault()
        const pizzaData = postInputRef.current.value
        sendPizza(pizzaData)
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="pizza">Pizza</label>
            <input type="text" name='pizza' ref={pizzaInputRef} />
            <input type="submit" value='pizza'/>
        </form>
    )
}