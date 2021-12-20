import React from 'react'
import styled from 'styled-components'
import {app} from "../base"
import {NavLink, useNavigate, Link} from "react-router-dom"
import firebase from "firebase"
import {FcGoogle} from "react-icons/fc"
import {BsGithub} from "react-icons/bs"

const AddScreen = () => {
    const navigate = useNavigate()
    const [avatar, setAvatar] = React.useState("")

    const [text, setText] = React.useState({})
    const showText = async (e) => {
        await setText({...text, [e.target.name]:e.target.value})
    }
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const LoginUsers= async ()=>{
        try{
       await app.auth().signInWithEmailAndPassword(email, password)
       navigate('/');
    } catch (err){
        console.log(err.message);
    }
    };

    const googleSignIn = async ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        await app.auth().signInWithPopup(provider)
    };
    const githubSignIn = async ()=>{
        const provider = new firebase.auth.GithubAuthProvider();
        await app.auth().signInWithPopup(provider)
    }
    return (
        <Container>
            <Card>
                <InputTab>
                <Text>Email</Text>
                <Input placeholder="Enter your Email" value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}  
                />
                </InputTab>
                <InputTab>
                <Text>Password</Text>
                <Input placeholder="Enter your password" value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                />
                </InputTab>
                <Add onClick={()=>{
                    LoginUsers()
                }}>Submit</Add>
                <But onClick={()=>{
                    googleSignIn()
                }}>Sign in with <span><FcGoogle/></span>Google</But>
                <But onClick={()=>{
                    githubSignIn()
                }}>Sign in with <span><BsGithub/></span>GitHub</But>
                <Info>Dont have an account yet,<LinkTag to="/Register">Click here too register</LinkTag > </Info>
            </Card>
        </Container>
    )
}

export default AddScreen


const LinkTag = styled(NavLink) `
font-size: 12px;
font-weight: bold;
text-decoration: none;
color: red;
cursor: pointer;
`

const Info = styled.div `
font-size: 12px;
font-weight: bold;
margin-top: 15px;
text-decoration: none;
/* span{
    color: red;
    cursor: pointer;
} */
`
const Add = styled.div `
width: 30%;
height: 40px;
background-color: red;
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
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
`

const But = styled.div `
width: 90%;
height: 40px;
background-color: blue;
display: flex;
align-items: center;
justify-content: center;
color: white;
margin-top: 10px;
font-weight: 600;
border-radius: 4px;
transition: all 350ms;
transform: scale(1);
:hover{
    cursor: pointer;
    transform: scale(1.012);
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
span{
    margin-left: 8px;
    margin-right: 2px;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
}
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
const Input = styled.input `
width: 95%;
height: 50%;
outline: none;
border-radius: 4px;
border: 1px solid grey;
`

const Container = styled.div `
width: 100%;
height: auto;
/* background-color: white; */
margin-top: 50px;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`
const Card = styled.div `
width: 23%;
height: 350px;
border-radius: 6px;
/* background-color: red; */
margin: 30px;
display: flex;
align-items: center;
flex-direction: column;
border: 1px solid grey;
/* transition: all 350ms;
transform: scale(1); */
:hover{
    cursor: pointer;
    /* transform: scale(1.012); */
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
`