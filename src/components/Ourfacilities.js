import React from 'react';
import './our-facilities.css';
import image1 from '../components/matrnity.png';
import image2 from '../components/pediatric.png'; 
import image3 from '../components/physiotherapy.png';
import image4 from '../components/gayno.png';
import image5 from '../components/radiology.png';
import image6 from '../components/fertility.png';
import image7 from '../components/serogacy.png';
import image8 from '../components/cosmetology.png';
function Ourfacilities()
{
    return(<>
    <div className="Facilities">
        <div className="AboutFacilities">
            <h5>OUR FACILITIES</h5>
            <p>NewLife offers you excellent maternity services for moms-to-be
               You can get all the services for you and your baby under one roof.
                Right from fertility to maternity care and delivery to paediatric care,
                  we got you covered!</p>
        </div>
        <div className="Facilities-Name">
            {/* <div className="first-row"> */}
                <div className="firstblock"> <img src={image1}/>
                <p>Maternity</p></div>
               <div  className="firstblock"><img src={image2}/><p>Pediatric</p></div>
               <div  className="firstblock"><img src={image3}/><p>Physiotherapy</p></div>
               <div  className="firstblock"><img src={image4}/><p>Gynaecology</p></div> 
            {/* </div> */}
            {/* <div className="second-row"> */}
             <div className="firstblock"> <img src={image5}/><p>Radiology</p></div>
               <div  className="firstblock"><img src={image6}/><p>Fertility</p></div>
               <div  className="firstblock"><img src={image7}/><p>Serogacy</p></div>
               <div  className="firstblock"><img src={image8}/><p>Cosmatology</p></div> 
            {/* </div> */}
        </div>
   </div>
    
    

   </> );
}
export default Ourfacilities;