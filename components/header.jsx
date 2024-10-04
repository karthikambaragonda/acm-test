import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Zoom from '@mui/material/Zoom';

const ResponsiveImage = styled.img`
margin-top:12px;  
height: 110px;
  width: 170px;

  @media (max-width: 576px) {
    height: 50px;
    width: 80px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    height: 80px;
    width: 140px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    height: 100px;
    width: 160px;
  }
`;

function header() {
  const [handled, sethandled] = useState(false);
  function handleClick() {
    sethandled(!true);
    handleClick();
  }
  return (
    
      <Container>
        <Row>
          <Col xs={5}>
          <a href='/acm-test'>
              <ResponsiveImage
                src="./acm_logo.jpg"
                draggable:false
              /></a>
        </Col>
        <Zoom in={handleClick} timeout={600}
          easing={{
            enter: 'ease-out',
            exit: 'ease-in-out'
          }}>
          <Col xs={12} className="d-flex justify-content-center fw-bold mt-lg-1 mt-sm-3 mt-md-5 fs-1 header text-center">ACM SRU Student Chapter</Col>
          
        </Zoom>
        <Col xs={12} className="d-flex justify-content-center fw-bold mt-lg-1 mt-sm-3 mt-md-5  header1 text-center">Association&nbsp;for&nbsp;Computing&nbsp;Machinery</Col>
        </Row>
      </Container>
    
  );
};
export default header;