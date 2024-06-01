import React from 'react';
import Image from "next/image";
import FooterImage from '../../../public/images/footer-img.svg'
import FooterXLight from '../../../public/images/twitter_light.svg'
import FooterTelegramLight from '../../../public/images/telegram_light.svg'
import { Roboto_Condensed } from "next/font/google";
import Link from "next/link";

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-roboto-condensed',
    display: 'swap',
});

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="bg-[#29321F] py-8">
            <div className="max-w-7xl mx-auto flex justify-center ">
                <Image src={FooterImage} alt="FooterImage"/>
            </div>
            <div
                className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-x-12 lg:gap-y-0 gap-y-4 py-5 mx-auto">
                <Link href="#" className={`text-base tracking-wide leading-6 text-white ${robotoCondensed.className}`}>STAKING</Link>
                <Link href="#" className={`text-base tracking-wide leading-6 text-white ${robotoCondensed.className}`}>THE STORY</Link>
                <Link href="#" className={`text-base tracking-wide leading-6 text-white ${robotoCondensed.className}`}>TOKENOMICS</Link>
                <Link href="#" className={`text-base tracking-wide leading-6 text-white ${robotoCondensed.className}`}>ROADMAP</Link>
                <Link href="#" className={`text-base tracking-wide leading-6 text-white ${robotoCondensed.className}`}>FAQ</Link>
            </div>

            <div className="flex justify-center gap-x-3 py-4 mb-12">
                <Image className="cursor-pointer" src={FooterXLight} alt="FooterXLight"/>
                <Image className="cursor-pointer" src={FooterTelegramLight} alt="FooterTelegramLight"/>
            </div>

            <div className=" border-t border-white/15 max-w-7xl mx-auto mb-8">

            </div>
            <div className="flex justify-center">
                <p className={`text-sm text-white ${robotoCondensed.className}`}>© {currentYear} KAI. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;