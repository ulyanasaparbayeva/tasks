import Navbar from "./Navbar";
import bus from "../images/bus.svg";
import pasta from "../images/pasta.svg";
import camera from "../images/camera.svg";
import walk from "../images/walk.svg";
import treasure from "../images/treasure.svg";
import Slider from "../images/Slider.png";
import {HiOutlineChevronDoubleDown} from 'react-icons/hi';


const Banner  =  () => {
 return (
   <div className="banner">
     <div className="container">
       <div className="background-overlay"></div>
       <Navbar/>
       <div className="pt-[151px] text-white font-bold text-6xl leading-[100%] relative">
         Trekking <br/>
         opportunities for <br/>
         novice and <br/>
         expert</div>
       <div className="relative text-white font-normal text-custom-size-2 pb-[47px]">Sharing lifetime experiences</div>
       <div className="bg-white relative h-custom-height-2 rounded-custom-border-2">
         <div>
           <div className="flex">
             <div className="pl-12">
               <div className="pt-custom-top relative text-primary-4 font-bold text-xl">The local experience</div>
               <div className="pt-2.5 text-primary-4 text-xs pb-custom-bottom">
                 You will discover exactly why Bolivia is known as The <br/>
                 Land of Hidden Treasures as you will embark on an <br/>
                 adventure of a lifetime along the land</div>
             </div>
             <div className="flex pt-12 gap-custom-gap-2">
               <div className="pl-custom-left">
                 <img src={bus}/>
                 <div className="text-base text-primary-4 pt-custom-top-2">Travel</div>
               </div>
               <div>
                 <img src={pasta}/>
                 <div className="text-base text-primary-4 pt-custom-top-2">Travel</div>
               </div>
               <div>
                 <img src={camera}/>
                 <div className="text-base text-primary-4 pt-custom-top-2">Photos</div>
               </div>
               <div>
                 <img src={walk}/>
                 <div className="text-base text-primary-4 pt-custom-top-2">Walk</div>
               </div>
             </div>
           </div>
         </div>
         <div className="bg-primary absolute right-0 top-[-10px] bottom-0 rounded-[5px] right-0 h-48 w-custom-width-1">
           <img src={treasure} className="text-center m-auto   pt-custom-top-3"/>
           <div className="text-white text-base text-center pt-custom-top-4">Tour Guide</div>
           <div className="text-white text-custom-size-3 text-center pt-6 font-semibold tracking-[2px] leading-[80%]">View more</div>
         </div>
       </div>
         <div className="pt-custom-top-5 pb-11 flex justify-end gap-custom-gap-3">
           <div>
             <HiOutlineChevronDoubleDown  className="relative
        text-center m-auto w-[30px]" color="#fff" size="30px" />
             <div className="text-white   pt-3 text-custom-size-3 font-semibold
       uppercase relative text-center">scroll down
             </div>
           </div>
           <div>
             <img src={Slider} className="pt-3 relative text-end m-auto"/>
           </div>
         </div>
     </div>
   </div>
)
}
export default Banner