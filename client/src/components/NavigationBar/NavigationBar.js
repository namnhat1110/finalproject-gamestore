import React from "react";
import {
    Nav,
    Navbar,
    NavDropdown,

} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className>
                <Navbar.Brand href="/">Game Store</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>

                </Nav>
                <Nav.Link as={Link} to="/auth">Sign in</Nav.Link>
                <NavDropdown title="User">
                    <NavDropdown.Item as={Link} to="/auth/:id">Account</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/cart">Cart</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/wishlist">Wishlist</NavDropdown.Item>
                    <NavDropdown.Item>Sign out</NavDropdown.Item>
                </NavDropdown>
            </Navbar>

        </div>
    )
}

export default NavigationBar
