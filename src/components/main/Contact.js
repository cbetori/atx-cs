import React from 'react';
import emailjs from 'emailjs-com'
import '../../styles/contact.css'
import { Form, Input} from 'antd'
const { TextArea } = Input;

function Contact(props) {

  const formValues ={
    firstName : '',
    lastName : '',
    email : '',
    phone : '',
    description : '',
  }
  function handleForm(obj, e){
    formValues[obj] = ''
    formValues[obj] = e
  }

  function sendEmail(){
    emailjs.send('gmail','atx_cs_contact', formValues, 'user_xsJ3uh5nIwcesbrrfQAS5')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
  }

  return (
    <div  id={props.content}>
      <div id="contact-page">
      <Form>
      <div className='container'>
        <div className='details-container'>
          <div>First Name</div>
          <Input className='detail-input' onInput={e=>handleForm('firstName', e.target.value)} />
        </div>
        <div className='details-container'>
          <div>Last Name</div>
            <Input className='detail-input' onInput={e=>handleForm('lastName', e.target.value)} />
          </div>
      </div>

      <div className='container'>
        <div className='details-container'>
          <div>Email</div>
            <Input className='detail-input' onInput={e=>handleForm('email', e.target.value)} />
        </div>
        <div className='details-container'>
          <div>Phone</div>
            <Input className='detail-input' onInput={e=>handleForm('phone', e.target.value)}/>
          </div>
        </div>

        <div className='container'>
      <div className='description-container'>
        <div>Description</div>
          <TextArea className='description-area' onInput={e=>handleForm('description', e.target.value)} />
       </div>
      </div>
      <div className='requestBtn' onClick={e=>sendEmail()}>Request Consulation</div>
      </Form>
      </div>
    </div>
  );
}

export default Contact;