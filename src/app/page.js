import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

import { Rubik } from 'next/font/google'
import {PersonCardMobile, Slider} from '@/components/ClientComponents/Slider'




const RubikFont = Rubik({ subsets: ['latin'] })


export const PersonCard = ()=>{
  return   <div className=' top-0  lg:-top-8 py-4  bg-white border border-[#EEF2F0] commonFlex flex-col relative gap-y-4 italic  lg:flex-row lg:w-full lg:justify-start lg:px-8  ' style={{boxShadow: '0px 1px 4px 0px #00000033'}}>

  <div className='w-5 h-5 rounded-full  left-3 absolute top-2'>
    <img src="/facebook-2.png" className='imageCommon' alt="" />
  </div>
  
  <div className='w-[51px] h-[51px]  bg-secondary right-3 rounded-lg -top-[25px] absolute commonFlex'>
    <div className='w-[27px] h-[21px] '>
      <img src="/doublequotes.svg" className='imageCommon' alt="" />
    </div>
  </div>
  
  
    <div className='w-[76px] h-[76px] lg:w-[92px] lg:h-[92px] rounded-full leading-5 '>
      <img src="/person.png" className='imageCommon' alt="" />
    </div>
  
  <div className='flex  flex-col gap-y-4 items-center lg:items-start lg:ml-5 lg:gap-y-2'>
  
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
  
  
    </div>
}


