import styled from 'styled-components'
import React from 'react'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Badge, Link } from "@mui/material";

const Info =styled.div`
    opacity:0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* background-color: rgba(0,0,0,0.2); */
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 500px;
    height:600px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
    
    &:hover ${Info}{
        opacity: 4;
    

    }

`
const Circle =styled.div`
width: 200px;
height: 200px;
border-radius: 50%;

position: absolute;
   
`
const Desc = styled.p`
    font-size:17px;
  text-align: center;
  
    text-align: justify;
  text-justify: inter-word;
  
`
const Img =styled.img`
height: 85%;
width: 400px;
z-index: 2;
 
`

const Icon =styled.div`
    width: 350px;
    height: 40px;
    align-items: baseline;
    background-color: white;
    display: block;
    align-items: center;
    justify-content: center;
    margin: 20px;
    transition: all 0.3s ease;
    cursor:pointer;
    opacity: 0.9;

    &:hover{ 
        transform: scale(1.1);
        opacity: 0.9;
    }
    
`

function Product({item}) {
  return (
    <Container>
        <Img src={item.img}/>
        
        
        <Info>

            {/* <Icon>
                <AddShoppingCartOutlinedIcon/>
            </Icon> */}
            

            <Icon><Link href={"/detail"} underline="none"color={"black"}>
            <Desc>
            {item.title}
              </Desc>
            <Desc>{item.price}</Desc>
              </Link>
            </Icon>

        </Info>
        </Container>
  )
}

export default Product
