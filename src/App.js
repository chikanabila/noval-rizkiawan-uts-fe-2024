import MainContent from './Components/MainContent.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact.js';
import LoginForm from './Components/login/loginForm.js';
import ProtectedAdmin from './Components/Dasboard/protectedAdmin.js';
import TambahBarang from './Components/Dasboard/tambahbarang.js';
import Register from './Components/login/register.js';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<MainContent/>}/>
        <Route path="Login" element={<LoginForm/>}/>
        <Route path="login/dashboard" element={<ProtectedAdmin/>}/>
        <Route path="tambahbarang" element={<TambahBarang/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;