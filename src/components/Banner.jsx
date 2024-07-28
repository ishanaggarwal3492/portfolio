import bannerImage from '../assets/new.jpg';
import bannerBackground from '../assets/background_image.jpg';
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

const Banner=()=>{
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Android Developer", "Backend Developer","FULL STACK DEVELOPER"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
    return (
        <div style={{
            backgroundImage:`url(${bannerBackground})`,
            backgroundSize:"cover"
        }} className="main-container flex items-center">
            {/*first-box*/}
            <div 
               className='w-full flex items-center justify-center text-white'>{/* text */}
                <div className='w-2/3 ms-10'>
                 <h3 className='text-3xl font-semibold'>Hi, I am</h3>
                 <h1 className='mt-3 text-5xl font-bold'>Ishan Aggarwal</h1>
                 <h2 className='mt-3 text-3xl '>And I am a <span className='font-bold underline' ref={el}></span></h2>
                 <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam id eveniet perferendis sequi quas ex. Beatae rerum quibusdam odit amet voluptatum esse blanditiis, veritatis odio inventore quae nam nostrum autem aspernatur nemo voluptate facere dicta consequuntur laborum voluptates molestias? Laborum natus repellendus ea, atque laboriosam quae vitae. Iste, veniam dolore!</p>
                 
                 <div className='icons-container space-x-5 flex'>
                    <a className='hover:bg-orange-500 border cursor-pointer px-3 py-4 w-16 h-16 bg-gray-700 rounded-full flex justify-center items-center'>
                      <i class="fa-brands text-4xl fa-instagram"></i>
                    </a>
                    <a className='hover:bg-orange-500 border cursor-pointer px-3 py-4 w-16 h-16 bg-gray-700 rounded-full flex justify-center items-center'>
                      <i class="fa-brands text-4xl fa-youtube"></i>
                    </a>
                    <a className='hover:bg-orange-500 border cursor-pointer px-3 py-4 w-16 h-16 bg-gray-700 rounded-full flex justify-center items-center'>
                      <i class="fa-brands text-4xl fa-linkedin"></i>
                    </a>
                    <a className='hover:bg-orange-500 border cursor-pointer px-3 py-4 w-16 h-16 bg-gray-700 rounded-full flex justify-center items-center'>
                    <i class="fa-brands text-4xl fa-facebook"></i>
                    </a>
                 </div>

                 <br></br>
                 <a className='text-1xl px-3 py-2 bg-orange-500 rounded-full shadow-lg' href="/contact">Contact Me</a>
                 </div>
            </div>
            {/* second box */}
            <div className='w-full flex justify-center my-2'>{/*image*/}
               <img className='rounded-full shadow-lg w-fit' src={bannerImage}></img>
            </div>
        </div>
    );
};
export default Banner;
