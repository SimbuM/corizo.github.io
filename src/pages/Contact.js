// import React from "react";

// const Contact = () => {
//   return (
//     <>
//     <h1>
//       CHECK OUT PAGE</h1> 
//     </>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

class PaymentGateway {
  processPayment = (amount, cardNumber, expiryDate, cvv, paymentMethod) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() < 0.8;
        isSuccess ? resolve(`Payment successful via ${paymentMethod}`) : reject('Payment failed');
      }, 1000);
    });
  };
}

const Contact = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('CreditCard');
  const [processing, setProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);
  const [validationError, setValidationError] = useState(null);

  const handlePayment = async () => {
    // Basic input validation
    if (!cardNumber || !expiryDate || !cvv) {
      setValidationError('Please fill in all fields.');
      return;
    }

    setProcessing(true);
    try {
      const paymentGateway = new PaymentGateway();
      const result = await paymentGateway.processPayment(100, cardNumber, expiryDate, cvv, paymentMethod);
      setPaymentResult(result);
      setValidationError(null);
    } catch (error) {
      setPaymentResult('Payment failed');
      setValidationError(null);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="mb-4">Checkout</h2>
          <Form>
            <Form.Group controlId="formCardNumber">
              <Form.Label>Card Number:</Form.Label>
              <Form.Control
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Enter card number"
              />
            </Form.Group>

            <Form.Group controlId="formExpiryDate">
              <Form.Label>Expiry Date:</Form.Label>
              <Form.Control
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
              />
            </Form.Group>

            <Form.Group controlId="formCVV">
              <Form.Label>CVV:</Form.Label>
              <Form.Control
                type="text"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                placeholder="CVV"
              />
            </Form.Group>

            <Form.Group controlId="formPaymentMethod">
              <Form.Label>Payment Method:</Form.Label>
              <Form.Control
                as="select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="CreditCard">Credit Card</option>
                <option value="PayPal">PayPal</option>
                {/* Add more payment options as needed */}
              </Form.Control>
            </Form.Group>

            <Button variant="primary" onClick={handlePayment} disabled={processing}>
              {processing ? 'Processing...' : 'Pay Now'}
            </Button>

            {validationError && (
              <Alert variant="warning" className="mt-3">
                {validationError}
              </Alert>
            )}

          </Form>

          {paymentResult && (
            <Alert variant={paymentResult.includes('failed') ? 'danger' : 'success'} className="mt-3">
              {paymentResult}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
