import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../../organisms/NavBar'
import Footer from '../../organisms/Footer'
import BlogBody from '../../organisms/BlogBody'

const BlogTemplate = () => {
  return (
      <div className="mt-5 pt-5">
          <Container fluid className="fluid-bg">
              <NavBar />
          </Container>
          <Container fluid className="fluid-bg">
              <BlogBody />
          </Container>
          <Footer />
      </div>
  )
}

export default BlogTemplate