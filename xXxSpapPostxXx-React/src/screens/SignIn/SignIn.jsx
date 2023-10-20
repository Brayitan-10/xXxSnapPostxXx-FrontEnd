import 'bootstrap/dist/css/bootstrap.min.css';
import './signInStyles.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingBasicExample() {
  return (
    <div className='card-signIn'>
      <h2>Sign In to xXxSnapPostxXx</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
        <a href="">Forgot password?</a>
      </FloatingLabel>
      <button className='button-signIn'>Sign In</button>
    </div>
  );
}

export default FormFloatingBasicExample;