export default function Home() {
  return (

<div className='overflow-hidden'>
<Navbar/>

{/* HEREEE */}

<div className='bg-[#015DC9] pt-12 pb-[50px] lg:pb-[180px]'>

<div className='relative  max-w-[1250px] lg:mx-auto lg:flex lg:flex-row-reverse lg:gap-x-16'>

  

<div className='lg:h-auto  lg:w-1/2   '>



<p className=' lg:hidden font-bold mx-auto  max-w-[359px] pt-5 pb-11 text-[36px] text-white text-center leading-[44px]'>Dui augue lectus in ut at lorem</p>


<div  className='relative z-20 '>



<div className='absolute bg-primary  left-[50%] lg:top-6 -translate-x-[50%] lg:left-0 lg:translate-x-0  w-[322px] h-[332px] rounded-[56px]'></div>



<div className='absolute  top-[54px] lg:-z-10 lg:right-0 lg:top-0 w-[322px] h-[332px] rounded-[34px] opacity-80'>
  <img src="/bg1.svg" className='imageCommon' alt="" />
</div>


<div className=' absolute bg-[#FF7601]  top-[96px] lg:top-16 right-0  lg:right-0  w-[344px]  h-[294px] rounded-[20px]' >
    
    <img src="/bannerImage.svg" className='imageCommon object-contain' alt="" />

</div>


<div  className=' absolute bg-white top-[189px] pt-5 pb-6 w-full lg:px-12 lg:rounded-b-2xl px-mobile lg:space-y-5 '>


<p className='font-bold text-[22px] leading-6 text-center lg:hidden'>Fill out the form to secure the best deal!</p>

<p className='hidden lg:block font-medium text-3xl leading-8 text-center lg:pb-4'>Dictumst dui egestas.</p>


<div className='flex flex-wrap my-5 justify-between  gap-y-2 '>


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


<div className='commonFlex lg:pb-4 gap-x-3 '>

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


<p className='text-[10px] hideOnDesktop leading-3  text-center pt-3 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius faucibus nisl quis non. Magna ultrices nec enim, aenean morbi. Dui tincidunt posuere malesuada rhoncus facilisi mauris non. </p>


<div className='px-6 lg:px-8 py-6  relative bg-[#F3F4F5] '>

<div className='absolute right-2 -top-3 w-[51px] h-[51px] bg-[#FFAA00] lg:bg-[#FF7701] flex justify-center items-center'>
  
  <img src="/doublequotes.svg"  width={28} alt="" />
  
</div>


<p className='font-extrabold text-[14px] leading-5'>Louis Marshall</p>

<p className='leading-6 lg:my-2'>I love my Ri 1000. I got one a month or so ago and have printed about 1,000 shirts so far! Great product!</p>

<div className='flex gap-x-2'>
  <div className='w-5 h-5 '><img src="/star.svg" className='imageCommon' alt="" /></div>
  <div className='w-5 h-5 '><img src="/star.svg" className='imageCommon' alt="" /></div>
  <div className='w-5 h-5 '><img src="/star.svg" className='imageCommon' alt="" /></div>
  <div className='w-5 h-5 '><img src="/star.svg" className='imageCommon' alt="" /></div>
  <div className='w-5 h-5 '><img src="/star.svg" className='imageCommon' alt="" /></div>

</div>


</div>



<p className='text-[10px] lg:w-[475px] lg:leading-4  lg:mx-auto hideOnMobile leading-3  text-center pt-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius faucibus nisl quis non. Magna ultrices nec enim, aenean morbi. Dui tincidunt posuere malesuada rhoncus facilisi mauris non. </p>




</div>



</div>


</div>

</div>


{/* SECONDD SIDEEE */}

<div className='bg-  lg:w-1/2 relative   mt-[900px] lg:mt-0 pt-20 pb-36 lg:py-0'>


<div className=' mx-auto w-[calc(100%-60px)]   lg:w-full space-y-5'>


{/* hidden for desktop */}
<div className='h-[293px]  max-w-[330px] mx-auto lg:hidden  rounded-[32px] bg-center bg-cover flex justify-center items-center' style={{backgroundImage:'url(/thumbnail.jpg)'}}>


<div className='w-[94px] h-[94px] flex justify-center items-center bg-[#E27838] rounded-full' style={{boxShadow: '0px 0px 4px 0px #00000080'}}>
  <div className='w-[34px] h-[43px] pl-2 pt-1'>
    <img src="/play.svg" className='imageCommon ' alt="" />
  </div>
</div>

</div>

{/* hidden for desktop  */}

<p className='font-bold hideOnMobile text-6xl leading-[78px] text-white'>Dui augue lectus in ut at lorem</p>


<div className='font-light leading-10 text-[24px] text-white space-y-6'>
  <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate bibendum et in mattis nec duis nec, magna. Nunc, mattis purus dolor risus commodo. Tempus molestie morbi ultrices nunc. <span className='font-bold text-[#011C3C] bg-[#ffe500]'> Semper nam ridiculus duis bibendum risus, arcu arcu.</span></p>

<p>Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem condimentum posuere cursus quis risus. Mauris, auctor ridiculus blandit lacus. <span className='font-bold text-[#011C3C] bg-[#ffe500]'>Porttitor diam a amet pharetra tellus, senectus augue. Id sed a quis morbi ac odio cursus metus sit. Sapien ut non eu non egestas non mauris.</span> Elit, scelerisque mauris aenean justo. </p>



<div className='h-[293px] w-[461px]   rounded-[32px] bg-center bg-cover hidden lg:flex justify-center items-center' style={{backgroundImage:'url(/thumbnail.jpg)'}}>

<div className='w-[94px] h-[94px] flex justify-center items-center bg-[#E27838] rounded-full' style={{boxShadow: '0px 0px 4px 0px #00000080'}}>
  <div className='w-[34px] h-[43px] pl-2 pt-1'>
    <img src="/play.svg" className='imageCommon ' alt="" />
  </div>
</div>

</div>


</div>



<div className='absolute w-[calc(100%-60px)] max-w-[330px]  lg:flex lg:w-[1250px] lg:max-w-[1250px] lg:h-[200px] lg:items-center  px-6 rounded-lg bottom-[-13%] sm:-bottom-[20%] lg:-bottom-[25%]  lg:pl-24 lg:pr-24 bg-white' style={{boxShadow: '0px 4px 22px 0px #00000040'}}>

{[{text:'24/7',icon:'/support.svg',},{text:'30+',icon:'/icon4.png',},{text:'50%',icon:'/icon5.png',},].map((elem)=>{
  return <div className='flex justify-center lg:w-1/3   gap-x-9 py-6  border-b-2 border-[#EEEFF2] last:border-0 lg:border-b-0 lg:border-r-2'>

    <div className='w-[55px] h-[55px] rounded-full bg-[#FFECEC] commonFlex'>
      <img src={elem.icon}  alt="" />
    </div>


  <div className={` lg:pr-8 ${RubikFont.className} `} >
    <p className='lg:font-bold lg:text-2xl lg:leading-8'>{elem.text}</p>
    <p className='uppercase text-[#4F5665] font-semibold text-[20px] leading-8'>Lorem Ipsum</p>
  </div>


  </div>
})}



</div>




</div>


</div>

{/* SECONDD SIDEEE */}



</div>

</div>

{/* HEREEE */}




<div className='pt-48 lg:pt-44 '>


<div className='w-[calc(100%-15px)]  max-w-[1200px]  mx-auto'>



<p className='text-center block lg:hidden font-bold text-[28px] leading-8 pb-8 '>Mi tempus ultrices est tempus nibh eu vitae in.</p>


<p className='hidden lg:block font-bold text-[64px] text-center leading-[70px] lg:mb-10'>Pellentesque tortor <br /> aliquet arcu nunc.</p>


<div className='flex flex-col gap-y-4 lg:flex-row lg:justify-between'>




{[1,2].map((elem,index)=>{

  return <div  className='lg:w-[calc(50%-5px)] lg:max-w-[578px]' style={{boxShadow: '0px 4px 32px 0px #00000040'  }}>

    <div className='bg-[#0F64C8] rounded-t-[12px] font-bold text-[21px] leading-7 text-white py-3 text-center  '><p className='w-[273px] mx-auto'>Starter Single-Head Embroidery Machine</p> </div>

  <div className={`h-[320px] bg-[#F5F5F5] pt-5 pb-6 text-center ${index==1&&' !text-left'} px-4`}>

{index==0  && <> <div className={`w-[157px] h-[182px] ${index!=1&&' mx-auto'} `}>
      <img src="/machine.png" className='imageCommon' alt="" />
    </div>
    <p className={`mt-5 mb-2 font-bold text-[19px] leading-7`}>EM-1010</p>
    <p className={`text-[#E27838] font-semibold text-xs leading-6`}>10 needles</p>
    </>
}

{index==1&& <Slider/>}


  </div>




<div className=' pb-10 space-y-3 '>


  <div className='w-[311px]  mx-auto   lg:w-[calc(100%-32px)] space-y-3'>

  <PersonCardMobile/>



<div className="hideOnMobile  space-y-7 ">
<PersonCard/>
<PersonCard/>

</div>




<div className=' gap-x-3 justify-center hidden'>
  <div className='w-3 h-3 rounded-full bg-black'></div>
  <div className='w-3 h-3 rounded-full bg-[#00000080]'></div>
</div>


  </div>

  <p className='leading-7 max-w-[330px] pt-4 lg:pb-4 lg:w-[calc(100%-32px)] lg:max-w-full lg:text-left   mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur auctor malesuada hendrerit nec, porttitor nunc tristique. Egestas eget fermentum at eget nunc et nisi eu lorem.</p>


<div className='w-[320px] lg:w-[465px] h-[72px] commonFlex  mx-auto font-extrabold text-[19px] leading-5 text-white bg-[#FE8101]' style={{boxShadow: '0px 4px 5px -1px #EE1D240A , 0px 4px 5px -1px #1D58EE24'}}>Dolor.</div>


</div>

  </div>
})}




</div>





</div>



</div>


<div className='mt-8 lg:mt-24'>
<Footer/>
</div>



</div>



  )
}
