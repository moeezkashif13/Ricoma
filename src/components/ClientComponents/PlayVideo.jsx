"use client"

export const PlayVideo = ()=>{


    return <div onClick={()=>{
        document.querySelector('.videoPopup').classList.remove('invisible')
    }}  className='cursor-pointer hover:opacity-90 hover:scale-105 w-[94px] h-[94px] flex justify-center items-center bg-[#E27838] rounded-full' style={{boxShadow: '0px 0px 4px 0px #00000080',transition:'all 0.2s'}}>
    <div className='w-[34px] h-[43px] pl-2 pt-1'>
      <img src="/play.svg" className='imageCommon ' alt="" />
    </div>
  </div>
}


export const PlayVideoCloseButton = ()=>{
    return  <div onClick={()=>{
        document.querySelector('.videoPopup').classList.add('invisible')
    }} className=' cursor-pointer text-right text-3xl text-white font-bold mb-2'>X</div>
    
}