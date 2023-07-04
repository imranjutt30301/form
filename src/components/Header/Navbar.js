import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/About' className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to='/Contact' className="nav-link" >Contact</Link>
        </li>
        <li className="nav-item">
          <Link to='/Form' className="nav-link" >Form</Link>
        </li>
        <li className="nav-item">
          <Link to='/Login' className="nav-link" >Login</Link>
        </li>
       </ul>
      <button className='btn btn-primary bg-danger' type='submit'>dashbord</button>
        <button className="btn btn-primary bg success" type="submit">login</button>
      
    </div>
  </div>
</nav>
</header>
  )
}
