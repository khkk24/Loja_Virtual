import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutImage_1 from "../../../images/about-img.png";
import aboutImage_2 from "../../../images/img-1.png";
import styles from "./about.module.css";

const About = () => {
  return (
    <Container className={styles.aboutWrapper}>
      <Row>
        <Col xl={6}>
          <img src={aboutImage_1} alt="Image of a product"  className={styles.aboutImg1} />
        </Col>
        <Col xl={6} className={styles.aboutText}>
          <h1 className={styles.title}>About company</h1>
          <div className={styles.line}>-</div>
          <p className={styles.text}>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitationconsectetur adipiscing
          </p>
          <div style={{ textAlign: "start" }}>
            <button type="button" className={styles.aboutBtn}>
              Read More
            </button>
          </div>

          <div style={{ textAlign: "end" }}>
            <img  className={styles.aboutImg2} src={aboutImage_2} alt="Image of a product" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
