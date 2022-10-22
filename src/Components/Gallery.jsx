import React from 'react'
import Fancybox from './fancybox'


const Gallery = () => {
  return (
    <>
     
   <div className="container py-5">
   <Fancybox>
   <div className="row">

    <div className="col-md-3">
    <a data-fancybox="gallery" href="./images/team-1.jpg">
          <img className='w-100' alt="" src="./images/team-1.jpg" />
        </a>
    </div>
      
      <div className="col-md-3">
      <a data-fancybox="gallery" href="./images/team-2.jpg">
          <img className='w-100' alt="" src="./images/team-2.jpg" />
        </a>
      </div>

       <div className="col-md-3">
       <a data-fancybox="gallery" href="./images/team-3.jpg">
          <img className='w-100' alt="" src="./images/team-3.jpg" />
        </a>
       </div>

      <div className="col-md-3">

      <a data-fancybox="gallery" href="./images/team-4.jpg">
          <img   classsName='w-100'  alt="" src="./images/team-4.jpg" />
        </a>
      </div>

 

      
   </div>
    </Fancybox>
   </div>
    
    </>
  )
}

export default Gallery