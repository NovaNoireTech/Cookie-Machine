import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function Users() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://a-better-one.onrender.com/user'); //the code for api joint
                if (res.ok) {
                    const data = await res.json();
                    setUser(data);
                } else {
                    console.log('Error:', res.status);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);

    if (users.length === 0) {
        return <Spinner animation="border" role="status">
                   <span className="sr-only">Loading...</span>
               </Spinner>;
    }

    return (
        <>
            {users.map(user => {
                return <p key={user.id}>{user.username}</p>;
            })}
        </>
    );
}
