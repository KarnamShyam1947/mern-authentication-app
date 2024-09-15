import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AppHeader from "./components/AppHeader";
import { Container } from "react-bootstrap";
import AppFooter from "./components/AppFooter";

function App() {

  return (
    <>
      <AppHeader />
      <Container className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Container>
      <AppFooter />
    </>  
  )
}

export default App
