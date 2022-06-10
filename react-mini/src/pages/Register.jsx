import { Link } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow'

const Container = styled.div`
/* width: 100vw;
height: 100vh;
background-color: aliceblue;
display: flex;
align-items: center;
justify-content: center; */
`

const Wrapper = styled.div`
margin: auto;
padding:200px 100px;
justify-content: center;
align-items: center;`


const Title = styled.h1`
flex:1;
font-size: 28px;
font-weight:bold;
align-items: center;
justify-content: center;
display: flex;
padding: 15px 10px;
`

const Form = styled.form`
display: flex;
padding: 20px 10px;
flex-wrap:wrap;
align-items: center;
flex-direction: column;`

const Input= styled.input`
flex:1;
min-width:30%;
margin:10px 10px 0px 0px;
padding: 10px;`

const Agreement= styled.span`
font-size: 15px;
margin:20px 10px;
padding:20px;`

const Button= styled.button`
width: 32%;
padding: 18px 20px;
font-size: 15px;
background-color: #f9d7b9;
border: 1px;
font-weight: bolder;
cursor: pointer;
&:hover{
  opacity: 0.7;
 /* font-size:17px; */

}`

function Register() {
  return (
    <Container>
        <Navbar />
    
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an account,I have read and agree to the terms and condition of Organic Harmony.
                </Agreement>
                <Button> <Link href="/products" underline="none" color="black"> Create</Link></Button>
            </Form>
        </Wrapper>
        <Footer />
        
       
    </Container>
      
   
  )
}

export default Register
