import React from 'react'
import axios from 'axios';
import { useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import { Form ,Row,Col,Button,Container} from 'react-bootstrap'
import Course from './Course';
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2';
const regForName = RegExp(/^[A-Za-z]{3,10}$/);
const reForEnquiry = RegExp(/^[A-Za-z]{2,50}$/);
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);


function EnquiryForm() {
    const navigate=useNavigate()
    const nameInput=useRef(null);
    const emailInput=useRef(null);
    const EnquiryInput=useRef(null);
    const[data,setData]=useState();
    const[flag,setFlag]=useState(false)
    const [select,setSelect]=useState()
    const [Errors,SetError]=useState({
        name:'',
        email:'',
        enquiry:'',
      
      })

      const handler=(e)=>{
        const {name,value}= e.target;
        switch(name){
          case 'name':
            Errors.name= regForName.test(value)?'':'first name should be between 2 to 10 letters';
            break;

                 case 'email':
                  Errors.email= regForEmail.test(value)?'':'invalid email';
             break;
           case 'enquiry':
               Errors.enquiry=reForEnquiry.test(value)?'':'data should be up to 100 letters'
          
        }
        setSelect({Errors,[name]:value},()=>{
          console.log(Errors)
        })
        
      }


      const submit = (event)=>{
        event.preventDefault();
      setFlag(true)
        if(validate(Errors))
        {
          const URL="http://localhost:3003/form"
          let formData={
            name:nameInput.current.value,
            email:emailInput.current.value,
            enquiry:EnquiryInput.current.value,
         
    
          }
      
          axios.post(URL,formData)
          axios.get(URL)
          .then(res=>{
            console.log(res.data)
            setData(res.data)
          })

          Swal.fire(
            'Good job!',
            'Your Data has been saved',
            'success'
          )

           
        }
        else{
            alert("Invalid Form");
        }

    } 

      const validate=(errors)=>{
        let valid = true;
        Object.values(errors).forEach((val)=> 
            val.length>0 && (valid = false));
            return valid;
            }


    return (
        <div>
           <>
           
      

                <Container  style={{width:'900px',height:'600px',border:'2px solid black'}}>
                    <Row className="row no-gutters">
                        <Col className="col-lg-5">
                        <img src="../Images/enquiry.jpg"  height="550px" width="450px"/>
                        </Col>
                        <Col className="col-lg-7 px-5 pt-5">
                        {/* <img src="../Images/contact.png" class="img-fluid rounded-circle " width="130px" height="130px"/> */}
                    <h1 style={{fontFamily:'italic'}}>Explore Degrees & Programs</h1>
                        <h4 style={{fontFamily:'italic',color:'grey'}}>Contact Us</h4>
              
                      
<Form  className="Form my-3 mx-4" onSubmit={submit} style={{padding:'20px',background:' #e1eaea',borderRadius:'20px'}}> 
        <Form.Group as={Row} className="mb-3" controlId="formPlainTextName">
            <Form.Label column sm="2">
            Full Name
            </Form.Label>
            <Col sm="10">
            <Form.Control autoFocus name="name"   placeholder="Enter Name" ref={nameInput} onChange={handler} required />
            </Col>
        </Form.Group>
        {Errors.name.length>0 &&
                  <span style={{color:"red"}}>{Errors.name}</span>}   
           
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
            <Form.Label column sm="2">
            Email
            </Form.Label>
            <Col sm="10">
            <Form.Control autoFocus  name="email"  placeholder="Enter Email" ref={emailInput} onChange={handler} required/>
            </Col>
        </Form.Group>
        {Errors.email.length>0 &&
                  <span style={{color:"red"}}>{Errors.email}</span>}   
        <Form.Group as={Row} className="mb-3" controlId="formPlainTextEnquiry">
            <Form.Label column sm="2">
            Enquiry
            </Form.Label>
            <Col sm="10">
            <Form.Control as="textarea"  name="enquiry"  autoFocus placeholder="Enter Details" rows={3} onChange={handler} ref={EnquiryInput} required />
            </Col>
        </Form.Group>
        {Errors.enquiry.length>0 &&
                  <span style={{color:"red"}}>{Errors.enquiry}</span>}   
       <Button variant="primary" size="lg" type="submit">
          Submit
        </Button>
        {flag? navigate('/course'):null}
        <Button variant="light"  as={Link} to="/" size="lg" type="submit" style={{margin:'5px'}}>
          Cancel
        </Button>
        </Form>
                        </Col>

                    </Row>
                </Container>
          
     
           </>
            
        </div>
    )
}

export default EnquiryForm
