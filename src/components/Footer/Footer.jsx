import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'

export default function Footer(){
    return (
        <div className="bg-black text-white font-medium px-10 py-5 flex flex-col md:flex-row gap-y-1 md:gap-y-0 items-center justify-around">
            <span className='inline-flex items center'><Link to="/" ><img src={Logo} className='h-8 w-25 mr-1'/></Link> 2024. All Rights Reserved.</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
        </div>
    );
}