import React from 'react'

const RoomTitle = () => {
    return (
        <div className='px-[80px] mt-12'>
            <div>
                <div className='text-3xl'>ที่พักสุดหรูในKoh Samui Suratthani ไทย</div>
                <ul className='flex gap-2 mt-4'>
                    <li>16 คนขึ้นไป</li>
                    <li>·</li>
                    <li>8 ห้องนอน</li>
                    <li>·</li>
                    <li>8 เตียง</li>
                    <li>·</li>
                    <li>ห้องน้ำ 10 ห้อง</li>
                </ul>
            </div>
            <div className='flex mt-8 h-[108px] gap-4 py-8'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentcolor"
                    aria-hidden="true"
                    display="block"
                    viewBox="0 0 32 32"
                    style={{ height: 24, width: 24 }}
                >
                    <path d="M2 4c0-.852.986-1.297 1.623-.783l.084.076 25 25c.603.602.22 1.614-.593 1.701L28 30H3a1 1 0 01-.993-.883L2 29zm2 2.415V28h21.585L21.5 23.914l-1.793 1.793-1.414-1.414 1.792-1.794-2.585-2.585-1.793 1.793-1.414-1.414 1.792-1.794-2.585-2.585-1.793 1.793-1.414-1.414 1.792-1.794L9.5 11.914l-1.793 1.793-1.414-1.414 1.792-1.794zM7 17c0-.852.986-1.297 1.623-.783l.084.076 7 7c.603.602.22 1.614-.593 1.701L15 25H8a1 1 0 01-.993-.883L7 24zm5.293-15.207a1 1 0 011.32-.083l.094.083 15.5 15.5a1 1 0 01.15.192l.057.109 2 4.5c.332.747-.321 1.538-1.095 1.39l-.106-.026-5-1.5a1 1 0 01-.327-.169l-.093-.082-15.5-15.5a1 1 0 01-.083-1.32l.083-.094zM9 19.415V23h3.585zm7.25-12.251l-1.585 1.585L26.03 20.115l2.672.801-1.04-2.339zM13 3.915L11.415 5.5l1.835 1.834 1.585-1.585z"></path>
                </svg>
                <div className='flex flex-col'>
                    <span className='font-semibold'>ออกแบบโดย</span>
                    <span className='font-light text-base'>Gary Fell, GFAB Architects</span>
                </div>
            </div>
        </div>
    )
}

export default RoomTitle