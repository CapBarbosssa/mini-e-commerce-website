import styled from 'styled-components'


const Container =styled.div`    
flex:1;
margin: 20px;
height: 45vh;
position: relative;
line-height: 1.8;

`

const Image = styled.img`
width:100%;
height: 50%;
object-fit: cover;
cursor: pointer;
`
const Info = styled.div`
position:absolute; 
width: 100%;
height: 400px;`

/* top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center; */



const Title = styled.h1`
/* color: white;
text-shadow: 1px 1px 5px black; */
font-size:18px;`

const Desc = styled.p`

font-size:13px;
`

// const Button = styled.button`
// border:0;
// padding: 7px;
// font-size: 13px;
// background-color: #fceee2;
// `

function CategoryItem({item}){
  return (
    <Container>
    
       <Image src={item.img}/>
       <Info>
           <Title>{item.title}</Title>
           <Desc>{item.desc}</Desc>
          
       </Info>
        </Container>
  )
}

export default CategoryItem
