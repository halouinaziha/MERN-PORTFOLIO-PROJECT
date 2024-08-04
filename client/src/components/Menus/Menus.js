import React from "react";
import "./Menus.css";
import { FcAbout, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector } from "react-icons/fc";

const Menus = ({ toggle }) => {
    return (

      <>
      {toggle && (
        <>
        <div className="navbar-profile-pic">
    <img
      src="https://media.licdn.com/dms/image/D5603AQFpSMnRh2ppHA/profile-displayphoto-shrink_200_200/0/1715353267818?e=2147483647&v=beta&t=76IunHevx2vxEa_OE6IVGNuPOGnYSz_z3rLtAKLKQHE" alt="profile pic"/>
  </div>

<div className="nav-items">
<div className="nav-item">
<div className="nav-link">
       <FcHome title="Home"/>
       Home
        

</div>
<div className="nav-link">
       <FcAbout title="About"/>
          About

</div>
<div className="nav-link">
       <FcPortraitMode title="Work Experience"/>
          
Work Experience
</div>

<div className="nav-link">
       <FcReadingEbook title="Education"/>
        Education

</div>
<div className="nav-link">
       <FcVideoProjector title="Projects"/>
          Projects

</div>
<div className="nav-link">
       <FcBusinessContact title="Contact" />
       Contact
          
</div>

</div>

  </div>
 
</>
         
      )}

        </>
    
  );
};

export default Menus;