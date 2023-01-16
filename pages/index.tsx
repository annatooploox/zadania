import { Col, Row } from 'reactstrap';

import { button_variant, columns, rows } from './app.css';

export default function IndexPage() {
  return (
    <>
      <Row className={rows}>
        <Col className={columns}>
          <ColorButton buttonColor="yellow" backgroundColor="blue" />
        </Col>
        <Col className={columns}>
          <ColorButton buttonColor="yellow" backgroundColor="blue" />
        </Col>
      </Row>
      <Row className={rows}>
        <Col className={columns}>
          <ColorButton buttonColor="grey" backgroundColor="black" />
        </Col>
        <Col className={columns}>
          <ColorButton buttonColor="grey" backgroundColor="black" />
        </Col>
      </Row>
      <Row className={rows}>
        <Col className={columns}>
          <ColorButton buttonColor="pink" backgroundColor="green" />
        </Col>
        <Col className={columns}>
          <ColorButton buttonColor="pink" backgroundColor="green" />
        </Col>
      </Row>
    </>
  );
}

function ColorButton({
  backgroundColor,
  buttonColor,
}: {
  backgroundColor: string;
  buttonColor: keyof typeof button_variant;
}) {
  return (
    <button
      className={button_variant[buttonColor]}
      onClick={() => changeBackgroundColor(backgroundColor)}
    >
      Turn on {backgroundColor}
    </button>
  );
}

function changeBackgroundColor(color: string) {
  document.body.style.backgroundColor = color;
}
