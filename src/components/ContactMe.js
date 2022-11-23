import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { validateEmail } from '../utils/helper.js';

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
        <h2>Contact Me</h2>
      </div>
      
      <Form>
      <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} name="name" onChange={handleChange} type="text" placeholder="Full Name" /> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} name="email" onChange={handleChange} type="email" placeholder="Enter E-mail" />
            
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Message</Form.Label>
            <Form.Control value={message}type="text" onChange={handleChange} placeholder="Message" />
        </Form.Group>
       
        <Button variant="dark"  onClick={handleFormSubmit} type="submit">
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