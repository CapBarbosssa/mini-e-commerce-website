import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slideshow from '../components/Slideshow'
import Subscribe from '../components/Subscribe'


const Container = styled.div`
    /* background-color: #f8f8f8; */
`

function Homepage() {
  return (
    <div><Container>
              <Announcement />
              <Navbar />
              <Slideshow />
              <Categories />
              <Products/>
              <Subscribe/>
              <Footer/>
              
        </Container>
      
    </div>
  )
}

export default Homepage
