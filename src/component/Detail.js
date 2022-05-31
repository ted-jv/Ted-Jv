import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Container } from "react-bootstrap";
import './Home.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Detail = () => {
    const [word, setWord] = useState("")
    const [mean, setMean] = useState("")
    const [ex, setEx] = useState("")
    const [interpret, setInterpret] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch();




    const getword = (event) => {
        console.log(setWord(event.target.value))
    }

    const adddetailbox = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        dispatch({ type: "DETAILBOX_CONTENTS", payload: { word, mean, ex, interpret } })
        navigate("/")
    }

    // const to_home =(event)=>{
    //     event.preventDefault();
    //     navigate("/")
    // }


    return (

        <Container>
            <Navbar />
            <Detailbox>
                <h2 className="detail_head">단어 추가하기</h2>
                <Form onSubmit={adddetailbox}>
                    <label for="word">단어</label>
                    <input type="text" name="word" id="word" onChange={getword}></input>
                    <label type="text" for="mean">의미</label>
                    <input type="text" name="mean" id="mean" onChange={(event) => setMean(event.target.value)}></input>
                    <label type="text" for="ex">예문</label>
                    <input type="text" id="ex" onChange={(event) => setEx(event.target.value)}></input>
                    <label type="text" for="interpret">해석</label>
                    <input type="text" id="interpret" onChange={(event) => setInterpret(event.target.value)}></input>
                    <br></br>
                    <button type="submit" className="detail_button"  >저장하기</button>
                </Form>
            </Detailbox>
        </Container>
        // onClick={to_home}
    )


}

const Detailbox = styled.div`

display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;
max-width: 400px;
margin: 50px auto;

`

const Form = styled.form`

display: flex;
justify-content: center;
flex-direction: column;


`

export default Detail