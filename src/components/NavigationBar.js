import React from 'react'
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

function NavigationBar() {
    return (
        <>
        <div>

                <Navbar bg="light" expand="lg" >
        <Container>
            <Navbar.Brand href="#home" ><b><span style={{color:' #ac3973',marginRight:'100px'}} >Neosoft Technologies</span></b> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"  >
                <Nav.Link as={NavLink} to="/" style={{marginLeft:'30px',marginRight:'30px',fontSize:'20px',fontFamily:'bold'}}  >Home</Nav.Link>
                <Nav.Link  as={NavLink} to="/product" style={{marginLeft:'30px',marginRight:'30px',fontSize:'20px',fontFamily:'bold'}} >Product List</Nav.Link>
                <Nav.Link  as={NavLink} to="/course" style={{marginLeft:'30px',marginRight:'30px',fontSize:'20px',fontFamily:'bold'}} >Course List</Nav.Link>
                <Nav.Link  as={NavLink} to="/enquiry" style={{marginLeft:'30px',marginRight:'30px',fontSize:'20px',fontFamily:'bold'}}  >User Enquiry</Nav.Link>
            
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar> 
        </div>
        </>
    )
}

export default NavigationBar
