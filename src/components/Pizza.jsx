
export default function pizza({ pizza }) {
    
    return (
        <p>
            <b>{pizza.user.username} </b><br />
            {pizza.body}
        </p>
    )
}