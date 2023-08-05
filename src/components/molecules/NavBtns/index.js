import Nav from 'react-bootstrap/Nav';
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */
import NavBarBtn from '../../atoms/NavBarBtn';
import styles from "./navBar.module.css"

const NavBtns = () => {

    const btns = [{ name: "Home", link: "/" }, { name: "Products", link: "/" }, { name: "About", link: "/" }, { name: "Contact", link: "/" }]



    return (
        <Nav className="me-auto justify-content-center align-items-center" >
            {btns.map((btn, index) => (
                
            <NavBarBtn className={styles.teste} key={index} name={btn.name} link={btn.link} />
                
            ))}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
    )
}

export default NavBtns