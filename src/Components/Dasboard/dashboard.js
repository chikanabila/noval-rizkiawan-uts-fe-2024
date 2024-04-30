import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Table } from "react-bootstrap";

const Dashboard = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/barang");
        const results = await response.json();
        setdata(results); // Ambil data dari properti "data"
      } catch (error) {
        console.error("Error Menampilkan data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Link to="/tambahbarang" className="btn btn-primary mt-3">
        Tambah Data
      </Link>
      <Row className="mt-3">
        <Col>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Barang</th>
                <th>Harga</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {data.map((barang) => (
                <tr key={barang.id}>
                  <td>{barang.id}</td>
                  <td>{barang.NamaBarang}</td>
                  <td>{barang.Harga}</td>
                  <td>{barang.Keterangan}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;