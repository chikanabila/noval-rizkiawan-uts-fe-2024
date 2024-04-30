import { Carousel } from "react-bootstrap"
import hero1 from "./../asset/0.jpg"
import hero2 from "./../asset/4.jpg"
import hero3 from "./../asset/5.jpg"
const Hero = ()=>{
    return(
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <img
        className="d-block w-100"
        src={hero1}
        alt="First slide"
        />
        <Carousel.Caption>
        <h5>MEBEL ARTHOMORO</h5>
        <p>Menerima Jual dan Serive Alat-Alat RumahTangga.</p>
        </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
        <img
        className="d-block w-100"
        src={hero2}
        alt="Second slide"
        />
        <Carousel.Caption>
        <h5>MEBEL ARTHOMORO</h5>
        <p>Menerima Jual dan Serive Alat-Alat RumahTangga.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block w-100"
        src={hero3}
        alt="Third slide"
        />
        <Carousel.Caption>
        <h5>MEBEL ARTHOMORO</h5>
        <p>
        Menerima Jual dan Serive Alat-Alat RumahTangga.
        </p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    
)
}
export default Hero;