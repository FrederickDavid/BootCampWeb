import React from 'react'
import styled from 'styled-components'
import images from "./images.png"
import  * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { app } from '../base'
import firebase from 'firebase'


const Auth = () => {
    const [avatar, setAvatar] = React.useState("")
    const [image, setImage] = React.useState(images)

    const [text, setText] = React.useState({})
    const showText = async (e) => {
        await setText({...text, [e.target.name]:e.target.value})
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

    const Schema = yup.object().shape({
        username: yup.string().required(" "),
        email: yup.string().email().required(" "),
        password: yup.string().required(" "),
        confirm: yup.string().oneOf([yup.ref("password"), null])
    })

    const {
        register,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        resolver: yupResolver(Schema)
    })

    const submitMyForm =handleSubmit((data) => {
        console.log(data)
        const {email, password} = data
        app.auth().createUserWithEmailAndPassword(email,password)
        reset()
    })
    return (
        <Container>
            <Wrapper>
                <BodyItems>
                    <Card onSubmit={submitMyForm}>
                    <Images src={image}/>
                    <Upload htmlFor="pix">Upload Image</Upload>
                    <input type="file" id="pix" style={{display: "none"}} onChange={imageUpload}/>
                    <Holder>
                        <Label>{errors.username?.message}</Label>
                    </Holder>
                    <Inputs placeholder="UserName" {...register("username")}/>
                    <Holder>
                        <Label>{errors.email?.message}</Label>
                    </Holder>
                    <Inputs placeholder="Email" {...register("email")}/>
                    <Holder>
                        <Label>{errors.password?.message}</Label>
                    </Holder>
                    <Inputs placeholder="Password" {...register("password")}/>
                    <Holder>
                        <Label>{errors.confirm?.message}</Label>
                    </Holder>
                    <Inputs placeholder="Confirm Password" {...register("confirm")}/>
                    <Submit type="submit">Submit</Submit>
                    </Card>
                </BodyItems>
            </Wrapper>
        </Container>
    )
   }

export default Auth

const Holder = styled.div `
width: 250px;
height: 15px;
color: red;
margin-bottom: 4px;
/* background-color: gray; */
`

const Label = styled.label `
font-size: 12px;
font-weight: bold;
display: flex;
align-items: center;
`

const Images = styled.img `
width: 80px;
height: 100px;
background-color: yellow;
border-radius: 50px;
margin-bottom: 10px;
object-fit: cover;
`
const Upload = styled.label `
width: 200px;
height: 30px;
color: white;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
border-radius: 3px;
margin-bottom: 10px;
background-color: red;
cursor: pointer;
transform: scale(1);
:hover{
    transform: scale(1.02);
    background-color: darkred;
}
`
const Inputs = styled.input `
width: 250px;
height: 30px;
margin-bottom: 10px;
`
const Submit = styled.button `
width: 80px;
height: 40px;
background-color: blue;
border-radius: 3px;
border: none;
color: white;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
cursor: pointer;
transform: scale(1);
:hover{
    transform: scale(1.02);
    background-color: darkblue;
}
`

const Container = styled.div `
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
/* margin-top: 10px; */
/* min-height: calc(100vh - 70px); */
background-color: whitesmoke;
`
const Wrapper = styled.div `
width: 100%;
height: 100%;
display: flex;
/* align-items: center; */
flex-direction: column;
justify-content: center;
align-items: center;
`
const Card = styled.form `
width: 30%;
height: 400px;
box-shadow: 2px 2px 3px solid black;
background-color: lightgray;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const BodyItems = styled.div `
width: 100%;
min-height: calc(100vh - 70px);
background-color: whitesmoke;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`