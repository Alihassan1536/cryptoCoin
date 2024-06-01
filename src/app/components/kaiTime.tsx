import React from 'react';
import Image from "next/image";
// import {images} from "next/dist/build/webpack/config/blocks/images";
import KaiTimeCat from '../../../public/images/about-img.svg'
// import SliderComponent from "@/app/components/SliderComponent";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-roboto-condensed',
    display: 'swap',
});

function KaiTime() {
    return (
        <div className="bg-[#F2DB94] pt-10 relative z-10">
            <div className="absolute -top-20 z-30 w-full max-w-full h-20" style={{
                background: 'linear-gradient(180deg, rgba(242, 219, 148, 0) 0%, #f2db94 100%)',
            }}></div>
            <div className="text-center max-w-7xl mx-auto py-5">
                <h1 className="text-[#F5E3A7]  border-webkit text-7xl tracking-tight ">the kai story</h1>
            </div>
            <div className="max-w-7xl mx-auto py-3 px-3">
                <div className="relative grid lg:grid-cols-3 grid-cols-1 bg-custom lg:bg-contain bg-cover lg:bg-center bg-top w-full h-full max-h-full lg:pt-[5rem] lg:pb-[10rem] bg-no-repeat py-10">
                    <div className="py-4 col-span-2">
                        <div className="lg:px-12 lg:pt-20 px-10">
                            <h1 className="text-white text-5xl mb-4">“KAI was once the most feared feline in all of crypto.“</h1>
                            <p className={`text-xl text-white ${robotoCondensed.className} italic tracking-tight mb-2 xl:mb-6 max-w-2xl`}>Once he retired from crypto though, he found a quiet little fish pond to enjoy the rest of his days feasting on fishies. </p>
                            <p className={`text-xl text-white ${robotoCondensed.className} italic tracking-tight mb-2 xl:mb-6 max-w-2xl`}>But now, rumors of a blockchain war between dogs and cats have forced KAI out of retirement. KAI is now getting back into the fight, leaving his full fish pond unattended. </p>
                            <p className={`text-xl text-white ${robotoCondensed.className} italic tracking-tight mb-2 xl:mb-4 max-w-2xl`}>Luckily for you, fisherman, you get to raid his pond while he puts the crypto cats back on top. That means fishing in a pool full of ridiculously high staking rewards!</p>
                            <button
                                className={`text-[#29321F] text-sm  bg-[#F2DB94] rounded-full py-3 px-6 tracking-wide ${robotoCondensed.className} font-semibold tracking-tighter hover:bg-[#F4E0A4] transition-all duration-300`}>BUY KAI NOW
                            </button>
                        </div>
                    </div>
                    <div className="lg:absolute lg:-right-[132px] lg:top-24">
                        <Image src={KaiTimeCat} alt="kaiTimeCat" className="lg:h-auto lg:max-w-[590px] w-full"/>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className={`lg:text-sm text-xl text-black tracking-tighter ${robotoCondensed.className}`}>AS SEEN ON</h1>
                    {/*<SliderComponent />*/}
                </div>
            </div>
        </div>
    );
}

export default KaiTime;