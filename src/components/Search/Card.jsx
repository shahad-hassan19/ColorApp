

export default function Card({color, value}){
    return (
        <div className="color-card z-0 h-40 w-72 rounded-md overflow-hidden relative group flex items-center justify-center border-2 border-white hover:border-black" style={{color: `${color}`}}>
        <div className={`absolute h-28 w-28 -top-16 -right-16 rounded-full group-hover:scale-[625%] duration-500 z-10`} style={{backgroundColor: `${color}`}}></div>
            <div className="z-20 font-bold group-hover:text-[#810e0e] duration-500 text-2xl">
            <p>{color}</p>
            <p>{value}</p>
            </div>
        </div>
    );
}
