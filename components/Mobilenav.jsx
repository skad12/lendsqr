import React from 'react';
import SideNav from './SideNav';
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

function Mobilenav() {
    return ( 

        <>

        <div className="md:w-64">
            <SideNav  />
        </div>
        
        </>
     );
}

export default Mobilenav;