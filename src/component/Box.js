import React from "react";
import './Home.css';
import { Row } from "react-bootstrap";
import styled from "styled-components";



const Box = ({ item }) => {



    return (
        <Row>

            <Vocabox>

                <H4>{item?.word}</H4 >

                <P1>{item?.mean}</P1>

                <P2>{item?.ex}</P2>

                <P3>{item.interpret}</P3>

            </Vocabox>

        </Row>

    )
}


const Vocabox = styled.div`

position: relative;
width: 96%;
padding: 20px;
border: 2px solid rgb(10, 112, 41);
border-radius: 10px;
background-color: rgba(255, 255, 255, 0.4);
transition: box-shadow 300ms ease-in-out 0s;
margin: 10px;


`

const H4 = styled.h4`

    margin-right: 5px;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;

`

const P1 = styled.p`

    margin-bottom: 10px;
    font-size: 16px;

`
const P2 = styled.p`

    margin-top: 15px;
    color: rgb(9, 132, 227);
    font-size: 14px;

`
const P3 = styled.p`


    margin-top: -20px;
    color: rgb(9, 132, 227);
    font-size: 14px;

`


export default Box