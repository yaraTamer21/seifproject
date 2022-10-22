import React ,{useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NextArrow = (props) => {
    const { onClick } = props;
    return (<>
      <div className='control next ' onClick={onClick} >
  
         <i class="fa fa-trash" aria-hidden="true"></i>
  
  
      </div>
  
  
    </>)
  
  
  }
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (<>
      <div className='control' onClick={onClick} >
  
       <i class="fa fa-train" aria-hidden="true"></i>  
  
      </div>
  
  
    </>)
  
  
  }
const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        appendDots:(dots)=>{
          return <ul style={{margin:"0"}}>{dots}</ul>
  
        },
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };

  return (
   <>
  <>
   <Slider  {...settings}>
       <img src='./images/banner-thumb-1.jpg'  className='w-100'/>
       <img src='./images/banner-thumb-2.jpg'   className='w-100'/>
       <img src='./images/banner-thumb-3.jpg'  className='w-100'/>

   </Slider> 
  
  </>
   
   </>
  )
}

export default Sliders