import React from 'react'

const CategoryBar = () => {
    return (
        <div className='flex justify-between px-[80px] h-20 items-center mt-4 bg-white sticky top-[80px] z-20'>
            <div className='flex gap-16'>
                <div className='flex flex-col items-center w-max gap-2'>
                    <div className='h-[24px]'>
                        <img className='h-full' src='src\assets\icons\category\category-1.jpg' />
                    </div>
                    <span className='text-xs font-semibold'>มีดีไซน์</span>
                </div>
                <div className='flex flex-col items-center w-max gap-2'>
                    <div className='h-[24px]'>
                        <img className='h-full opacity-70' src='src\assets\icons\category\category-1.jpg' />
                    </div>
                    <span className='text-xs opacity-70 font-semibold'>มีดีไซน์</span>
                </div>
                <div className='flex flex-col items-center w-max gap-2'>
                    <div className='h-[24px]'>
                        <img className='h-full opacity-70' src='src\assets\icons\category\category-1.jpg' />
                    </div>
                    <span className='text-xs opacity-70 font-semibold'>มีดีไซน์</span>
                </div>
                <div className='flex flex-col items-center w-max gap-2'>
                    <div className='h-[24px]'>
                        <img className='h-full opacity-70' src='src\assets\icons\category\category-1.jpg' />
                    </div>
                    <span className='text-xs opacity-70 font-semibold'>มีดีไซน์</span>
                </div>
                <div className='flex flex-col items-center w-max gap-2'>
                    <div className='h-[24px]'>
                        <img className='h-full opacity-70' src='src\assets\icons\category\category-1.jpg' />
                    </div>
                    <span className='text-xs opacity-70 font-semibold'>มีดีไซน์</span>
                </div>
                <div className='flex flex-col items-center w-max gap-2'>
                    <div className='h-[24px]'>
                        <img className='h-full opacity-70' src='src\assets\icons\category\category-1.jpg' />
                    </div>
                    <span className='text-xs opacity-70 font-semibold'>มีดีไซน์</span>
                </div>
                <div className='flex flex-col items-center w-max gap-2'>
                    <div className='h-[24px]'>
                        <img className='h-full opacity-70' src='src\assets\icons\category\category-1.jpg' />
                    </div>
                    <span className='text-xs opacity-70 font-semibold'>มีดีไซน์</span>
                </div>
                <div className='flex flex-col items-center w-max gap-2'>
                    <div className='h-[24px]'>
                        <img className='h-full opacity-70' src='src\assets\icons\category\category-1.jpg' />
                    </div>
                    <span className='text-xs opacity-70 font-semibold'>มีดีไซน์</span>
                </div>
                <div className='flex flex-col items-center w-max gap-2'>
                    <div className='h-[24px]'>
                        <img className='h-full opacity-70' src='src\assets\icons\category\category-1.jpg' />
                    </div>
                    <span className='text-xs opacity-70 font-semibold'>มีดีไซน์</span>
                </div>
                <div className='flex flex-col items-center w-max gap-2'>
                    <div className='h-[24px]'>
                        <img className='h-full opacity-70' src='src\assets\icons\category\category-1.jpg' />
                    </div>
                    <span className='text-xs opacity-70 font-semibold'>มีดีไซน์</span>
                </div>
                <div className='flex flex-col items-center w-max gap-2'>
                    <div className='h-[24px]'>
                        <img className='h-full opacity-70' src='src\assets\icons\category\category-1.jpg' />
                    </div>
                    <span className='text-xs opacity-70 font-semibold'>มีดีไซน์</span>
                </div>
                <div className='flex flex-col items-center w-max gap-2'>
                    <div className='h-[24px]'>
                        <img className='h-full opacity-70' src='src\assets\icons\category\category-1.jpg' />
                    </div>
                    <span className='text-xs opacity-70 font-semibold'>มีดีไซน์</span>
                </div>
            </div>
            <div className='p-2 bg-white ring-1 ring-black ring-opacity-20 rounded-full'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentcolor"
                    strokeWidth="5.333"
                    aria-hidden="true"
                    display="block"
                    overflow="visible"
                    viewBox="0 0 32 32"
                    style={{ height: 12, width: 12 }}
                >
                    <path d="M12 4l11.293 11.293a1 1 0 010 1.414L12 28"></path>
                </svg>
            </div>
            <div className='flex items-center gap-2 ring-1 ring-black ring-opacity-10 p-4 rounded-lg'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-hidden="true"
                    display="block"
                    viewBox="0 0 16 16"
                    style={{ height: 14, width: 14 }}
                >
                    <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 115 8zm0 2a1 1 0 100 2 1 1 0 000-2zm6-8a3 3 0 11-2.829 4H2V4h6.17A3.001 3.001 0 0111 2zm0 2a1 1 0 100 2 1 1 0 000-2z"></path>
                </svg>
                <div className='text-xs font-semibold'>ตัวกรอง</div>
            </div>
        </div>
    )
}

export default CategoryBar