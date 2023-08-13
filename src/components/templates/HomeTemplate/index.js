import React from 'react'
import NavBar from '../../organisms/NavBar'
import { Container } from 'react-bootstrap'
import CarouselPage from '../../organisms/CarouselPage'

const HomeTemplate = () => {
  return (
    <div className="mt-5 pt-5" >
    <Container fluid className='fluid-bg' >
        <NavBar />
    </Container >
      <Container fluid className='fluid-bg' >
        <CarouselPage />
      </Container>
    </div>
  )
}

export default HomeTemplate