import Container from 'react-bootstrap/Container';
import NavbarBS from 'react-bootstrap/Navbar';
import NavBtns from '../../molecules/NavBtns';
import Brand from '../../atoms/Brand';
import styles from "./navBar.module.css"

const NavBar = () => {
    return (
        <NavbarBS expand="lg" className={styles.teste}>
            <Container fluid >
                <Brand />
                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBS.Collapse id="basic-navbar-nav " className={styles.teste1} >
                    <NavBtns />
                    {/* <div>
                        <p>
                            icon
                        </p>
                    </div> */}
                </NavbarBS.Collapse>

            </Container>
        </NavbarBS>
    )
}

export default NavBar;