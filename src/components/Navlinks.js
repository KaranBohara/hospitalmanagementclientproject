import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
const Navlinks = () => {
    const [ferret1clicked,setFerret1clicked]=useState(true);
    const [ferret2clicked,setFerret2clicked]=useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 968);

useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 968;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);
    const showsubmenu1=()=>
    {
        setFerret1clicked(!ferret1clicked);
        setFerret2clicked(true);
    }
    const showsubmenu2=()=>
    {
        setFerret2clicked(!ferret2clicked);
        setFerret1clicked(true);
    }
    return(
    <>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="#">About Us</NavLink></li>
        <li><NavLink to="#"><div className="listitem">Facilities</div> <i class="fas fa-caret-down" onClick={()=>showsubmenu1()}></i></NavLink>
            <ul style={((isMobile)&&(ferret1clicked))?{display:'none'}:{display:'block'}}>
                <i className="fas fa-caret-up"></i>
                <li><NavLink to="/maternity">Maternity</NavLink></li>
                <li><NavLink to="#">Pediatric</NavLink></li>
                <li><NavLink to="#">Physiotherapy</NavLink></li>
                <li><NavLink to="#">Gynaecology</NavLink></li>
                <li><NavLink to="#">Radiology</NavLink></li>
                <li><NavLink to="#">Fertility</NavLink></li>
                <li><NavLink to="#">Serogacy</NavLink></li>
                <li><NavLink to="#">Cosmatology</NavLink></li>
            </ul>
        </li>
        <li><NavLink to="#"><div className="listitem">Services</div><i class="fas fa-caret-down" 
        onClick={()=>showsubmenu2()}></i></NavLink>

            <ul style={((isMobile)&&(ferret2clicked))?{display:'none'}:{display:'block'}}>
                <i className="fas fa-caret-up"></i>
                <li><NavLink to="#">Online Consultation</NavLink></li>
                <li><NavLink to="#">Our Pharmacy</NavLink></li>
                <li><NavLink to="#">Physiotherapy</NavLink></li>
                <li><NavLink to="#">Nutrition consultation</NavLink></li>
                <li><NavLink to="#">Meditation</NavLink></li>
            </ul>
        </li>
        <li><NavLink to="#">Appointment</NavLink></li>
        <li><NavLink to="#">Locate Us</NavLink></li>
    </ul>
</>
    );
}
export default Navlinks