import React from 'react';
class Doctor extends React.Component{
    render(){
        const {data}=this.props;
     return(
         <>
         {
             data.map((item,index)=>(
            <div className="card" key={index}>
            <img src={item.src}/>
            <div>
                <h3>{item.Name}</h3>
                <p>{item.About}</p>
                <button className="doctor-button">Book Appointment</button>
            </div>
            </div>
             ))
    }
         </>
     );

    };
}
export default Doctor;