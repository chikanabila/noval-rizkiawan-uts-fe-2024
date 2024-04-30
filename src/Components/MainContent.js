import Hero from"./Hero";
import CardBarang from "./CardBarang";
import barang from "./../asset/1.jpg";
import barang2 from "./../asset/2.jpg";
import barang3 from "./../asset/3.jpg";
import CardBangunan from "./CardBangunan";
import barang4 from "./../asset/pasir.jpg";
import barang5 from "./../asset/batamerah.jpg";
import barang6 from "./../asset/batako.jpg";
import "./conten.css";
import Foter from "./Foter";
import Navigasi from "./navigasi"

const MainContent = () =>{
    return (
        <div>
        <Navigasi/>
        <Hero/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center my-5">
                    <h1>Alat-Alat RumahTangga</h1>
                </div>
                <div className="col-4 content-center text-center">
                    <CardBarang image={barang} NamaBarang="Lemari"/>
                </div>
                <div className="col-4 text-center">
                    <CardBarang image={barang2} NamaBarang="Kursi"/>
                </div>
                <div className="col-4 text-center">
                    <CardBarang image={barang3} NamaBarang="Meja"/>
                </div>
            </div>

            <div className="row content-center">
                <div className="col-12 text-center my-5">
                    <h1>Dan Menjual Bahan Bangunan</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-4 text-center">
                    <CardBangunan image={barang4} NamaBarang="Pasir"/>
                </div>
                <div className="col-4 text-center">
                    <CardBangunan image={barang5} NamaBarang="BataMerah"/>
                </div>
                <div className="col-4 text-center">
                    <CardBangunan image={barang6} NamaBarang="Batako"/>
                </div>
            </div>
        </div>
        <Foter/>
        </div>
    )
}
export default MainContent;