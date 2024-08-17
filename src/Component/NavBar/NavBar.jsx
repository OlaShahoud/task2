import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope,faMap,faCalendar, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'
import './NavBar.css'

const NavBar = () => {
    const[responsevNav,setResponsevnav]=useState('false')
    function handleNav(){
        setResponsevnav(responsevNav=='true')
    }
    function handleCancelNav(){
        setResponsevnav(!responsevNav)
    }
  return (
    <>
    <div className='nav1 Flex Container-Top'>
  <div className='nav1-item'>
   <FontAwesomeIcon className='faEnvelope' icon={faEnvelope} />
    <p>info @company.com</p>
    <div className='line'></div>
    <FontAwesomeIcon className='faMap' icon={faMap} />
    <p>Sunny isles Beach,FL 33160</p>
  </div>
   <ul className='icon-list'> 
  <li className='iconItem  center'><FontAwesomeIcon    icon= {faFacebook} /></li>
  <li  className='iconItem center'> <FontAwesomeIcon  icon={faTwitter} /></li>
  <li  className='iconItem  center'><FontAwesomeIcon   icon={faLinkedin} /></li>
  <li  className='iconItem  center'> <FontAwesomeIcon  icon={faInstagram} /></li>
   </ul>
    </div>
    <nav className='Nav  Container'>
        <h1 className='Logo'>Villa</h1>
        <div className=' divIcon'>
          <FontAwesomeIcon className='bars-icon' icon={faBars} onClick={handleNav}  />
          <FontAwesomeIcon  className= {responsevNav?'listNav':'cancel-icon'} icon={faCircleXmark} onClick={handleCancelNav}  /></div>
    <ul className= {responsevNav?'listNav':' list-nav'}>
        <li className= 'list-item'> <a href="#Home">Home </a></li>
        <li className='list-item'> <a href="#Properites">Properites </a></li>
        <li className='list-item'> <a href="#PropertyDetails">Property Details</a></li>
        <li className='list-item'> <a href="#Contact">Contact Us </a></li>
        <li className='list-item icon'>
        <button className='Schedual'>Scheduale a visit 
        <div className='FaCalendar center'><FontAwesomeIcon icon={faCalendar} /></div>
        </button>
    </li>
   </ul>
   </nav>
   </>
  )
}

export default NavBar
