import {FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
 import {SiYourtraveldottv}  from "react-icons/si"

function Footer() {

    return (
        <>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <aside>
     <SiYourtraveldottv  size={60} className='text-white'/>
    <p><span className='font-bold text-lg'>Horizon Travel</span><br/>
    Copyright 2023 |  All rights reserved</p>
  </aside> 
  <nav>
    <header className="footer-title">Social</header> 
    <div className="grid grid-flow-col gap-4">
      <a><FaFacebook size={30} className='hover:text-blue-600 transition-all ease-in-out duration-500'/></a> 
      <a><FaInstagram size={30} className='hover:text-pink-500 transition-all ease-in-out duration-500'/></a> 
      <a><FaTwitter size={30} className='hover:text-sky-500 transition-all ease-in-out duration-500'/></a>
      <a><FaYoutube size={30} className='hover:text-red-600 transition-all ease-in-out duration-500'/></a>
    </div>
  </nav>
</footer>
        </>
    )
}

export default Footer