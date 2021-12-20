import React from 'react'
import styled from 'styled-components'
import { app } from '../base'
import firebase from 'firebase'
import images from "../BOOT/laptops.png"
import logo from "../BOOT/logo.png"
import {Link, NavLink, useNavigate, Navigate}from "react-router-dom";
import {BsMenuButtonWideFill} from "react-icons/bs"
import {BsFacebook, BsWhatsapp} from "react-icons/bs"
import {RiWhatsappFill} from "react-icons/ri"
import {AiOutlineTwitter} from "react-icons/ai"

const AddProduct = () => {
    const [toggle, setToggle] = React.useState(false)

    const change = ()=>{
        setToggle(!toggle)
    }

    const navigate = useNavigate()
    const [avatar, setAvatar] = React.useState("")
    const [producttype, setProducttype] = React.useState("")
    const [productname, setProductname] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [price, setPrice] = React.useState("")
    const [image, setImage] = React.useState(images)
    const pushData = async ()=>{
        await app.firestore().collection("Products").add({
            avatar,
            producttype,
            productname,
            description,
            price,
            image

        })
    navigate("/Laptops")
    }

    const imageUpload = async (e) => {
        const file = e.target.files[0];
        const save = URL.createObjectURL(file)
        setImage(save)
         const fileRef = app.storage().ref()
         const storageRef = fileRef.child("image/" + file.name).put(file)
         storageRef.on(firebase.storage.TaskEvent.STATE_CHANGED, ((snapshot)=>{
                 const count = (snapshot.bytesTransferred/snapshot.totalBytes)*100
                 console.log(count)
         }),(error)=>{
             console.log(error.message)
         },()=>{
             storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                 console.log(url)
                 setAvatar(url)
             })
         })
     }
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
          <span>Add Products</span>
          <Card>
              <Images src={image}/>
                    <Upload htmlFor="pix">Upload Image</Upload>
                    <input type="file" id="pix" style={{display: "none"}} 
                    onChange={imageUpload}/>
                    <InputTab>
                <Text>Type of Product</Text>
                <Input placeholder="Desktop" 
                value={producttype}
                onChange={(e)=>{
                    setProducttype(e.target.value)
                }} />
                </InputTab>
                    <InputTab>
                <Text>Name of Product</Text>
                <Input placeholder="Dell, Hp" 
                value={productname}
                onChange={(e)=>{
                    setProductname(e.target.value)
                }} />
                </InputTab>
                    <InputTab2>
                <Text>Description</Text>
                <Inputs placeholder="Windows 10, 8th generation 16GB RAM, 650GB SSD" 
                value={description}
                onChange={(e)=>{
                    setDescription(e.target.value)
                }} />
                </InputTab2>
                <InputTab>
                <Text>Price</Text>
                <Input placeholder="110,000" 
                value={price}
                onChange={(e)=>{
                    setPrice(e.target.value)
                }} />
                </InputTab>
                <Add to="/Laptops"
                onClick={()=>{
                    pushData()
                }}>Add</Add>
          </Card>
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
                    <Icons1><AiOutlineTwitter/></Icons1>
                </Foots2>
            </Wrapper3>
        </Container3>
   
      </>
    )
}

export default AddProduct

const Add = styled.div `
width: 25%;
height: 40px;
margin-top: 15px;
margin-bottom: 15px;
background-color: #0044FF;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-weight: bold;
border-radius: 4px;
transition: all 350ms;
transform: scale(1);
:hover{
    cursor: pointer;
    transform: scale(1.012);
    background-color: #0A9DFF;
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
`
const InputTab2 = styled.div `
width: 95%;
height: auto;
/* background-color: lightgray; */
margin-top: 7px;
display: flex;
flex-direction: column;
align-items: center;
`
const InputTab = styled.div `
width: 95%;
height: 20%;
/* background-color: lightgray; */
margin-top: 7px;
display: flex;
flex-direction: column;
align-items: center;
`
const Text = styled.div `
width: 100%;
height: auto;
font-size: 13px;
font-weight: bold;
margin-bottom: 2px;
`
const Inputs = styled.textarea `
width: 99%;
height: 80px;
outline: none;
border-radius: 4px;
border: 1px solid grey;
resize: none;
`
const Input = styled.input `
width: 99%;
height: 30px;
outline: none;
border-radius: 4px;
border: 1px solid grey;
`
const Images = styled.img `
width: 150px;
height: 100px;
/* background-color: lightgray; */
border-radius: 5px;
border: 1px solid grey;
margin-bottom: 10px;
object-fit: cover;
margin-top: 20px;
transform: scale(1);
transition: all 350ms;
:hover{
    /* cursor: pointer; */
    transform: scale(1.014);
    background-color: #F3F4F6;
    box-shadow: 2px 2px 5px 0 rgba( 31, 38, 135, 0.37 );
}
`
const Upload = styled.label `
width: 230px;
height: 30px;
color: white;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50px;
margin-bottom: 10px;
background-color: red;
cursor: pointer;
transform: scale(1);
:hover{
    transform: scale(1.02);
    background-color: darkred;
}
`

const Card = styled.div `
width: 350px;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* background-color: gray; */
border: 1px solid lightgray;
border-radius: 5px;
box-shadow: 2px 2px 5px 0 rgba( 31, 38, 135, 0.37 );
margin-top: 20px;
margin-bottom: 40px;
@media screen and (max-width: 500px) and (min-width: 300px){
width: 300px;
height: auto; 
}
`

const Container = styled.div `
width: 100%;
height: calc(100auto - 130px);
margin-top: 30px;
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