import React from 'react';
import './footer.css';
function Footer()
{
    return(<>
       <div className="Footer">
           <div className="feedback">
               <h2>Complaints/ Feedback</h2>
           <p>If you have any complaints or suggestions</p>
<p>Just tell us. We are here to help you with everything.</p>
<div className="share"><a href="#">Share Yor Feedback</a> </div>
</div>
           <div className="connectus">
                <p>Connect Us on Social Media</p>
        <div className="footer-menu">
           <a href="#"><i class="fab fa-facebook-f"></i></a>
           <a href="#"><i class="fab fa-twitter"></i></a>
           <a href="#"><i class="fab fa-instagram-square"></i></a>
           <a href="#"><i class="fab fa-youtube"></i></a>
       </div> 
        </div>
       <div className="Info-News">
               <div className="news">
                   <h6>News</h6>
                   <a href="#">News</a>
                   <a href="#">Events</a>
                   <a href="#">Interviews</a>
               </div>
               <div className="Blog">
               <h6>Blog</h6>
                   <a href="#">Health Library</a>
                   <a href="#">Covid 19 Updates</a>
                   <a href="#">COVID-19 FAQs</a>
               </div>
           </div> 
       </div>

 <div className="copyright"><i className="fas fa-copyright"></i><span style={{width:.3+'rem'}}></span> Copyright. All rights are reversed</div>
 
    </>);
}
export default Footer ;