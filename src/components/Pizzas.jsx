import Pizza from "./Pizza"

export const Pizzas = () => {

    const pizzas = [
        {
            "toppings": "Editing from insomnia 2",
            "id": "3",
            "timestamp": "2024-01-03T00:35:27.568774",
            "user_id": "1"
        },
        {
            "toppings": "PIZZA from insomnia 32",
            "id": "4",
            "timestamp": "2024-01-03T00:54:46.188100",
            "user_id": "1"
        },
        {
            "toppings": "PIZZA from insomnia 332",
            "id": "5",
            "timestamp": "2024-01-03T00:54:49.010977",
            "user_id": "1"
        },
        {
            "toppings": "PIZZA from insomnia 3332",
            "id": "6",
            "timestamp": "2024-01-03T00:54:50.843257",
            "user_id": "1"
        }
    ]

    return (
        <>
            {pizzas.length > 0 ? pizzas.map((pizza) => {
                return <Pizza key={pizza.id} pizza={pizza} />
            }) : <p>No Pizzas to Display</p>}
        </>
    )
}