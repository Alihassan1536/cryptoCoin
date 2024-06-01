import React from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";
import Image from "next/image";
import ETH from '../../../public/images/ETH.svg';
import KAI from '../../../public/images/token.svg';
import BNB from '../../../public/images/BNB.svg';
import Card from '../../../public/images/card.svg';
import USD from '../../../public/images/usdt.svg';
import { CountdownTimer } from "@/app/components/countDownTimer";
import Web3Logo from '../../../public/images/W3P_Black.svg';
import MemeableCat from '../../../public/images/memeable-cat.svg';
import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400', '500'],
    // variable: '--font-roboto-condensed',
    display: 'swap',
});

const HeroCard = () => {
    const today = new Date();
    let target = new Date(today);
    target.setDate(target.getDate() + 14);

    const timerLabels = ['days', 'hours', 'minutes', 'seconds'];

    return (
        <div className="HeroBg -mt-10 pt-10 bg-no-repeat bg-cover">
            <div className="max-w-7xl relative z-1 mx-auto">
                <div className="grid grid-cols-1 lg:px-6 px-2 lg:pt-20 lg:pb-9 md:py-32 py-28 relative mt-8">
                    <div className="md:max-w-[460px] max-w-full mx-auto px-7 bg-[#29321F] py-6 rounded-[32px] border-4 border-[#343E60] relative z-30">
                        <div className="pb-2">
                            <h2 className={`text-lg text-center tracking-widest text-[#FAD5E4] ${robotoCondensed.className}`}>
                                Next Price Increase In
                            </h2>
                        </div>
                        <div className="mb-3 flex justify-between gap-x-6 font-sans font-semibold pt-3 lg:px-5 px-2 bg-[#8D8759] h-[80px] rounded-3xl">
                            <CountdownTimer targetDate={target.toISOString()} labels={timerLabels} />
                        </div>
                        <div className={`${robotoCondensed.className} text-white text-center tracking-widest mb-2`}>
                            $233,606.46 / $439,416
                        </div>
                        <div className="text-center mb-4">
                            <div className="relative w-full h-3 bg-[#2A273C] rounded-full">
                                <div className="absolute top-0 left-0 bg-[#F2DB94] h-full rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-x-4 mb-3">
                            <div className="items-center">
                                <h1 className={`tracking-widest items-center text-white text-center ${robotoCondensed.className}`}>
                                    1 $KAI = $0.0041215
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-1.5 mb-4">
                            <div className="flex items-center gap-x-4">
                                <h2 className={`text-white ${robotoCondensed.className} text-base`}>
                                    YOUR PURCHASED $KAI = 0
                                </h2>
                                <IoIosInformationCircleOutline className="text-[#6E706B] w-6 h-6" />
                            </div>
                            <div className="flex items-center gap-x-4">
                                <h2 className={`text-white ${robotoCondensed.className} text-base`}>
                                    YOUR STAKEABLE $KAI = 0
                                </h2>
                                <IoIosInformationCircleOutline className="text-[#6E706B] w-6 h-6" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-x-2 mb-3">
                            <div className="flex items-center justify-center bg-[#F2DB94] gap-x-6 py-1.5 px-8 w-1/3 rounded-full transition-all duration-250 hover:ease-in-out transform hover:scale-105 delay-150">
                                <Image className="w-8 h-8" width={30} height={30} src={ETH} alt="ETH" />
                                <h2 className={`${robotoCondensed.className} text-[#29321F] font-bold text-base`}>ETH</h2>
                            </div>
                            <div className="flex items-center justify-center bg-[#94998F] gap-x-6 py-1.5 px-8 w-1/3 rounded-full transition-all duration-250 hover:ease-in-out transform hover:scale-105 delay-150">
                                <Image className="w-8 h-8" width={40} height={40} src={USD} alt="USDT" />
                                <h2 className={`${robotoCondensed.className} text-[#550D49] text-base`}>USDT</h2>
                            </div>
                            <div className="flex items-center justify-center bg-[#94998F] gap-x-6 py-1.5 px-8 w-1/3 rounded-full transition-all duration-250 hover:ease-in-out transform hover:scale-105 delay-150">
                                <Image className="w-8 h-8" width={40} height={40} src={Card} alt="CARD" />
                                <h2 className={`${robotoCondensed.className} text-[#550D49] text-base`}>CARD</h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mb-6 w-full gap-x-4">
                            <div className="relative w-full">
                                <div className="flex justify-between mb-2">
                                    <h3 className="text-[13px] tracking-wide font-sans text-[#F2DB94]">ETH YOU PAY</h3>
                                    <h3 className="text-[13px] tracking-wide font-sans text-[#F2DB94]">MAX</h3>
                                </div>
                                <input
                                    type="text"
                                    className={`w-full border-2 text-truncate ${robotoCondensed.className} pl-3 bg-[#373E2F] focus:outline-none caret-white text-white placeholder-white py-2 px-5 rounded-full`}
                                    placeholder="0"
                                />
                                <div className="absolute inset-y-0 right-3 top-7 flex items-center pointer-events-none">
                                    <Image src={ETH} alt="ETH-input" width={25} height={25} />
                                </div>
                            </div>
                            <div className="relative gap-x-4 w-full">
                                <div className="flex justify-start mb-2">
                                    <h3 className="text-[13px] tracking-wide font-sans text-[#F2DB94]">$KAI YOU RECEIVED</h3>
                                </div>
                                <input
                                    type="text"
                                    className={`w-full border-2 text-truncate ${robotoCondensed.className} pl-3 bg-[#373E2F] focus:outline-none caret-white text-white placeholder-white py-2 px-8 rounded-full`}
                                    placeholder="0"
                                />
                                <div className="absolute inset-y-0 right-3 top-7 flex items-center pointer-events-none">
                                    <Image src={KAI} alt="ETH-input" width={25} height={25} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <button type="button" className={`w-full bg-[#F2DB94] py-3 px-4 rounded-full text-base transition-all duration-250 hover:ease-in-out transform hover:scale-105 delay-150 text-[#29321F] font-bold ${robotoCondensed.className} tracking-wide mb-2`}>
                                CONNECT WALLET
                            </button>
                            <button type="button" className={`flex items-center justify-center w-full border-2 py-3 gap-x-1.5 rounded-full text-base transition-all duration-250 hover:ease-in-out transform hover:scale-105 delay-150 text-white ${robotoCondensed.className} tracking-wide`}>
                                <Image width={18} height={18} src={BNB} alt="BNB" />BUY NOW
                            </button>
                        </div>
                        <div className="flex items-center justify-center gap-x-1 w-full">
                            <h1 className={`text-sm text-white ${robotoCondensed.className}`}>Powered By</h1>
                            <Image className="pt-0.5" width={150} height={25} src={Web3Logo} alt="Web3Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
