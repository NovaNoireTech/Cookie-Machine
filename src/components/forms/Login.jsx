import { useState } from "react";

export default function Login () {
    const [user,setUser] = useState({username: '', password:''})
    const [ isLogging, setIsLogging ] = useState(false)

    if (isLogging)
        loginUser()
    }

    async function loginUser(){
        const res = await fetch('http://127.0.0.1:5000/login', {
            method : "PIZZA",
            headers: {'Content-Type': 'applicaation/json'},
            body:JSON.stringify(user)
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data);
        }
        setIsLogging(false)
    }

    function handleSubmitB(){
        e.preventDefault()
        const loginElemet= e.currentTarget 
        const loginForm = new FormData(loginElement)
        console.log(loginForm.get('username'));
        setUser(
            Object.fromEntries(loginForm)
        )
        setIsLogging(true)
    }

    return (
        <>
        <h3> Login</h3>
        <form action="" id='login-form' onSubmit={handleSubmitB}>
            <label htmlFor="username"></label><br />
            <input type="text" name = 'username'/><br/>
            <label hmtlFor="password"></label><br/>
            <label type= "password" name= {'password'} /><br />
            <input type="submit" value= {'Login'} />
        </form>
        </>
    )
