import React from 'react'

const RoomHeader = () => {
    return (
        <div className='px-[80px] mt-8'>
            <div className='text-3xl'>Samujana Twenty-Four</div>
            <div className='flex justify-between'>
                <div className='font-semibold mt-3 flex gap-2'>
                    <span className='underline decoration-1'>2 รีวิว</span>
                    <span>·</span>
                    <span className='underline decoration-1'>Koh Samui Suratthani ไทย</span>
                </div>
                <div className='flex items-center gap-4 font-semibold'>
                    <div className='flex items-center gap-2'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentcolor"
                            strokeWidth="2"
                            aria-hidden="true"
                            display="block"
                            overflow="visible"
                            viewBox="0 0 32 32"
                            style={{ height: 16, width: 16 }}
                        >
                            <path d="M27 18v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9M16 3v23V3zM6 13l9.293-9.293a1 1 0 011.414 0L26 13"></path>
                        </svg>
                        <span className='underline decoration-1'>แชร์</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentcolor"
                            strokeWidth="2"
                            aria-hidden="true"
                            display="block"
                            overflow="visible"
                            viewBox="0 0 32 32"
                            style={{ height: 16, width: 16 }}
                        >
                            <path d="M16 28c7-4.733 14-10 14-17a6.977 6.977 0 00-2.05-4.95A6.981 6.981 0 0023 4a6.979 6.979 0 00-4.949 2.05L16 8.101 13.95 6.05A6.981 6.981 0 009 4a6.979 6.979 0 00-4.949 2.05A6.978 6.978 0 002 11c0 7 7 12.267 14 17z"></path>
                        </svg>
                        <span className='underline decoration-1'>บันทึก</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomHeader