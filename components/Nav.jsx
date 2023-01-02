import React from 'react';
import Image from 'next/image';
import Dropdown from '../components/Dropdown';




function Nav() {
    return (
        
        <>
         <div className='flex h-16 w-full justify-between hidden md:block px-5   pt-4  '>
           
           <div className=" flex justify-between pb-5 font-bold space-x-2 ">
           <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8">
     <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
     <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
     <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
   </svg>
   </div>
         <div className="text-blue-800 text-xl">Lendsqr</div>
           </div>
           
           <div className="form-control ">
     <div className="input-group flex">
       <input type="text" placeholder="Search for anything" className="input input-bordered text-xs h-7 w-64 border rounded-l-md pl-4 " />
       <div className=' bg-cyan-300 rounded-r-md'>
       <button className="btn btn-square   ">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
       </button>
       </div>
     </div>
   </div>
   
   <div className='flex space-x-6 text-blue-800'>
   <div className='text-xs pt-3'><a href='./'>Docs</a></div>
   <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-10">
     <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
   </svg></div>
   
   <div className='flex space-x-2'>
   
   <div className="avatar">
     <div className=" rounded-full ">
       <Image 
       src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
       alt='/' width={36} height={36} className='rounded-full' />
     </div>
   </div>
 
   <div className='text-sm pt-2 font-'>Adedeji</div>
   <div>
   <Dropdown />
   </div>
   
   </div>
   </div>
    </div>
        
        </>
    );
}

export default Nav;