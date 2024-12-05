import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Header/Navbar";
import Hero from "./Hero/Hero";
import Hero_Properties from "./Hero_Properties";
import { Helmet } from "react-helmet-async";
import Section_WhoWeAre from "./Section_WhoWeAre/Section_WhoWeAre";
import PropertyType from "./PropertyType";
import Section_AreaProperty from "./Hero/Section_AreaProperty";
import { IoIosPlay } from "react-icons/io";
import Expertiese from "./Expertiese/Expertiese";


const Home = () => {

    const data = useLoaderData();


    return (
        <div className=" relative selection:bg-Primary selection:text-white">
            {/* SITE TITLE */}
            <Helmet>
                <title>ASIF REAL ESTATE</title>
            </Helmet>

            <Navbar></Navbar>
            <div className="">
                <Hero></Hero>
            </div>
            {/* Feature Properties */}
            <div className="text-center my-8">
                <p className="font-normal text-Primary hover:underline">OUR PROPERTIE</p>
                <h1 className="font-bold text-4xl font-ubuntu">Our Featured Properties</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-5 mx-auto max-w-screen-xl items-center justify-center pl-4 lg:gap-x-5">
                {
                    data.map(sProperty => (
                        <Hero_Properties key={sProperty.id} property={sProperty}></Hero_Properties>
                    ))
                }
            </div>
            {/* Whe We Are */}
            <div className="bg-Primary/10 my-24 p-4 py-24">
                <Section_WhoWeAre></Section_WhoWeAre>
            </div>
            {/* Property Type */}
            <div className="bg-[#0E2E50] ">
                <PropertyType property={data}></PropertyType></div>

            {/* Top Area */}
            <div className=" my-16 max-w-screen-xl m-auto">
                <Section_AreaProperty property={data}></Section_AreaProperty>
            </div>
            {/* Play Video */}
            <div className="bg-playVidImg bg-cover bg-fixed bg-bo bg-no-repeat py-24">
                <div className="max-w-screen-xl mx-auto flex items-center justify-center">
                    <div className="bg-white shadow-sm rounded-lg  w-[500px]  p-12">
                        <p className="text-Primary  font-roboto font-semibold">Let’s Take a Tour</p>
                        <h3 className="text-black font-bold text-3xl">Search Property Smarter,
                            Quicker & Anywhere</h3>
                           <div className="flex items-center">
                           <button className="group mt-4 size-[50px] relative"><span className="group-hover:shadow-[0px_0px_30px_2px_#15C39A] group-hover:rotate-180 duration-500 z-30 absolute flex justify-center items-center bg-gradient-to-tr from-[#15C39A] to-[#9fead7] bottom-0 left-1/2 transform -translate-x-1/2 rounded-full size-[40px] bg-white"><IoIosPlay className="text-xl text-white"></IoIosPlay></span> <span className="bg-gradient-to-tr bottom-0 left-1/2  transform -translate-x-1/2  from-[#15C39A]/80 to-[#9fead7]/80 duration-300  absolute rounded-full z-20 size-0 group-hover:w-[50px] group-hover:h-[50px]"></span> <span className="bg-gradient-to-tr bottom-0 left-1/2 from-[#15C39A]/50 to-[#9fead7]/50 transform -translate-x-1/2 duration-500 absolute rounded-full z-20 size-0 group-hover:size-[60px] hover:duration-300"></span> </button>
                           <p className="text-black font-semibold mt-6 ml-2">Play Video</p>
                           </div>
                    </div>
                    <div className="flex-1">
                          
                    </div>
                </div>
            </div>
            {/* Expertitese is Here */}
            <div className=" my-16 max-w-screen-xl py-8 m-auto" >
              <Expertiese></Expertiese>
            </div>
        </div >
    );
};

export default Home;