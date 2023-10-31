import {LuSearch} from 'react-icons/lu';
import {BiGridAlt} from 'react-icons/bi';


const Navbar =  () => {
  return (
    <div className="relative">
     <div className="container">
       <ul className="flex justify-between pt-14">
         <ul>
           <li className="text-primary font-bold text-custom-size cursor-pointer">
             Logo
           </li>
         </ul>
      <ul className="flex items-center gap-custom-gap">
        <li className="text-lg text-primary-3 font-normal cursor-pointer hover:font-bold nav">Home</li>
        <li className="text-lg text-primary-3 font-normal cursor-pointer hover:font-bold nav">
          Explore
        </li>
        <li className="text-lg text-primary-3 font-normal cursor-pointer hover:font-bold nav">
          Blog
        </li>
        <li className="text-lg text-primary-3 font-normal cursor-pointer hover:font-bold nav">
          <button className="bg-primary w-custom-width h-custom-height rounded-custom-border">Contact us</button>
        </li>
        <li className="cursor-pointer text-white hover:font-bold">
          <LuSearch color="#FFFFFF" />
        </li>
        <li className="cursor-pointer hover:font-bold">
         <BiGridAlt color="#F8F8F8"/>
        </li>
      </ul>
       </ul>
     </div>
    </div>
  )
}
export default Navbar