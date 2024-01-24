import { useState } from 'react'

import Container from 'react-bootstrap/Container'

export default function PizzaWinner() {
    
    const [ performingStudent, setPerformingStudent ] = useState('pizzachallenge')

    const students = [
        'jenia',
        'keith',
        'dj',
        'saige',
        'quay',
        'kavunaa',
        'shaunda', 
        'jimmy'
    ]
    
    function randomStudent(){
        setPerformingStudent( students[Math.floor(Math.random() * students.length)] )
    }

  return (
    <Container>
        <h3>Todays Pizza Winner </h3>
        <p>Student: {performingStudent}</p>
        <button onClick={randomStudent}>Pick a Winner</button>
    </Container>
  )

}