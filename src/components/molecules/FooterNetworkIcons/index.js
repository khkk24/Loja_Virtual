import { Col, Container, Row } from "react-bootstrap";
import Icon from "../../atoms/Icon/index";
import {
  faShoppingCart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const icons = [faShoppingCart,faSearch,faUser];
const FooterNetworkIcons = () => {
  return (
    <Container>
      <Row>
        {icons.map((icon, index) => (
          <Col key={index}>
            <Icon icon={icon} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FooterNetworkIcons;
