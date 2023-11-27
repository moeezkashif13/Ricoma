

import {CloseButton, NavbarHamburger} from "./NavbarHamburger";


const NavigationMenuMobile = ()=>{
    return <>


<div className="flex items-center px-6">
<div className="flex gap-x-3 items-center">
    <div className="w-8 h-8 rounded-md">
        <img src="/logo-2.svg" className="imageCommon" alt="" />
    </div>
    <p className="font-bold ">Distributor Portal</p>
</div>

<CloseButton/>


</div>





<div className="mt-11 px-3  space-y-2 font-semibold text-sm leading-5">


{[1,2,3].map(()=>{
    return <div style={{transition:'all 0.4s'}} className="rounded-md w-[218px] px-6 space-x-5 py-3.5  hover:bg-[#0F2E69] ">
        <span className="inline-block w-5 h-5 ">ic</span>
        <span>Home</span>
    </div>
})}



</div>


<div className="absolute bottom-6 left-9 text-xs leading-8">
    <p>Sed duis tortor.</p>
    <p>Amet nulla velit eros morbi pretium est.</p>
</div>


</>
}


export default async function Navbar(){




    return <div className="px-mobile bg-primary py-[19px] flex justify-between items-center relative z-40"> 

<div style={{transition:'all 0.5s'}} className="fixed h-full pt-6 hiddenNav  w-[calc(100%-60px)] bg-[#002045] text-white top-0 z-40 -right-[100%]">
<NavigationMenuMobile/>
</div>


<div className="w-[103px] ">
    <img src='/logo.svg' className="imageCommon object-contain " alt="" />
</div>


<div className="flex gap-x-7 items-center">

<div className="bg-orange-500 w-[47px] h-[37px] "></div>


<NavbarHamburger  />


</div>


    </div>
}