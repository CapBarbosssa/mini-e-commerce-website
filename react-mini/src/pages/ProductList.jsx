import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Subscribe from '../components/Subscribe'
const Container = styled.div``
const Title = styled.h1`
margin: 0px 60px;
margin-top:70px;`
const FilterContainer = styled.div`
display: flex;
padding: 20px;

`
const Filter = styled.div`
margin: 20px;`

const FilterText = styled.span`
font-size:20px;
font-weight:bold;`
    
const Select = styled.select`
width: 140px;
height: 30px;
font-size: 15px;
margin: 0px 40px;

`
const Option = styled.option`
`
function ProductList() {
  return (
    <Container>
       
        <Announcement/>
        <Navbar/>
        <Title>Essential Oils</Title>
        <FilterContainer>
            {/* <Filter> Filter</Filter> */}
            <Select>
              <Option>Filter:</Option>
              <Option>Diffuser Blends</Option>
              <Option>Home Blends</Option>
              <Option>Clean Blends</Option>
            </Select>
            {/* <Filter>Sort </Filter> */}
            <Select>
              <Option>Sort:</Option>
              <Option>A-Z</Option>
              <Option>Z-A</Option>
              <Option>Price Low-High</Option>
              <Option>Price High-Low</Option>
            </Select>

        </FilterContainer>
        <Products/>
        <Subscribe />
        <Footer/>

    </Container>
  )
}

export default ProductList