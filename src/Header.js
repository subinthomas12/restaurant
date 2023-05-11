import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div> 
        <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.png.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      <strong className='p-3 mt-5'>Hotel California</strong>
      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header