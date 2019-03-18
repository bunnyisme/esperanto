import React from 'react'

import {
  Button,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form
} from 'react-bootstrap'

import { Link } from 'react-router-dom'

import Logo from '../logo.png'

export default () => {
  return (
    <Navbar bg='light' expand='lg' variant='light'>
      <Container>
        <Navbar.Brand href='/'>Esperantujo</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto' />
          <Nav>
            <NavDropdown title='Lingvo' id='basic-nav-dropdown'>
              <NavDropdown.Item onclick={() => console.log('TEST')}>
                EN
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>EO</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>ES</NavDropdown.Item>
            </NavDropdown>
            <Link to='hejmo' className='nav-link'>
              Hejmo
            </Link>
            <Link to='pri' className='nav-link'>
              Pri
            </Link>
            <Link to='kial' className='nav-link'>
              Kial
            </Link>
            <Form inline>
              <a
                href='https://lernu.net'
                className='btn btn-depth btn-primary'
                style={{
                  marginLeft: '1.1rem'
                }}
              >
                Lernu
              </a>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
