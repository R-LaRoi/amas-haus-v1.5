'use client'
import { useState } from "react";
import { Modal } from './modal';

interface BtnModalProps {
text: string;
 
}

export default function BtnModal({text}:BtnModalProps) {
const [modalOpen,setModalOpen] = useState(false);

return(
<>
<button className="h-10 text-white uppercase text-base text-center mt-4 ml-2 float-none cursor-pointer relative hover:bg-white hover:text-slate-500 --btn" onClick={() => setModalOpen(!modalOpen)}>{text}</button>
{modalOpen && <Modal setShowModal={setModalOpen}  />
}

</>

)


}