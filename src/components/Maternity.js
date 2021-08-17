import React from 'react';
import './maternity.css';
import image16 from './images/mat.jpg'
import image17 from './images/doc.jpg'
import image18 from './images/doc2.jpg'
import image19 from './images/doctor.jpg'
import image20 from './images/doctor4.png'

function Maternity()
{
    return(<>

      <div className="matimage">
         <div>  <img src={image16}/></div>
          <div className="text"><h2>Maternity</h2>
          <p className="text1">At NewLife Hospitals, The Department of Obstetrics includes a team of expert gynaecologists, Foetal Medicine experts, nutritionists, physiotherapists, and trained and experienced nursing staff. We provide comprehensive care ranging from pre-natal care to post-natal care. We are also equipped with one of the most advanced neonatal care team supported by state-of-the-art NICU infrastructure to ensure that complex and high-risk pregnancies can be managed including extremely premature birthings.
</p></div>
      </div>
      <div className="doctor"> 
      <button>Book Apointment</button></div>


      <div className="bestdoctor">
       <div className="Doc"> 
       <img src={image17}/>
       <div className="doc-info"><h3> Dr. Manish Bhatt</h3>
       <p>MBBS,MD Gyneac Oncology & Robotic Surgery</p> </div>
       </div>
       <div className="Doc"> <img src={image18}/>
        <div className="doc-info"> <h3> Dr. Ritika Bhandari</h3>
         <p>MBBS, DGO, MD(OBG),Senior Consultant Gynaecologist</p></div>
        </div>
        <div className="Doc">  <img src={image19}/>
          <div className="doc-info"><h3>  Dr. Rishabh Chaudhary</h3>
       <p>  MBBS,MD(OBG), Consultant Gynaecologist</p></div></div>
      <div className="Doc"> <img src={image20}/>
        <div className="doc-info"><h3> Dr. Niharika Das</h3>
        <p>  MBBS,MD(OBG),Senior Consultant Gynaecologist</p></div></div>
     </div> 

<div className="delivery-yoga"><h3>Beautiful Pregnancy</h3></div>
        <div className="YogaProgram">
        <p>Join Online Pregnancy Yoga Session</p>
        <button >Join Now</button>
      
        </div>
     

     <div className="faqs">
            <h3> Frequently Asked Questions</h3>
            <p className="questions">Why I choose NewLife in my  pregnancy </p>
            <p className="answers">NewLife provides you the best service for pregnant mothers, such as full antenatal care, your preferred or medically required delivery option, and of course, postnatal care. NewLife cares about you and your baby. We have the world’s best doctors’ team. Over 1 lakh+ mother trust on NewLife.</p>
            <p className="questions">What does NewLife offer for the pregnant lady? </p>
            <p className="answers">On NewLife, you receive the highest quality pregnancy care, specialist for your prenatal treatment. The wholly fitted luxury rooms and the perfect environment for this auspicious moment. NewLife will not let you feel like you are away from home for even a second.</p>
            <p className="questions">Why is NewLife different from Others? </p>
            <p className="answers">NewLife believes a child is the greatest gift of life, and pregnancy is one of the most beautiful journeys of one’s lifetime. You deserve to enjoy each day of this journey. NewLife ensures that and also looks after that you have a healthy and happy pregnancy.</p>
            <p className="questions">How to book a maternity package on NewLife for my pregnancy? </p>
            <p className="answers">You can download our ‘It’s Our Baby’ app and register yourself on the app. You can look for the best maternity packages Video consulat your doctor and finalise with the choice of your maternity package. NewLife has made the process very simple for all expecting moms and dads.</p>
            <p className="questions">How can I contact NewLife?</p>
            <p className="answers">NewLife provides 24/7 Video consultation. So you can call the doctor any time if you face any issues.</p>
     </div>
     <div className="maternityFeedback">
     <div className="Ask"> 
     Ask Your Queries </div>
     <textarea></textarea>
     <input type="submit" value="Submit"></input>
     </div>
    </>);}
export default Maternity;