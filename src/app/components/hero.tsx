import React from 'react'
import Image from "next/image";
// import MobileBG from '../../../public/images/'



export default function Hero() {
    return (
        <div className="bg-red-600">
            <div className="md:absolute md:top-0  md:left-0 !w-full !max-w-full md:h-full md:object-cover !z-0">
                <video
                    autoPlay
                    loop
                    muted
                    className="bg-bottom lg:block hidden max-w-full w-full"
                >
                    <source src="/videos/hero_bg.mp4" type="video/mp4" className="h-full !max-w-full !w-full"/>
                </video>
            </div>
            {/*<div>*/}
            {/*    <Image src={} alt={} />*/}
            {/*</div>*/}
        </div>
    )
}