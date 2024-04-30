import { Card,Button } from "react-bootstrap";

const CardBangunan = (props) => {
    return (
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top"  src={props.image} />
      <Card.Body>
        <Card.Title>{props.NamaBarang}</Card.Title>
        <Card.Text>
          Pembeli Bisa Request Banyak/Perbiji yang ingin diPesan.
        </Card.Text>
      </Card.Body>
    </Card>
    )   
}
export default CardBangunan;