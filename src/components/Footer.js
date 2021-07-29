import React from 'react';
import './footer.css';
function Footer()
{
    return(<>
       <div className="Footer">
           <div className="feedback"><h2 className="heading-complaint">Complaints/ Feedback</h2>
           <p>If you have any complaints or suggestions</p>
<p>Just tell us. We are here to help you with everything.</p>
<a href="#">Share Yor Feedback</a>
</div>
           <div className="connectus">
               <p>Connect Us on Social Media</p>
        <ul className="footer-menu">
           <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
           <li><a href="#"><i class="fab fa-twitter"></i></a></li>
           <li><a href="#"><i class="fab fa-instagram-square"></i></a></li>
           <li><a href="#"><i class="fab fa-youtube"></i></a></li>
       </ul> </div>
       <div className="Info-News">
           <div className="News-Events">
               <div className="news">
                   <h6>News</h6>
                   <a href="#">News</a>
                   <a href="#">Events</a>
                   <a href="#">Interviews</a>
                   <a href="#">Watch Our Videos</a>
                   <a href="#">Media Contacts</a>
                   <a href="#">NewLife Hospital Reviews</a>
               </div>
               <div className="Blog">
               <h6>Blog</h6>
                   <a href="#">Health Library</a>
                   <a href="#">Covid 19 Updates</a>
                   <a href="#">COVID-19 FAQs</a>
                   <a href="#">COVID-19 Vaccination</a>
                   <a href="#">COVID-19 New Symptoms</a>
                   <a href="#">COVID-19 RT-PCR TEST</a>
               </div>
           </div>
       <div className="policy"><a href="#">Privacy Policy |</a><span style={{width:.2+'rem'}}></span> 
       <a href="#"> Disclaimer |</a><span style={{width:.2+'rem'}}></span> 
       <a href="#"> Contact |</a><span style={{width:.2+'rem'}}></span> 
       <a href="#"> Sitemap </a></div>
       </div></div>

<div className="copyright"><i className="fas fa-copyright"></i><span style={{width:.3+'rem'}}></span> Copyright. All rights are reversed</div>

    </>);
}
export default Footer ;