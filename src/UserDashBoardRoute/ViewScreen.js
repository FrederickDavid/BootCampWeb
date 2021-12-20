import React from 'react'
import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import {app} from "../base"

const ViewScreen = () => {
    const [data, setData] = React.useState([])
    const [search,setSearch] = React.useState("")
    const getData = async ()=>{
            await app.firestore().collection("Quotes")
           
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
        await app.firestore().collection("Quotes").doc(id).delete()
    }
    React.useEffect(()=>{
getData()
    },[])
    return (
         <Container>
              <SearchHolder>
                    <Search placeholder="Search"
                    value={search}
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}/>
                </SearchHolder>
              <Wrapper>
              {data.filter((e)=>{
                  if(search===""){
                     return e
                  }else if(e.author.toLowerCase().includes(search.toLowerCase())){
                      return e
                  }
              })
               ?.map((props)=>(
            <Card>
                <Text>{props.quote}</Text>
                <Texts>{props.author}</Texts>
                <ButtonTab>
                    <Button
                    to={`addScreen/${props.id}`}
                    >Edit</Button>
                    <Button2
                     onClick={()=>{
                        DeleteItems(props.id)
                     }}
                    >Delete</Button2>
                </ButtonTab>
            </Card>
               ))}
              </Wrapper>
        </Container>
    )
}

export default ViewScreen



const Container = styled.div `
width: 100%;
height: auto;
/* background-color: white; */
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div `
width: 100%;
height: auto;
/* background-color: white; */
margin-top: 50px;
display: flex;
/* flex-direction: column; */
flex-wrap: wrap;
`

const Card = styled.div `
width: 20%;
height: 250px;
border-radius: 6px;
/* background-color: red; */
margin: 30px;
display: flex;
align-items: center;
flex-direction: column;
border: 1px solid grey;
transition: all 350ms;
transform: scale(1);
:hover{
    cursor: pointer;
    transform: scale(1.012);
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
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
const Text = styled.div `
width: 95%;
height: 50%;
font-size: 13px;
font-weight: 600;
margin-top: 10px;
margin-bottom: 2px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
/* background-color: red; */
border: 1px solid grey;
border-radius: 4px;
`
const Texts = styled.div `
width: 95%;
height: 10%;
font-size: 13px;
font-weight: bold;
margin-bottom: 2px;
display: flex;
align-items: center;
justify-content: flex-end;
/* background-color: red; */
`
const ButtonTab = styled.div `
width: 95%;
height: 25%;
/* background-color: lightgrey; */
display: flex;
align-items: center;
justify-content: space-around;
`

const Button = styled(NavLink) `
width: 40%;
height: 80%;
background-color: blue;
border-radius: 4px;
border: none;
color: white;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
font-weight: 600;
transition: all 350ms;
transform: scale(1);
:hover{
    cursor: pointer;
    transform: scale(1.012);
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
`
const Button2 = styled.button `
width: 40%;
height: 80%;
background-color: red;
border-radius: 4px;
border: none;
color: white;
font-weight: bold;
transition: all 350ms;
transform: scale(1);
:hover{
    cursor: pointer;
    transform: scale(1.012);
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
`
const Search = styled.input`
height: 20px;
width: 230px;

background-color: transparent;
border: none;
outline: none;
color:black;
::placeholder{
    color: black;
    opacity: 0.8;
    font-size: 12px;
}
`

const SearchHolder = styled.div`
display: flex;
width: 20%;
height: 40px;
align-items: center;
background-color: whitesmoke;
padding: 0 10px;
border: 1px solid black;
border-radius: 5px;
`