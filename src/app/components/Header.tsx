'use client'
import React, {useEffect, useState} from 'react';
import {FaBars} from "react-icons/fa";
import {IoCloseSharp} from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import X from '../../../public/images/twitter.svg'
import Telegram from '../../../public/images/telegram.svg'
import Logo from '../../../public/images/Logo.svg'
import MobileLogo from '../../../public/images/token.svg'
import ReactFlagsSelect from "react-flags-select";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-roboto-condensed',
    display: 'swap',
});


export default function Header() {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const [select, setSelect] = useState("SE");
    const onSelect = (code: any) => setSelect(code);

    // @ts-ignore
    return (
        <div className="">
            <header className={`fixed top-0 lg:py-1.5 md:py-4 py-7 z-50 w-full ${
                isScrolling ? "lg:block hidden backdrop-blur-sm navbar-color transition-all duration-500" : "!backdrop-none bg-transparent shadow-none"
            }`}>
                {/*Desktop*/}
                <nav
                    className={`m-auto max-w-7xl py-2 w-full flex  items-center justify-between px-5 lg:px-8 z-50 shadow-none `}
                    // className="mx-auto lg:flex hidden max-w-7xl items-center justify-between px-5 lg:px-8 relative z-50"
                    aria-label="Global">
                    <div className="flex-1">
                        <Link href="#" className="-m-1.5 p-1.5 flex items-center gap-x-2">
                            <span className="sr-only">Your Company</span>
                            <Image className="md:block hidden dropShadow" width={65} height={65} src={Logo} alt="Logo"/>
                            {/*<h1 className="text-4xl text-white">KAI</h1>*/}
                        </Link>
                    </div>
                    <div className="flex lg:hidden ">
                        {isMenuOpen ? (
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setIsMenuOpen(false)}>
                                <span className="sr-only">Close menu</span>
                                <IoCloseSharp className="w-6 h-6 text-white"/>
                            </button>
                        ) : (
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setIsMenuOpen(true)}>
                                <span className="sr-only">Close menu</span>
                                <FaBars className="w-6 h-6 text-white"/>
                            </button>
                        )}
                    </div>
                    <div className="hidden lg:flex items-center md:gap-x-10 lg:gap-x-5  ">
                        <div className="flex md:gap-x-6 lg:gap-x-6">
                            <Link href="#"
                                  className="font-semibold leading-6 text-[#F5E3A7]  custom text-2xl hover:text-[#fad5e4] tracking-wide transition-all duration-300">STAKING</Link>
                            <Link href="#"
                                  className="flex flex-wrap font-semibold leading-6 text-[#F5E3A7] hover:text-[#fad5e4] custom text-2xl transition-all duration-300 tracking-wide">HOW
                                TO BUY</Link>
                            <Link href="#"
                                  className="font-semibold leading-6 text-[#F5E3A7] hover:text-[#fad5e4] custom text-2xl transition-all duration-300 tracking-wide">TOKENOMICS</Link>
                            <Link href="#"
                                  className="font-semibold leading-6 text-[#F5E3A7] hover:text-[#fad5e4] custom text-2xl transition-all duration-300 tracking-wide">ROADMAP</Link>
                            <Link href="#"
                                  className="font-semibold leading-6 text-[#F5E3A7] hover:text-[#fad5e4] custom text-2xl transition-all duration-300 tracking-wide">FAQ</Link>
                        </div>
                        <div className="flex lg:gap-x-3 items-center">
                            <button type="button"
                                    className={`font-bold  bg-[#29321F] py-3 px-4 ${robotoCondensed.className} rounded-full text-sm tracking-wide transition-all duration-250 hover:ease-in-out  transform hover:scale-105 delay-150 text-white`}>BUY
                                NOW
                            </button>
                            <div>
                                <Image className="dropShadow" width={35} height={35} src={X} alt="X-logo"/>
                            </div>
                            <div>
                                <Image className="dropShadow" width={35} height={35} src={Telegram} alt="Telegram-logo"/>
                            </div>
                            <div className="test ul test ul > li scrollbar">
                                <ReactFlagsSelect
                                    selectButtonClassName={`!font-semibold !border-none lg:!px-0 ${
                                        isScrolling ? "!text-[#8D8759]" : "text-[#29321F]"
                                    }`}
                                    className={`${robotoCondensed.className}`}
                                    selected={select}
                                    onSelect={onSelect}
                                />
                            </div>
                        </div>
                    </div>
                </nav>

                {/*Mobile menu, show/hide based on menu open state.*/}
                <div className="lg:hidden block" role="dialog" aria-modal="true">
                    <div
                        className="fixed h-screen inset-y-0 right-0 top-0 z-50 custom-w overflow-y-auto bg-[#29321F] py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 custom-h ">
                        <div className="flex items-center justify-between px-6">
                            <Link href="#" className=" -m-1.5 py-2 px-0 flex items-center gap-x-2">
                                <span className="sr-only">Your Company</span>
                                <Image className="dropShadow" width={55} height={55} src={Logo} alt="Logo"/>
                            </Link>
                            {isMenuOpen ? (
                                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        onClick={() => setIsMenuOpen(false)}>
                                    <span className="sr-only">Close menu</span>
                                    <IoCloseSharp className="w-8 h-8 text-white"/>
                                </button>
                            ) : (
                                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        onClick={() => setIsMenuOpen(true)}>
                                    <span className="sr-only">Close menu</span>
                                    <FaBars className="w-8 h-8 text-white"/>
                                </button>
                            )}
                        </div>


                        <div
                            className={`fixed inset-y-0 !max-w-full  top-[75px] right-0 w-full h-screen  z-[777] backdrop-filter backdrop-blur-sm  ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} `}
                            style={{transition: 'opacity 0.2s ease-in-out'}}>
                            <nav id="sidebar"
                                 className={`fixed !max-w-full inset-y-0 lg:top-[69px] z-[777] top-0 2xl:hidden right-0 h-screen flex w-full ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex-col overflow-y-auto bg-[#29321F] pt-6 pb-8 sm:max-w-xs lg:w-80 transform transition-all duration-700`}>
                                <div className={`-my-6 divide-y divide-gray-200/ px-6 w-full`}>
                                    <div className="space-y-2 py-6 ">
                                        <div className="flex flex-col items-center gap-y-5 lg:h-suto h-screen ">
                                            <Link href="#"
                                                  className=" block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white custom hover:text-[#fad5e4] tracking-widest transition-all duration-300">STAKING</Link>
                                            <Link href="#"
                                                  className=" block rounded-lg px-3 py-2 text-2xl custom text-white font-semibold leading-7  hover:text-[#fad5e4] tracking-widest transition-all duration-300">HOW
                                                TO BUY</Link>
                                            <Link href="#"
                                                  className=" block rounded-lg px-3 py-2 text-2xl custom text-white font-semibold leading-7  hover:text-[#fad5e4] tracking-widest transition-all duration-300">TOKENOMICS</Link>
                                            <Link href="#"
                                                  className=" block rounded-lg px-3 py-2 text-2xl custom text-white font-semibold leading-7  hover:text-[#fad5e4] tracking-widest transition-all duration-300">ROADMAP</Link>
                                            <Link href="#"
                                                  className=" block rounded-lg px-3 py-2 text-2xl custom text-white font-semibold leading-7  hover:text-[#fad5e4] tracking-widest transition-all duration-300">FAQ</Link>
                                            <div className="flex gap-x-6 pb-3">
                                                <Image width={45} height={45} src={X} alt="X-logo"/>
                                                <Image width={45} height={45} src={Telegram} alt="X-logo"/>
                                            </div>
                                            <div className="gap-y-3  w-full">
                                                <div className="mobileTest ul scrollbar px-3 w-full">
                                                    <ReactFlagsSelect
                                                        selectButtonClassName="!text-white !outline !outline-1 !outline-[#F2DB94] !rounded-lg "
                                                        className={`${robotoCondensed.className}`}
                                                        selected={select}
                                                        onSelect={onSelect}
                                                    />
                                                </div>
                                                <div className="py-6  text-center px-3">
                                                    <a href="#"
                                                       className={` block bg-[#F2DB94] font-bold py-2.5 px-4 ${robotoCondensed.className} rounded-full text-xl transition ease-in-out delay-150  hover:-translate-0.5 hover:scale-110 duration-300 text-[#29321F]`}>BUY
                                                        NOW
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}