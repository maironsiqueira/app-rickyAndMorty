import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar({ setStatusFilter, setNameFilter }) {
    const [nameSearch, setNameSearch] = useState('');

    const handleFilterChange = (newStatus) => {
        setStatusFilter(newStatus);
    };

    const handleNameChange = (event) => {
      
        setNameSearch(event.target.value);
    };

    const handleNameSearch = () => {
       
        setNameFilter(nameSearch);
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand >
                    API Ricky and Morty
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <NavDropdown title="Status" id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => handleFilterChange()}>All</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleFilterChange('Alive')}>Alive</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleFilterChange('Dead')}>Dead</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleFilterChange('unknown')}> Unknown</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            value={nameSearch}
                            onChange={handleNameChange}
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button onClick={handleNameSearch} variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;