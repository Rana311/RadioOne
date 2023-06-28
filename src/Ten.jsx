import React,{useState,useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import zz from './zz (1).jpg'
import dm from './dm.jpg'
import dm2 from './11062b_557462ab123440368447ab18a66043e5_mv2.webp'
import pm from './a3ac449c86364dd8999922949876d09e.webp'
import ReactDom from 'react-dom';
import tst from './2020619.jpg'
import vdo from './Radio 104.mp4'
import Navbarr from './Navbarr'
import Sidecart from './Sidecart';
import Footerr from './Footerr'
import { NavLink } from 'react-router-dom';

function Ten() {

  

  useEffect(() => {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
     
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 3000); // Change image every 2 seconds
     } })
 


  
  
  var ReactRotatingText = require('react-rotating-text');
  
  


  return (
    <>

      <Navbarr/>
      <Sidecart cart={[]} tot={0}/>
       
      <div class="img1"> 
      <div className="ftt" >
        <ReactRotatingText items={['Tuning in ', '104 FM']} />
      </div></div>




      <div class="wrapper">

        <div class="fixed-bg bg-1">


          <h1>Welcome to
            <br />


            THE NEXT BIG THING</h1>
        </div>

        <div class="scroll-bg">
          <h3>About Us</h3>
        </div>

        <div class="fixed-bg bg-2">
          <h1>Listening From <br />the comfort of Your Home</h1>
          <img className="img2" src={zz} />
          <NavLink exact to='./player'>
          <a href="#" className="ali">
            <span>Listenn More</span>
            <div class="liquid"></div>
          </a></NavLink>
    

          <a href="https://discord.com/invite/A8zBusy">
            <svg  viewBox="45 60 400 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="#fff" d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210" mask="url(#knockout-text)" >
              </path>
              <mask id="knockout-text">
                <rect width="100%" height="100%" fill="#fff" x="20" y="40" />
                <text x="120" y="227" fill="#000">Know More</text>
              </mask>

            </svg>
          </a>







        </div>

        <div class="scroll-bg">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna.</h3>
        </div>

        <div class="fixed-bg bg-3">
          <div class="perspective-text">
            <div class="perspective-line">
              <p></p>
              <p>Welcome </p>
            </div>
            <div class="perspective-line">
              <p>Welcome </p>
              <p>To The</p>
            </div>
            <div class="perspective-line">
              <p>To The</p>
              <p>Next Big</p>
            </div>
            <div class="perspective-line">
              <p>Next Big</p>
              <p>Thing</p>
            </div>
            <div class="perspective-line">
              <p>Thing</p>
              <p></p>
            </div>
          </div>

        </div>

      </div>
<NavLink exact to='./signup'>
      <div id="container">
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Join Radio104 Membership</span>
        </button>
      </div>
      </NavLink>

      <div class="scroll-bg">

      </div>


      <div className="redbg">
        <div className="nj">
          <div className="ch"><h1 className="redbgh1">
            Your New
            <br /> Journey Begins Here<br />Today</h1></div>

          <div className="emf">
            <h2>Radio <br />Made Fun</h2>
            <a href="#" className="square_btn">Explore Here</a></div>
        </div>






        <div className="dmm" >
          <div><img className="dm" src={dm} /></div>
          <div className="dml"><a href="#" className="hh2"><h1>Tuning<br />In</h1></a>
            <div>
              <a href="#" className="square_btn">Explore Here</a></div>
          </div>
          <div>
            <img className="dm2" src={dm2} />
          </div>
        </div>

        <div className="dmm">


          <div className="pmh"><a href="#" className="hh2"><h1>Stream<br />like a pro</h1></a>
           <NavLink exact to='./player'><div><a href="#" className="square_btn">Explore Here</a> </div></NavLink> </div>
          <div className="pmhimg"><img className="m" src={pm} /></div>


        </div>

      </div>

     

      

      <div className="scroll-bg" className="testm">TESTIMONIALS</div>


      <div className="slideshow-container">

        <div className="mySlides fade">

          <img src={tst} />
          <h1 className="text">Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!
            <br />
            -Aakriti Malik, DM Intern</h1>
        </div>

        <div class="mySlides fade">

          <img src={tst} />
          <h1 className="text">TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.



            <br />

            -Anjali Srivastava, Content Intern</h1>
        </div>

        <div class="mySlides fade">

          <img src={tst} />
          <h1 className="text">I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.

            Thank you team TEN!


            <br />
            -Kshema Unni, Business Development Intern</h1>
        </div>

      </div>
      <br />

      <div className="do">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>





      <div id="videoDiv2">
        <video id="video2" preload="" autoplay="" muted="true" playsinline="" loop="true">

          <source src={vdo} type="video/mp4" />
        </video>
        <div id="videoMessage2" className="styling">
        


          <a className="square_btn" href="portfolio.php">Explore here</a>

        </div>
      </div>





<Footerr/>



 </>)
};

                export default Ten;