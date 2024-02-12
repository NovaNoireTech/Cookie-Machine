
export default function SinglePizza({ pizza }) {
    
    return (
        <p>
            <b>{pizza.user.username} </b><br />
            {pizza.body}
        </p>
    )
}