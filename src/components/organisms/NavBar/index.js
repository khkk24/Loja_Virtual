import Container from "react-bootstrap/Container";
import NavbarBS from "react-bootstrap/Navbar";
import NavBtns from "../../molecules/NavBtns";
import Brand from "../../atoms/Brand";
import NavBarIcons from "../../molecules/navBarIcons";
import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <NavbarBS expand="lg">
      <Container fluid>
        <Brand />
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav ">
          <NavBtns />
          <NavBarIcons />
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
};

export default NavBar;
