import {Nav, Navbar, NavItem} from "react-bootstrap";
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar(){
    return(
     
        <Navbar className="navbar align-items-center justify-content-center " >  
            <NavItem>
            <Link to="aboutpage" className="mx-3 link-design ">About</Link>
            </NavItem> 

            <NavItem> 
            <Link to="" className="mx-3 link-design">
            <img src="logoNav.svg"></img>
            </Link>
            </NavItem>

            <NavItem>
            <Link to="portfolio" className="mx-3 link-design">Portfolio</Link>
            </NavItem>  
      </Navbar>
     
    );
}

export default NavBar

