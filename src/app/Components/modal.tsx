'useClient'
import { useState, ChangeEvent } from "react";
import logo from '../ahc.png'
import shop from '../shop.gif'
type ModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
 
};


export function Modal({ setShowModal}: ModalProps){
  const [formSubmit, setFormSubmit] = useState(false)
  const [userData, setUserData] = useState({
      email:"",
  })
  
  console.log(userData)

        

  return (

<div className='modal justify-center flex flex-col bg-white p-5 fixed font-semibold text-black overflow-hidden'>
 <img src={logo.src}
         width="80"
            alt="logo"
            className="image"
          />
{formSubmit ? <div className=" text-3xl leading-none modal-submit"><div className="">Thank you!</div><p>We're so excited to see you.</p></div>: 
    <form className="" action="" onSubmit={()=>setFormSubmit(!formSubmit)}>
   Be the first to hear about exclusive offers and new products. 
    <input  type="email" 
            placeholder="Enter your email" 
            onChange={(e: ChangeEvent<HTMLInputElement>)=> setUserData({...userData, email:e?.target.value})}
            value={userData.email}
            id="email"
            required/>
    <br/>
    <button className='sub-btn' type='submit' >submit</button>
      <div><small>We respect your privacy.</small></div>
</form> }
<div>

<button className="close-btn" onClick={() => setShowModal(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#282853" className="size-5">
  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
</svg>
</button>
</div>

</div>
  );
}