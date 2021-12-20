import React from 'react'
import styled from 'styled-components'
import laptops from "../BOOT/laptops.png"
import logo from "../BOOT/logo.png"
import {Link, NavLink, useNavigate, Navigate}from "react-router-dom";
import {BsMenuButtonWideFill} from "react-icons/bs"
import {BsFacebook, BsWhatsapp} from "react-icons/bs"
import {RiWhatsappFill} from "react-icons/ri"
import {AiOutlineTwitter} from "react-icons/ai"
import {app} from "../base"

const Printers = () => {
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
            <Images src={logo}/>
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
            <span>Printers</span>
        <Wrapper>
       {data.map((props)=>(
           
            <Card>
            <Image src={props.image}/>
            <Text>
                <Name>{props.productname}</Name>
                <Price>{props.price}</Price>
            </Text>
            <ButtonTab>
                <Button>View more</Button>
                <Button2 to="/EditProduct/:id">Edit</Button2>
                <Button onClick={()=>{
                        DeleteItems(props.id)
                     }}>Delete</Button>
            </ButtonTab>
        </Card>
       ))}
        </Wrapper>
    </Container>
    <Container3 id="contact">
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
 )}

export default Printers;


const Button2 = styled(NavLink) `
width: 30%;
height: 100%;
font-size: 13px;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
background-color: #0D71D5;
font-family: Roboto Slab;
font-weight: bold;
text-decoration: none;
color: white;
transition: all 350ms;
transform: scale(1);
:hover{
    cursor: pointer;
    transform: scale(1.012);
    background-color: #4DA4FB;
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
`
const Button = styled.div `
width: 30%;
height: 100%;
font-size: 13px;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
background-color: red;
font-family: Roboto Slab;
font-weight: bold;
color: white;
transition: all 350ms;
transform: scale(1);
:hover{
    cursor: pointer;
    transform: scale(1.012);
    background-color: #F93D3D;
    box-shadow: 1px 1px 5px lightgray;
}
`

const ButtonTab = styled.div `
width: 95%;
height: 40px;
display: flex;
justify-content: space-between;
margin-bottom: 5px;
`

const Price = styled.div `
color: red;
font-weight: bold;
font-size: 14px;
font-style: italic;
`

const Name = styled.div `
font-family: Roboto Slab;
font-weight: bold;
`

const Text = styled.div `
width: 95%;
height: 40px;
display: flex;
align-items: center;
justify-content: space-between;
`

const Image = styled.img `
width: 97%;
height: 160px;
object-fit: cover;
border-radius: 5px 5px 0px 0px;
`

const Card = styled.div `
width: 300px;
height: 300px;
display: flex;
margin: 10px 10px;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid lightgray;
border-radius: 5px;
box-shadow: 2px 2px 5px 0 rgba( 31, 38, 135, 0.37 );
@media screen and (max-width: 768px) and (min-width: 550px){
width: 250px;
height: auto; 
}

@media screen and (max-width: 500px) and (min-width: 300px){
width: 300px;
height: auto; 
}
transition: all 350ms;
transform: scale(1);
:hover{
    transform: scale(1.045);
    cursor: pointer;
}
`

const Wrapper = styled.div `
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const Container = styled.div `
width: 100%;
height: calc(100vh - 130px);
margin-top: 30px;
/* margin-bottom: 80px; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
span{
    margin-top: 120px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 40px;
    font-family: Roboto Slab;
}
@media screen and (max-width: 768px) and (min-width: 300px){
    span{
    margin-top: 90px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 30px;
    font-family: Roboto Slab;
}
}
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

const Images = styled.img `
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
margin-bottom: 90px;
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