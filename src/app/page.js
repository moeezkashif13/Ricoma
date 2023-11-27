import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (

<div className='overflow-hidden'>
<Navbar/>

<div className='relative'>
  


<div className='bg-orange-500'>


<p className='font-bold mx-auto  max-w-[359px] pt-5 pb-11 text-[36px] text-white text-center leading-[44px]'>Dui augue lectus in ut at lorem</p>


<div  className='relative z-20'>



<div className='absolute bg-primary left-[50%] -translate-x-[50%]  w-[322px] h-[332px] rounded-[56px]'></div>



<div className='absolute bg-blue-500 top-[54px]  w-[322px] h-[332px] rounded-[34px] opacity-80'></div>


<div className='absolute bg-green-500 top-[96px] left-[104px]  w-[344px]  h-[294px] rounded-[20px]'></div>



<div  className=' absolute bg-white top-[189px] pt-5 w-full px-mobile'>


<p className='font-bold text-[22px] leading-6 text-center'>Fill out the form to secure the best deal!</p>


<div className='flex flex-wrap my-5 justify-between gap-y-2 '>


{[1,2,3,4].map(()=>{
  return <div className='  w-[calc(50%-5px)] max-w-[243px] bg-[#FAFAFC]  border border-[#AFAFAF]  px-5 py-4 rounded-md'>

    <input type="text" className='w-full bg-transparent outline-none' placeholder='First Name*' name="" id="" />


  </div>
})}

<div className='w-full  bg-[#FAFAFC]  border border-[#AFAFAF] px-5 py-4 rounded-md'>

    <input type="text" className='w-full bg-transparent outline-none' placeholder='Country' name="" id="" />


  </div>


</div>



<div className='w-full bg-pink-500 rounded-md text-white    font-bold text-[30px] leading-5 text-center  h-[80px] flex items-center  justify-center bg-gradient-to-r from-[#FF7200] to-[#FC9500] '>
Get a free quote
</div>


<div className="mt-4 ">


<div className='commonFlex gap-x-3 '>

<div className='max-w-[75px] h-[75px] '>
  <img src="/icon1.png" className='imageCommon' alt="" />
</div>
<div className='max-w-[142px] h-[46px] '>
  <img src="/icon2.png" className='imageCommon' alt="" />
</div>
<div className='max-w-[47px] h-[47px] '>
  <img src="/icon3.png" className='imageCommon' alt="" />
</div>

</div>


<p className='text-[10px] leading-3  text-center pt-3 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius faucibus nisl quis non. Magna ultrices nec enim, aenean morbi. Dui tincidunt posuere malesuada rhoncus facilisi mauris non. </p>


<div className='px-6 py-6 relative bg-[#F3F4F5] '>

<div className='absolute right-0 -top-3 w-[51px] h-[51px] bg-[#FFAA00] flex justify-center items-center'>
  <p>ic</p>
</div>


<p className='font-extrabold text-[14px] leading-5'>Louis Marshall</p>

<p className='leading-6'>I love my Ri 1000. I got one a month or so ago and have printed about 1,000 shirts so far! Great product!</p>

<div className='flex gap-x-2'>
  <p>ic</p>
  <p>ic</p>
  <p>ic</p>
  <p>ic</p>
  <p>ic</p>
</div>


</div>



</div>



</div>


</div>

</div>


<div className='bg-[#0076FF]  relative   mt-[900px] py-36'>


<div className=' mx-auto w-[330px] space-y-5'>


<div className='h-[293px]   rounded-[32px] bg-center bg-cover flex justify-center items-center' style={{backgroundImage:'url(/thumbnail.jpg)'}}>


<div className='w-[94px] h-[94px] flex justify-center items-center bg-[#E27838] rounded-full' style={{boxShadow: '0px 0px 4px 0px #00000080'}}>
  <div className='w-[34px] h-[43px] pl-2 pt-1'>
    <img src="/play.svg" className='imageCommon ' alt="" />
  </div>
</div>

</div>



<div className='font-light leading-10 text-[24px] space-y-6'>
  <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate bibendum et in mattis nec duis nec, magna. Nunc, mattis purus dolor risus commodo. Tempus molestie morbi ultrices nunc. <span className='font-bold text-[#011C3C] bg-[#ffe500]'> Semper nam ridiculus duis bibendum risus, arcu arcu.</span></p>

<p>Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem condimentum posuere cursus quis risus. Mauris, auctor ridiculus blandit lacus. <span className='font-bold text-[#011C3C] bg-[#ffe500]'>Porttitor diam a amet pharetra tellus, senectus augue. Id sed a quis morbi ac odio cursus metus sit. Sapien ut non eu non egestas non mauris.</span> Elit, scelerisque mauris aenean justo. </p>


</div>



<div className='absolute w-[330px]  px-6 rounded-lg bg-white' style={{boxShadow: '0px 4px 22px 0px #00000040'}}>


{[1,2,3].map(()=>{
  return <div className='flex justify-center gap-x-9 py-6  border-b-2 border-[#EEEFF2] last:border-0'>

    <div className='w-[55px] h-[55px] rounded-full bg-[#FFECEC] commonFlex'>
      <img src="/support.svg"  alt="" />
    </div>


  <div>
    <p>Rubik font here</p>
    <p className='uppercase text-[#4F5665] font-semibold text-[20px] leading-8'>Lorem Ipsum</p>
  </div>


  </div>
})}



</div>




</div>


</div>












</div>


<div className='pt-56'>


<div className='w-[calc(100%-15px)]  mx-auto'>


<p className='text-center font-bold text-[28px] leading-8 pb-8 '>Mi tempus ultrices est tempus nibh eu vitae in.</p>


<div className='flex flex-col gap-y-4 '>



{[1,2].map(()=>{
  return <div  style={{boxShadow: '0px 4px 32px 0px #00000040'  }}>

    <div className='bg-[#0F64C8] rounded-t-[12px] font-bold text-[21px] leading-7 text-white py-3 text-center  '><p className='w-[273px] mx-auto'>Starter Single-Head Embroidery Machine</p> </div>

  <div className='h-[320px] bg-[#F5F5F5] pt-5 pb-12 text-center '>
    <div className='w-[157px] h-[182px]  mx-auto'>
      <img src="/machine.png" className='imageCommon' alt="" />
    </div>
    <p className='mt-5 mb-2 font-bold text-[19px] leading-7'>EM-1010</p>
    <p className='text-[#E27838] font-semibold text-xs leading-6'>10 needles</p>
  </div>

<div className=' pb-10 space-y-3'>
  <div className='w-[311px]  mx-auto space-y-3'>


  <div className='-top-4 py-4 bg-white border border-[#EEF2F0] commonFlex flex-col relative gap-y-4 italic' style={{boxShadow: '0px 1px 4px 0px #00000033'}}>

<div className='w-5 h-5 rounded-full bg-purple-500 left-3 absolute top-2'>
  <img src="/facebook-2.png" className='imageCommon' alt="" />
</div>

<div className='w-[51px] h-[51px]  bg-secondary right-3 rounded-lg -top-[25px] absolute commonFlex'>
  <div className='w-[27px] h-[21px] '>
    <img src="/doublequotes.svg" className='imageCommon' alt="" />
  </div>
</div>



  <div className='w-[76px] h-[76px] rounded-full leading-5 '>
    <img src="/person.png" className='imageCommon' alt="" />
  </div>
  <p className='font-medium  text-[14px] '>Sem scelerisque sit viverra.</p>
<p className='font-extrabold '>Viverra.</p>


<div className='flex gap-x-2'>

{[1,2,3,4,5].map(()=>{
  return <div className='w-[18px] h-[18px] '>
  <img src="/star.svg" className='imageCommon' alt="" />
  
  </div>
})}



</div>


  </div>



<div className='flex gap-x-3 justify-center'>
  <div className='w-3 h-3 rounded-full bg-black'></div>
  <div className='w-3 h-3 rounded-full bg-[#00000080]'></div>
</div>


  </div>

  <p className='leading-7 max-w-[330px]  mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur auctor malesuada hendrerit nec, porttitor nunc tristique. Egestas eget fermentum at eget nunc et nisi eu lorem.</p>


<div className='w-[320px] h-[72px] commonFlex  mx-auto font-extrabold text-[19px] leading-5 text-white bg-[#FE8101]' style={{boxShadow: '0px 4px 5px -1px #EE1D240A , 0px 4px 5px -1px #1D58EE24'}}>Dolor.</div>


</div>

  </div>
})}




</div>





</div>



</div>


<Footer/>




</div>



  )
}
