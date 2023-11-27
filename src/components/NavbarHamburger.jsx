"use client"

export const NavbarHamburger = ()=>{

    const showHamburger = ()=>{

        console.log('toggleHamburger  toggleHamburger  toggleHamburger');
        
        document.querySelector('.hiddenNav').classList.remove('-right-[100%]')
        document.querySelector('.hiddenNav').classList.add('right-0')


            }


    return <div className="md:hidden  w-[41px] h-[27px]  cursor-pointer " onClick={showHamburger}>

    <img src="/hamburger.svg" className="imageCommon" alt="" />
    
    
    </div>
}


export const CloseButton = ()=>{
    return <div onClick={()=>{

        document.querySelector('.hiddenNav').classList.remove('right-0')
        document.querySelector('.hiddenNav').classList.add('-right-[100%]')
    
    }} className="ml-auto w-5 h-5 commonFlex ">
        
    <img src="/close.png" className="imageCommon" alt="" />
    
    </div>
}