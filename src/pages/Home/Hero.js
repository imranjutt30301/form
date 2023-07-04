import React from 'react'

export default function Hero() {
  const myName= param => "My Name Is " + param

  return (
    <div className="text-center py-5 bg-dark mb-5 mt-2">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="text-white"><h1>Hero section</h1>
          <p className='fw-bold'>{myName("Imran")}</p></div>
        </div>
      </div>
    </div>
    </div>
    
  )
}
