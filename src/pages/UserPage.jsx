import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Body from '../components/Body'

import Spinner from 'react-bootstrap/Spinner'

export default function UserPage() {

    const [user, setUser] = useState(null)

    const { username } = useParams()
    console.log(username, 'params');

    useEffect(() => {
        (async () => {
            const res = await fetch('https://a-better-one.onrender.com//user/'.concat(username))
            if (res.ok) {
                const data = await res.json()
                console.log(data);
                const { username, pizzas } = data
                setUser({ username, pizzas })
            }
        })()
    }, [])

    if (!user) return <Spinner />

    return (
        <>
        <h2>{user.username}</h2>
        {user.pizzas.map((pizza) => {
                return <p key={pizza.id}>{pizza.body} <small>{pizza.timestamp}</small> </p>
            })}
        </>
    )
}