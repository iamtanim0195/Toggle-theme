import React from 'react';
import getSportsData from '../../../lib/getSportsData';
import MySwiper from '../Swiper/Swiper';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ["latin"], weight: ['700'] });

const Collection = async () => {
    const data = await getSportsData();
    return (
        <div className='h-full  pb-10'>
            <div className='my-5 -10 text-center bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C]'>
                <div className='p-5'>
                    <p className={`${poppins.className} text-4xl p-2`}>Collection Spotlight</p>
                    <p className="w-3/4 mx-auto">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                </div>
                <div className='w-3/4 m-auto p-5 '>
                    <MySwiper data={data}></MySwiper>
                </div>
            </div>
        </div>
    );
}

export default Collection;