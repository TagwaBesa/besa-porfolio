import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
          
Passionate about innovation and problem-solving, I specialize in:

Crafting sleek and user-friendly websites
Developing robust and scalable software solutions
Implementing cutting-edge technologies to bring ideas to life
Providing ongoing support and maintenance to ensure smooth operation<br></br>
💡 With a keen eye for detail and a love for clean code, I strive to create digital experiences that not only meet but exceed expectations.
 From concept to execution, I'm committed to delivering exceptional results that leave a lasting impression.<br></br>

🌟 My journey in the world of development has been an exciting one, filled with learning, growth, and a deep appreciation for the craft.
 With every project, I aim to push boundaries, exceed expectations, and leave a lasting impression.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
