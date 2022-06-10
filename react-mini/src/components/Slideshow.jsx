import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { SlideshowItems } from '../data';
import { Link } from '@mui/material';
const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin: 10px 0px;
  
`
const Arrow = styled.div`
   width: 50px;
   height: 50px;
   border-color : white ;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${props=>props.direction === "left" &&"10px"};
   right: ${props=>props.direction === "right" &&"10px"};
   cursor: pointer;
   margin: auto;
   z-index: 2;
`
const Wrapper = styled.div`
height: 100%; 
display: flex;
transform: translateX(${props =>props.slideIndex *-100}vw);
transition: all 1.5s ease;
`
const Slide=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
  
   
`
const Slideimg=styled.div`
flex: 1;   
height: 80%;
`

const Img = styled.img`
height: 70%;
    
`
const Slideinfo=styled.div`
 flex: 1;  
 padding: 10px;
`
const Title = styled.h1` 
font-size:  45px;
font-weight:lighter;
`
const Desc = styled.p` 
margin: 20px 0px;
font-size: 20px;
align-items:center;
`
const Button = styled.button` 
padding: 14px;
font-size: 15px;
background-color: #f9d7b9;
border: 1px;
cursor: pointer;
`

function Slideshow() {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1:2)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1:0)
        }

    }
  return (
    <div>
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowBackIosNewOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {SlideshowItems.map((item)=>(
                <Slide key={item.id}>
                    <Slideimg>
                        <Img src={item.img} />
                    </Slideimg>
                    <Slideinfo>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc} </Desc>
                        <Button><Link href="/products" underline="none" color="black">
  Shop Now</Link></Button>
                    </Slideinfo>
                </Slide>
                ))}
               

            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowForwardIosOutlinedIcon />

            </Arrow>
        </Container>
    </div>
  )
}

export default Slideshow