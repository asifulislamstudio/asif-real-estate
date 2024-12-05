import { GrMapLocation } from "react-icons/gr";
import { FaSearchPlus, FaRegDotCircle, FaUserCircle, FaRegImage } from "react-icons/fa";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { IoBedSharp, IoCarSportSharp } from "react-icons/io5";
import { MdBathtub } from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";
import { GiFlowerTwirl } from "react-icons/gi";


const Hero_Properties = ({ property }) => {
    
    const [openModal, setOpenModal] = useState(false);
    const { title, location, size, status, imageUrl, type, tags, price, feature, beds, baths, priceUnit } = property;

   
    return (
        <div className=" hover:shadow-xl duration-300 ">
            <div className="w-full border-2  box-border items-stretch space-y-3  bg-white p-4 shadow-sm rounded-md ">
                <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        {/* love  */}
                        <div className="flex items-center">
                            <p className="bg-blue-600 p-1 rounded-lg font-ubuntu font-semibold text-white">{tags}</p>
                        </div>
                        <button className="rounded-xl bg-Primary px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">{status}</button>
                    </div>
                    <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={imageUrl} />
                </div>
                <div className="space-y-2 font-semibold">
                    <h6 className="text-sm font-ubuntu md:text-base lg:text-xl">{title.slice(0,30)}</h6>
                    <p className="text-xs font-semibold text-gray-400 md:text-sm">{type}</p>
                    <p className="font-ubuntu text-2xl ">${price}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
                    <h3 className="font-semibold font-roboto border px-12 rounded-full flex items-center"><GrMapLocation className="mr-2 text-Primary text-xl"></GrMapLocation>{location}</h3>
                    <button className="rounded-lg flex items-center justify-center  px-3 py-2 font-semibold text-white duration-300 hover:scale-95"><FaSearchPlus onClick={() => setOpenModal(true)} className="
                    mr-2 text-Primary text-xl
                    "  ></FaSearchPlus></button>
                </div>
            </div>
            {/* Quick View */}
            <div onClick={() => setOpenModal(false)} className={`fixed z-[100] w-screen] ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute max-w-[90vw]  lg:max-w-[60vw] rounded-lg bg-white p-6 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${openModal ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>

                    <button onClick={() => setOpenModal(false)}><RxCross2 className="text-2xl bg-Primary rounded-full p-1 lg:ml-[1080px] mb-4"></RxCross2></button>

                    <div>
                        <div className="grid lg:grid-cols-3 ">
                            <div className="lg:col-span-2">
                                <img className="" src={imageUrl} alt="" />
                                <div className="grid grid-cols-4 space-x-2 my-2">
                                    {/* image place holder 1 */}
                                    <div className=" min-h-20 lg:min-h-40 bg-slate-600/50 animate-pulse flex items-center justify-center"><FaRegImage className="text-4xl"></FaRegImage> </div>
                                    
                                    {/* image place holder 1 */}
                                    <div className=" min-h-20 lg:min-h-40 bg-slate-600/50 animate-pulse flex items-center justify-center"><FaRegImage className="text-4xl"></FaRegImage> </div>
                                    
                                    {/* image place holder 1 */}
                                    <div className=" min-h-20 lg:min-h-40 bg-slate-600/50 animate-pulse flex items-center justify-center"><FaRegImage className="text-4xl"></FaRegImage> </div>
                                    
                                    {/* image place holder 1 */}
                                    <div className=" min-h-20 lg:min-h-40 bg-slate-600/50 animate-pulse flex items-center justify-center"><FaRegImage className="text-4xl"></FaRegImage> </div>
                                    

                                </div>
                            </div>

                            {/* modal_right_part */}

                            <div className="lg:col-span-1 ml-4 ">
                                <h1
                                className="font-semibold font-ubuntu text-xl lg:text-2xl my-2"
                                >{title}</h1>

                                {/* meta_information */}

                                <div className="grid grid-cols-2 my-4">
                                    {/* user */}
                                    <div className="font-semibold font-roboto   rounded-full flex items-center w-full "
                                    >
                                       <FaUserCircle
                                       className="mr-2 text-Primary text-xl"
                                       ></FaUserCircle>
                                        <p className="text-normal">
                                            Asiful Islam
                                        </p>
                                    </div>
                                    {/* location */}
                                    <div className="font-semibold font-roboto   rounded-full flex items-center w-full"
                                    >
                                        <GrMapLocation
                                            className="mr-2 text-Primary text-xl"
                                        ></GrMapLocation>
                                        <p>
                                            {location}
                                        </p>
                                    </div>
                                </div>
                            {/* Features */}
                            <div>
                                {
                                    feature.map(sFeature => (
                                        
                                        <button className="p-1 text-Primary font-roboto font-bold text-sm lg:text-base ">
                                            
                                            ⦿ {sFeature}
                                        </button>
                                    
                                    ))
                                }
                            </div>
                            {/* Others */}
                            <div className=" my-4 lg:my-4 grid grid-cols-2 gap-1 lg:grid-cols-1">
                                <h3 className=" lg:text-xl text-base font-normal font-ubuntu border-y-1 lg:py-2 flex"> 
                               <span> <PiBuildingApartmentFill className="text-Primary lg:text-2xl mr-3"></PiBuildingApartmentFill></span>
                                Type {type}</h3>

                                <h3 className=" lg:text-xl text-base font-normal font-ubuntu border-y-1 lg:py-2 flex items-center">
                                    <IoCarSportSharp
                                    className="text-Primary lg:text-2xl mr-3"
                                    ></IoCarSportSharp>
                                    Parking {}</h3>

                                <h3 className=" lg:text-xl text-base font-normal font-ubuntu border-y-1 lg:py-2 flex items-center">
                                    <IoBedSharp
                                    className="text-Primary lg:text-2xl mr-3"
                                    ></IoBedSharp>
                                    Bedroom {beds}</h3>

                                <h3 className=" lg:text-xl text-base font-normal font-ubuntu border-y-1 lg:py-2 flex items-center">
                                    <MdBathtub
                                    className="text-Primary lg:text-2xl mr-3"
                                    ></MdBathtub>
                                    Bathroom {baths}</h3>

                                <h3 className=" lg:text-xl text-base font-normal font-ubuntu border-y-1 lg:py-2 flex items-center">
                                    <SlSizeFullscreen
                                    className="text-Primary lg:text-2xl mr-3"
                                    ></SlSizeFullscreen>
                                    sqft {size}</h3>

                                <h3 className=" lg:text-xl text-base font-normal font-ubuntu border-y-1 lg:py-2 flex items-center">
                                    <GiFlowerTwirl
                                    className="text-Primary lg:text-2xl mr-3"
                                    ></GiFlowerTwirl>
                                     {status}</h3>
                            </div>
                            {/* price */}
                            <div>
                                <h2 className="text-4xl font-bold font-ubuntu text-Primary">${price}</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero_Properties;