import {AiFillCaretLeft, AiFillCaretRight, AiOutlineCalendar} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {CiLocationOn} from 'react-icons/ci'

import Himachal from '../assets/Himachal.jpg'
import Kashmir from '../assets/Kashmir.jpg'
import Sikkim from '../assets/Sikkim.jpg'
import Uttarkhand from '../assets/Uttarakhand.jpg'
import Footer from "../components/Footer";
import Nav from "../components/Nav";



 function Home() {

    return (
        <div className="flex flex-col items-center justify-center">
        <Nav />
        <div className="h-[100vh] w-full flex flex-col justify-center items-center">

         {/** caraousl */}
         <div className="carousel w-full relative top-0 bottom-0 h-screen">


    <div id="slide1" className="carousel-item relative w-full">
    <img src={Himachal} className="w-full" />
    
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretLeft /></a> 
      <h1 className='text-black text-4xl  shadow-[0_0_20px_black] px-6 py-2 font-mono'>Himachal</h1>
      <a href="#slide2"className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretRight /></a>
     
    </div>
     

  </div> 

  <div id="slide2" className="carousel-item relative w-full">
  <img src={Kashmir} className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretLeft /></a> 
      <h1 className='text-white text-4xl  shadow-[0_0_20px_white] px-6 py-2 font-mono'>Sikkim</h1>
      <a href="#slide3" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretRight /></a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
  <img src={Sikkim} className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretLeft /></a> 
      <h1 className='text-black text-4xl  shadow-[0_0_20px_black] px-6 py-2 font-mono'>Kashmir</h1>
      <a href="#slide4" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretRight /></a>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
  <img src={Uttarkhand} className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretLeft /></a> 
      <h1 className='text-white text-4xl  shadow-[0_0_20px_white] px-6 py-2 font-mono'>Uttarkhand</h1>
      <a href="#slide1" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretRight /></a>

    </div>
  </div>
         </div>

         </div>

          {/** search-box */}
          <div className="flex flex-row items-center justify-center absolute bottom-[0.1rem] h-20">

<input type="text" placeholder="Search your destination..." className="border border-black text-black px-60 py-7 "/>
<div className='h-[5.2rem] w-[6rem] flex flex-cols items-center justify-center bg-emerald-700 border border-current'>
    <BiSearch size={20} className='text-white'/>
</div>

          </div>


         {/** plan trips */}
         

         <Footer />
        </div>
       
    )
 }

 export default Home