import {
  faShoppingCart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import NavBarIcon from "../../atoms/Icon/index";
import styles from "./icons.module.css";

const icons = [faUser, faShoppingCart, faSearch];

const NavBarIcons = () => {
  return (
    <>
      {icons.map((icon, index) => (
        <span key={index} className={styles.iconWrapper}>
          <NavBarIcon  icon={icon} />
        </span>
      ))}
    </>
  );
};

export default NavBarIcons;
