import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='h-[80px] items-center sticky top-0 bg-white ring-1 ring-black ring-opacity-10 z-30'>
            <div className='flex justify-between px-[80px] items-center'>
                <div className='w-[102px] h-[80px] flex items-center'>
                    <NavLink to="/"><img src="../src/assets/logo/airbnb-nav-logo.png" /></NavLink>
                </div>
                <div className='flex text-sm font-semibold items-center w-max ring-1 ring-black ring-opacity-10 rounded-full h-12'>
                    <button className='pl-8'>ที่ไหนก็ได้</button>
                    <button className='px-8'>สัปดาห์ ทุกเวลา</button>
                    <button className='flex w-max items-center'>
                        <div className='w-max font-light text-gray-500 pr-3'>เพิ่มผู้เข้าพัก</div>
                        <div className='pr-2'>
                            <div className='p-[10px] bg-[var(--primary-color)] rounded-full'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentcolor"
                                    strokeWidth="5.333"
                                    aria-hidden="true"
                                    display="block"
                                    overflow="visible"
                                    viewBox="0 0 32 32"
                                    style={{ height: 12, width: 12, stroke: 'white' }}
                                >
                                    <path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2 2 6.925 2 13s4.925 11 11 11zm8-3l9 9"></path>
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>
                <div className='flex gap-6'>
                    <div className='flex items-center gap-6'>
                        <button className='text-sm font-semibold'>ให้เช่าที่พักกับ Airbnb</button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentcolor"
                            aria-hidden="true"
                            display="block"
                            viewBox="0 0 16 16"
                            style={{ height: 16, width: 16 }}
                        >
                            <path d="M8.002.25a7.77 7.77 0 017.748 7.776 7.75 7.75 0 01-7.521 7.72l-.246.004a7.75 7.75 0 01-7.73-7.513L.25 7.992A7.75 7.75 0 018.002.25zm1.949 8.5H6.048c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 003.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 003.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576l-.115.046a6.257 6.257 0 00-3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904C9.796 4.347 8.774 1.907 8.06 1.756l-.065-.007zm2.28.432l.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 00-3.929-5.068z"></path>
                        </svg>
                    </div>
                    <div className='flex items-center gap-2 ring-1 ring-black ring-opacity-10 rounded-full py-1 relative'>
                        <div className="pl-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentcolor"
                                strokeWidth="3"
                                aria-hidden="true"
                                display="block"
                                overflow="visible"
                                viewBox="0 0 32 32"
                                style={{ height: 16, width: 16 }}
                            >
                                <path d="M2 16h28M2 24h28M2 8h28"></path>
                            </svg>
                        </div>
                        <div className="h-8 opacity-50 pr-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentcolor"
                                aria-hidden="true"
                                display="block"
                                viewBox="0 0 32 32"
                                style={{ height: "100%", width: "100%" }}
                            >
                                <path d="M16 .7C7.563.7.7 7.563.7 16S7.563 31.3 16 31.3 31.3 24.437 31.3 16 24.437.7 16 .7zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 016.451-4.4A6.507 6.507 0 019.5 14c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 01-3.019 5.491 12.42 12.42 0 016.452 4.4C23.605 26.816 20.021 28.7 16 28.7z"></path>
                            </svg>
                        </div>
                        <div className='bg-[var(--primary-color)] px-[5px] py-[5px] rounded-full ring-1 ring-white absolute top-[1px] right-[3px]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar