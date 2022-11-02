import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddUserForm = () => {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control type="date" name="date_of_birth" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Company</Form.Label>
          <Form.Control placeholder="Enter company" />
        </Form.Group>
      </Row>
    </Form>
  );
};

export default AddUserForm;
