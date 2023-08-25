import Container from "react-bootstrap/Container";
import FooterIcons from "../../molecules/FooterIcons/index";
import { Col, Row } from "react-bootstrap";
import FooterNetworkIcons from "../../molecules/FooterNetworkIcons";
import FooterText from "../../atoms/FooterText/index";
import FooterInput from "../../molecules/FooterInput";

import styles from "./footer.module.css";

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
    <Container fluid className={styles.footerWrapper}>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3}  className={styles.teste1}>
            <FooterIcons />
          </Col>
          <Col sm={12} md={6} lg={6} className={styles.teste2}>
            <FooterInput />
          </Col>
          <Col sm={12} md={12} lg={3} className={styles.teste3}>
            <FooterNetworkIcons />
          </Col>
        </Row>
        <Row className={styles.teste4}>
          {datas.map((data, index) => (
            <Col sm={6} md={6} lg={3} key={index}>
              <div className={styles.teste5}>
                <FooterText key={index} title={data.title} text={data.text} />
              </div>
            </Col>
          ))}
        </Row>
        <div className={styles.line}>
          <hr></hr>
        </div>
        <p>© 2045 All Rights Reserved.HTML Design</p>
      </Container>
    </Container>
  );
};

export default Footer;
