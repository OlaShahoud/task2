import React from 'react'
import Room from './../../assets/images/featured.jpg'
import RoomIcon from './../../assets/images/featured-icon.png'
import IconeOne from './../../assets/images/info-icon-01.png'
import IconeTwo from './../../assets/images/info-icon-02.png'
import IconeThree from './../../assets/images/info-icon-03.png'
import IconeFour from './../../assets/images/info-icon-04.png'

import './Properites.css'
import CardProperites from '../CardProperites/CardProperites'
const Properites = () => {
  return (
    <>
      <div className='Properites ' id='Properites'>
        <div className='Room'>
          <img src={Room} alt="Room" className='RoomImg' />
           <div className='DivRoomIcon'>
            <img src={RoomIcon} alt="RoomIcon" className='RoomIcon' />
            </div>
        </div>
      
        <div className='View'>
            <p className='ViewP'>FEATURED</p>
            <h1>Best Appartment & Sea View</h1>
            <div className='Best'> 
                <p className='best bestQu'>Best useful links?</p>
                <p className='bestPar'> Get.  
               <span className='bestparspan'>the best villa </span> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the.
               <span  className='bestparspann'>best free CSS templates</span> in the world.
                Please tell your friends about it.</p>
                <p className='best bestParag'>How does this work?</p>
                <p className='best'>Why is Villa Agency the best?</p>
            </div>
        </div>
        <div className='features'>
            <CardProperites img={IconeOne} infoTitle='250 m2' infoPar='Total Flat Space'/>
            <CardProperites img={IconeTwo} infoTitle='Contract' infoPar='Contract Ready'/>  
            <CardProperites img={IconeThree} title='Process' infoTitle='Payment'infoPar='Payment'/>  
            <CardProperites img={IconeFour} title='Control' infoTitle='Safety' infoPar='24/7 Under'/>
        </div>
      
      </div>
    </>
  )
}

export default Properites
