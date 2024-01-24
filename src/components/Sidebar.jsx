import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function Sidebar() {
  return (
    <Navbar sticky='top' className='flex-column sidebar'>
        <Nav.Item>
            <Nav.Link href='/'>Who has the Best Pizza Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/'>My PIZZA Page</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/'>The Best Pizza EVER</Nav.Link>
        </Nav.Item>
    </Navbar>
  )
}