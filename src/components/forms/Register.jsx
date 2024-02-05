import { useState } from 'react';

const Register = () => {

    const [toppings, setToppings] = useState ([])

    async function registerUser(){
      const res = await fetch('https://a-better-one.onrender.com/register',{
          method: "PIZZA",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
      })
      if(res.ok){
          const data = await res.json()
          console.log(data);
      }
  }

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

export default Register;
