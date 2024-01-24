import Pizza from "./Pizza"

export const Pizzas = () => {

    const pizzas = [
        {
            "body": "Editing from insomni 2",
            "id": "1",
            "timestamp": "2024-01-03T00:35:27.568774",
            "user": {
                "email": "jsmith@gmail.com",
                "first_name": null,
                "id": "8",
                "last_name": null,
                "username": "jsmith"
            }
        },
        {
            "body": "POST from insomnia 32",
            "id": "2",
            "timestamp": "2024-01-03T00:54:46.188100",
            "user": {
                "email": "dglover@gmail.com",
                "first_name": null,
                "id": "7",
                "last_name": null,
                "username": "dglover"
            }
        },
        {
            "body": "POST from insomnia 332",
            "id": "3",
            "timestamp": "2024-01-03T00:54:49.010977",
            "user": {
                "email": "sbrown@gmail.com",
                "first_name": null,
                "id": "6",
                "last_name": null,
                "username": "sbrown"
            }
        },
        {
            "body": "POST from insomnia 3332",
            "id": "4",
            "timestamp": "2024-01-03T00:54:50.843257",
            "user": {
                "email": "kmassey@gmail.com",
                "first_name": null,
                "id": "5",
                "last_name": null,
                "username": "kmassey"
            }
        },
        {
            "body": "logged in post",
            "id": "5",
            "timestamp": "2024-01-04T01:56:13.923976",
            "user": {
                "email": "kedwards@gmail.com",
                "first_name": null,
                "id": "4",
                "last_name": null,
                "username": "kedwards"
            }
        },
        {
            "body": "logged in post",
            "id": "6",
            "timestamp": "2024-01-04T02:00:12.567400",
            "user": {
                "email": "sglover@gmail.com",
                "first_name": null,
                "id": "3",
                "last_name": null,
                "username": "sglover"
            }
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