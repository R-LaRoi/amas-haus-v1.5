import Image from "next/image";
import mobileImg from './a-mobile.png'

export default function Home() {


  return (
<main>
   <div className="bg-white shadow-sm sm:flex">
  <div className="flex-shrink-0 relative w-full  overflow-hidden pt-[70%] sm:max-w-60  md:max-w-xs">
    <Image className="size-full  w-full absolute top-0 start-0 object-cover" src={mobileImg} alt="patterned pillows"/>
  </div>
  <div className="flex flex-wrap">
    <div className="p-2 flex flex-col h-full ">
      <h3 className="text-lg font-bold text-gray-800">
   Make Room for you!
      </h3>
      <p className="mt-1 text-gray-500">
        Ama's Haus
      </p>
      <div>
  
    <div className="flex rounded-lg shadow-sm">
     <input  type="text"></input>
    </div>
  </div>
    </div>
  </div>
</div>
     </main>
  );
}
