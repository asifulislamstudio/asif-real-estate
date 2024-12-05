import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import {Navigation, Pagination} from 'swiper/modules';

const PropertyType = ({ property }) => {

    return (
        <div className="max-w-screen-xl mx-auto p-16">
            <div>
                <p className="text-Primary font-roboto font-semibold uppercase">Property Type</p>
                {/* wwa title */}
                <h1 className="text-white font-bold font-ubuntu text-4xl my-4 leading-16">Let’s Explore by Property Type</h1>
                {/* Type Card */}
                <div className='flex justify-around gap-x-4'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            property.map(tProperty => (
                                <SwiperSlide key={tProperty.id}>
                                    <div className='bg-white rounded-lg w-64 h-60 flex flex-col items-center justify-around my-8 pb-12 pt-8 py-8 px-4 hover:bg-Primary hover:text-white duration-300 '>
                                    <img src={tProperty.icon} className='text-Primary hover:text-white' alt="" />
                                    <h3 className='font-ubuntu text-2xl text-center font-semibold '>{tProperty.type}</h3>
                                    <p className='font-roboto font-normal text-gray-700/40'>listing {tProperty.type.length}</p>
                                </div>
                                </SwiperSlide>
                                
                            ))
                        }
                  </Swiper>
                </div>
                
            </div>
        </div>
    );
};

export default PropertyType;