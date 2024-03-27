import { useState } from 'react';
import Card from './Card';
import colorsData from '../../Data.json';

export default function Search(){
    const [searchTerm, setSearchTerm] = useState('')
    const filteredColors = colorsData.filter( color =>
        color.color.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8">
            <input
                type="text"
                placeholder="Search colors..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="border border-gray-300 p-2 mb-4"
            />
            <div className="grid grid-cols-3 gap-4">
                {filteredColors.map((color, index) => (
                    <Card key={index} color = {color.color} value = {color.value} />
                ))}
            </div>
        </div>
    );
}


