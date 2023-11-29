import './App.css';
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";



function App() {
  return (
    <Router>

      <Container>
        
        <Nav defaultActiveKey="/home">

          <Nav.Item>
            <Nav.Link href='/'>
              <Link className='Login' to="/login" />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='/'>
              <Link className='Add User' to="/adduser" />
            </Nav.Link>
          </Nav.Item>

        </Nav>

      </Container>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>

    </Router>
  );
}

export default App;
