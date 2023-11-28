"use client"

import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useRef } from 'react';


export default function Slider(){

    const splideRef = useRef();

    const goToNext = ()=>{

        
        splideRef.current.go('+${i}')
    }


    return <Splide ref={splideRef} className=' h-full relative' options={{pagination:false,perPage:2,type:'loop',arrows:false,padding:{right:'4rem'},
    
    breakpoints:{
      768:{
        perPage:2,
        padding:{right:'0rem'},
        gap: '60px'
      }
    }
    
    }} hasTrack={false}>
  

  <div onClick={goToNext} className='absolute w-16 h-16 rounded-full bg-black -right-[48px] top-[35%] -translate-y-[35%] text-white cursor-pointer  z-30 commonFlex'>
    <img src="/greaterthan.svg" className='pl-1' alt="" />
  </div>



    <SplideTrack className='h-full'>

{[1,2,3,4,5].map(()=>{
    return         <SplideSlide className=''>

    <> <div className={`w-[157px] h-[182px]  `}>
          <img src="/machine.png" className='imageCommon' alt="" />
        </div>
        <p className={`mt-5 mb-2 font-bold text-[19px] leading-7 text-center`}>EM-1010</p>
        <p className={`text-[#E27838] font-semibold text-xs leading-6 text-center`}>10 needles</p>
        </>
    
            </SplideSlide>
})}


    </SplideTrack>
    
    
    </Splide>
}