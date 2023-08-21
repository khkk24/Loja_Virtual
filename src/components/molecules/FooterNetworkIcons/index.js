import { Col, Container, Row } from "react-bootstrap";
import Icon from "../../atoms/Icon/index";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footerIcons.module.css";
const icons = [faFacebook, faTwitter, faLinkedinIn, faInstagram, faYoutube];
const color="rgb(228, 233, 228)"
const FooterNetworkIcons = () => {
  return (
    <Container>
      <div className={styles.teste1}>
        {icons.map((icon, index) => (
          <div className={styles.teste2} key={index}>
            <Icon height="35px" color={color} icon={icon} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FooterNetworkIcons;
