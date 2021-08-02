import React from 'react';
import './maternity.css';
import image1 from './images/mat.jpg';
function Maternity()
{
    return(<>
      <div className="matimage">
          <img src={image1}/>
          <div className="text"><h4>Maternity</h4>
          <p className="text1">At NewLife Hospitals, The Department of Obstetrics includes a team of expert gynaecologists, Foetal Medicine experts, nutritionists, physiotherapists, and trained and experienced nursing staff. We provide comprehensive care ranging from pre-natal care to post-natal care. We are also equipped with one of the most advanced neonatal care team supported by state-of-the-art NICU infrastructure to ensure that complex and high-risk pregnancies can be managed including extremely premature birthings.

At Motherhood, The Department of Obstetrics manages your journey through the entire nine months and more. The list of services offered includes prenatal care, specialized diet counselling, Lamaze classes and consultation with physiotherapist, scans as per requirement as well as 24X7 gynaecologist support at the hospital. We also have 24X7 pharmacy, laboratory and blood storage equipping us to handle any emergency related to birthing.

The birthing program also includes specialized packages for pregnant women such as Nine Divine, that offers comprehensive care through out the pregnancy journey. We also focus extensively on natural birthing, while we are experienced in managing LSCS as well as high risk and complex pregnancies.</p></div>

      </div>


    </>);}
export default Maternity;