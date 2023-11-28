"use client"


export const CloseCart = ()=>{
    return <div className="flex text-black border-b pb-2 items-center mb-8 border-[#F0F0F5]">
    <div className="font-bold text-2xl leading-8">Your Cart</div>
<div onClick={()=>{
    
    document.querySelector('.showCartComp').classList.remove('top-0')
    document.querySelector('.showCartComp').classList.add('-top-[100%]')

}} className="ml-auto text-[#82828B]">icon</div>
</div>
}