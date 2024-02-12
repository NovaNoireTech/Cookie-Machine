import { useState } from 'react'
import Container from 'react-bootstrap/Container'

import { Pizzas } from "./components/Pizzas"
import Header from './components/Header'
import Pizza from './components/forms/Pizza'
import PizzaWinner from './components/PizzaWinner'
import Register from './components/forms/Register'
import Users from './components/Users'
import FormPage from './pages/FormPage'
import SocialPage from './pages/SocialPage'
import LandingPage from './pages/LandingPage'
import Login from './components/forms/Login'
import { Route, Routes } from 'react-router-dom'
import UserPage from './pages/UserPage'
import { ToastContainer } from 'react-toastify'

export default function App() {

  const [user, setUser] = useState({ username: '', password: '', token: '' })


  function updateUser({ username, password, token }) {
    setUser({ username, password, token })
  }


  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Pizza user= {user}/>
      <Routes>
        <Route path='/' element={<LandingPage>
          <PizzaWinner />
        </LandingPage>} />
        <Route path='/login' element={<FormPage>
          <Login user={user} updateUser={updateUser} />
        </FormPage>} />
        <Route path='/register' element={<FormPage>
          <Register />
        </FormPage>} />
        <Route path='/users' element={<SocialPage>
          <Users user={user}/>
        </SocialPage>} />
        <Route path='/pizzas' element={<SocialPage>
          <Pizzas />
        </SocialPage>} />
        <Route path='/user/:username' element={<UserPage />} />
      </Routes>
      <ToastContainer />
    </Container>
  )
}


  //       {/* <Route path = '/login' element= {<FormPage><Login user={user} updateUser={updateUser}/></FormPage>} />
  //       <Route path = '/register' element= {<FormPage>< Register/></FormPage>} /> 
  //       <Route path = '/users' element= {<SocialPage><Users/></SocialPage> } />
  //       <Route path = '/pizzas' element= {<SocialPage><Pizzas/></SocialPage> } />
  //       <Route path= '/user/:username' element={<UserPage/>} />
  //     </Routes>
    
  //   </Container>
  // )
  // }     */}