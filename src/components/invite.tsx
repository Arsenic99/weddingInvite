import firstBackground from '../img/firstBackground.png'
import mainBackground from '../img/mainBackground.png'
import { Countdown } from './countdown'
import { Music } from './music'

export const InviteContainer = () => {
    return (
        <div className={`h-[100vh] bg-[50%_50%] bg-no-repeat bg-cover relative`} style={{ backgroundImage: `url(${firstBackground})` }}>
            <Invite/>
        </div>
    )
}

const Invite = () => {
    return (
        <div className='max-w-[1440px] flex flex-col justify-end w-full bg-top bg-no-repeat bg-contain mx-auto text-center h-[100%]' style={{ backgroundImage: `url(${mainBackground})` }}>
            <div className={`text-sm tracking-[.2em] mb-5 md:mb-8 flex justify-center items-center gap-3 relative left-[25px]`}>
                ТОЙҒА ШАҚЫРУ
                <Music/>
            </div>
            <div className={`text-[21.4113pt] tracking-[.1em] mb-5 md:mb-8`}>
                Арсен & Асем
            </div>
            <div className={`text-[7.70806pt] tracking-[.2em] md:mb-5`}>
                БІЗ БӨЛІСУГЕ ҚУАНА БОЛАМЫЗ 
                <br></br>
                БҰЛ КҮНДІ СІЗДЕРМЕН 
            </div>
            <div className={`text-[15.4161pt] tracking-[.2em] md:mb-5`}>
                2024 жыл, 14 қыркүйек
            </div>
            <div className={`text-[8.56452pt] tracking-[.2em] md:mb-3`}>
                СЕНБІ САҒАТ 19:00
            </div>
            <div className={`mb-2 md:mb-3`}>
                ...
            </div>
            <div className={`text-[8.56452pt] tracking-[.2em] mb-3 md:mb-5`}>
                СІЗДІ КҮТЕМІЗ!
            </div>
            <div className={`mb-10 md:mb-8`}>
                <Countdown/>
            </div>
        </div>
    )
}