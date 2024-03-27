import { Link } from 'react-router-dom';
import './ServiceCard.css'

export default function Services(){
    return (
        <div className="h-full py-20">
            <h2 className="text-center font-semibold text-4xl mb-12 md:mb-20">Our Services</h2>
            <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-around gap-10">
                <Link to="/search">
                    <div className="card">
                        <div className="align">
                            <span className="red"></span>
                            <span className="yellow"></span>
                            <span className="green"></span>
                        </div>
                        <h1>
                            Get Color Inspiration
                        </h1>
                        <p>
                            Explore curated collections, color trends, and inspirational palettes to spark your imagination and fuel your design journey.
                        </p>
                    </div>
                </Link>
                <div className="card">
                    <div className="flex justify-between items-center">
                        <div className="align">
                            <span className="red"></span>
                            <span className="yellow"></span>
                            <span className="green"></span>
                        </div>
                        <div className="fadeInDown font-medium text-yellow-300">
                            Coming Soon!
                        </div>
                    </div>
                    <h1>
                        Convert Color Codes
                    </h1>
                    <p>
                        Seamlessly convert color codes between HEX, RGB, HSL, and other formats to ensure compatibility across platforms and design tools.
                    </p>
                </div>
                <div className="card">
                    <div className="flex justify-between items-center">
                        <div className="align">
                            <span className="red"></span>
                            <span className="yellow"></span>
                            <span className="green"></span>
                        </div>
                        <div className="font-medium text-yellow-300">
                            Coming Soon!
                        </div>
                    </div>
                    <h1>
                        Create Custom Color Palettes
                    </h1>
                    <p>
                        Use our intuitive palette builder to mix and match colors and create personalized color schemes for your projects.
                    </p>
                </div>
            </div>
        </div>
    );
}


