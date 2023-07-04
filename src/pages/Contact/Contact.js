import React from 'react'

import { useState } from 'react';

   

export default function Contactform() {
  const [fullName , setStateFullName]=useState("");
  const [email , setStateEmail]=useState("");
  const [phone , setStatePhone]=useState("");
  const [city , setStateCity]=useState("");
  const [message , setStateMessage]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    console.log("FullName : " +fullName);
    console.log("Email  : " +email);
    console.log("Phone : " +phone);
    console.log("City : " +city);
    console.log("Massage : " +message);

  }

  return (
    <>
    <form onSubmit={handleSubmit}>
            <div className="card p-2 p-md-3 p-lg-4 mt-5">
              <h3 className='text-center'>Contact Us</h3>
              <div className="row justify-content-center">
                <div className="col-sm-6 mb-2">
                  <input type="text" className="form-control" placeholder='FullName' onChange={e=>{setStateFullName(e.target.value)}} />
                </div>
                <div className="col-sm-6 mb-2">
                  <input type="email" className="form-control" placeholder='Email' onChange={e=>{setStateEmail(e.target.value)}} />
                </div>
                <div className="col-sm-6">
                  <input type="text" className="form-control" placeholder='Phone' onChange={e=>{setStatePhone(e.target.value)}} />
                </div>
                <div className="col-sm-6">
                  <input type="text" className="form-control" placeholder='City' onChange={e=>{setStateCity(e.target.value)}} />
                </div>
                <div className="form-floating m-4">
                  <textarea className="form-control" placeholder="Leave a comment here" style={{ height: " 100px" }} onChange={e=>{setStateMessage(e.target.value)}}></textarea>
                  <label htmlFor="floatingTextarea2" className='ms-2'>Comments</label>
                </div>
                <button className='btn btn-secondary w-25'>Send Message</button>
              </div>
            </div>
          </form>
    </>
  )
}
  

