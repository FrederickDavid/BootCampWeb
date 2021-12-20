import React from 'react'
import styled from 'styled-components'

const Services = () => {
    return (
        <Container id="service">
            <HeaderText>Services</HeaderText>
                <Text>
In for all laptops and desktops repairs include building or 
configuring new hardware, installing and updating
software packages, creating and maintaining 
computer networks.
                </Text>
                <List>
                    <Order></Order>
                    <Text2>Laptops/Desktops sales</Text2>
                </List>
                <List>
                    <Order></Order>
                    <Text2>Printer/Phone Sales</Text2>
                </List>
                <List>
                    <Order></Order>
                    <Text2>Repairs and programming of BIOS</Text2>
                </List>
                <List>
                    <Order></Order>
                    <Text2>Tutoring</Text2>
                </List>
                <List>
                    <Order></Order>
                    <Text2>Cables, Connectors and Usb devices</Text2>
                </List>
        </Container>
    )
}

export default Services


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
width: 80%;
height: 30px;
/* background-color: white; */
display: flex;
align-items: center;
@media screen and (max-width: 884px) and (min-width: 768px){
    width: 80%;
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
height: calc(100auto - 140px);
padding-bottom: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`