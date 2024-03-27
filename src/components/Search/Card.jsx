

export default function Card({color, value}){
    return (
        <div className="border border-gray-300 p-4 text-center text-white font-medium rounded-lg shadow-md" style={{backgroundColor: `${color}`}}>
            <p>{color}</p>
            <p>{value}</p>
        </div>
    );
}


