import { Card } from "react-bootstrap";

const CardBarang = (props) => {
    return (
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top"  src={props.image} />
      <Card.Body>
        <Card.Title>{props.NamaBarang}</Card.Title>
        <Card.Text>
          Pembeli Bisa Request Untuk Panjang dan Lebar Sesuai Ukuran yang diPesan.
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default CardBarang