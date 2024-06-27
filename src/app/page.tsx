import Image from "next/image";
import mobileImg from './a-mobile.png'

export default function Home() {


  return (
<main>
<div className="flex flex-wrap bg-white">
   
    <img src="https://github.com/R-LaRoi/amas-haus-v1.5/assets/114012059/c8d0bbaa-e842-4e36-a7dd-bb06660b0e9d" alt="stool and pillows on the floor" className="w-full h-48 object-cover sm:h-full sm:w-4/12"/>


 <div className="w-full sm:w-8/12 mb-10">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          <div className="text-4xl font-bold">
            ah<span className="text-blue-700">.</span>
          </div>
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8"/>
          </div>
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">We're making room for <span className="text-blue-700">you!</span></h1>
            <div className="w-20 h-2 bg-green-700 my-4"></div>
            <p className="text-xl mb-10"> Ama's Haus is growing and to offer you the best experience we're updating our site. Be the first to know when our products become available.</p>
            

            <div className="bg-white p-4 rounded-lg">
    <div className="relative bg-inherit">
        <input type="text" id="username" name="username" className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"/><label for="username" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-blue-600 peer-focus:text-sm transition-all">Enter your email:</label>
    </div>
</div>
            <button className="bg-blue-900 text-white text-2xl font-medium px-4 py-2 rounded shadow">Subscribe</button>
          </div>
        </header>
      </div>
    </div>


  </div>
     </main>
  );
}
