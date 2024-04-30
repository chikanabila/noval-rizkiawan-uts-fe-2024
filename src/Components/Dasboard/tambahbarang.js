import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";


function TambahBarang() {
  const [NamaBarang, setNamaBarang] = useState("");
  const [Harga, setHarga] = useState("");
  const [Keterangan, setKeterangan] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Kirim data ke server
    const data = {
      NamaBarang: NamaBarang,
      Harga: Harga,
      Keterangan :Keterangan
    };
  
    // Gunakan await fetch untuk mengirim data ke server
    const response = await fetch("http://localhost:5000/api/tambahbarang", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    // Jika berhasil, tampilkan pesan berhasil
    if (response.status === 200) {
      alert("Pegawai berhasil ditambahkan");
    } else {
      alert("Terjadi kesalahan saat menambahkan pegawai");
    }
  
    // Kosongkan form
    setNamaBarang("");
    setHarga("");
    setKeterangan("");
  };
  

  return (
    <Container>
      <h1>Tambah Barang</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nama Barang</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan nama barang"
            value={NamaBarang}
            onChange={(event) => setNamaBarang(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Harga</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan Harga barang"
            value={Harga}
            onChange={(event) => setHarga(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Keterangan</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan Harga barang"
            value={Keterangan}
            onChange={(event) => setKeterangan(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Tambah Barang
        </Button>
      </Form>
    </Container>
  );
}

export default TambahBarang;