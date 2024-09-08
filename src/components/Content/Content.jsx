import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Content = () => {
  return (
    <>
    <Container fluid className="bg-black text-white pt-4 vh-auto pb-5">
      <Row className="align-items-center pb-5">
        <Col md={6} className="content-left mr-5 px-5 text-align-justify">
          <h1 className="display-6 fw-bold text-uppercase mb-4 fs-1">
            Group chat that’s all fun & games
          </h1>
          <p className="lead text-align-justify">
            Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664daa37ea162cadf9603500_Art.webp"
            alt="Background Art"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Content;
