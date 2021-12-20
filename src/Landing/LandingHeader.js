import React from 'react'
import SideBars from './SideBars'
import styled from 'styled-components'
import logo from "../BOOT/logo.png"
import {FaLaptopCode} from "react-icons/fa"
import {MdHomeRepairService, MdOutlineContactPhone} from "react-icons/md"
import {IoMdContacts} from "react-icons/io"
import {BsMenuButtonWideFill} from "react-icons/bs"

import { animateScroll as Scroll, Link } from "react-scroll";

const LandingHeader = () => {

    const [toggle, setToggle] = React.useState(false)

    const change = ()=>{
        setToggle(!toggle)
    }
    return (
        <Container>
            {/* <Wrapper>
                
            </Wrapper> */}
            <Header>
            <Logo src={logo}/>
                <Text>Inland Computers</Text>
                <NavBars>
                    <Navs to="home" duration={1000} smooth={true} offset={-120}><span><FaLaptopCode/></span>Home</Navs>
                    <Navs to="about" duration={1000} smooth={true} offset={-110}><span><IoMdContacts/></span>About Us</Navs>
                    <Navs to="service" duration={1000} smooth={true} offset={-110}><span><MdHomeRepairService/></span>Services</Navs>
                    <Navs to="contact" duration={1000} smooth={true} offset={-110}><span><MdOutlineContactPhone/></span>Contact Us</Navs>
                </NavBars>
                <SideBar><span><BsMenuButtonWideFill onClick={change}/></span>
                {
                    toggle?(<SideBars/>): null
                }
                </SideBar>
            </Header>
        </Container>
    )
}

export default LandingHeader

const Navs = styled(Link) `
width: 130px;
height: 80%;
/* background-color: gray; */
font-family: Roboto Slab;
font-weight: bold;
font-size: 16px;
display: flex;
align-items: center;
justify-content: center;
transform: scale(1);
transition: all 350ms;
:hover{
    cursor: pointer;
    transform: scale(1.054);
    color: #515151;
}
span{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
    margin-right: 2px;
}
`

const NavBars = styled.div `
width: 50%;
height: 100%;
margin-right: 10px;
/* background-color: white; */
display: flex;
align-items: center;
justify-content: space-around;
@media screen and (max-width: 884px){
width: 60%;
height: 100%;
/* background-color: white; */
display: flex;
align-items: center;
justify-content: space-around;
}
@media screen and (max-width: 768px){
display: none;
}
@media screen and (max-width: 500px) and (min-width: 300px){
    display: none;
}
`

const Header = styled.div `
width: 100%;
height: 100%;
background-color: rgba(231, 232, 233, 0.50);
box-shadow: 0 0px 12px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 2.5px );
-webkit-backdrop-filter: blur( 2.5px );
/* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 500px) and (min-width: 300px){
    width: 100%;
height: 100%;
background-color: rgba(231, 232, 233, 0.50);
box-shadow: 0 0px 12px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 2.5px );
-webkit-backdrop-filter: blur( 2.5px );
/* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
display: flex;
align-items: center;
justify-content: center;
}
@media screen and (max-width: 768px){
    width: 100%;
height: 100%;
background-color: rgba(231, 232, 233, 0.50);
box-shadow: 0 0px 12px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 2.5px );
-webkit-backdrop-filter: blur( 2.5px );
/* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
display: flex;
align-items: center;
justify-content: center;
}
`

const SideBar = styled.div `
display: none;

@media screen and (max-width: 884px) and (min-width: 767px){
    display: none;
}
@media screen and (max-width: 768px) and (min-width: 300px){
width: 80px;
height: 40px;
display: flex;
margin-right: 20px;
/* background-color: gray; */
align-items: center;
justify-content: center;
transform: scale(1);
transition: all 350ms;
:hover{
    cursor: pointer;
    /* transform: scale(1.054); */
    color: #515151;
}

span{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    margin-right: 2px;
}
}
@media screen and (max-width: 500px) and (min-width: 300px){
width: 80px;
height: 40px;
display: flex;
margin-right: 2px;
/* background-color: gray; */
align-items: center;
justify-content: center;
transform: scale(1);
transition: all 350ms;
:hover{
    cursor: pointer;
    /* transform: scale(1.054); */
    color: #515151;
}

span{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    margin-right: 2px;
}
}
`

const Text = styled.div `
font-size: 30px;
font-weight: bold;
color: red;
font-family: Lobster;
display: flex;
flex: 1;
/* margin-left: 10px; */
@media screen and (max-width: 500px) and (min-width: 300px){
    font-size: 20px;
}
@media screen and (max-width: 1024px) and (min-width: 768px){
    font-size: 20px;
}
`

const Logo = styled.img `
width: 50px;
height: 50px;
border-radius: 50px;
object-fit: cover;
margin-left: 30px;
/* background-color: gray; */
`

const Container = styled.div `
top: 0;
bottom: 0;
z-index: 100;
width: 100%;
height: 60px;
position: fixed;
background-color: #F3F4F6;
background-color: rgba(231, 232, 233, 0.50);
box-shadow: 0 0px 12px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 2.5px );
-webkit-backdrop-filter: blur( 2.5px );
@media screen and (max-width: 500px) and (min-width: 300px){
width: 100%;
height: 60px;
background-color: #F3F4F6;
}
`

