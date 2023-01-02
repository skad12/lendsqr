import {React, useState} from "react";
import Nav from "../components/Nav";
import Mobile from '../components/Mobile';
import Dash from './Dash'
function SideNavbar() {

 

  return (
    <>
    <div>


      <div className="md:hidden block"><Mobile /></div>
      <div className='hidden md:block'><Dash /></div>
      
    </div>
    </>
  );
}

export default SideNavbar;





// import { useState } from 'react';
// import Image from 'next/image';
// import SideNav from '../components/SideNav';




// function Navbar() {
//   const [menuOn, setMenuOn] = useState(false)

//   const menu = <SideNav className="" />

//   return (
//     <nav className="bg-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0 " >
//             <Image className="h-8 w-8 md:hidden" src="/logo.svg" alt="" width={60} height={60} />
//             </div>
//             <div className="block md:hidden">
//               <button
//                 onClick={() => setMenuOn(!menuOn)}
//                 className="px-3 py-2 rounded-md text-white focus:outline-none focus:text-white focus:bg-gray-700"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
// </svg>
//   {menuOn && menu }
//               </button>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center md:ml-6">
//               <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>
//               <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Team</a>
//               <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Projects</a>
//               <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Calendar</a>
//             </div>
//           </div>
//         </div>
//       </div>
//       </nav>
//   )}

//      export default Navbar;



