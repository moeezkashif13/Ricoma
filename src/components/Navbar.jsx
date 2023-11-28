

import Link from "next/link";
import {CloseButton, NavbarHamburger} from "./NavbarHamburger";
import { YellowBanner } from "./Footer";
import { CloseCart } from "./CartRelated/Cart";

const NavLinks = [

    {text:'Home',href:'/'},
    {text:'Products',href:'/second-page'},
    {text:'About',href:'/second-page'},

]


const NavigationMenuMobile = ()=>{

    return <div >


<div className="flex items-center px-6 ">
<div className="flex gap-x-3 items-center">
    <Link href='/' className="w-8 h-8 rounded-md">
        <img src="/logo-2.svg" className="imageCommon" alt="" />
    </Link>
    <p className="font-bold ">Distributor Portal</p>
</div>

<CloseButton/>


</div>



<div className="mt-11 px-3  space-y-2 font-semibold text-sm leading-5">


{NavLinks.map((eachLink)=>{
    return <Link href={eachLink.href} style={{transition:'all 0.4s'}} className="rounded-md w-[218px] px-6 space-x-5 py-3.5  hover:bg-[#0F2E69] block">
        <span className="inline-block w-5 h-5 ">ic</span>
        <span>{eachLink.text}</span>
    </Link>
})}



</div>


<div className="absolute bottom-6 left-9 text-xs leading-8">
    <p>Sed duis tortor.</p>
    <p>Amet nulla velit eros morbi pretium est.</p>
</div>


</div>
}


const YourCart = ()=>{

    return <div className="relative  h-full  " >


<div className="px-6  md:px-9">


<CloseCart/>



<div className=" space-y-5">


{[1,2].map(()=>{
    return <div className="flex  gap-x-4 pb-5 border-b border-[#F0F0F5]">

        <div className="w-[77px] h-[77px] rounded-md bg-[#F9F9F9] commonFlex">

    <div className="w-[62px] h-[67px] ">
    <img src="/machine-3.png" className="imageCommon " alt="" />
    </div>


        </div>


    <div className=" flex-grow space-y-1.5">

<div className="flex leading-5 justify-between">
    <p className="font-extrabold text-primary text-[20px] ">EM-1010</p>
    <p className="">$5999</p>
</div>

<div className="text-sm space-y-0.5 leading-5 text-[#565657]">
<p >Starter Embroidery Machine</p>
<p >10-needle | Single-head</p>
</div>

<div className="flex justify-between">


<div className="flex gap-x-2 mobile:gap-x-4   items-center">

<div className="w-5 h-5 rounded-full bg-[#F0F0F5] text-[#6E70FF] commonFlex">ic</div>
<p className="text-sm leading-5 text-black">1</p>
<div className="w-5 h-5 rounded-full bg-[#F0F0F5] text-[#6E70FF] commonFlex">ic</div>


</div>




<div className="flex gap-x-2.5">
    <p className="text-[#474747]">Colors</p>
    <div className="flex px-1.5 items-center rounded-[30px] bg-[#D0D0D0CC] gap-x-2 border border-[#BEBEBE33]" style={{boxShadow: '5px 5px 20px 0px #B5B5B533'}}>
        <div className="w-4 h-4 rounded-full bg-[#22144A]"></div>
        <div className="w-4 h-4 rounded-full bg-[#60C250]"></div>
        <div className="w-4 h-4 rounded-full bg-[#370405]"></div>
    </div>
</div>




</div>



    </div>



    </div>
})}



</div>


<div className="flex mt-6 mb-7 md:mb-24 text-2xl leading-7 text-black">

<p >Order Total</p>

<p className="ml-auto">$14 226</p>

</div>


<div className="bg-[#0076FF] md:w-1/2 md:mx-auto mb-10 py-3 text-center rounded-md">

Checkout

</div>






</div>


<div className="absolute md:hidden checking bottom-0  w-full  bg-red-500 text-black">
    <YellowBanner/>
</div>



    </div>

}



export default async function Navbar(){




    return <div className="bg-primary"><div className="px-mobile  py-[19px] flex justify-between items-center relative z-40 max-w-[1300px] mx-auto"> 




<div style={{transition:'all 0.5s'}} className="fixed h-full pt-6 hiddenNav  w-[calc(100%-60px)] bg-[#002045] text-white top-0 z-40 -right-[100%]">
<NavigationMenuMobile/>
</div>


<div style={{transition:'all 0.5s'}} className="showCartComp  pt-11 md:pt-14   bg-white w-full h-full text-white -top-[100%] z-40 fixed right-0   md:max-w-[481px] md:h-auto md:top-[85px] md:-right-[100%] shadow-2xl ">
<YourCart/>
</div>



<Link href='/' className="w-[103px] ">
    <img src='/logo.svg' className="imageCommon object-contain " alt="" />
</Link>


<div className="hidden md:flex uppercase gap-x-16 text-white font-semibold text-sm leading-5">

{NavLinks.map(eachLink=>{
    return     <Link href={eachLink.href}>{eachLink.text}</Link>
})}




</div>




<div className="flex gap-x-7 items-center">




<NavbarHamburger  />


</div>


    </div>
    </div>
}