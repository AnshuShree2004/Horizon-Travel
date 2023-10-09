import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'

import Himachal from '../assets/Himachal.png'
import Kashmir from '../assets/Kashmir.png'
import Sikkim from '../assets/Sikkim.png'
import Uttarkhand from '../assets/Uttarakhand.png'
import Footer from "../components/Footer";
import Nav from "../components/Nav";


 function Home() {

    return (
        <div className="flex flex-col items-center justify-center">
        <Nav />
        <div className="h-[98vh] w-full flex flex-col justify-center items-center">

         {/** caraousl */}
         <div className="carousel w-full">


    <div id="slide1" className="carousel-item relative w-full">
    <img src={Himachal} className="w-full" />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretLeft /></a> 
      <a href="#slide2"className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretRight /></a>
     
    </div>
     

  </div> 

  <div id="slide2" className="carousel-item relative w-full">
  <img src={Kashmir} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretLeft /></a> 
      <a href="#slide3" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretRight /></a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
  <img src={Sikkim} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretLeft /></a> 
      <a href="#slide4" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretRight /></a>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
  <img src={Uttarkhand} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretLeft /></a> 
      <a href="#slide1" className="btn btn-circle bg-transparent text-white border- hover:text-gray-400 hover:bg-transparent"><AiFillCaretRight /></a>

    </div>
  </div>
</div>

        </div>
         <Footer />
        </div>
       
    )
 }

 export default Home