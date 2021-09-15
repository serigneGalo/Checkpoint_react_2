import './App.css';
import { Form , Button } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Form>
        <Form.Label> <h1>Formulaire d'inscription</h1> </Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        <br />  <br />
        <Form.Control type="text" placeholder="Enter your first name" />
        <br />  <br />
        <Form.Control type="text" placeholder="Enter your number" />
        <br />  <br />
        <Form.Control type="date" placeholder="Enter your number" />
        <br />  <br />
        <Form.Label>Sexe :</Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="M"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="F"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <br />
        <Form.Label>Langues parlées :</Form.Label>
        {['checkbox'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Francais"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="English"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
          </div>
        ))}
        <br />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          </Form.Text> */}
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="formBasicPassword1">
        <Form.Control type="password" placeholder="Confirm it" />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        Envoyer
      </Button>
      <Button variant="primary" type="cancel">
        Annuler
      </Button>
      
      </Form>
    </div>
  );
}

export default App;
