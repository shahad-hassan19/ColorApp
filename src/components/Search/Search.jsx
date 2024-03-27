import { useState } from 'react';
import Card from './Card';
import colorsData from '../../Data.json';

export default function Search(){
    const [searchTerm, setSearchTerm] = useState('')
    const filteredColors = colorsData.filter( color =>
        color.color.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen py-16 flex flex-col items-center md:items-start">
            <input
                type="text"
                placeholder="Search colors..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="bg-[#3b3602] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-white cursor-pointer transition w-72 mb-10"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 w-full">
                {filteredColors.map((color, index) => (
                    <Card key={index} color = {color.color} value = {color.value} />
                ))}
            </div>
        </div>
    );
}


