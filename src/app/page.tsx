
import Navigation from "./Components/navigation";
import ah from './4.png'
import BtnModal from "./Components/modalBtn";

export default function Home() {


return (
<main>
  <Navigation name="amas haus" icon={ah.src}/>
  <div className="text-center w-full self-center text-white p-6 ah-title">
    <h1>MAKE ROOM FOR YOU</h1>
    <p>Ama's Haus is growing and to offer you the best experience we're updating our site. Be the first to know when our products become available</p>
    <BtnModal text="stay connected" />

</div>

     </main>
  );
}
