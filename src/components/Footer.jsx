export default function Footer(){
    return <div className="bg-green-500">


<div className="bg-primary pt-10 pb-6 space-y-8">
<div className="w-[185px] h-[48px]  mx-auto">
    <img src="/logo.svg" className="imageCommon" alt="" />
</div>


<div className="px-8">

<div>
    

<div className="h-[176px] bg-cover bg-center   rounded-lg commonFlex" style={{backgroundImage:'url(/footerthumbnail.png)'}}>
    <div className="w-[68px] h-[68px] rounded-full bg-red-500 commonFlex">
        <div className="w-10 h-8 commonFlex pl-2">
            <img src="/play.svg" className="imageCommon  object-contain" alt="" />
        </div>
    </div>
</div>


</div>


</div>

<div className="flex justify-between px-8 ">

{[1,2,3,4,5].map(()=>{
    return <div className="w-5 h-6 ">
        <img src="/socialmedia/facebook.svg" className="imageCommon object-contain" alt="" />
    </div>
})}


</div>

<div className="w-[345px] mx-auto">

{[1,2,3].map(()=>{
    return <div className="flex justify-between py-3 px-4 border-b-2 last:border-0  text-white font-semibold leading-8">

        <p>Ultrices.</p>
        <div>ic</div>

    </div>
})}


</div>



</div>



<div className="bg-[#131313] text-center px-12 py-5 text-sm space-y-4 text-white">

<div className="flex justify-between">
    <p>Sed duis tortor.</p>
    <p>Ultrices.</p>
</div>

<p className="px-2 ">Amet nulla velit eros morbi pretium est.</p>


</div>



<div className="bg-[#FCD002] pt-2 pb-4 gap-y-3 flex flex-col items-center px-6 text-center">

<p className="font-bold text-[22px] leading-6">MARCH MADNESS SALE EXPIRES SOON</p>



<div className="flex gap-x-3 px-3  w-[341px] leading-6 text-xs items-center">

    <p>
        <span className="font-bold text-[20px]">00</span>
        <span> Days</span>
        <span> :</span>
    </p>

    <p>
        <span className="font-bold text-[20px]">01</span>
        <span> Hours</span>
        <span> :</span>
    </p>


    <p>
        <span className="font-bold text-[20px]">48</span>
        <span> Minutes</span>
        <span> :</span>
    </p>


    <p>
        <span className="font-bold text-[20px]">45</span>
        <span> Seconds</span>

    </p>

</div>



<div className="w-[221px] bg-[#0076FF] border-2 border-[#ffffff] rounded-[72px] font-bold leading-5 text-[18px] py-2 text-center">Source Sans Pro</div>




</div>






    </div>
}