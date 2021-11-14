import React from 'react'
import { Carousel, Container,Row,Col } from 'react-bootstrap'
import NavigationBar from './NavigationBar'


function Home() {
    return (
        <>
            <NavigationBar/>
       
            <Carousel fade style={{marginLeft:'10px',marginRight:'10px'}} >
  <Carousel.Item   >
    <img
      className="d-block w-100"
      src="./Images/bg1.jpg"
      alt="First slide"
     height='600px'
    />
    <Carousel.Caption>
      <h3  style={{   fontSize: '100px',fontFamily:'italic',marginBottom:'150px'}}>Welcome</h3>
      <p style={{fontsize:'50px'}}>A well-being hub that connects you to our campus and online resources.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Images/bg.jpg"
      alt="Second slide"
      height='600px'
    />

    <Carousel.Caption>
    <h3  style={{   fontSize: '100px',fontFamily:'italic',marginBottom:'150px'}}>Welcome</h3>
      <p>A well-being hub that connects you to our campus and online resources.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Images/bg2.jpg"
      alt="Third slide"
      height='600px'
    />

    <Carousel.Caption>
    <h3  style={{   fontSize: '100px',fontFamily:'italic',marginBottom:'150px'}}>Welcome</h3>
      <p>A well-being hub that connects you to our campus and online resources.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            <Row>
                <Col>
                <div class="text-center p-4"style={{background:'rgba(0, 0, 0, 0.05)',marginLeft:'10px',marginRight:'10px'}}>
        Copyright &copy; 2021 Designed by: Samiksha Gurav  |
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/" >   All Rights Reserved.</a>
      </div>
                </Col>
            </Row>
         

            
            
        </>
    )
}

export default Home
