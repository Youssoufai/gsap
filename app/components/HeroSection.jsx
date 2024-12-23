export const HeroSection = () => {
    return (
        <>
            <div className="min-h-screen bg-[#282828] text-white flex flex-col items-center relative">
                <h1 className="text-[8.5rem] font-extralight tracking-tight absolute top-[10rem]">
                    WONDERKIN TATTOO
                </h1>
                <div className="w-[586px] h-[674px] bg-gray-500 rounded-t-full absolute z-10"></div>
                <img src="leave.png" className="h-[300] w-[700] absolute bottom-0" alt="john" />
                <img src="john.jpg" className="w-[300px] h-[400px] z-10 bottom-0 absolute" alt="tattoed girl" />
            </div>
        </>
    )
} 