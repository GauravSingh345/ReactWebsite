import { hasFormSubmit } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [data,setData]= useState({
    fullname:'',
    phone:'',
    email:'',
    message:''
  });
  const InputEvent =(event)=>{
    const {name,value} = event.target;
    setData((preVal)=>{
      return{
         ...preVal,
         [name]:value,
      }
    })
  }
  const FormSubmit = (e)=>{
e.preventDefault();
    alert(`Hello, ${data.fullname} , This is your Phone Number ${data.phone} 
    Please Email Us On This ${data.email} . For This ${data.message}` );
  }
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
        <form onSubmit={FormSubmit}>
         <div className="col-md-6 col-10 mx-auto">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" name="fullname" value={data.fullname} onChange={InputEvent} />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" name="phone" value={data.phone} onChange={InputEvent} />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email} onChange={InputEvent} />
            </div> 
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
            </div>
             <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
         </div>
         </form>
        </div>
      </div>
    </>
  )
}

export default Contact
