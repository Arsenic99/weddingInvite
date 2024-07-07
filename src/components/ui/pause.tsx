import SoundOff from '../../img/sound-off.svg'

export const Pause = () => {
    return(
        <div className='flex justify-center items-center'>
            <img className='w-10 rounded-full' src={SoundOff} alt="Sound on" />
        </div>
    )
}