import Container from "react-bootstrap/Container";
import FooterIcons from "../../molecules/FooterIcons/index";
import { Col, Row } from "react-bootstrap";
import FooterNetworkIcons from "../../molecules/FooterNetworkIcons";
import FooterText from "../../atoms/FooterText/index";
import FooterInput from "../../molecules/FooterInput";

const datas = [
  {
    title: "Product",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit amet,",
  },
  {
    title: "Shop",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit amet,",
  },
  {
    title: "Company",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit amet,",
  },

  {
    title: "My account",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit amet,",
  },
];

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <FooterIcons />
        </Col>
        <Col>
          <FooterInput />
        </Col>
        <Col>
          <FooterNetworkIcons />
        </Col>
      </Row>
      <Row>
          {datas.map((data, index) => (
            <Col key={index}>
              <FooterText key={index} title={data.title} text={data.text} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Footer;
