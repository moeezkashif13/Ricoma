"use client"

export default function ProductDetails({index}){
    return <>
        <div onClick={()=>{

document.querySelectorAll('.detailsBox')[index].classList.toggle('hidden')

}} className="w-8 h-8 rounded-full absolute cursor-pointer right-5 z-20 top-4  bg-white commonFlex" style={{boxShadow: '0px 4px 15px 0px #0000001A'}}></div>


<div className="detailsBox hidden  absolute cursor-pointer py-4 px-6 w-[312px] rounded-[15px] shadow-lg right-5 2xl:-right-[164px] z-20 top-14  bg-white commonFlex" style={{boxShadow: '0px 4px 15px 0px #0000001A'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit blandit in ullamcorper egestas massa. At nibh dictum vulputate gravida sollicitudin lectus metus nunc massa. Ut ac at consectetur non aliquet. Eget mi nunc erat.
</div>
    </>
}