import React from 'react';
import getSportsData from '../../../lib/getSportsData';
import Image from 'next/image';
import AppBtn from '../AppBtn';

const Sports = async () => {
    const data= await getSportsData();
    const handleClick = () => {
        console.log('Button clicked');
    };
    return (
        <div className='mt-5 w-full'>
            <h1 className='mb-4 border-b-4 border-blue-500 w-14'>Sports</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-3 2xl:gap-5  overflow-hidden '>
                {data?.sports.map((item) => ( // Accessing sports property from the first element
                    <div key={item.id}
                        className='flex flex-col justify-between p-2 mx-auto  w-[75vw] md:w-64 lg:w-72 2xl:w-96 dark:bg-zinc-700 bg-white border border-gray-200 shadow  dark:border-gray-700'
                    >
                        <div className=''>
                            <Image
                                src={item?.image}
                                width={500}
                                height={500}
                                alt={item?.title}
                                priority={false}
                                title={item?.title}
                                className='object-cover h-96 pb-2 '
                            />
                            <p className=''>{item?.title}</p>
                        </div>
                        <div className='flex gap-3 p-2 bg-[#F7F7F8] dark:bg-zinc-800 '>
                            <div>
                                <p>Total Events</p>
                                <p>{item?.events} Events</p>
                            </div>
                            <div>
                                <p>Sport</p>
                                <p>{item?.sport}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <div className=' p-3 relative  shadow  w-[75vw] md:w-64 lg:w-72 2xl:w-96 mx-auto  dark:bg-zinc-700 bg-white border border-gray-200  dark:border-gray-700 '>
                    <div className='border border-[#006555]'>
                        <Image
                            src="https://i.ibb.co/vXGdSN7/f71497e0e3af85c77fa47046bb1f23cb.jpg"
                            width={500}
                            height={500}
                            alt="Advertisement image"
                            priority={false}
                            className=' pb-2 '
                        />
                        <p className=' absolute top-3 right-3 text-white bg-black bg-opacity-75 px-2 py-1 '>Ad</p>
                        <div className=' px-1 pb-2'>
                            <p className='text-xl font-bold pb-2'>Advertisement title</p>
                            <p className='text-sm '>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mx-auto w-36 my-10'>
                <AppBtn label="See More" />
            </div>
        </div>
    );
}

export default Sports;
