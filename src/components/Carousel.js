import React,{useState,useEffect} from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './Carousel.css';
import Carouseldata from './Carouseldata.jsx';


function Carousel({slides})
{
   const [currentslide,setCurrentslide]=useState(0);
    const length=slides.length;
    const nextSlide = () => {
      setCurrentslide(currentslide === length - 1 ? 0 : currentslide + 1);
    };
  
    const prevSlide = () => {
      setCurrentslide(currentslide === 0 ? length - 1 : currentslide - 1);
    };
    
    let indicateSlide=(x)=>
    {
      setCurrentslide(x);
    };
    useEffect(() => {
      const interval = setInterval(() => {
        console.log(currentslide);
        setCurrentslide(currentslide+1);
        if(currentslide==2)
        {
          setCurrentslide(0)
        }
      }, 4000);
  
      return () => {
          clearInterval(interval);     
      };
    });
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    return(
    <section>
    <div className="slider">
      {Carouseldata.map((val,index)=>
        {
          return(<div
            className={index === currentslide ? 'active' : 'slide'}
            key={index}
          >
          {index === currentslide && (<>
          <div className="textsection">
        <div className="doctor-title">{val.title}</div>
        <div className="doctor-content">{val.content}</div>
        <div className="buttons">
        <div className="doctorbuttonleft">{val.buttoncontentfirst}</div>
        <div className="doctorbuttonright">{val.buttoncontentsecond}</div>
        </div>
        </div>
        <div className="doctor-image"><img src={val.imgsrc}/></div> 
        </>)
        }
        </div>
          );
             })}
             <i className="fas fa-angle-left" onClick={prevSlide}></i>
             <i className="fas fa-angle-right" onClick={nextSlide}></i>
            <div className="sliderIndicators">
              <div id="first" className={currentslide===0?'activeSlide':''} onClick={()=>indicateSlide(0)}></div>
              <div id="second" className={currentslide===1?'activeSlide':''} onClick={()=>indicateSlide(1)}></div>
              <div id="third" className={currentslide===2?'activeSlide':''} onClick={()=>indicateSlide(2)}></div>
            </div>
            <div className="sidetoolrelative">
            <div className="sidetool">
          <Tippy placement="left" content="Login" >
             <div className="login" id="login"><i class="fas fa-users"></i></div>
          </Tippy>
          <Tippy placement="left" content="Pharmacy Cart" >
          <div className="Cart" id="cart"><i class="fas fa-shopping-cart"></i></div>
           </Tippy>
            <Tippy placement="left" content="Feedback" >
          <div className="Feedback" id="Feedback"><i class="fas fa-comment-dots"></i></div>
          </Tippy>
      </div>
      </div>
      </div>
      </section>
    );
}
export default Carousel;