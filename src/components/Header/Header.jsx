import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import { FaHome, FaSearch, FaLaptopCode } from "react-icons/fa";

export default function Header(){
  return (
    <div className="header-bg fixed top-0 left-0 w-full h-24 z-50 flex flex-col md:flex-row items-center justify-between p-5 md:px-20 shadow-md shadow-black">
      <div>
        <Link to="/" ><img src={Logo} className='h-8 w-25'/></Link>
      </div>
      <div className=' flex justify-between w-full md:w-1/2 lg:w-2/5'>
          <Link to="/about" className='inline-flex items-center'><FaHome/> About</Link>
          <Link to="/search" className='inline-flex items-center'><FaSearch/> Search</Link>
          <Link to="/services" className='inline-flex items-center'><FaLaptopCode/> Services</Link>
      </div>
    </div>
  );
}

