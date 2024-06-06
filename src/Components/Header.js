import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../images/logo.svg';
import epicGamesLogo from '../images/Epic_Games_logo.svg.png';
import Steamlogo from '../images/Steam_logo.svg.png';
import '../css/Header.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "../Pages/Home";
import EA from "../Pages/EA";
import Karta from "../Pages/Karta";
import Cars from "../Pages/Cars";

function Header() {
  return (
    <div>
      <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="d-inline-block align-top" alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
            <Nav.Link href="/EA" className="custom-nav-link">Electronic Arts</Nav.Link>
              <Nav.Link href="/" className="custom-nav-link">Главная</Nav.Link>
              <Nav.Link href="/map" className="custom-nav-link">Карта</Nav.Link>
              <Nav.Link href="/cars" className="custom-nav-link">Автомобили</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <NavDropdown title="Купить игру" id="buy-game-dropdown" className="custom-nav-link">
                <NavDropdown.Item href="https://store.steampowered.com/app/1846380/Need_for_Speed_Unbound/"> <img src={epicGamesLogo} alt="Epic Games Logo" className="dropdown-logo" />Steam</NavDropdown.Item>
                <NavDropdown.Item href="https://store.epicgames.com/en-US/p/need-for-speed-unbound"> <img src={Steamlogo} alt="Epic Games Logo" className="dropdown-logo" />Epic Games</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/EA" element={<EA/>} />    
                        <Route path="/map" element={<Karta/>} />
                        <Route path="/cars" element={<Cars/>} />
                    </Routes>
                </Router> 
    </div>
    
  );
}

export default Header;
