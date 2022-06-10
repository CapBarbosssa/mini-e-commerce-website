import React from 'react'
import SendSharpIcon from '@mui/icons-material/SendSharp';
import styled from 'styled-components';

const Container =styled.div`
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #f6ece3;

`
const Title =styled.h1`
font-size: 40px;
margin-bottom:20px;
    
`
const Desc =styled.div`
font-size: 20px;
margin-bottom:20px;
    
`
const InputContainer =styled.div`
    height: 30px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    border: 2px;

`
const Input =styled.input`
flex:8;

    
`
const Button =styled.button`
flex:1;
font-weight: bold;
border: 1px;
background-color: #f9efe7;
cursor: pointer;

    
`


function Subscribe() {
  return (
    <Container>
        <Title> Join The Club</Title>
        <Desc>Get $10 off discount on your next order above $50</Desc>
        <InputContainer>
        <Input placeholder='Email'/>
        <Button>
        <SendSharpIcon/></Button>
        </InputContainer>

    </Container>
  )
}

export default Subscribe