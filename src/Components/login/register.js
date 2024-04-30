import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import './login.css'

function Register() {
  const [Nama, setNama] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [No_Telepon, setNo_Telepon] = useState("");
  const [Email, setEmail] = useState("");
  const [Pasword, setPasword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Kirim data ke server
    const data = {
      Nama: Nama,
      Alamat: Alamat,
      No_Telepon :No_Telepon,
      Email :Email,
      Pasword : Pasword

    };
  
    // Gunakan await fetch untuk mengirim data ke server
    const response = await fetch("http://localhost:5000/api/tambahUser", {
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
    setNama("");
    setAlamat("");
    setNo_Telepon("");
    setEmail("");
    setPasword("");
  };
  

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Nama"
            value={Nama}
            onChange={(event) => setNama(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Alamat</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan Alamat"
            value={Alamat}
            onChange={(event) => setAlamat(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>No_Telepon</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan No_Telepon"
            value={No_Telepon}
            onChange={(event) => setNo_Telepon(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan Email"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Pasword</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan Pasword"
            value={Pasword}
            onChange={(event) => setPasword(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Tambah User
        </Button>
      </Form>
    </Container>
  );
}

export default Register;