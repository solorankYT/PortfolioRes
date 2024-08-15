import {Nav, Navbar, NavItem} from "react-bootstrap";
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar(){
    return(
     
        <Navbar className="navbar background-dark mx-5" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="mr-auto ms-auto">
            <NavItem> 
            <Link to="" className="mx-3 link-design">Home</Link>
            </NavItem>
            <NavItem>
            <Link to="aboutpage" className="mx-3 link-design ">About</Link>
            </NavItem> 
            <NavItem>
            <Link to="portfolio" className="mx-3 link-design">Portfolio</Link>
            </NavItem>
            <NavItem>
            <Link to="contact" className="mx-3 link-design">Contact</Link>
            </NavItem>
          </Nav>
     
        </Navbar.Collapse>
      </Navbar>
     
    );
}

export default NavBar

