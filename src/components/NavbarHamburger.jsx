"use client"

export const NavbarHamburger = ()=>{

    const showHamburger = ()=>{

        console.log('toggleHamburger  toggleHamburger  toggleHamburger');
        
        document.querySelector('.hiddenNav').classList.remove('-right-[100%]')
        document.querySelector('.hiddenNav').classList.add('right-0')


            }


        const showCart = ()=>{

            document.querySelector('.showCartComp').classList.remove('-top-[100%]')
            document.querySelector('.showCartComp').classList.add('top-0')

        }




    return <>
    
    <div onClick={showCart} className=" w-[47px] h-[37px] relative">

    <img src="/cart.svg" className="imageCommon" alt="" />

<div className="w-6 h-6 rounded-full bg-[#0076FF] border-2 border-[#131921] absolute -right-2 -top-2 commonFlex font-bold text-xs leading-4 text-white">2</div>


</div>

<div className="md:hidden  w-[41px] h-[27px]  cursor-pointer " onClick={showHamburger}>

    <img src="/hamburger.svg" className="imageCommon" alt="" />
    
    
    </div>

    </>

}


export const CloseButton = ()=>{
    return  <div onClick={()=>{

        document.querySelector('.hiddenNav').classList.remove('right-0')
        document.querySelector('.hiddenNav').classList.add('-right-[100%]')
    
    }} className="ml-auto w-5 h-5 commonFlex ">
        
    <img src="/close.png" className="imageCommon" alt="" />
    
    </div>
}