import React,{useState,useEffect} from 'react';
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
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#"><div className="listitem">Facilities</div> <i class="fas fa-caret-down" onClick={()=>showsubmenu1()}></i></a>
            <ul style={((isMobile)&&(ferret1clicked))?{display:'none'}:{display:'block'}}>
                <i className="fas fa-caret-up"></i>
                <li><a href="#">Maternity</a></li>
                <li><a href="#">Pediatric</a></li>
                <li><a href="#">Physiotherapy</a></li>
                <li><a href="#">Gynaecology</a></li>
                <li><a href="#">Radiology</a></li>
                <li><a href="#">Fertility</a></li>
                <li><a href="#">Serogacy</a></li>
                <li><a href="#">Cosmatology</a></li>
            </ul>
        </li>
        <li><a href="#"><div className="listitem">Services</div><i class="fas fa-caret-down" 
        onClick={()=>showsubmenu2()}></i></a>

            <ul style={((isMobile)&&(ferret2clicked))?{display:'none'}:{display:'block'}}>
                <i className="fas fa-caret-up"></i>
                <li><a href="#">Online Consultation</a></li>
                <li><a href="#">Our Pharmacy</a></li>
                <li><a href="#">Physiotherapy</a></li>
                <li><a href="#">Nutrition consultation</a></li>
                <li><a href="#">Meditation</a></li>
            </ul>
        </li>
        <li><a href="#">Appointment</a></li>
        <li><a href="#">Locate Us</a></li>
    </ul>
</>
    );
}
export default Navlinks