import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { validateEmail } from '../utils/helper.js';
import '../styles/ContactMe.css';

function ContactMe() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleChange =(e) => {
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value;
        if (inputName === 'email') {
                setEmail(inputValue);
            } else if (inputName === 'name') {
                setName(inputValue);
            } else {
                setMessage(inputValue);
            }
    }

    const handleFormSubmit = (e) => {
      e.preventDefault();
      
        if (!validateEmail(email) ) {
            setErrorMessage('Please enter a valid E-mail');
            return;
        }
     
        if (message.trim().length === 0 || name.trim().length === 0){
            setErrorMessage('Please fill out all fields');
            return;
        }  

        if (validateEmail(email) && message.trim().length !== 0 && name.trim().length !== 0){
            console.log("success");
            alert('Your message has been sent!')
        }
        
      setName('');
      setEmail('');
      setMessage('');
    };
    
  return (
    <div className="contactMe text-center">
      <div className="contactMe-header">
        <h1 id='contact-me-title'>Contact Me</h1>
      </div>
      <hr id='title-line'></hr>
      <Form>
      <Form.Group className="mb-3" >
            <Form.Label className='contact-me-text'>Name</Form.Label>
            <Form.Control id='form-name' value={name} name="name" onChange={handleChange} type="text" placeholder="Enter your full name" /> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='contact-me-text'>Email address</Form.Label>
            <Form.Control id='form-email' value={email} name="email" onChange={handleChange} type="email" placeholder="Enter E-mail" />
            
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label className='contact-me-text'>Message</Form.Label>
            <Form.Control id='form-message' className='text-start' value={message}type="text" onChange={handleChange}  />
        </Form.Group>
       
        <Button variant="light"  onClick={handleFormSubmit} type="submit">
            Submit
        </Button>

        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
         )}
    </Form>
    </div>
  );
}

export default ContactMe;