import { Link } from 'react-router-dom';
import AboutImg from '../../assets/img-about.png';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function About(){
    return (
        <div className="min-h-screen pt-2 pb-16">
            <div className="inline-flex items-center gap-x-5 bg-white text-black px-5 py-1 rounded-md font-semibold mb-10">
                <Link to="/">Home</Link> <MdKeyboardDoubleArrowRight/> <Link to="/about">About Us</Link>
            </div>
            <h1 className="font-semibold text-4xl mb-12">About Us</h1>
            <div className="flex flex-col md:flex-row-reverse items-center">
                <img className="w-4/5 md:w-2/5" src={AboutImg} />
                <div>
                    <h3 className="font-semibold text-3xl">Let&apos;s color the World</h3>
                    <br/>
                    <p>
                        ColorApp is your ultimate destination for exploring a world of colors. Whether you&apos;re a designer, artist, or simply someone who loves colors, ColorApp has everything you need to discover, create, and enjoy beautiful color palettes.
                    </p>
                    <br/>
                    <p>
                        ColorApp is a revolutionary web application dedicated to the world of colors. Our mission is to provide a platform where users can explore, create, and share stunning color palettes effortlessly. ColorApp started with a simple idea: to make colors more accessible and enjoyable for everyone.
                    </p>
                </div>
            </div>
        </div>
    );
}

