import { useState } from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Card from './Card';
import colorsData from '../../Data.json';
import { Link } from 'react-router-dom';

export default function Search(){
    const [searchTerm, setSearchTerm] = useState('')
    const filteredColors = colorsData.filter( color =>
        color.color.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen pt-2 pb-16">
            <div className="inline-flex items-center gap-x-5 bg-white text-black px-5 py-1 rounded-md font-semibold mb-10">
                    <Link to="/">Home</Link> <MdKeyboardDoubleArrowRight/> <Link to="/search">Color Search</Link>
            </div>
            <h1 className="font-semibold text-4xl mb-12">Color Search</h1>
            <div className="flex flex-col items-center md:items-start">
                <input
                type="text"
                placeholder="Search colors..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="bg-white border-2 border-[#3e3e3e] rounded-lg text-black px-6 py-3 text-base hover:border-white cursor-pointer transition w-full lg:w-1/2 mb-10"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 w-full">
                    {filteredColors.map((color, index) => (
                        <Card key={index} color = {color.color} value = {color.value} />
                    ))}
                </div>
            </div>
        </div>
    );
}


