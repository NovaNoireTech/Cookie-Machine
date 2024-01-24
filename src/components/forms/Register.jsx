import { useState } from "react"

export default function Register () {
    const [user, setUser] = useState ({username: '', email: '', password: ''})

    function handleChange(e,k) {
        setUser({...user, k: e.target.value})
    }

    return (
        <>
            <h3> Register</h3>
            <form action= "">
                <label htmlFor= "username">Username</label><br />
                <input type = "text" name='username' value= {user.username} onChange={(e) => setUser({...user, username: e.target.value})} /><br />
                <label htmlFor= "email">Email</label><br />
                <input type="email" name='email' value= {user.email} /><br />
                <label htmlFor = "password">Password</label><br />
                <input type = "password" name= 'password' value= {user.password}/><br />
            </form>
        </>

    )
}