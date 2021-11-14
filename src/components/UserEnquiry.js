import React from 'react'
import NavigationBar from './NavigationBar'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Accordion, Container } from 'react-bootstrap'
function UserEnquiry() {
  const[user,setData]=useState([]);
  const url=' http://localhost:3003/form'
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
          <h1  style={{maringTop:'5000px'}} ></h1>
            <Container >
            {
            user.map(( user)=>
               
            <Accordion defaultActiveKey="0" >
  <Accordion.Item eventKey="0" key={user.id} >
    <Accordion.Header>Query {user.id}</Accordion.Header>
    <Accordion.Body >
           <div style={{border:'2px solid black',background:'	 #f0f5f5'}}>
               User Name: <h1>{user.name}</h1>
                Email ID: <h5>{user.email}</h5>
               Enquiry message: <p>{user.enquiry}</p>
               </div>
    </Accordion.Body>
  </Accordion.Item>
 
</Accordion>
            )}
</Container>
            
        </>
    )
}

export default UserEnquiry
