import React from 'react'

const Card = ({card , index , selected }) => {
  return (
    <div className='h-full relative'>
        {/* ทำ card ทั้งหมด */}
        <div className={`h-full rounded-xl flex items-center justify-center ${card.bgCardColor}`} > 
            {/* ใช้ ${} เพื่อต้องการปรับปรุงข้างใน {} ที่ซับซ้อน */}
            <span 
            className='text-white text-[1.5rems] absolute top-5 left-5 '>
                {card.icon}</span>
            <h1 
            className={`${card.textColor} ${
                selected === index ? "rotate-0 text-[5rem]":"text-[2rem] rotate-90"
                } font-bold transition-all ease-in-out duration-[2000ms]`}
            >
                {card.title}</h1>    
            
        </div>
        
    </div>
  )
}

export default Card