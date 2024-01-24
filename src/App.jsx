import Container from 'react-bootstrap/Container'

import { Pizzas } from "./components/Pizzas"
import Header from './components/Header'
import Body from './components/Body'
import PizzaWinner from './components/PizzaWinner'
import Register from './components/forms/Register'

export default function App() {


  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Body>
        {/* <Pizzas /> */}
        {/* <PizzaWinner /> */}
        <Register />
      </Body>
    </Container>
  )
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
