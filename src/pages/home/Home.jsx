import React from 'react'
import Card from '../../components/Card'
import roomsData from '../../../roomsData'

const Home = () => {
  return (
    <div className='grid grid-cols-4 px-[80px] mt-4 gap-x-5 gap-y-10'>
        {roomsData.rooms.map((room) => (
            <Card key={room.id} id={room.id} image={room.image} name={room.name} location={room.location} country={room.country} rate={room.rate} design={room.design} date={room.date} price={room.price}/>
        ))}
        {/* <Card id="1234" image="https://a0.muscache.com/im/pictures/monet/Luxury-20470768/original/cc213ade-c939-4e2f-b0af-0149bda85030?im_w=720" name="Samujana Twenty-Four" location="เกาะสมุย" country="ไทย" rate="4.55" design="Gary Fell, GFAB Architects" date="26-31 มี.ค." price="122,658"/>
        <Card id="1235" image="https://a0.muscache.com/im/pictures/ffb001b7-92a3-413f-ae51-e5b2c1df5580.jpg?im_w=720" name="Cabin 2 - Modern Cabin with panoramic view" location="Calaca" country="ฟิลิปปินส์" rate="4.94" design="Fredo Taffin" date="19-26 มี.ค." price="510,803"/> */}
        {/* <Card image="" name="" country="" rate="" design="" date="" price=""/> */}
    </div>
  )
}

export default Home