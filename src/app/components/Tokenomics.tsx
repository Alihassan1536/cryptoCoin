import React from 'react';
import image1 from "../../../public/images/image2.svg"
import Image from "next/image";
import TokoTop from "../../../public/images/toko-top.svg"
import TokoBottom from "../../../public/images/toko-left.svg"
import Phase1 from "../../../public/images/phase1.svg"
import Phase2 from "../../../public/images/phase2.svg"
import Phase3 from "../../../public/images/phase3.svg"
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-roboto-condensed',
    display: 'swap',
});

function Tokenomics() {
    const tokenDistribution = [
        {
            img: "/images/tokeno1.svg",
            category: "Liquidity",
            percentage: 15,
            description: "Ensuring smooth transactions and stable market conditions, 15% of tokens bolster the Liquidity Litter."
        },
        {
            img: "/images/tokeno1.svg",
            category: "Staking",
            percentage: 15,
            description: "To encourage holding and investment in the network, 15% of tokens are allocated to staking."
        },
        {
            img: "/images/tokeno3.svg",
            category: "Presale",
            percentage: 20,
            description: "Launching with a bonus for early pouncers, 20% of KAI tokens are available during the presale."
        },
        {
            img: "/images/tokeno4.svg",
            category: "Feline Flux",
            percentage: 25,
            description: "A significant 25% is set aside for Feline Flux, our marketing initiative designed to spread the word about KAI."
        },
        {
            img: "/images/tokeno4.svg",
            category: "Purr Points",
            percentage: 25,
            description: "A full 25% is dedicated to Purr Points, rewarding the community for engagements and contributions."
        }
    ];
    return (
        <div>
            <div
                className="TokenomicsBg  bg-no-repeat bg-cover bg-center w-full max-w-full h-full max-h-full relative">
                <div className="max-w-7xl mx-auto py-16 px-6">
                    <div>
                        <h1 className="text-[#F5E3A7]  border-webkit text-7xl tracking-tight text-center lg:pt-9 pt-14 lg:mb-8 mb-20">Tokenomics</h1>
                    </div>
                    <div className="border-4 border-[#656542] rounded-2xl bg-[#29321F] relative">
                        <ul className="flex gap-x-4 gap-y-0  justify-center lg:px-3 lg:py-5 px-8 flex-row items-center lg:flex-nowrap flex-wrap">
                            {tokenDistribution.map((item, index) => (
                                <li key={index} className="mb-2 py-2 max-w-[250px]">
                                    <div className="flex justify-center lg:mb-5 mb-3">
                                        <Image src={item.img} alt={item.category} width={134} height={138}/>
                                    </div>
                                    <h2 className="text-3xl text-white text-center lg:mb-5 mb-3">{item.category} - {item.percentage}%</h2>
                                    <p className={`text-center text-sm   text-white ${robotoCondensed.className} lg:mb-5 mb-3`}>{item.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Image
                            className="absolute xl:right-[147px] lg:right-[30px] right-[23px] lg:top-[84px] top-[194px] lg:w-[245px] w-[171px] lg:h-[200px] h-[139px]"
                            src={TokoTop} alt="TokoTop"/>
                    </div>
                    <div>
                        <Image
                            className="absolute lg:w-[150px] w-36 lg:h-[288px]  lg:left-5 left-0 lg:bottom-[52%] max-sm:-bottom-20"
                            src={TokoBottom} alt="TokoBottom"/>
                    </div>
                </div>
                {/*lg:left-[140px] left-[23px] lg:bottom-[84px] bottom-[194px]*/}
                <div className="max-w-7xl mx-auto pb-56 lg:block hidden">
                    <h1 className="text-[#F5E3A7]  border-webkit text-7xl tracking-tight text-center lg:pt-10 pt-14 lg:mb-8 mb-20">Roadmap</h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-64 bg-cover">

                        <div>
                            <div
                                className="flex lg:justify-start lg:mt-96 justify-center relative custom-width mx-auto">
                                <Image className="absolute lg:top-0 -top-32 right-0" src={Phase3} alt="Phase3"/>
                                <div
                                    className="relative max-w-[300px] border-2 border-[#656542] rounded-2xl bg-[#4B4E33] w-full max-h-full lg:mx-[60px] px-4 py-4 lg:top-[150px] lg:pt-5">
                                    <h1 className="text-white text-[38px] leading-10 mb-2">Doge Catcher</h1>
                                    <p className={`text-white ${robotoCondensed.className} text-base`}>Here’s where KAI becomes the hero he
                                        was
                                        always destined to be. As KAI climbs into the billions, the world takes notice.
                                        The
                                        dogs begin running scared of the fierce feline as he stalks them, and hunts them
                                        down. Total domination. Total victory. KAI ushers in a new era in crypto–the age
                                        of
                                        the Kitty.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" lg:justify-start justify-center relative">
                            <div
                                className="flex lg:mt-36 lg:justify-start justify-center lg:max-w-full max-w-[300px] mx-auto ">
                                <Image className="absolute lg:top-auto -top-36 lg:left-0 left-6" src={Phase2}
                                       alt="Phase2"/>
                                <div
                                    className="relative max-w-[300px] border-2 border-[#656542] rounded-2xl bg-[#4B4E33] w-full  lg:mr-[80px] lg:ml-[50px] px-5 py-4 lg:top-[150px] lg:pt-5 ">
                                    <h1 className="text-white text-[38px] leading-10 mb-2">It’s KAI Time</h1>
                                    <p className={`text-white ${robotoCondensed.className} text-base`}>Ever since KAI retired, dogs have
                                        owned
                                        the blockchain. Now that he’s back in the fight, he needs a gang of digital
                                        kitties
                                        ready to do battle with the canines. In Phase 2, KAI invites all fishermen to
                                        trade
                                        their rods for weapons. Are you ready to do battle and put the cats on top?</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex  justify-center relative lg:mt-0 mt-20">
                                <Image className="absolute lg:top-0 -top-36 left-3" src={Phase1} alt="Phase1"/>
                                <div
                                    className="relative max-w-[300px] border-2 border-[#656542] rounded-2xl bg-[#4B4E33] w-full max-h-full lg:mx-[60px] px-4 py-4 lg:top-[150px] lg:pt-5">
                                    <h1 className="text-white text-[38px] leading-10 mb-2">Fishing The $KAI Pond</h1>
                                    <p className={`text-white ${robotoCondensed.className} text-base`}>While KAI transforms from a fisherman
                                        to a
                                        fighter, presale buyers get to reap the
                                        benefits. Buy and Stake to fish KAI’s Staking Pond. The delicious staking
                                        rewards
                                        will fatten you up, and give you the energy you need for the next phase.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-[#F2DB94]">
                <div className="max-w-7xl mx-auto pb-56 lg:hidden block">
                    <h1 className="text-[#F5E3A7]  border-webkit text-7xl tracking-tight text-center lg:pt-10 pt-14 lg:mb-8 mb-40">Roadmap</h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-48">

                        <div>
                            <div className="flex lg:justify-start justify-center relative lg:mt-0 mt-20">
                                <Image className="absolute lg:top-0 -top-36 left-3" src={Phase1} alt="Phase1"/>
                                <div
                                    className="relative max-w-[300px] border-2 border-[#656542] rounded-2xl bg-[#4B4E33] w-full max-h-full lg:mx-[60px] px-4 py-4 lg:top-[150px] lg:pt-5">
                                    <h1 className="text-white text-[38px] leading-10 mb-2">Fishing The $KAI Pond</h1>
                                    <p className={`text-white ${robotoCondensed.className} text-base`}>While KAI transforms from a fisherman
                                        to a
                                        fighter, presale buyers get to reap the
                                        benefits. Buy and Stake to fish KAI’s Staking Pond. The delicious staking
                                        rewards
                                        will fatten you up, and give you the energy you need for the next phase.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" lg:justify-start justify-center relative">
                            <div
                                className="flex lg:mt-36 lg:justify-start justify-center lg:max-w-full max-w-[300px] mx-auto ">
                                <Image className="absolute lg:top-auto -top-36 lg:left-0 left-6" src={Phase2}
                                       alt="Phase2"/>
                                <div
                                    className="relative max-w-[300px] border-2 border-[#656542] rounded-2xl bg-[#4B4E33] w-full  lg:mr-[80px] lg:ml-[50px] px-5 py-4 lg:top-[150px] lg:pt-5 ">
                                    <h1 className="text-white text-[38px] leading-10 mb-2">It’s KAI Time</h1>
                                    <p className={`text-white ${robotoCondensed.className} text-base`}>Ever since KAI retired, dogs have
                                        owned
                                        the blockchain. Now that he’s back in the fight, he needs a gang of digital
                                        kitties
                                        ready to do battle with the canines. In Phase 2, KAI invites all fishermen to
                                        trade
                                        their rods for weapons. Are you ready to do battle and put the cats on top?</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex lg:justify-end lg:mt-96 justify-center relative custom-width mx-auto">
                                <Image className="absolute lg:top-0 -top-32 right-0" src={Phase3} alt="Phase3"/>
                                <div
                                    className="relative max-w-[300px] border-2 border-[#656542] rounded-2xl bg-[#4B4E33] w-full max-h-full lg:mx-[60px] px-4 py-4 lg:top-[150px] lg:pt-5">
                                    <h1 className="text-white text-[38px] leading-10 mb-2">Doge Catcher</h1>
                                    <p className={`text-white ${robotoCondensed.className} text-base`}>Here’s where KAI becomes the hero he
                                        was
                                        always destined to be. As KAI climbs into the billions, the world takes notice.
                                        The
                                        dogs begin running scared of the fierce feline as he stalks them, and hunts them
                                        down. Total domination. Total victory. KAI ushers in a new era in crypto–the age
                                        of
                                        the Kitty.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tokenomics;