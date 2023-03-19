import React from 'react'

const Card = ({image, name, country, rate, design, date, price}) => {
    return (
        <div className='flex flex-col gap-2 h-[405px] text-sm relative'>
            <div className='h-[305px] rounded-lg overflow-hidden'>
                <img className='h-full w-full object-cover' src={image} />
            </div>
            <div>
                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <div className='flex gap-1 font-semibold'>
                            <span>{name}</span>
                            <span>{country}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentcolor"
                                aria-hidden="true"
                                display="block"
                                viewBox="0 0 32 32"
                                style={{ height: 12, width: 12 }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 00-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 001.483 1.061L16 25.951l8.625 4.997a1 1 0 001.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 00-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 00-1.814 0z"
                                ></path>
                            </svg>
                            <span>{rate}</span>
                        </div>
                    </div>
                    <div className='flex flex-col opacity-60'>
                        <span>ออกแบบโดย {design}</span>
                        <span>{date}</span>
                    </div>
                </div>
                <div className='font-semibold mt-2'>฿{price} คืน</div>
            </div>
            <div className='absolute top-4 right-4'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgba(0, 0, 0, 0.5)"
                    stroke="var(--f-mkcy-f)"
                    strokeWidth="2"
                    aria-hidden="true"
                    display="block"
                    overflow="visible"
                    viewBox="0 0 32 32"
                    style={{ height: 24, width: 24, stroke: 'white' }}
                >
                    <path d="M16 28c7-4.733 14-10 14-17a6.977 6.977 0 00-2.05-4.95A6.981 6.981 0 0023 4a6.979 6.979 0 00-4.949 2.05L16 8.101 13.95 6.05A6.981 6.981 0 009 4a6.979 6.979 0 00-4.949 2.05A6.978 6.978 0 002 11c0 7 7 12.267 14 17z"></path>
                </svg>
            </div>

        </div>
    )
}

export default Card