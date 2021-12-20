import React from 'react'
import styled from 'styled-components'
import landimage from "../BOOT/landimage.png"
import laptops from "../BOOT/laptops.png"
import laptops2 from "../BOOT/desktops.png"
import phones from "../BOOT/phones.png"
import cables from "../BOOT/cables.png"
import printers from "../BOOT/printers.png"
import {Link, NavLink, useNavigate, Navigate}from "react-router-dom";

const HomePage = () => {
    return (
        <Container id="home">
            <Wrapper>
                <Glass>
                    <Text>
                    Bringing you the best and Quality 
                    Products to your door steps
                    </Text>
                    <span>We are here for you for all kinds of laptops, desktops and computer electronics</span>
                <Button to="/UserDashBoard">Get Started</Button>
                </Glass>
            </Wrapper>
            <Wrapper2>
                <span>Featured Products</span>
                    <Holder>
                    <Box>
                        Laptops
                    </Box>
                    <Box2>
                        Desktops
                    </Box2>
                    <Box3>
                        Phones
                    </Box3>
                    <Box4>
                        Cables/Usb Devices
                    </Box4>
                    <Box5>
                        Printers
                    </Box5>
                    </Holder>
                    <SmallText>For sale for affordable prices with amazing discounts</SmallText>
            </Wrapper2>
        </Container>
    )
}

export default HomePage

const SmallText = styled.div`
font-size: 20px;
font-family: Lobster;
margin-top: 20px;
@media screen and (max-width: 500px) and (min-width: 300px) {
    width: 90%;
    text-align: center;
}
`

const Box5 = styled.div `
position: relative;
width: 200px;
height: 200px;
margin: auto;

/* background-color: gray; */
border: 1px solid gray;
border-radius: 5px;
font-size: 20px;
font-weight: bold;
font-family: Cabin;
display: flex;
/* justify-content: flex-end; */
/* align-items: flex-end; */
/* margin: auto; */
background-image: url(${printers});
background-repeat: no-repeat;
background-position: center; 
background-size: contain;
transform: scale(1);
transition: all 350ms;
:hover{
    /* cursor: pointer; */
    transform: scale(1.014);
    background-color: #F3F4F6;
    box-shadow: 2px 2px 5px 0 rgba( 31, 38, 135, 0.37 );
}
@media screen and (max-width: 884px) and (min-width: 768px) {
    width: 250px;
    height: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
}
@media screen and (max-width: 500px) and (min-width: 300px) {
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
}
`
const Box4 = styled.div `
position: relative;
width: 200px;
height: 200px;
margin: auto;

/* background-color: gray; */
border: 1px solid gray;
border-radius: 5px;
font-size: 20px;
font-weight: bold;
font-family: Cabin;
display: flex;
justify-content: flex-end;
align-items: flex-end;
/* margin: auto; */
background-image: url(${cables});
background-repeat: no-repeat;
background-position: center; 
background-size: contain;
transform: scale(1);
transition: all 350ms;
:hover{
    /* cursor: pointer; */
    transform: scale(1.014);
    background-color: #F3F4F6;
    box-shadow: 2px 2px 5px 0 rgba( 31, 38, 135, 0.37 );
}
@media screen and (max-width: 884px) and (min-width: 768px) {
    width: 250px;
    height: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
}
@media screen and (max-width: 500px) and (min-width: 300px) {
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
}
`
const Box3 = styled.div `
position: relative;
width: 200px;
height: 200px;
margin: auto;

/* background-color: gray; */
border: 1px solid gray;
border-radius: 5px;
font-size: 20px;
font-weight: bold;
font-family: Cabin;
display: flex;
justify-content: flex-start;
align-items: flex-start;
/* margin: auto; */
background-image: url(${phones});
background-repeat: no-repeat;
background-position: center; 
background-size: contain;
transform: scale(1);
transition: all 350ms;
:hover{
    /* cursor: pointer; */
    transform: scale(1.014);
    background-color: #F3F4F6;
    box-shadow: 2px 2px 5px 0 rgba( 31, 38, 135, 0.37 );
}
@media screen and (max-width: 884px) and (min-width: 768px) {
    width: 250px;
    height: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
}
@media screen and (max-width: 500px) and (min-width: 300px) {
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
}
`
const Box2 = styled.div `
position: relative;
width: 200px;
height: 200px;
margin: auto;

/* background-color: gray; */
border: 1px solid gray;
border-radius: 5px;
font-size: 20px;
font-weight: bold;
font-family: Cabin;
display: flex;
justify-content: flex-end;
align-items: flex-end;
/* margin: auto; */
background-image: url(${laptops2});
background-repeat: no-repeat;
background-position: center; 
background-size: contain;
transform: scale(1);
transition: all 350ms;
:hover{
    /* cursor: pointer; */
    transform: scale(1.014);
    background-color: #F3F4F6;
    box-shadow: 2px 2px 5px 0 rgba( 31, 38, 135, 0.37 );
}
@media screen and (max-width: 884px) and (min-width: 768px) {
    width: 250px;
    height: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
}
@media screen and (max-width: 758px) and (min-width: 501px){
    margin-top: 10px;
    margin-bottom: 10px;
}
@media screen and (max-width: 500px) and (min-width: 300px) {
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
}
`
const Box = styled.div `
position: relative;
width: 200px;
height: 200px;
margin: auto;
/* background-color: gray; */
border: 1px solid gray;
border-radius: 5px;
font-size: 20px;
font-weight: bold;
font-family: Cabin;
display: flex;
/* justify-content: flex-end; */
/* align-items: flex-end; */
/* margin: auto; */
background-image: url(${laptops});
background-repeat: no-repeat;
background-position: center; 
background-size: contain;
transform: scale(1);
transition: all 350ms;
:hover{
    /* cursor: pointer; */
    transform: scale(1.014);
    background-color: #F3F4F6;
    box-shadow: 2px 2px 5px 0 rgba( 31, 38, 135, 0.37 );
}
@media screen and (max-width: 884px) and (min-width: 768px) {
    width: 250px;
    height: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
}
@media screen and (max-width: 500px) and (min-width: 300px) {
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
}
`

