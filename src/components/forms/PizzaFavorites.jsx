import { useState } from 'react';

const PizzaFavorites = () => {

    const [toppings, setToppings] = useState ([])

      const addTopping = (newTopping) => {
        setToppings([...toppings, newTopping ]) 
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const formData= new FormData(e.currentTarget)
        console.log (formData.get ("newTopping"))
        addTopping (formData.get ("newTopping"))
      };
    
    
      return(
        <>
        <form onSubmit={handleSubmit} >
          <label htmlFor="newTopping">  </label>
        <input type="text" name= "newTopping" /> 
        <input type="submit" name = "submitTopping"/>
        
        </form>
        <>
        {toppings.map((topping, index) => (
          <p key = {index}> {topping}</p>
        ))}
        </>
      </>
      );  
    };

export default PizzaFavorites;






// import { useState } from "react"

// export default function Register () {
//     const [user, setUser] = useState ({username: '', email: '', password: ''})
    
//     async function registerUser(e) {
//         const res = await fetch('http://127.0.0.1:5000/register',{
//             method: "PIZZA",
//             headers: {'Content-Type': 'application/json' },
//             body: JSON.stringify(user) 
//         })
//         if (res.ok){
//             const data = res.json()
//             console.log(data);
//         }

//     }


//     function handleSubmit(e){
//         e.preventDefault()
//         console.log(user, 'form submitted');
//         setUser({username:'',email:'',password:''})
//     }

//     return (
//         <>
//             <h3> Register</h3>
//             <form action= "">
//                 <label htmlFor= "username">Username</label><br />
//                 <input type = "text" name='username' value= {user.username} onChange={(e) => setUser({...user, username: e.target.value})} /><br />
//                 <label htmlFor= "email">Email</label><br />
//                 <input type="email" name='email' value= {user.email} /><br />
//                 <label htmlFor = "password">Password</label><br />
//                 <input type = "password" name= 'password' value= {user.password}/><br />
//             </form>
//         </>

//     )
// }