import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Zoom from '@mui/material/Zoom';

const ResponsiveImage = styled.img`
margin-top:12px;  
height: 120px;
  width: 170px;

  @media (max-width: 576px) {
    height: 60px;
    width: 80px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    height: 90px;
    width: 140px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    height: 110px;
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
            <a href='/'>
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
          <Col xs={7} className="fw-bold mt-lg-5 mt-sm-3 mt-md-5 header" >ACM STUDENT CHAPTER - SRU
        </Col>
      </Zoom>
        </Row>
      </Container>
    
  );
};
export default header;