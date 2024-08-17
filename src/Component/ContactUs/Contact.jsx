import React from 'react'
import './ContactUs.css'
import ContactImg from './../../assets/images/contact-bg.jpg'
import PhoneIcone from './../../assets/images/phone-icon.png'
import EmailIcone from './../../assets/images/email-icon.png'

const Contact = () => {
  return (
    <div  className='allContact' id='Contact'>
        <div className='imgProDetials ContactImg'>
            <img src={ContactImg} alt="ContactImg" className='imgPropereties ContactImg1' />
            <div className='proDetailsTitle'>
            <p className='proDetailsPar'>contactUs</p>
            <h1 className='proDetailsH1'> Get In Touch With Our Agents</h1>
            </div>
            <div>     
               <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28702.997109514476!2d-80.12518881137693!3d25.93934070193674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2s!4v1723910395380!5m2!1sar!2s" frameborder="0"  ></iframe>
              
            </div>
            <form  className='ContactTow'>
                <div className='input'>
                <label htmlFor="name">Full Name</label>
                <input className='name input1' id='name' type="text"  placeholder='Your Name...' />
                </div>
                <div  className='input'>
                <label htmlFor="email"> Email Address</label>
                <input className='email input1'id='email' type="text"  placeholder='Your E-mail...' />
                </div>
                <div  className='input'>
                <label htmlFor="subject"> Subject</label>
                <input className='subject input1' id='subject' type="text" placeholder='Subject...' />
                </div>
                <div  className='input'>
                <label htmlFor="message">Message</label>
                <textarea className='message input1' id='message'   placeholder='Your Message' />
                </div>
                <button className='Schedual MessageBtn'>Send Message</button>
             </form>
         
        </div>
            <div className='ContactMe'>
                  <div className='ContactMeOne'> 
                    <img src={PhoneIcone} alt="PhoneIcone" />
                      <div className='ContactMeTwo'> 
                      <p className='ConNumber'>010-020-0340</p>
                      <p className='ConPar'>Phone Number</p>
                      </div>
                </div>
                <div className='ContactMeOne ContactMeOne1'> 
                    <img src={EmailIcone} alt="EmailIcone" />
                      <div className='ContactMeTwo'> 
                      <p className='ConNumber'>info@villa.co</p>
                      <p className='ConPar'> Business Email</p>
                      </div>
                </div>
             </div>
        </div>
      
   
  )
}

export default Contact
