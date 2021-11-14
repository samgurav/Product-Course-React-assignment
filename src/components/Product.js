import React, { useState } from 'react'
import axios from 'axios';
import { TabContainer,Card,Row,Button, Container ,Col} from 'react-bootstrap';
import { useEffect } from 'react';
import NavigationBar from './NavigationBar';
function Product() {
    const[data,setData]=useState([]);
    const url=' http://localhost:3001/products'
    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            console.log(response.data)
            setData(response.data)
        })
    },[])
    return (
       <>
       <NavigationBar/>
            <TabContainer>
            <Container>
                    <h1 style={{fontFamily:'italic'}}>Amazon Products </h1>
                <Row>
                {data.map(( pro)=>
               
                <Card className="col-sm-3" key={pro.id} style={{marginTop:'20px',padding:'10px'}}>
            <Card.Img variant="top" src={`${pro.images}`}  width="200px" height="200px"/>
            <Card.Body>
            <Card.Title> {pro.pname}</Card.Title>
            <Card.Text>
            ID: {pro.id}<br/>
            Price: <span style={{color:"red",fontSize:'25px', fontFamily:'italic'}}>Rs.{pro.price} </span>
                    
            </Card.Text>
            <Button variant="danger">Add To Cart</Button>
            </Card.Body>
            </Card>
    
            
         
            
            )}
           
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

export default Product
