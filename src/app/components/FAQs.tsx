import React from 'react';
import Image from "next/image";
import FAQToko from '../../../public/images/faq-img2.svg'
import FAQTop from '../../../public/images/faq-top.svg'
import FAQBottom from '../../../public/images/faq-bottom.svg'
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400'],
    // variable: '--font-roboto-condensed',
    display: 'swap',
});


function FaQs() {
    return (
        <div className="bg-[#F2DB94]">
            <div className="max-w-7xl mx-auto ">
                <div>
                    <h1 className="text-[#F5E3A7]  border-webkit text-7xl tracking-tight text-center mb-2">fAQ</h1>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 py-16 relative">
                    <div className="px-3">
                        <div className="px-6 py-9 border-4 border-[#656542] bg-[#29321F] rounded-2xl mb-3">
                            <h1 className="text-[#F2DB94] text-[38px] leading-10 mb-3">What is KAI?</h1>
                            <p className={`text-[#F2DB94] ${robotoCondensed.className} text-sm mb-3`}>KAI is the cat that will dethrone dog
                                meme coins, and usher in a new era in crypto–the
                                age of the Cat. He’s a retired kitty, out of shape from over eating fish from his pond.
                                But, his pond is now open to all. Buy and Stake to fish KAI’s staking pond for crazy
                                rewards.</p>
                        </div>
                        <div className="px-6 py-9 border-4 border-[#656542] bg-[#29321F] rounded-2xl mb-3">
                            <h1 className="text-[#F2DB94] text-[38px] leading-10 mb-3">When Is $KAI Launch?</h1>
                            <p className={`text-[#F2DB94] ${robotoCondensed.className} text-sm`}>Launch will occur at the end of the final
                                stage of the presale. Then, KAI will take the crypto world by storm and knock DOGE,
                                SHIB, and BONK off the top of the crypto world, and usher in the era of the cat! IT’S
                                KAI TIME!</p>
                        </div>
                        <div className="px-6 py-9 border-4 border-[#656542] bg-[#29321F] rounded-2xl mb-3">
                            <h1 className="text-[#F2DB94] text-[38px] leading-10 mb-3">What Is The KAI Staking
                                Pond?</h1>
                            <p className={`text-[#F2DB94] ${robotoCondensed.className} text-sm mb-4`}>Throughout the entire presale, and
                                beyond, buyers can earn BONUS tokens simply by staking their purchases in the Staking
                                pond. The current reward percentage is displayed on the buy widget and in the KAI
                                dashboard.</p>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="px-6 py-9 border-4 border-[#656542] bg-[#29321F] rounded-2xl mb-3">
                            <h1 className="text-[#F2DB94] text-[38px] leading-10 mb-3">How To Buy KAI?</h1>
                            <p className={`text-[#F2DB94] ${robotoCondensed.className} text-sm mb-3`}>Currently, KAI can only be purchased on THIS PAGE. ETH, USDT, BNB and Card payments are accepted. First, download a Metamask wallet (or the wallet of your choice). Then, you’ll need some crypto (unless paying by card). Buy some crypto from your favorite exchange, and send it to your crypto wallet.</p>
                            <p className={`text-[#F2DB94] ${robotoCondensed.className} text-sm mb-3`}>Then, connect your wallet to the KAI buy widget (at the top of this page), select the amount of $KAI you wish to buy, and pull the trigger!</p>
                            <p className={`text-[#F2DB94] ${robotoCondensed.className} text-sm mb-3`}>If you’re having trouble buying, please join our telegram group and ask for assistance.</p>
                        </div>
                        <div className="px-6 py-9 border-4 border-[#656542] bg-[#29321F] rounded-2xl mb-3">
                            <h1 className="text-[#F2DB94] text-[38px] leading-10 mb-3">Where Are My KAI Tokens?</h1>
                            <p className={`text-[#F2DB94] ${robotoCondensed.className} text-sm`}>Once you have bought and/or staked your $KAI, you’ll see them displayed on both the buy widget, and in the Dashboard. Please make sure your purchase wallet is connected to the website in order to view your token balance.</p>
                        </div>
                        <div className="px-6 py-9 border-4 border-[#656542] bg-[#29321F] rounded-2xl mb-3">
                            <h1 className="text-[#F2DB94] text-[38px] leading-10 mb-3">What Chain Is KAI On?</h1>
                            <p className={`text-[#F2DB94] ${robotoCondensed.className} text-sm mb-4`}>KAI is a meme coin on the ethereum blockchain. It is an ERC20 token that has been thoroughly audited by Coinsult. Audit can be found at the top of this page.</p>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="px-6 py-9 border-4 border-[#656542] bg-[#29321F] rounded-2xl mb-3">
                            <h1 className="text-[#F2DB94] text-[38px] leading-10 mb-3">When Is The KAI Presale?</h1>
                            <p className={`text-[#F2DB94] ${robotoCondensed.className} text-sm mb-3`}>The KAI presale is happening RIGHT NOW! That means you’re very early. And in crypto, you want to be early! Not only can you buy at the lowest price, but you can become a founding member of the KAI cat pack!</p>
                        </div>
                        <div className="px-6 py-9 border-4 border-[#656542] bg-[#29321F] rounded-2xl mb-3">
                            <h1 className="text-[#F2DB94] text-[38px] leading-10 mb-3">When Is My $KAI In My Wallet?</h1>
                            <p className={`text-[#F2DB94] ${robotoCondensed.className} text-sm`}>During the KAI presale, your tokens are visible on the dashboard and on the buy widget. Once the token launches, the claiming process goes live. This is when you will claim your $KAI tokens into your wallet for storage, staking, and trading.</p>
                        </div>
                        <div className="px-6 py-9 border-4 border-[#656542] bg-[#29321F] rounded-2xl mb-3">
                            <h1 className="text-[#F2DB94] text-[38px] leading-10 mb-3">How To Claim KAI?</h1>
                            <p className={`text-[#F2DB94] ${robotoCondensed.className} text-sm mb-4`}>TAll claiming related instructions will be reiterated upon launch. The Claiming process begins once KAI has been launched, and is done so using the wallet you made your initial purchase with.</p>
                        </div>
                    </div>
                    <Image className="lg:block hidden absolute lg:top-[-182px] lg:right-[-35px] lg:h-[300px] lg:w-[350px]  xl:top-[-220px] top-[-99px] xl:right-[-97px] right-[-5px] xl:w-[363px] w-[178px] xl:h-[363px] h-[253px]" src={FAQToko} alt="FAQToko" />

                    <Image className="absolute lg:top-[-108px] lg:left-[16px] lg:h-[235px] lg:w-[290px]  xl:top-[-71px] top-[-96px] xl:left-[30px] left-[22px] xl:w-[340px] w-[178px] xl:h-[142px] h-[253px]" src={FAQTop} alt="FAQTop" />

                    <Image className="absolute xl:block hidden xl:w-[300px]  xl:h-[300px]  xl:bottom-[-59px] xl:left-[-67px]" src={FAQBottom} alt="FAQBottom" />
                </div>
            </div>
        </div>
    );
}

export default FaQs;