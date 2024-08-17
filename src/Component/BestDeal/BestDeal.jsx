import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendar } from '@fortawesome/free-solid-svg-icons'
import imgBestDeal from './../../assets/images/deal-01.jpg'
import './BestDeal.css'
import CardProperites from '../CardProperites/CardProperites'
import CardBestDeal from '../CardBestDeal/CardBestDeal'
const BestDeal = () => {
  return (
    <>
    <div className='BestDeal'>
        <div className='BestDealOne'>
            <div className='BestDealOneTitle'>
            <p  className='BestDealOneTitleP'> BEST DEAL</p>
            <h1  className='BestDealOneTitleH1'>
                Find Your Best Deal Right Now!
            </h1>
            </div>
            <div className='BestDealOneAllButton'> 
            <button  className='BestDealOneButton button1'> Appartement</button>
            <button  className='BestDealOneButton button2'>Villa House</button>
            <button  className='BestDealOneButton button3'> Penthouse</button>
            </div>
        </div>
        <div className='BestDealTwo'>
            <div className=' BestDealTwoCard'>
                <CardBestDeal infoPar='TotalFlat Space' infoTitle=' 185m2'/>
                <CardBestDeal infoPar='Floor number' infoTitle=' 26th'/>
                <CardBestDeal infoPar='Number of rooms' infoTitle=' 4'/>
                <CardBestDeal infoPar='Parking Available' infoTitle=' Yes'/>
                <CardBestDeal infoPar='Payment Process' infoTitle=' Bank'/>
            </div>
            <div className='BestDealTwoImg'> <img src={imgBestDeal} alt="imgBestDeal" /></div>
            <div className='BestDealTwoTitle'>
                <h1 className='BestDealTwoTitleH1'>Extra Info About Property </h1>
                <p className='BestDealTwoTitleP'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique earum est architecto dicta id aperiam voluptate tenetur veniam laborum dolorem. Vel doloremque laudantium porro possimus aliquid similique deleniti fuga incidunt.</p>
                <p className='BestDealTwoTitleP'>When you need free CSS templates, you can simply type temlateMo in any search engine website.In addition, you can type TemplateMo Portolio, TemplateMo One Page Layouts,etc.</p>
                <div className='BestDealTwoTitleDiv'>
                <button className='Schedual'>Scheduale a visit
                <div className='FaCalendar center'><FontAwesomeIcon icon={faCalendar} /></div> </button>
                </div>
            </div>
        </div>

    </div>
      
    </>
  )
}

export default BestDeal
