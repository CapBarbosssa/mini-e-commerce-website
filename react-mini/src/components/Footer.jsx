import React from 'react'
import styled from 'styled-components'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkunreadIcon from '@mui/icons-material/Markunread';
const Container =styled.div`
display: flex;
`
const Left =styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
text-align: left;
`
const Center=styled.div`
flex:1;
padding: 20px;
`
const Right=styled.div`
flex:1;
padding: 20px;
flex-direction: column;
text-align: right;
`
const Logo =styled.h1`
font-size: 20px;

`
const SocialMedias =styled.div`
display: flex;
`
const SocialIconIns =styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;

  background: -webkit-radial-gradient(30% 107%, circle, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background: -o-radial-gradient(30% 107%, circle, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);

`
const SocialIcon =styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;

`
const Payment = styled.img`
    
`

const Desc =styled.p`
margin: 20px 0px;
font-size: 15px;
`

function Footer() {
  return (
    <Container>
        <Left><Logo >Organic Harmony</Logo>
        <br></br>
        <Desc> Intro, I’m a great place for you to tell a story and let your users know a little more about you.</Desc>
        <br></br>
        <SocialMedias>
            <SocialIcon color='3b5998'>
            <FacebookOutlinedIcon/>
            </SocialIcon>

            <SocialIconIns color='8a3ab9'>
            <InstagramIcon/>
            </SocialIconIns>

            <SocialIcon color='bd081c'>
            <PinterestIcon />
            </SocialIcon>

            <SocialIcon color='55acee'>
            <TwitterIcon/>
            </SocialIcon>

        </SocialMedias>
        </Left>
      
        <Right>
            <Logo >Contact</Logo>
            <Desc><LocalPhoneIcon/>123-456-7890 / info@myshop.ca</Desc>
            <Desc> 123 Myshop Street San Francisco, CA 012345</Desc>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
 
        </Right>
    </Container>
  )
}

export default Footer