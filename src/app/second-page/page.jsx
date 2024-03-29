import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductDetails from "@/components/ProductPage/ProductDetails";


const products = [


    {image:'/machine-1.png',id:'EM-1010',name:'Starter Embroidery Machine',needle:'10',price:5999},
    {image:'/machine-2.png',id:'TC-1501',name:'Commercial Embroidery Machine',needle:'15',price:7999},
    {image:'/machine-3.png',id:'MT-1501',name:'Commercial Embroidery Machine',needle:'10',price:8999},


]


export default function SecondPage(){

    return <div className="relative">

<Navbar/>


<div className="relative">


<div className="absolute w-full h-[380px] -z-10 bottom-0 left-0">
    
    <img src="/bg2.png" className="imageCommon object-cover" alt="" />

    </div>

<div className="px-7 pt-8    desktop1:max-w-[1150px] desktop1:mx-auto ">






<p className="text-[#002045] font-bold text-[40px] leading-10 text-center sm:text-left">Dui augue lectus </p>


<p className="font-light text-2xl leading-10 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa leo nec ultrices sit risus nisi non fermentum morbi. Tristique.</p>


<div className="space-y-6 pt-4 lg:pt-20 pb-6 lg:pb-14 md:flex md:flex-wrap md:space-y-0 md:justify-between md:gap-y-6">


{products.map((elem,index)=>{
    return <div className="shadow-2xl bg-white rounded-b-xl md:w-[calc(50%-10px)] lg:w-[calc(33%-5px)] lg:max-w-[360px] relative" >

<ProductDetails index={index}  />



<div className="w-full min-w-[270px] relative h-[216px] rounded-t-2xl bg-[#C4C4C4] commonFlex">

<div className="absolute top-4 w-[204px] h-[222px]  ">
    <img src={`/secondpage/${elem.image}`} className="imageCommon" alt="" />
</div>


</div>

<div className=" px-6 py-8 space-y-3 rounded-b-2xl">

<div className="space-y-2">
<p className="font-bold text-2xl leading-6 text-[#081F32]">{elem.id}</p>

<p className="text-sm font-semibold leading-5">{elem.name}</p>


<div className="flex gap-x-4 text-[#162EC0] text-sm leading-5 font-semibold">

<p>{elem.needle} needle</p>

<p>Single-head</p>

</div>

</div>

<p className="leading-6 text-[#6E798C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. </p>



<div className="flex gap-x-3">

<div className="w-8 h-8 rounded-full bg-[#22144A]"></div>
<div className="w-8 h-8 rounded-full bg-[#60C250]"></div>
<div className="w-8 h-8 rounded-full bg-[#370405]"></div>

</div>


<div className="flex items-center justify-between leading-6 pt-2">

<p className="text-[#081F32] font-semibold text-[28px]">${elem.price}</p>

<p className="text-[#F17D21] text-[20px] line-through">$7500</p>


<div className="font-bold text-sm  bg-[#F17D21] text-white w-[114px] commonFlex py-2.5 rounded-md">ORDER</div>

</div>



</div>




    </div>
})}

</div>



</div>


</div>


<Footer  />


    </div>

}