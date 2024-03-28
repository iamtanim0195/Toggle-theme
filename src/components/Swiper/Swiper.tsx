'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import React from 'react'
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ["latin"], weight: ['400'] });

type DataProps = {
    id: number,
    title: string,
    events: number,
    sport: string,
    image: string,
    date: string,
    day: string,
    time: string,
    add: string,
    btn: string,
}

const MySwiper = ({ data }) => {
    return (
        <div className='w-full '>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true} modules={[Navigation]}
            >
                {data?.spotlight.map((item: DataProps) => ( // Accessing sports property from the first element
                    <SwiperSlide key={item.id}>
                        <div
                            className='bg-white w-[20vw] text-center flex flex-col  justify-between   p-2  dark:bg-zinc-700 overflow-hidden'
                        >
                            <div className=''>
                                <Image
                                    src={item?.image}
                                    width={500}
                                    height={500}
                                    alt={item?.title}
                                    priority={false}
                                    title={item?.title}
                                    className='h-96 pb-2'
                                />
                                <div className='w-full h-7 relative '>
                                    <div className='w-11  h-11 bg-[#F3F9FF] dark:bg-[#221A2C] rounded-full absolute -left-10 top-0'>
                                    </div>
                                    <div className='w-[80%] h-6 border-b-2 border-dashed mx-auto'></div>
                                    <div className='w-11  h-11 bg-[#F9F9FF] dark:bg-[#221A2C] rounded-full absolute -right-10 top-0'>
                                    </div>
                                </div>
                                <p className=''>{item?.title}</p>
                            </div>
                            <div className={`${poppins.className} flex mx-auto`}>
                                <p>{item.date}</p>
                                <p> | {item.day} | </p>
                                <p>{item.time}</p>
                            </div>
                            <p>{item.add}</p>
                            <p className='bg-black p-3 w-60 mx-auto'>{item.btn}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default MySwiper;