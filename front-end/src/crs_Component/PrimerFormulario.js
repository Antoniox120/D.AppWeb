import { Button, Col, Row, Form} from 'react-bootstrap';

function PrimerFormulario(personaNombre){
    function Click(){
        console.log(personaNombre);
    }

    return(
        <Row>
            <Col>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={personaNombre.personaNombre}></Form.Control>
                <Button onClick={Click()}>Guardar</Button>
                
            </Col>
        </Row>    
    )
}

export default PrimerFormulario;