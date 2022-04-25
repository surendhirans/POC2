import {Container, Nav, Navbar} from "react-bootstrap"
export const Menus=()=>{
    return(
        <Navbar bg="danger" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">
        Router 
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="Sample" />
    <Navbar.Collapse id="sample">
      <Nav className="ms-auto">
        <Nav.Link active href="/">Component 1</Nav.Link>
        <Nav.Link href="/second">New Account</Nav.Link>
        <Nav.Link href="/third">Component  3</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container> 
</Navbar>
    )
}