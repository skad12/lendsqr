import React from 'react';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';
import Cards from '../components/Cards';
import Tables from '../components/Tables';
import Pagination from '../components/Pagination'
import UserHeader from '../components/UserHeader';
import Tabs from '../components/TabUser';
import TabUser from '../components/TabUser';


const User = () => {
    return ( 

        <div className="antialiased min-h-screen font-sans" >

         <Nav />
          
          <div class="flex h-screen">
  <div class="w-64 h-full hidden md:block ">
   
    <SideNav/>
  </div>
  <div class="flex-1 bg-gray-100 ">
      
    <UserHeader />
    <TabUser />
  </div>
</div>      
</div>
        
     );
}
 
export default User;

