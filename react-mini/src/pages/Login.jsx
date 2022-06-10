import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow'
import { Link } from '@mui/material';

const Container = styled.div`
/* width: 100vw;
height: 100vh;
background-color: aliceblue;
display: flex;
align-items: center;
justify-content: center; */
`

const Wrapper = styled.div`
width: 70%;
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
margin: 30px;
padding: 30px 20px;
align-items: center;
flex-direction: column;`

const Input= styled.input`
flex:1;
min-width:30%;
margin:10px  0px ;
padding: 10px;`



const Button= styled.button`
width: 32%;
padding: 18px 20px;
font-size: 15px;
background-color: #f9d7b9;
border: 1px;
font-weight: bolder;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover{
  opacity: 0.7;

}`
const Lnk = styled.a`
padding:15px;
display: flex;
text-decoration: underline;
cursor:pointer;
`

function Login() {
  return (
    <Container>
        <Navbar />
    
        <Wrapper>
            <Title>Sign In</Title>
            <Form>

                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Button>Login</Button>
                <Lnk><Link href="#" underline="hover" color="black">
  Forgot password
</Link></Lnk>
                <Lnk ><Link href="/register" underline="hover" color="black">
                Not have an account yet?
</Link></Lnk>
            </Form>
           
        </Wrapper>
        <Footer />
        
       
    </Container>
      
   
  )
}

export default Login
