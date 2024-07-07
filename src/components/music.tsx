import { useState, useRef } from 'react'
import music from '../music/music.mp3'
import { Play } from './ui/play';
import { Pause } from './ui/pause';

export const Music = () => {
    const [status, setStatus] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const playMusic = () => {
        if(!status) {
            audioRef.current?.play();
            setStatus(true);
        }
        else
        {
            audioRef.current?.pause();
            setStatus(false);
        }
    }
    return (
        <div>
            <audio src={music} ref={audioRef} autoPlay></audio>
            <button onClick={playMusic}>{status ? <Pause/> : <Play />}</button>
        </div>
    )
}