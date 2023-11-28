"use client"

import { PersonCard } from '@/app/page';
import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useRef } from 'react';


export const  Slider = ()=>{


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
  

  <div onClick={goToNext} className='absolute w-12 md:w-16 h-12 md:h-16 rounded-full bg-black md:-right-[48px] right-0  top-[35%] -translate-y-[35%] text-white cursor-pointer  z-30 commonFlex'>
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


export const PersonCardMobile = ()=>{

  const splideRef = useRef();

  useEffect(()=>{

    console.log(splideRef.current);
    // splideRef.current.on( 'pagination:mounted', function ( data ) {
    //   // You can add your class to the UL element
    //   data.list.classList.add( 'splide__pagination--custom' );
    
    //   // `items` contains all dot items
    //   data.items.forEach( function ( item ) {
    //     item.button.textContent = String( item.page + 1 );
    //   } );
    // } );
    

  },[])


  return <Splide ref={splideRef} options={{perPage:1,arrows:false,type:'loop',classes:{

    pagination: 'splide__pagination customPagination',



  }}}  className='z-50 hideOnDesktop -mt-16 h-full' hasTrack={false}>

<SplideTrack className='pt-10 h-full z-50'>
  
  {[1,2,3].map((elem)=>{
    return <SplideSlide className='z-50'><PersonCard/></SplideSlide>
  })}

  
  </SplideTrack>  
  
  
  </Splide>

}