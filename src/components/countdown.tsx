import { useEffect, useState } from "react";

export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const weddingDate = new Date('2024-09-14T19:00:00');

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = weddingDate.getTime() - now;

            const weeks = Math.floor(distance / (7 * 24 * 60 * 60 * 1000));
            const days = Math.floor(distance % (7 * 24 * 60 * 60 * 1000) / (24 * 60 * 60 * 1000));
            const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
            const minutes = Math.floor(distance % (60 * 60 * 1000) / (60 * 1000));
            const seconds = Math.floor(distance % (60 * 1000) / 1000);

            setTimeLeft({ weeks, days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const padNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <div className="flex justify-center gap-10">
            <div>
                <p className="text-[28.5484px] tracking-[0em]">{padNumber(timeLeft.weeks)}</p>
                <p className="text-[11.4194px] tracking-[0em]">Апта</p>
            </div>
            <div>
                <p className="text-[28.5484px] tracking-[0em]">{padNumber(timeLeft.days)}</p>
                <p className="text-[11.4194px] tracking-[0em]">Күн</p>
            </div>
            <div>
                <p className="text-[28.5484px] tracking-[0em]">{padNumber(timeLeft.hours)}</p>
                <p className="text-[11.4194px] tracking-[0em]">Сағат</p>
            </div>
            <div>
                <p className="text-[28.5484px] tracking-[0em]">{padNumber(timeLeft.minutes)}</p>
                <p className="text-[11.4194px] tracking-[0em]">Минут</p>
            </div>
            <div className="hidden md:block">
                <p className="text-[28.5484px] tracking-[0em]">{padNumber(timeLeft.seconds)}</p>
                <p className="text-[11.4194px] tracking-[0em]">Секунд</p>
            </div>
        </div>
    );
};
