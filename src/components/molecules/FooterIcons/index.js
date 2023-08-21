import Icon from "../../atoms/Icon/index";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./footerIcons.module.css";

const icons = [faPhone, faEnvelope, faLocationDot];
const FooterIcons = () => {
  return (
    <>
      {icons.map((icon, index) => (
        <button key={index} className={styles.icons}>
          <Icon color="white" icon={icon} />
        </button>
      ))}
    </>
  );
};

export default FooterIcons;
