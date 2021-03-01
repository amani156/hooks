
import React  from 'react'
import {Navbar, Nav, Form } from 'react-bootstrap';



const Navi = () =>  {

        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Movie app</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Most watched</Nav.Link>
                        <Nav.Link href="#pricing">top-rated</Nav.Link>
                    </Nav>
                    <Form inline>
                    
                       
                    </Form>
                </Navbar>
            </div>
        )
    }


export default Navi
