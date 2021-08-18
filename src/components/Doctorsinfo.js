import React from 'react';
import Doctordata from './data.json'
import './doctor.css';
export default class Doctorsinfo extends React.Component{
  render(){
  return(<>
   <div className="Our-Doctors">
     <h4>MEET OUR PROFESSIONALS</h4>
       <h5>BEST DOCTORS FOR YOU</h5>
           <h6> Together, we bring loads of experience and expertise to the table to offer only exceptional service for you and your baby</h6>
          </div>
    <div className="Doctors">
      <div className="doctorsItem">
      {Doctordata.map((item,index)=>(
            <div className="card" key={index}>
            <div className="doctorimage"><img src={item.src}/></div>
            <div className="infoBlock">
            <div className="doctorname">{item.Name}</div>
                <div className="doctorabout">{item.About}</div>
                <button className="doctor-button">Book Appointment</button>
            </div>
            </div>
             ))}
             </div>
    </div>
   </>
 );
};
}
