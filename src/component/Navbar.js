import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';







const Navbar = () => {

    const navigate = useNavigate()

    const goto_home=()=>{

        navigate("/")

    }

    return (
        <div className="Navbar_div">

            <img onClick={goto_home} className="img" src="https://hanyui-dict.shop/static/media/title.be77da3c.svg"></img>

        </div>
    )
}








export default Navbar