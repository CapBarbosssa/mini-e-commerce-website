import { Link } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 40px;
    background-color: #f9d7b9;
    color: #0c0c0c;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
    

`

function Announcement() {
  return (
    <div>
        <Container><Link href={"/products"} underline="hover"color={"black"}>up to 50% OFF of all products - Just for you!</Link></Container>
      
    </div>
  )
}

export default Announcement
