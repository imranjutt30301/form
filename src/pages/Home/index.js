import React from 'react'
import Hero from './Hero'
import Games from './Games'
import Services from './Services'


export default function index() {
  return (
    <div id='home'>
    <Hero/>
    <Games/>
    <Services/>
    </div>
  )
}
