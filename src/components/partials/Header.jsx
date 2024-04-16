import { useState } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { MdChat } from "react-icons/md";

export default function Header() {
    const [showChats, setShowChats] = useState(false);
    const [showPerfil, setShowPerfil] = useState(false);
    const handleCloseChats = () => setShowChats(false);
    const handleClosePerfil = () => setShowPerfil(false);
    const handleShowChats = () => setShowChats(true);
    const handleShowPerfil = () => setShowPerfil(true);

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" expand='md' className="mb-0 d-block border-bottom">
            <Container fluid>
                <Navbar.Brand href="#">TUTOR</Navbar.Brand>
                <div className='d-flex flex-nowrap'>
                    <Button variant="link" className='d-block d-lg-none text-decoration-none text-white' onClick={handleShowChats}>
                        Mis chats
                    </Button>
                    <div className='d-flex flex-nowrap'>
                        <Button variant="link" className='text-decoration-none text-white d-flex py-0' onClick={handleShowPerfil}>
                            <p className='my-auto mx-2'>Mi cuenta</p>
                            <FaUserCircle className='fs-1 my-auto'/>
                        </Button>
                        
                    </div>
                </div>
                <Offcanvas show={showChats} onHide={handleCloseChats}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Mis chats</Offcanvas.Title>
                        <MdChat className='fs-2 mt-auto mb-1 mx-3'/>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <div className="mx-0 mb-3 border rounded-5 overflow-hidden d-flex">
                        <div className="w-100">
                            <Form.Control placeholder="Buscar" className="lh-1 border-0 my-auto form-control-chat"/>
                        </div>
                        {/* <FaSearch className="fs-3 mx-3 my-auto" role="button"/> */}
                    </div>
                    <div className="bg-white border">
                        chats
                    </div>
                    <div className="bg-white border">
                        chats
                    </div>
                    <div className="bg-white border">
                        chats
                    </div>
                    <div className="bg-white border">
                        chats
                    </div>
                    </Offcanvas.Body>
                </Offcanvas>

                <Offcanvas placement='end' show={showPerfil} onHide={handleClosePerfil}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Mi cuenta</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        lista de chats
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
            </Navbar>
        
        </div>
    );
}