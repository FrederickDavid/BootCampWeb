import React from 'react'
import styled from 'styled-components'
import images from "../BOOT/laptops.png"
import logo from "../BOOT/logo.png"
import {Link, NavLink, useNavigate, Navigate}from "react-router-dom";
import {BsMenuButtonWideFill} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {BsFacebook, BsWhatsapp} from "react-icons/bs"
import {RiWhatsappFill} from "react-icons/ri"
import {app} from "../base"

const DetailedPage = () => {

    const [toggle, setToggle] = React.useState(false)
    const [data, setData] = React.useState([])

    const change = ()=>{
        setToggle(!toggle)
    }

    const getData = async ()=>{
        await app.firestore().collection("Products")
       
        .onSnapshot((snapshot)=>{
            const store = []
            snapshot.forEach((doc)=>{
                store.push({...doc.data(), id: doc.id})
            })
            setData(store)
        })
        console.log(data)
}

const DeleteItems = async (id)=>{
    await app.firestore().collection("Products").doc(id).delete()
}
React.useEffect(()=>{
getData()
},[])

    return (
        <>
          <Containers>
        <Head>
        <Logo>
            <Img src={logo}/>
            <Texts>Inland Computers</Texts>
        </Logo>
        <Menu>
        <span><BsMenuButtonWideFill onClick={change}/></span>
        {
            toggle?(
                <NavBar2>
            <Nav2 to="/Laptops">
                Laptops
            </Nav2>
            <Nav2 to="/Desktops">
                Desktops
            </Nav2>
            <Nav2 to="/Printers">
                Printers
            </Nav2>
            <Nav2 to="/Phones">
                Phones
            </Nav2>
            <Nav2 to="/Cables">
                Cables/Connectors
            </Nav2>
            <Nav2 to="/AddProducts">
                Add Product
            </Nav2>
        </NavBar2>
            ): null
        }
        </Menu>
        </Head>
        <NavBar>
            <Nav to="/Laptops">
                Laptops
            </Nav>
            <Nav to="/Desktops">
                Desktops
            </Nav>
            <Nav to="/Printers">
                Printers
            </Nav>
            <Nav to="/Phones">
                Phones
            </Nav>
            <Nav to="/Cables">
                Cables/Connectors
            </Nav>
            <Nav to="/AddProducts">
                Add Product
            </Nav>
        </NavBar>
    </Containers>
        <Container>
           {data.map((props)=>{
                <Wrapper>
                <LeftHolder>
                <DetailImage src={props.image}/>
                </LeftHolder>
                <RightHolder>
                    <ProductType>{props.producttype}
                    </ProductType>
                    <ProductName>{props.productname}</ProductName>
                    <Description>{props.description}</Description>
                    <Price>{props.price}</Price>
                </RightHolder>
            </Wrapper>
           })}
        </Container>
    <Container3>
            <Wrapper3>
                <Foots>
Copyright@2021.All Right Reserved 
<span>
Powered By Frederick</span>
                </Foots>
                <Foots>
For More Inquiry Contact Us 
<span>Tel No: 08038417214</span>
<span>Gmail: nwaobagerald@Gmail.Com</span>

                </Foots>
                <Foots2>
                    <Icons><BsFacebook/></Icons>
                    <Icons1><RiWhatsappFill/></Icons1>
                    <Icons><AiOutlineTwitter/></Icons>
                </Foots2>
            </Wrapper3>
        </Container3>
   
        </>
    )
}

export default DetailedPage

const Price = styled.div`
width: 90%;
height: 10%;
display: flex;
align-items: center;
color: red;
/* justify-content: center; */
font-size: 24px;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-style: italic;
font-weight: bold;
/* margin-bottom: 10px; */
@media screen and (max-width: 768px) and (min-width: 300px) {
    width: 90%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding-bottom: 10px; */
    margin-bottom: 30px;
}
`

const Description = styled.div`
width: 90%;
    height: auto;
    padding-bottom: 10px;
display: flex;
align-items: center;
/* justify-content: center; */
font-size: 17px;
font-family: Cabin;
font-weight: 600;
/* margin-bottom: 10px; */
@media screen and (max-width: 768px) and (min-width: 300px) {
    width: 90%;
    height: auto;
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 30px;
}
`

const ProductName = styled.div`
width: 90%;
height: 10%;
display: flex;
align-items: center;
/* justify-content: center; */
font-size: 20px;
font-family: Roboto Slab;
font-weight: bold;
/* margin-bottom: 10px; */
@media screen and (max-width: 768px) and (min-width: 300px) {
    width: 90%;
    height: 15%;
    margin-bottom: 30px;
    
    display: flex;
    align-items: center;
    justify-content: center;
}
`

const ProductType = styled.div`
width: 90%;
height: 10%;
display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
font-family: Roboto Slab;
font-weight: bold;
margin-bottom: 20px;
@media screen and (max-width: 768px) and (min-width: 300px) {
    width: 90%;
    height: 15%;
    margin-bottom: 30px;
}
`

const RightHolder = styled.div`
width: 50%;
height: 100%;
display: flex;
/* background-color: lightgray; */
flex-direction: column;
align-items: center;
justify-content: center;
@media screen and (max-width: 768px) and (min-width: 300px) {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

const DetailImage = styled.img`
width: 85%;
height: 70%;
box-shadow: 2px 2px 5px 0 rgba( 31, 38, 135, 0.37 );
/* background-color: lightgreen; */
display: flex;
align-items: center;
justify-content: center;
object-fit: cover;
border-radius: 5px;
@media screen and (max-width: 768px) and (min-width: 300px) {
    width: 85%;
    height: 90%;
}
`

const LeftHolder = styled.div`
width: 50%;
height: 100%;
display: flex;
/* background-color: yellow; */
align-items: center;
justify-content: center;
@media screen and (max-width: 768px) and (min-width: 300px) {
    width: 80%;
    height: 100%;
}
`

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
/* background-color: yellow; */
@media screen and (max-width: 768px) and (min-width: 300px) {
    flex-direction: column;
}

`

