import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
      <section className='my-5'>
          <div className='text-center text-muted py-4 font-bold'>
              C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </div>
          <div className='text-center mb-3 font-semibold' >
              CHEMICALS &amp; PROCESS <span className='text-red-500'>|</span> POWER <span className='text-red-500'>|</span> WATER &amp; WASTE WATER <span className='text-red-500'>|</span> OIL & GAS <span className='text-red-500'>|</span> PHARMA <span className='text-red-500'>|</span> SUGARS &amp; DISTILLERIES <span className='text-red-500'>|</span> PAPER &amp; PULP <span className='text-red-500'>|</span> MARINE &amp; DEFENCE <span className='text-red-500'>|</span> METAL &amp; MINING <span className='text-red-500'>|</span> FOOD &amp; BEVERAGE <span className='text-red-500'>|</span> PETROCHEMICAL &amp; REFINERIES <span className='text-red-500'>|</span> SOLAR <span className='text-red-500'>|</span> BIULDING <span className='text-red-500 '>|</span> HVAC <span className='text-red-500 '>|</span> FIRE FIGHTING <span className='text-red-500'>|</span> AGRICULTRES &amp; RESIDENTIAL
      </div>
      

      <div className='flex w-full h-28 border bg-red-500 rounded  flex-col justify-around items-center md:flex-row p-8 '>  
        <div className='flex items-center'>
        <FontAwesomeIcon icon={faPhone}   size="lg" color="#fff"/> &nbsp;<sub className='text-white font-sans font-bold'> Toll free 1800 200 1234</sub>
        </div>
        <div className='flex items-center p-2'>
          <FontAwesomeIcon icon={faFacebook} size="xl" color="#fff" />&nbsp;<sub className='text-white font-sans font-bold'>www.facebook.com/cripumps</sub>
        </div>
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faGlobe} size="xl" color="#fff" />&nbsp;
          <sub className='text-white font-sans font-bold'>
          www.crigroups.com
          </sub>
          </div>
      
            
          </div>
          
    </section>
  )
}

export default Footer
