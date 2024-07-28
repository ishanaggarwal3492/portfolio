import { useState } from "react";

const Services = () => {
    useState([
        {
            id:"",
            title:"",
            description:"",
            actionButton:{
                title:"",
                link:"",
            }
        }
    ])
    return <>

    <div className="main-container py-14">
        <h1 className="text-4xl underline text-center font-bold">My Services</h1>
        <div className="service-container space-x-5 px-10 flex mt-12">
            <div className="cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-300 p-5 text-center shadow-lg rounded-xl  service">
            <i class="text-4xl fa-solid fa-web-awesome"></i>
                <h1 className="text-4xl">Web Developer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo incidunt, deleniti atque placeat harum impedit voluptate ad officia excepturi.</p>
                <button className=" px-3 py-2 bg-orange-500 rounded-full shadow-lg">Check..</button>
            </div>
            <div className="cursor-pointer hover:bg-gray-100  space-y-3 bg-slate-300 p-5 text-center shadow-lg rounded-xl">
            <i class="text-4xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">Android Developer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo incidunt, deleniti atque placeat harum impedit voluptate ad officia excepturi.</p>
                <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">Check..</button>
            </div>
            <div className="cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-300 p-5 text-center shadow-lg rounded-xl">
            <i class="text-4xl fa-solid fa-database"></i>
            <h1 className="text-4xl">Backend Developer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo incidunt, deleniti atque placeat harum impedit voluptate ad officia excepturi.</p>
                <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">Check..</button>
            </div>

        </div>

    </div>


    </>
};
export default Services;