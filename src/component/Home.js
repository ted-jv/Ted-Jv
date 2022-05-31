import React, { useState } from "react"
import './Home.css';
import { useSelector } from "react-redux";
import Box from "./Box";
import Navbar from "./Navbar"
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function Home() {

    const contents_list = useSelector((state) => state.box_contents_list);

    const navigate = useNavigate()

    const goto_detail = () => {
        navigate("/Detail")
    }

    return (
        <div>
            <Navbar />
            <Container className="container">
                <Row className="Row">

                    {contents_list.map((item) => (
                        <Col lg={4}>
                            <Box item={item} />
                        </Col>
                    ))}

                </Row>
            </Container >
            <div className="plusbutton" onClick={goto_detail}>
                +
            </div>
        </div >

    );
}



export default Home