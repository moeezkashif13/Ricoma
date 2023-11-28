"use client"

import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



export default function TempPage(){

    return <div className="h-screen bg-indigo-500 flex justify-center items-center">


<div className="w-[75%] h-[90%] bg-orange-500">


<Splide hasTrack={ false }>
  <SplideTrack>
    <SplideSlide>...</SplideSlide>
    <SplideSlide>...</SplideSlide>
    <SplideSlide>...</SplideSlide>
    <SplideSlide>...</SplideSlide>
    <SplideSlide>...</SplideSlide>
  </SplideTrack>
</Splide>



</div>


    </div>

}