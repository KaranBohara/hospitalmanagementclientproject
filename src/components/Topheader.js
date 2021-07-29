import React from 'react';

 const Topheader =()=>
{

    return(<div className="topnavbar">
    <div className="logowrap">
      <div className="hospitallogo"><i class="fas fa-heartbeat"></i></div><span style={{ width: 10 + 'px' }}></span>
      <div className="hospitalname"><a href="./"><font>N</font>EW<font>L</font>IFE</a></div>
    </div>
    <div className="mailphonewrap"><div id="phone"><i class="fas fa-phone-alt"></i><span style={{ width: 7 + 'px' }}></span>
      0129-9866576</div>
      <div id="mail"><i class="fas fa-calendar-week"></i><span style={{ width: 7 + 'px' }}></span>
        Mon-Sat : 9AM- 9PM</div>
    </div>
  </div>);
}
export default Topheader;