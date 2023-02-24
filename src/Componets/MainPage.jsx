import React from 'react'
import ContactUs from './ComponetsParts/ContactUs'
import FeedBackSec from './ComponetsParts/FeedBackSec'
import Navbar from './ComponetsParts/Navbar'
import Sec2 from './ComponetsParts/Sec2'
import Sec3 from './ComponetsParts/Sec3'
import SecMainUp from './ComponetsParts/SecMainUp'
import SecPricing from './ComponetsParts/SecPricing'
import './MainCss.css'
function MainPage() {
  return (
    <div className='main'>
        <Navbar />
        <SecMainUp />
        <SecPricing />
        {/* <Sec2/>
        <Sec3 />
        <FeedBackSec />
        <ContactUs /> */}
    </div>
  )
}

export default MainPage