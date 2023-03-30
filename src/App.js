import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./blogs/home.js";
import Create from "./blogs/create.js";
import Show from "./blogs/show.js";
import Edit from "./blogs/edit.js";
import {Navbar, Nav, Container} from "react-bootstrap";


function App() {
    return (
        <>
            <Router>
                <Navbar>
                    <Container fluid>
                        <Navbar.Brand>
                            BlogSite-Bootstrap
                        </Navbar.Brand>
                    </Container>
                    <Container>
                        <Nav.Link href="/blogs/home">Home</Nav.Link>
                        <Nav.Link href="/blogs/create">Create</Nav.Link>
                        <Nav.Link href="/blogs/show">Show</Nav.Link>
                        <Nav.Link href="/blogs/edit">Edit</Nav.Link>
                    </Container>
                </Navbar>
                <Routes>
                    <Route excat path="/blogs/home" element={<Home/>}/>
                    <Route exact path="/blogs/create" element={<Create/>}/>
                    <Route exact path="/blogs/show" element={<Show/>}/>
                    <Route exact path="/blogs/edit" element={<Edit/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;