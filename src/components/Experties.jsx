import bannerBackground from '../assets/background_image.jpg';
const Experties = () =>{
    return<>
    <div className="main-container mt-2">
        <h1 className="mb-16 text-center font-bold underline text-4xl">My Experties</h1>
        {/* expertise box section */}
        <div style={{
            backgroundImage:`url(${bannerBackground})`,
            backgroundSize:"cover"
        }} className="box-xontainer items-center flex py-16">
            <div className="text-white flex justify-center">
                {/* text container */}
                <div className="w-2/3 text-center space-y-3">
                    <h1 className="text-3xl font-bold">I love These Technologies</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nobis alias qui atque, vero voluptate autem molestiae officiis deleniti eius!</p>
                    <button className="text-1xl px-2 py-2 bg-orange-500 rounded-full shadow-lg">Hire me..</button>
                </div>
            </div>
            <div className="flex justify-center">
                {/* skills conatiner */}
                <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
                <p className="cursor-pointer hover:bg-red-600 bg-gray-400 w-fit px-3 py2 mt-3 rounded-full">COre java</p>
                <p className="cursor-pointer hover:bg-red-600 bg-gray-400 w-fit px-3 py2 mt-3 rounded-full">Advance Java</p>
                <p className="cursor-pointer hover:bg-red-600 bg-gray-400 w-fit px-3 py2 mt-3 rounded-full">Python</p>
                <p className="cursor-pointer hover:bg-red-600 bg-gray-400 w-fit px-3 py2 mt-3 rounded-full">DBMS</p>
                <p className="cursor-pointer hover:bg-red-600 bg-gray-400 w-fit px-3 py2 mt-3 rounded-full">GITHUB/GIT</p>
                <p className="cursor-pointer hover:bg-red-600 bg-gray-400 w-fit px-3 py2 mt-3 rounded-full">React</p>
                <p className="cursor-pointer hover:bg-red-600 bg-gray-400 w-fit px-3 py2 mt-3 rounded-full">JavaScript</p>
                <p className="cursor-pointer hover:bg-red-600 bg-gray-400 w-fit px-3 py2 mt-3 rounded-full">Tailwind CSS</p>
                </div>
                

            </div>
            
        </div>
    </div>

    </>
}
export default Experties;