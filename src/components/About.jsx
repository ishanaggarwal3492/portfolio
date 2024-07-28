import { useState } from 'react';
import bannerImage from '../assets/ne1.jpg';
const About = () => {
    const [data, setData] = useState({
        image:bannerImage,
        title:"Java Developer & Android Developer",
        desc1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam officiis qui omnis fugit commodi id quis? Recusandae, voluptate! Fugit?",
        desc2:"Lorem, ips um dolor sit amet consectetur adipisicing elit. Blanditiis, placeat laborum doloremque consequatur libero, dolorum numquam tempora eius, molestiae iure labore. Provident soluta, accusantium explicabo fugit possimus quaerat veritatis molestias?",
        actionButton:{
            title:"Read More..",
            link:"/readmore",
        }
    });
    return <>
         
         <div className="main-container bg-gray-100 border py-16">
            <h1 className="text-4xl underline text-center font-bold">About Me </h1>
               <div className="flex items-center">
                {/* image container */}
                <div className='w-full flex justify-center '>
                    <img className='w-fit' src={data.image} alt="ishan aggarwal"></img>
                </div>

                {/* text container */}
                <div className='w-full py-16 flex justify-center'>
                   <div className='space-y-5 w-2/3'>
                    <h1 className='text-3xl font-semibold '>{data.title}</h1>
                    <p>{data.desc1}</p>
                    <p>{data.desc2}</p>
                    <button className='bg-orange-500 hover:resize-x-100 px-3 py-2 text-1xl rounded-full shadow-lg text-white'>{data.actionButton.title}</button>
                   </div>
                </div>

               </div>
         </div>
    
    </>
};

export default About;