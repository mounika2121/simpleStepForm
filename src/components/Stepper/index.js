import React, { useState } from 'react';
import { Container, Nav, ProgressBar, Row, Col } from 'react-bootstrap';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3; // Set the total number of steps

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <Container>
      <ProgressBar now={(currentStep / totalSteps) * 100} className='mt-5 mb-5' />

      <Nav fill variant="pills" defaultActiveKey="1">
        <Nav.Item>
          <Nav.Link eventKey="1" onClick={() => handleStepClick(1)} active={currentStep === 1}>
            Step 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" onClick={() => handleStepClick(2)} active={currentStep === 2} disabled={currentStep < 2}>
            Step 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" onClick={() => handleStepClick(3)} active={currentStep === 3} disabled={currentStep < 3}>
            Step 3
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Row>
        <Col>
          {/* Render the form content for the current step */}
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}

          <div className="mt-3">
            {currentStep > 1 && (
              <button onClick={handlePrev} className="btn btn-secondary">
                Previous
              </button>
            )}
            {currentStep < totalSteps && (
              <button onClick={handleNext} className="btn btn-primary mx-3">
                Next
              </button>
            )}
            {currentStep === totalSteps && (
              <button className="btn btn-success mx-3">
                Finish
              </button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function Step1() {
  return (
    <div>
      <h2>Step 1</h2>
      {/* Form fields for Step 1 */}
    </div>
  );
}

function Step2() {
  return (
    <div>
      <h2>Step 2</h2>
      {/* Form fields for Step 2 */}
    </div>
  );
}

function Step3() {
  return (
    <div>
      <h2>Step 3</h2>
      {/* Form fields for Step 3 */}
    </div>
  );
}

export default App;
