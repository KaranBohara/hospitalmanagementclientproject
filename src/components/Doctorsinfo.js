import React from 'react';
import Doctor from './Doctor'
import './doctor.css';
export default class Doctorsinfo extends React.Component{
  constructor(){
  super();
  this.state={data:[]
};
  }
  myRef=React.createRef();
  getData= async()=>{
    const res= await fetch('data.json')
    const data=await res.json();
    this.setState({data: data});
  };
componentDidMount(){
  this.getData();
};

  prevClick=()=>{
  const slide = this.myRef.current;
  slide.scrollLeft -= slide.offsetWidth;
  if( slide.scrollLeft<=0){
    slide.scrollLeft= slide.scrollWidth;
  }
  };
  nextClick=()=>{
    const slide = this.myRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if( slide.scrollLeft >=(slide.scrollWidth-slide.offsetWidth)){
      slide.scrollLeft= 0;
    }
 };
  render(){
  const {data}=this.state;
  return(<>
   <div className="Our-Doctors">
     <h4>MEET OUR PROFESSIONALS</h4>
       <h5>BEST DOCTORS FOR YOU</h5>
           <h6> Together, we bring loads of experience and expertise to the table to offer only exceptional service for you and your baby</h6>
          </div>
    <div className="Doctors">
      <div className="Doctor-info" ref={this.myRef}>
        <Doctor data={data}/> 
      </div>
    <div className="row"> 
      <i className="fas fa-angle-left" onClick={this.prevClick}></i>  
      <i className="fas fa-angle-right" onClick={this.nextClick}></i>
    </div>
    </div>
   </>
 );
};
}
