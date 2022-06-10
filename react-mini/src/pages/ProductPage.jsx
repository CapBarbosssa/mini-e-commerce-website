import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Subscribe from'../components/Subscribe'
import Footer from'../components/Footer'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { Link } from '@mui/material'

const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;`

const ImgContainer = styled.div`
flex: 1;`

const Image = styled.img`
width: 600px;
height: 800px;
object-fit:cover;
padding: 30px 50px;`

const InfoContainer = styled.div`
padding:200px 50px;`

const Title = styled.h1`
font-weight: 300;
`

const Desc = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
font-size: 20px;
`
const FilterContainer = styled.div`
display: flex;
padding: 20px;

`
const Select = styled.select`
width: 140px;
height: 30px;
font-size: 15px;
margin: 10px;

`
const Option = styled.option`
`
const AddContainer = styled.div`
/* display: flex; */
width: 50%;
align-items:center;
justify-content:space-between;`

const AmountContainer =styled.div`
display: flex;
align-items: center;
font-weight:700;
`
const Amount =styled.span`
width: 30px;
height: 30px;
border-radius:10px;
border: 1px ;
display: flex;
align-items: center;
justify-content: center;
margin: 35px 4px;
`
const Button =styled.button`
padding: 15px;
font-size: 15px;
background-color: #f9d7b9;
border: 1px;
font-weight: bolder;
cursor: pointer;
&:hover{
  opacity: 0.7;

}`
const ProductContainer = styled.div`
margin:50px;
display: flex;`
const DetailTitle= styled.h1`
margin:20px 50px;
width: 80%;
`
const DetailDesc = styled.span`
margin: 40px 10px;



`

const Hr = styled.hr`
background-color: #ddd8d8;
margin: 10px 10px;
border: none;
height: 1px;
`
const Img = styled.img`
width: 300px;
height: 300px;
border-radius: 50%;
color: white;
opacity:0.8;`

function ProductPage() {


  return (
    <Container>
         <Announcement />
         <Navbar />
         <Wrapper>
           <ImgContainer>
           <Image src="https://images.unsplash.com/photo-1622976367831-cc206831cea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"/>
           </ImgContainer>

           <InfoContainer>
             <Title>Peppermint Oil</Title>
             <Desc> Designed to be your go-to for a true inside-out approach to overall wellness.<br></br>Essential Oils are definitely a YES, but knowing where to start can be an issue. It can, at times, be overwhelming to determine the correct mixtures and whether to ingest, use topically or aromatically. Luckily, we’ve got you covered with the 10 best Essential Oils and their health benefits.</Desc>
             <StarOutlinedIcon/>
             <StarOutlinedIcon/>
             <StarOutlinedIcon/>
             <StarOutlinedIcon/>
             <StarOutlineOutlinedIcon/>

             <br></br>
             <br></br>
             <Price>$20.99</Price>
             <AddContainer>
               <AmountContainer>
                 <RemoveCircleIcon />
                 <Amount>1</Amount>
                 <AddCircleIcon />
               </AmountContainer>
               <Button> <Link  href={"/cart"} underline="none"color={"black"}>Add to Basket</Link> 
               </Button>
             </AddContainer>
           </InfoContainer>

         </Wrapper>
         <Hr />
         <ProductContainer>
           <Img src="https://images.unsplash.com/photo-1477511801984-4ad318ed9846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
             <DetailTitle>HOW TO USE</DetailTitle>

             <DetailDesc><DetailTitle>Topically</DetailTitle><p>Applying oils directly to the body. It’s recommended that you dilute your essential oils with a “carrier oil” (e.g. coconut oil) to do this. A common method of topical application is making a roller bottle with a few drops of oil topped up with the carrier oil to roll-on to your skin. </p>
             <br></br>
             <br></br>
             <p>Taking your oils internally, by adding them into food or drink or by filling a vegetable capsule and swallowing them. I love adding a drop of Lemon Vitality Essential Oil to my water glass in the mornings! You could also add Peppermint Vitality Oil to brownies, or a drop of Cilantro to your summer salsa recipe! The options are endless!</p>

             </DetailDesc>
 
           </ProductContainer>
           <Hr />
           <ProductContainer>
     
             <DetailDesc><DetailTitle>Pure Organic</DetailTitle>Our product is produced without using most conventional pesticides; fertilizers made with synthetic ingredients or sewage sludge; bioengineering; or ionizing radiation. 
             </DetailDesc>
              <DetailTitle>OUR PRODUCTS</DetailTitle>
             <Img src="https://images.unsplash.com/photo-1565004358648-09aac78349a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"/>
 
           </ProductContainer>
           <Hr />
           <ProductContainer>
           <Img src="https://images.unsplash.com/photo-1566813892186-684105970991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>

             <DetailTitle>WHY US?</DetailTitle>

             <DetailDesc><DetailTitle> Certified Organic farm</DetailTitle><p>Applying oils directly to the body. It’s recommended that you dilute your essential oils with a “carrier oil” (e.g. coconut oil) to do this. A common method of topical application is making a roller bottle with a few drops of oil topped up with the carrier oil to roll-on to your skin. </p>
             <br></br>
             <br></br>
             <p>Taking your oils internally, by adding them into food or drink or by filling a vegetable capsule and swallowing them. I love adding a drop of Lemon Vitality Essential Oil to my water glass in the mornings! You could also add Peppermint Vitality Oil to brownies, or a drop of Cilantro to your summer salsa recipe! The options are endless!</p>

             </DetailDesc>
 
           </ProductContainer>

        
         <Subscribe />
        <Footer />
    </Container>
  )
}

export default ProductPage