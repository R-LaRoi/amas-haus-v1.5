import React from 'react'


interface NavProps{
name: string;
icon: string 


}


export default function Navigation({icon}:NavProps){

return(

<nav className="fixed top-0 text-white h-16 w-full">
  <div className=" --nav relative w-full h-full">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0e1111" className="size-5">
  <path fillRule="evenodd" d="M9.47 15.28a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 1 0-1.06-1.06L10 13.69 6.28 9.97a.75.75 0 0 0-1.06 1.06l4.25 4.25ZM5.22 6.03l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L10 8.69 6.28 4.97a.75.75 0 0 0-1.06 1.06Z" clipRule="evenodd" />
</svg>

  <div>
 <img src={icon}
         width="80"
         height="90"
            alt=""
          />
  </div>

   <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0e1111" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

   </div>
   </div>

</nav>

)





}