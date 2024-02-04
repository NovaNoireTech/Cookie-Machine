import { useState } from 'react'
import Container from 'react-bootstrap/Container'

import { Pizzas } from "./components/Pizzas"
import Header from './components/Header'
import Pizza from './components/Pizza'
import PizzaWinner from './components/PizzaWinner'
import PizzaFavorites from './components/forms/Register'
import Users from './components/Users'
import FormPage from './pages/FormPage'
import SocialPage from './pages/SocialPage'
import LandingPage from './pages/LandingPage'
import Login from './components/forms/Login'
import { Route, Routes } from 'react-router-dom'
import UserPage from './pages/UserPage'
import Register from './components/forms/Register'


export default function App() {

const [users, setUsers] = useState ()
const updateUsers = () => {

}

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />

      <Routes>
        {/* <Route path = '/' element= {<LandingPage><Register /></LandingPage> } /> */}
        <Route path = '/login' element= {<FormPage><Login users={users} updateUsers={updateUsers}/></FormPage>} />
        <Route path = '/register' element= {<FormPage>< Register/></FormPage>} /> 
        <Route path = '/users' element= {<SocialPage><Users/></SocialPage> } />
        <Route path = '/pizzas' element= {<SocialPage><Pizzas/></SocialPage> } />
        <Route path= '/user/:username' element={<UserPage/>} />
      </Routes>
    
    </Container>
  )
  
  // <Route path='/user/:username' element={<UserPage />} />
}
// import Container from 'react-bootstrap/Container'

// import { Pizzas } from "./components/Pizzas"
// import Header from './components/Header'
// import Body from './components/Body'


// export default function Body({ children }) {

//   return (
//     <Container>
      
//        fluid data-bs-theme='dark' className='app'>
//       <Main />

//       <Pizzas></Pizzas>
//     </Container>
//   )
// }
// import Container from "react-bootstrap/Container";


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
