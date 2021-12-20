import React from 'react'
import styled from 'styled-components'

const AboutPage = () => {
    return (
        <Container id="about">
                <HeaderText>About Us</HeaderText>
                <Text>Inland Computers Institution dealers and repairs of all kinds of accessories like laptops, desktops, printers, 
            cables and all kinds of connectors . 
Tutor classes for desktop and graphics designs. Conducive and standard environment for learning.
Offer Private Classes
                </Text>
                <SubText>Why Choose Us</SubText>
                <List>
                    <Order></Order>
                    <Text2>Quality and standard goods are delivered too your doorstep</Text2>
                </List>
                <List>
                    <Order></Order>
                    <Text2>Well Branded Tutors </Text2>
                </List>
                <List>
                    <Order></Order>
                    <Text2>Teachers gives out time and monitor students</Text2>
                </List>
                <List>
                    <Order></Order>
                    <Text2>All at affordable prices</Text2>
                </List>
                <List>
                    <Order></Order>
                    <Text2>Always ready too offer you the best satisfaction you derive.</Text2>
                </List>
                
        </Container>
    )
}

export default AboutPage

const Text2 = styled.div `
margin-left: 10px;
font-family: Cabin;
font-size: 18px;
@media screen and (max-width: 500px) and (min-width: 300px){
    font-size: 15px;
}
`

const Order = styled.div `
width: 10px;
height: 10px;
border-radius: 50px;
background-color: black;

`

const List = styled.div `
width: 50%;
height: 30px;
/* background-color: white; */
display: flex;
align-items: center;
@media screen and (max-width: 884px) and (min-width: 768px){
    width: 60%;
}
@media screen and (max-width: 758px) and (min-width: 501px){
    width: 70%;
}
@media screen and (max-width: 500px) and (min-width: 300px){
    width: 90%;
}
`

const SubText = styled.div `
width: 90%;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
margin-bottom: 20px;
font-weight: bold;
font-family: Lobster;
font-size: 20px;
`

const Text = styled.div `
width: 90%;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
/* font-weight: bold; */
font-family: Cabin;
font-size: 20px;

`

const HeaderText = styled.div `
width: 90%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
font-weight: bold;
font-family: Lobster;
font-size: 40px;
@media screen and (max-width: 500px) and (min-width: 300px) {
    font-size: 30px;
}
`

const Container = styled.div `
width: 100%;
height: auto;
padding-bottom: 40px;
background-color: #E7E8E9;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width: 884px) {
  margin-top: 300px;
}
@media screen and (max-width: 834px) and (min-width: 768px){
  margin-top: 480px;
}
@media screen and (max-width: 769px) and (min-width: 628px) {
    margin-top: 240px;
}
@media screen and (max-width: 500px) and (min-width: 300px){
  margin-top: 1000px;
}
`