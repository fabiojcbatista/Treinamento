/**REf: https://www.youtube.com/watch?v=5KZ1XBcSaH4 */
import React from "react";
import { Link } from "react-router-dom";
import{
    Navbar,
    NavItem,
    NavbarBrand,
    Container,
    Nav
} from 'reactstrap';

export function Heading(){
    return (
       <Navbar color='dark' dark>
           <Container>
               <NavbarBrand href='/'>
                    My Oferta
               </NavbarBrand>
               <Nav>
                  <NavItem>
                    <Link className='btn btn-primary' to='/add'>Add</Link>
                  </NavItem> 
               </Nav>
           </Container>
       </Navbar>
    )
}