const Holder = styled.div `
width: 90%;
height: auto;
display: flex;
background-color: white;
flex-wrap: wrap;

@media screen and (max-width: 769px) and (min-width: 628px) {
width: 100%;
height: auto;
display: flex;
/* flex-direction: column; */
background-color: white;
flex-wrap: wrap;
}
@media screen and (max-width: 500px) and (min-width: 300px) {
width: 100%;
height: auto;
display: flex;
flex-direction: column;
background-color: white;
flex-wrap: wrap;
}
`

const Wrapper2 = styled.div `
width: 100%;
height: 420px;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
/* background-color: lightgray; */
span{
    font-family: Lobster;
    font-weight: bold;
    font-size: 40px;
    margin-top: 40px;
    margin-bottom: 40px;
}


@media screen and (max-width: 884px) and (min-width: 768px){
height: 380px;
}
@media screen and (max-width: 500px) and (min-width: 300px){
height: 280px;
}
span{
    font-family: Lobster;
    font-weight: bold;
    font-size: 30px;
}
`

const Button = styled(NavLink) `
width: 120px;
height: 40px;
text-decoration: none;
background-color: #0044FF;
display: flex;
align-items: center;
justify-content: center;
font-size:  15px;
text-align: center;
font-weight: 600;
font-family: Roboto Slab;
color: white;
margin-top: 80px;
border-radius: 3px;
transform: scale(1);
transition: all 350ms;
:hover{
    cursor: pointer;
    transform: scale(1.034);
    background-color: #0A9DFF;
}

@media screen and (max-width: 884px) and (min-width: 768px){
    margin-top: 60px;
}
@media screen and (max-width: 500px) and (min-width: 300px){
    margin-top: 20px;
    margin-bottom: 5px;
}
`

const Text = styled.div `
width: 90%;
font-size: 45px;
text-align: center;
font-weight: bold;
color: white;
margin-top: 20px;
@media screen and (max-width: 884px) and (min-width: 768px){
width: 97%;
font-size: 35px;
text-align: center;
font-weight: bold;
color: white;
margin-top: 40px;
}
@media screen and (max-width: 700px) and (min-width: 540px){
width: 97%;
font-size: 25px;
text-align: center;
font-weight: bold;
color: white;
margin-top: 30px;
}

@media screen and (max-width: 500px) and (min-width: 300px){
width: 97%;
font-size: 22px;
text-align: center;
font-weight: bold;
color: white;
margin-top: 30px;
}
`

const Glass = styled.div `
width: 60%;
height: 90%;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
background-color: lightgray;
border-radius: 5px;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 0px 5px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 2.5px );
-webkit-backdrop-filter: blur( 2.5px );
border-radius: 10px;

span{
width: 95%;
font-size: 15px;
text-align: center;
font-weight: 500;
color: white;
margin-top: 20px;
}

@media screen and (max-width: 884px) and (min-width: 768px){
width: 75%;
height: 90%;
}
@media screen and (max-width: 758px) and (min-width: 501px){
    width: 80%;
}
@media screen and (max-width: 500px) and (min-width: 300px){
width: 95%;
height: 90%;
}
`

const Wrapper = styled.div `
width: 100%;
height: 420px;
background-image: url(${landimage});
background-repeat: no-repeat;
background-position: center; 
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
/* background-color: lightgray; */
@media screen and (max-width: 884px) and (min-width: 768px){
height: 380px;
}
@media screen and (max-width: 500px) and (min-width: 300px){
height: 280px;
}
`

const Container = styled.div `
width: 100%;
height: calc(100auto - 60px);
margin-top: 60px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media screen and (max-width: 500px) and (min-width: 300px){
    margin-top: 60px;
}
/* background-color: red; */
`
