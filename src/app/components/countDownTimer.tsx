'use client'
import { useEffect, useRef, useState } from "react";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-roboto-condensed',
    display: 'swap',
});

interface CountdownTimerProps {
    targetDate: string;
    labels: string[];
}

const calculateTimeLeft = (targetDate: Date): number[] => {
    const difference = targetDate.getTime() - new Date().getTime();
    return difference > 0
        ? [
            Math.floor(difference / (1000 * 60 * 60 * 24)),
            Math.floor(difference / (1000 * 60 * 60) % 24),
            Math.floor(difference / (1000 * 60) % 60),
            Math.floor(difference / 1000) % 60
        ]
        : [0, 0, 0, 0];
};

export const CountdownTimer = ({ targetDate, labels }: CountdownTimerProps) => {
    const [timeLeft, setTimerLeft] = useState<number[]>([0, 0, 0, 0]);
    const prevTimeLeft = useRef<number[]>([0, 0, 0, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimerLeft(calculateTimeLeft(new Date(targetDate)));
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    // Wait for hydration before rendering the timer
    useEffect(() => {
        setTimerLeft(calculateTimeLeft(new Date(targetDate)));
    }, [targetDate]);

    return (
        <div className="timer">
            {timeLeft.map((num, index) => (
                <div key={index} className="timer__card relative flex flex-col-reverse">
                    <div className="timer__card-visual ">
                        <div className="timer__card-elements flex !justify-center">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <div className={`${num !== prevTimeLeft.current[index] ? 'flipper': ''}`}></div>
                            <span className={`timer__card-num !tracking-wide !font-bold ${robotoCondensed.className} md:text-3xl text-xl text-center`}>{String(num).padStart(2, '0')}</span>
                        </div>
                    </div>
                    <p className={`timer__card-val md:text-sm text-xs text-white ${robotoCondensed.className} tracking-wide flex justify-center`}>{labels[index]}</p>
                </div>
            ))}
        </div>
    );
};
