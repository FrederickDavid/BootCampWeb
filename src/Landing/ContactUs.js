import React from 'react'
import styled from 'styled-components'
import {BsFacebook, BsWhatsapp} from "react-icons/bs"
import {RiWhatsappFill} from "react-icons/ri"
import {AiOutlineTwitter} from "react-icons/ai"

const ContactUs = () => {
    return (
        <Container3 id="contact">
            <Wrapper>
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
            </Wrapper>
        </Container3>
    )
}

export default ContactUs

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
width: 150px;
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

const Wrapper = styled.div `
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
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: lightgray;
`