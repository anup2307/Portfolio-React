import {validateEmail} from '../../utils/helpers'
import { useState } from 'react';


 export default function Contact(){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        if (inputType === 'email'){
            const inputValue = target.value;
            if (!validateEmail(inputValue)) {
                setErrorMessage('Email is invalid, Please enter a valid Email-id');
                return;
            }           
        }else if ((target.name==='message')){
            if(target.value.length===0){
            setErrorMessage('Message is required');
            return;
            }
        }
        setErrorMessage ('')
      };

      const handleFormSubmit = (e) => {   
        e.preventDefault();
        const { target } = e;

        if (target.name === 'email') {
            setEmail(target.value);
          } else if (target.name === 'name') {
            setName(target.value);
          } else {
            setMessage(target.value);
        }

        if (name==='' || email==='' || message===''){
            setErrorMessage('All the fields are Required')
            return;
        }
        setErrorMessage ('')      
      };

    return  (
      <div className='w-full h-screen bg-[#21325e] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/41d50945-9729-49af-bb28-20949af851d6" className='flex flex-col max-w-[600px] w-full' onSubmit={handleFormSubmit}>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
              <p className='text-gray-300 py-4'>Please submit the form below or shoot me an email - sahapri@gmail.com</p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' onChange={handleInputChange} />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' onChange={handleInputChange}></textarea>

          {errorMessage && (
        <div>
          <p className="error-text text-1xl text-white p-3">{errorMessage}</p>
        </div>
      )}
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>

  </div>
      )
}

