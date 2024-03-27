import Hero from '../../assets/hero.png'

export default function Home() {
    return (
        <div className="h-full py-10 flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className='w-full lg:w-1/2'>
            <h1 className=" text-5xl font-bold hidden md:block">
                Welcome to ColorApp
            </h1>
            <br/>
            <br/>
            <p className="text-lg font-normal">
                ColorApp is your ultimate destination for exploring a world of colors. Whether you&apos;re a designer, artist, or simply someone who loves colors, ColorApp has everything you need to discover and enjoy beautiful color palettes.
            </p>
            </div>
            <div className='w-full lg:w-1/2'>
                <img src={Hero}/>
            </div>
            <h1 className="text-center text-5xl font-bold pb-5 md:hidden">
                Welcome to ColorApp
            </h1>
        </div>
    )
}
