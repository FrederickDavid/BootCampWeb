import React from 'react'
import styled from 'styled-components'
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import {Link, NavLink, useNavigate, Navigate}from "react-router-dom";

const UserSignIn = () => {
    const [toggle, setToggle] = React.useState(true)
    const [toggles, setToggles] = React.useState(false)

    const changes =()=>{
        setToggle(!toggle)
    }
    const click =()=>{
        setToggles(!toggles)
    }

    return (
        <Container>
            {
                toggle?(
                <Card>
                    <Span>Sign Up</Span>
                    <InputTab>
                        <Text>UserName</Text>
                        <Input placeholder="UserName"
                        />
                        </InputTab>
                    <InputTab>
                        <Text>Email</Text>
                        <Input placeholder="Email"
                        />
                        </InputTab>
                        <InputTab>
                        <Text>Password</Text>
                    {
                        toggles?(
                    <INputs>
                    <input placeholder="password" type="text"/>
                    <Holder><AiFillEye onClick={click}/></Holder>
                    </INputs>
                        ):(
                    <INputs>
                    <input placeholder="password" type="password"/>
                    <Holder><AiFillEyeInvisible onClick={click}/></Holder>
                    </INputs>
                        )
                    }
                        </InputTab>
                        <InputTab>
                        <Text>Confirm Password</Text>
                        <Input type="password" placeholder="Confirm Password"
                        />
                        </InputTab>
                        <But2>Sign in with <span><BsFacebook/></span>Facebook</But2>
                        <But>Sign in with <span><FcGoogle/></span>Google</But>
                        <Add >SignUp</Add>
                        <Info>Dont have an account yet,<span onClick={changes}> Click to SignIn</span >
                        </Info>
                    </Card>):(
                        <Card>
                        <Span>Sign In</Span>
                        <InputTab>
                            <Text>Email</Text>
                            <Input placeholder="Email"
                            />
                            </InputTab>
                            <InputTab>
                            <Text>Password</Text>
                            {
                        toggles?(
                    <INputs>
                    <input placeholder="password" type="text"/>
                    <Holder><AiFillEye onClick={click}/></Holder>
                    </INputs>
                        ):(
                    <INputs>
                    <input placeholder="password" type="password"/>
                    <Holder><AiFillEyeInvisible onClick={click}/></Holder>
                    </INputs>
                        )
                    }
                            </InputTab>
                            <Add2 >SignIn</Add2>
                            <Info>Dont have an account yet,<span onClick={changes}> Click to SignUp</span >
                            </Info>
                        </Card>
                    )
            }
        </Container>
    )
}

export default UserSignIn

const Holder = styled.div `
width: 10%;
height: 80%;
display: flex;
align-items: center;
justify-content: center;
font-size: 22px;
cursor: pointer;
`

const INputs = styled.div `
width: 99%;
height: 51%;
outline: none;
border-radius: 3px;
border: 1px solid grey;
color: grey;
/* padding: 3px; */
font-size: 14px;
display: flex;
align-items: center;
input{
    width: 90%;
    height: 85%;
    border: none;
    outline: none;
    font-size: 14px;
}
`

const LinkTag = styled.div `
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
margin-bottom: 5px;
text-decoration: none;
span{
    color: red;
    cursor: pointer;
}
`
const Add2 = styled.div `
width: 30%;
height: 40px;
margin-top: 35px;
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
const Add = styled.div `
width: 30%;
height: 40px;
margin-top: 15px;
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

const But2 = styled.div `
width: 90%;
height: 40px;
background-color:
#385499;
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
    background-color: #385485;;
    box-shadow: 1px 1px 5px lightgray;
}
span{
    margin-left: 8px;
    margin-right: 2px;
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
}
`
const But = styled.div `
width: 90%;
height: 40px;
background-color: #d32539;
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
    background-color: #cb2c44;
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
span{
    margin-left: 8px;
    margin-right: 2px;
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
}
`
const InputTab = styled.div `
width: 95%;
height: 60px;
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
width: 98%;
height: 50%;
outline: none;
border-radius: 3px;
border: 1px solid grey;
`

const Span = styled.div `
font-size: 20px;
font-weight: 900;
font-family: Roboto Slab;
margin: 20px 20px;
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
margin-top: 40px;
margin-bottom: 40px;
@media screen and (max-width: 500px) and (min-width: 300px){
width: 300px;
height: auto; 
}
`

const Container = styled.div `
width: 100%;
height: auto;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
