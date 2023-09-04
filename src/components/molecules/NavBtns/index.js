import Nav from "react-bootstrap/Nav";
import NavBarBtn from "../../atoms/NavBarBtn";
import styles from "./navBar.module.css";
import { Container } from "react-bootstrap";

const NavBtns = () => {
  const btns = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/Product" },
    { name: "About", link: "/About" },
    { name: "Contact", link: "/Contact" },
    { name: "Blog", link: "/Blog" },
  ];

  return (
    <Container fluid-bg="true">
      <Nav
        className="me-auto justify-content-center align-items-center gap-3"
      >
        {btns.map((btn, index) => (
          <NavBarBtn
            className={styles.teste}
            key={index}
            name={btn.name}
            link={btn.link}
          />
        ))}
      </Nav>
    </Container>
  );
};

export default NavBtns;