const Container = styled.div`
width: 100%;
height: 100vh;
margin-top: 100px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;

`








const Nav2 = styled(NavLink)`
width: 160px;
height: 13%;
/* background-color: #E7E8E9; */
border-radius: 3px;
color: black;
text-decoration: none;
/* margin-bottom: 10px; */
display: flex;
align-items: center;
font-size: 15px;
/* padding-left: 20px; */
justify-content: center;
font-weight: bold;
transition: all 300ms;
:hover{
    background-color: #B1B1B1;
    cursor: pointer;
}
`
const Nav = styled(NavLink)`
width: 160px;
height: 90%;
background-color: #E7E8E9;
border-radius: 3px;
color: black;
text-decoration: none;
/* margin-bottom: 10px; */
display: flex;
align-items: center;
font-size: 15px;
/* padding-left: 20px; */
justify-content: center;
font-weight: bold;
transition: all 300ms;
:hover{
    background-color: #B1B1B1;
    cursor: pointer;
}
`

const NavBar2 = styled.div `
width: 230px;
height: 310px;
/* margin-bottom: 5px; */
background-color: #DBDBDB;
display: flex;
flex-direction: column;
align-items: center;
/* padding-top: 10px; */
margin-right: 130px;
margin-top: 390px;
justify-content: space-around;
z-index: 12;
`
const NavBar = styled.div `
width: 90%;
height: 32%;
margin-bottom: 5px;
/* background-color: white; */
display: flex;
/* flex-direction: column; */
align-items: center;
/* padding-top: 10px; */
justify-content: space-between;
@media screen and (max-width: 1024px) and (min-width: 800px){
width: 98%;
height: 32%;
margin-bottom: 5px;
/* background-color: white; */
display: flex;
/* flex-direction: column; */
align-items: center;
/* padding-top: 10px; */
justify-content: space-between;
}
justify-content: space-between;
@media screen and (max-width: 768px) and (min-width: 300px){
    display: none;
}

`

const Texts = styled.div `
font-size: 30px;
font-weight: bold;
color: red;
font-family: Lobster;
@media screen and (max-width: 768px) and (min-width: 300px){
    font-size: 20px;
    /* margin-right: 40%; */
}
`

const Img = styled.img `
width: 75px;
height: 75px;
border-radius: 50px;
object-fit: cover;
/* background-color: gray; */
`

const Menu2 = styled.div `
width: 75px;
height: 75px;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
background-color: gray;
margin-right: 5px;
@media screen and (max-width: 768px) and (min-width: 300px){
    /* margin-right: 20%; */
}
`
const Menu = styled.div `
display: none;
@media screen and (max-width: 768px) and (min-width: 300px){
width: 40px;
height: 40px;
/* border-radius: 50px; */
display: flex;
margin-right: 10px;
align-items: center;
justify-content: center;
/* background-color: gray; */
span{
    text-align: center;
    font-size: 16px;
    position: fixed;
}
}
`

const Logo = styled.div `
width: 95%;
height: 15%;
/* margin-bottom: 50px; */
/* background-color: white; */
display: flex;
align-items: center;
justify-content: center;

`

const Head = styled.div `
width: 100%;
height: 60%;
display: flex;
/* background-color: gray; */
align-items: center;
justify-content: center;
/* margin-top: 40px; */
`

const Containers = styled.div `
width: 100%;
height: 130px;
position: fixed;
background-color: #DBDBDB;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* margin-bottom: 90px; */
z-index: 50;
top: 0;
bottom: 0;
@media screen and (max-width: 768px) and (min-width: 300px){
    height: 80px;
}
`







const Icons1 = styled.div `
width: 40px;
height: 40px;
border-radius: 50px;
/* background-color: red; */
display: flex;
align-items: center;
justify-content: center;
color: green;
font-size: 42px;
`
const Icons = styled.div `
width: 35px;
height: 35px;
border-radius: 50px;
/* background-color: red; */
display: flex;
align-items: center;
justify-content: center;
color: blue;
font-size: 42px;
`

const IconTabs = styled.div `
width: 100px;
height: 100px;
/* background-color: white; */
display: flex;
align-items: center;
justify-content: space-between;
text-align: center;
font-size: 14px;
font-family: Cabin;
font-weight: bold;
/* flex-direction: column; */
`

const Foots = styled.div `
width: 300px;
height: 100px;
/* background-color: white; */
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-size: 14px;
font-family: Cabin;
font-weight: bold;
flex-direction: column;
`
const Foots2 = styled.div `
width: 300px;
height: 100px;
/* background-color: white; */
display: flex;
align-items: center;
justify-content: space-around;
text-align: center;
font-size: 14px;
font-family: Cabin;
font-weight: bold;
`

const Wrapper3 = styled.div `
width: 60%;
height: auto;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 30px;
@media screen and (max-width: 768px) and (min-width: 300px){
    flex-direction: column;
}
`

const Container3 = styled.div `
width: 100%;
height: calc(100auto - 140px);
padding-bottom: 30px;
margin-top: 60px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: lightgray;
`