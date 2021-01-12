import React from "react";
import { Row, Col, Button } from "react-bootstrap";
function Form() {
  return (
    <div className="form-container">
      <Row>
        <Col md={8} sm={12}>
          <input type="text" className="input_text" placeholder="search" />
        </Col>
        <Col md={4} sm={12}>
          <Button variant="primary" className="form-btn">
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Form;
