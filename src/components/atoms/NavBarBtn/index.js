import Nav from 'react-bootstrap/Nav';
import styles from "./navBar.module.css"
const NavBarBtn = ({name, link}) => {
    return (
        <>
            <Nav.Link className={styles.teste} href={link}>{name}</Nav.Link>
        </>
    )
}

export default NavBarBtn