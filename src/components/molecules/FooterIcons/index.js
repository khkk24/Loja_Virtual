import Icon from "../../atoms/Icon/index";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./footerIcons.module.css";

const icons = [faPhone, faEnvelope, faLocationDot];
const FooterIcons = () => {
  return (
    <div>
      {icons.map((icon, index) => (
        <button key={index} className={styles.teste}>
          <Icon icon={icon} />
        </button>
      ))}
    </div>
  );
};

export default FooterIcons;
