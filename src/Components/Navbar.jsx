import React ,{useEffect}from 'react'
import { NavLink } from 'react-router-dom'
import $ from "jquery";
import jQuery from 'jquery'; 


const Navbar = () => {

    useEffect(()=>{

        seifff()
    },[])

    const seifff=()=>{

       

               //===== Sticky

        jQuery(window).on('scroll', function (event) {
            var scroll = jQuery(window).scrollTop();
            if (scroll < 180) {
                jQuery(".header-sticky").removeClass("sticky");
            } else {
                jQuery(".header-sticky").addClass("sticky");
            }
        });

         /*---canvas menu activation---*/
    $('.canvas_open').on('click', function(){
        $('.offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
    });
    
    $('.canvas_close,.off_canvars_overlay').on('click', function(){
        $('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
    });

     /*---Off Canvas Menu---*/
     var $offcanvasNav = $('.offcanvas_main_menu'),
     $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
 $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
 
 $offcanvasNavSubMenu.slideUp();    
 
 $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
     var $this = $(this);
     if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
         e.preventDefault();
         if ($this.siblings('ul:visible').length){
             $this.siblings('ul').slideUp('slow');
         }else {
             $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
             $this.siblings('ul').slideDown('slow');
         }
     }
     if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
         $this.parent().toggleClass('menu-open');
     }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
         $this.toggleClass('menu-open');
     }
 });


      console.log("seif")
    }

     


    


    
  return (
    <>

<div class="off_canvars_overlay">
            
</div>
<div class="offcanvas_menu">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="offcanvas_menu_wrapper">
                    <div class="canvas_close">
                        <a href="javascript:void(0)"><i class="fa fa-times"></i></a>  
                    </div>
                    <div class="offcanvas-social">
                        <ul class="text-center">
                            <li><a href="$"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="$"><i class="fab fa-whatsapp"></i></a></li>
                            <li><a href="$"><i class="fab fa-instagram"></i></a></li>

                        </ul>
                    </div>
                    <div id="menu" class="text-left ">
                        <ul class="offcanvas_main_menu">
                            <li class="menu-item-has-children active">

                                <a href="index.html">Home </a></li>

                    
                        
                            <li class="menu-item-has-children active">

                                <NavLink to="/about">About</NavLink></li>
                          
                            
                            <li class="menu-item-has-children active">
                                <a href="#">Servuihiuhiuices</a>
                                <ul class="sub-menu">
                                    <li><a href="service-details.html">Hollywood Smile</a></li>
                                    <li><a href="service-details.html">IMPLANT & ORAL SURGERY
                                    </a></li>
                                    <li><a href="service-details.html">Orthodontics</a></li>
                                    <li><a href="service-details.html">PEDIATRIC DENTISTRY</a></li>
                                    <li><a href="service-details.html">Laser</a></li>
                                    <li><a href="service-details.html">Teeth whitening</a></li>
                                
                                    
                                </ul>
                            </li>
                            <li class="menu-item-has-children active">
                                <NavLink to="/media">Media</NavLink>
                                <ul class="sub-menu">
                                    <NavLink to='/yara' >yara</NavLink>
                                    <li><NavLink to="/gallary">Gallery</NavLink></li>
                                    <li><a href="projects-details.html">Videos</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children active">
                                <a href="blog.html">Blog</a></li>

                            
                                <li class="menu-item-has-children active">

                                <a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                
                    
                </div>
            </div>
        </div>
    </div>
</div>



<section class="header-area header-sticky">
    <div class="header-wrapper container">
        <div class="templates-logo">
            <a href="index.html"><img src="./images/about-logo.png" alt="logo"/></a>
        </div>
        <div class="header-box">
            <div class="header-topbar">
                <div class="row g-0 align-items-center ">
                    <div class="col-lg-6">
                        <div class="header-topbar-text">
                            <p>Al-Tabib Medical Center 2 North Ninety - Fifth Settlement - second floor Clinic 9 </p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="header-topbar-info-wrapper">
                            <div class="header-topbar-info">
                                <ul>
                                    <li><i class="fas fa-envelope"></i> hend_essam91@hotmail.com</li>
                                    <li><i class="fas fa-clock"></i> Sat - Thu : 10.00 am - 8.00 pm</li>
                                </ul>
                            </div>
                            <div class="header-topbar-social">
                                <ul>
                                    <li><i class="fab fa-whatsapp"></i></li>
                                    <li><i class="fab fa-facebook-f"></i></li>

                                    <li><i class="fab fa-instagram"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-main-nav">
                <div class="header-main-nav-box">
                    <ul>
                        <li><NavLink to="/">Home </NavLink></li>

                    
                        
                        <li><NavLink to="/about">About</NavLink></li>
                      
                        
                        <li>
                            <NavLink to="/yara">Sejknhikjhrvices</NavLink>
                            <ul class="sub-menu">
                                <li><a href="service-details.html">Hollywood Smile</a></li>
                                <li><a href="service-details.html">IMPLANT & ORAL SURGERY
                                </a></li>
                                <li><a href="service-details.html">Orthodontics</a></li>
                                <li><a href="service-details.html">PEDIATRIC DENTISTRY</a></li>
                                <li><a href="service-details.html">Laser</a></li>
                                <li><a href="service-details.html">Teeth whitening</a></li>

                                
                            </ul>
                        </li>
                        <li>
                            <a href="#">Media</a>
                            <ul class="sub-menu">
                                <li><NavLink to="/gallery">Gallery</NavLink></li>
                                <li><a href="projects-details.html">Videos</a></li>
                            </ul>
                        </li>
                        <li><a href="blog.html">Blog</a></li>

                        
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="header-main-info">
                    <div class="header-mini-btn">
                        <ul>
                            
                            <li><a class="toggle-bar canvas_open" href="#"><i class="fal fa-bars"></i></a></li>
                        </ul>
                    </div>
                    
                    <div class="header-main-info-contact">
                        <div class="icon">
                            <img src="./images/icon/phone.svg" alt=""/>
                        </div>
                        <div class="content">
                            <span>Call Anytime</span>
                            <a href="tel:+201018221614">01018221614</a>
                        </div>
                    </div>
                </div>

               
                
            </div>
        </div>
    </div>
</section>


    </>
  )
}

export default Navbar