import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'


export default function Sidebar() {
  return (
    <Navbar sticky='top' className='flex-column sidebar'>
        <Nav.Item>
            <Nav.Link as= {NavLink} to='/pizzas'>Who has the Best Pizza Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as= {NavLink} to = '/'>My PIZZA Page</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as= {NavLink} to='/'>The Best Pizza EVER</Nav.Link>
        </Nav.Item>
    </Navbar>
  )
}