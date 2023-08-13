import { Link } from 'react-router-dom';
import styles from "./navBarBtn.module.css"


const NavBarBtn = ({name, link}) => {
    return (
        <>
            <Link to={link} className={`nav-link ${styles.btnWrapper}`} >{name}</Link>
        </>
    )
}

export default NavBarBtn;