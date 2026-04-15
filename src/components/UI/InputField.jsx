import { Form } from 'react-bootstrap'
const InputField = ({ label, name, value, onChange, type = "text", placeholder }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="fw-semibold text-white">{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

export default InputField;