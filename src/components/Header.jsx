import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Cookie Machine</Navbar.Brand>
                <Nav.Link href= '/register'>Register</Nav.Link>
                <Link to='/login'>Login</Link>
                <Nav.Link href='/users'>Users</Nav.Link>
                <Nav.Link href='/pizzas'>Pizzas</Nav.Link>
            </Container>
        </Navbar>
    )
}