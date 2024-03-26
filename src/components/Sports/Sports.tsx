import React from 'react';
import getSportsData from '../../../lib/getSportsData';
import Image from 'next/image';
type DataProps = {
    id: number,
    title: string,
    events: number,
    sport: string,
    image: string,
}

const Sports = async () => {
    const data = await getSportsData();
    return (
        <div>
            <h1>Sports</h1>
            <div className='flex  w-5/6 gap-3 overflow-hidden '>
                {data.sports.map((item: DataProps) => ( // Accessing sports property from the first element
                    <div key={item.id}
                        className='shadow-lg shadow-white p-2 w-96 bg-zinc-700 overflow-hidden'
                    >
                        <Image
                            src={item?.image}
                            width={500}
                            height={500}
                            alt={item?.title}
                            priority={false}
                            title={item?.title}
                            className='h-96 pb-2 transition duration-300 ease-in-out hover:scale-x-150' />
                        <p className='p'>{item?.title}</p>
                        <div className='flex gap-5 p-3 bg-zinc-800 '>
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
                <div>
                    add
                </div>
            </div>
        </div>
    );
}

export default Sports;
