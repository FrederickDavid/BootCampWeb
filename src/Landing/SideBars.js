import React from 'react'
import styled from 'styled-components'
import {FaLaptopCode, FaBookOpen} from "react-icons/fa"
import {MdHomeRepairService, MdOutlineContactPhone} from "react-icons/md"
import {IoMdContacts} from "react-icons/io"
import {BsMenuButtonWideFill} from "react-icons/bs"
import { animateScroll as Scroll, Link } from "react-scroll";

const SideBars = () => {
    
    return (
        <Container1>
            <SideBar1>
            <Navs1 to="home" duration={1000} smooth={true} offset={-120}>
            <span><FaLaptopCode/></span>Home</Navs1>
            <Navs1 to="about" duration={1000} smooth={true} offset={-120}><span><IoMdContacts/></span>About Us</Navs1>
            <Navs1 to="service" duration={1000} smooth={true} offset={-120}><span><MdHomeRepairService/></span>Services</Navs1>
            <Navs1 to="contact" duration={1000} smooth={true} offset={-110}><span><MdOutlineContactPhone/></span>Contact Us</Navs1>
            </SideBar1>
        </Container1>
    )
}

export default SideBars

const Navs1 = styled(Link) `
width: 90%;
height: 18%;
text-decoration: none;
border-radius: 4px;
background-color: lightgray;
/* margin-bottom: 10px; */
font-family: Roboto Slab;
font-weight: bold;
font-size: 14px;
display: flex;
align-items: center;
justify-content: center;
transform: scale(1);
transition: all 350ms;
:hover{
    cursor: pointer;
    transform: scale(1.034);
    color: #515151;
    background-color: #B1B1B1;
}
span{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-right: 2px;
}
`

const SideBar1 = styled.div `
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
const Container1 = styled.div `
width: 300px;
height: 200px;
background-color: #E7E8E9;
margin-left: 30%;
margin-left: -100px;
margin-top: 250px;
z-index: 100;
`