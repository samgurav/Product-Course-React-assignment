import React, { useState } from 'react'
import { Card,Form,Row ,TabContainer,Button,Col, Container} from 'react-bootstrap'
import { useEffect } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

import EnquiryForm from './EnquiryForm'
import { useNavigate } from 'react-router'

function Course() {
    const [Course,setCourse]=useState([])
    const [flag,setFlag]=useState(false)
    const navigate = useNavigate()
  
    const url='http://localhost:3002/courses'
    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            console.log(response.data)
            setCourse(response.data)
        })
    },[])
     const EnquirySubmit=((e)=>{
       
         e.preventDefault()
         console.log("Event Is done")
         setFlag(true)
     

    })
    return (
       <>
        <NavigationBar/>
        <TabContainer>
            <Container>
                    <h1 style={{fontFamily:'italic'}}>Explore Our Programs</h1>
        

        <Row xs={1} md={1} className="g-2">
   
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      {Course.map(( course)=>
      <Card  key={course.id} style={{padding:'25px'}}>
        <Card.Img variant="top" src={`${course.img}`}  width="300px" height="300px"/>
        <Card.Body>
        <Card.Title style={{fontSize:'40px'}}>{course.course}</Card.Title>
        <p style={{color:'grey',fontFamily:'italic',fontSize:'20px'}}> A well-being hub that connects you to our campus and online resources.</p>
          <Card.Text>
          {course.campus}<br/>
        {course.type}<br/>
      
          </Card.Text>
          <div className="d-grid gap-2">
              <p> For any Query please feel free to Contact us using below link.</p>
            <Button variant="secondary" size="lg" onClick={EnquirySubmit}>
               Contact Us
            </Button>
            {flag? navigate('/form'):null}
            </div>
          {/* <Button variant="danger"  onClick={EnquirySubmit}>Add To Cart</Button> */}
         
        </Card.Body>
      </Card>
      )}
    </Col>

  ))}

</Row>
</Container>

        </TabContainer>
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

export default Course