'use client';

import { useState, useRef, useEffect } from 'react';

interface Song {
    title: string;
    src: string;
}

const DEFAULT_SONGS: Song[] = [
    {
        title: 'I Love You',
        src: 'https://raw.githubusercontent.com/KanasakiTechnologics/KanasakiTechnologics.github.io/1.0.1/assets/sound/I_Love_You.mp3',
    },
    {
        title: 'Lulu',
        src: 'https://raw.githubusercontent.com/KanasakiTechnologics/KanasakiTechnologics.github.io/1.0.1/assets/sound/Lulu.mp3',
    },
];

export default function MediaPage({ songs = DEFAULT_SONGS }: { songs?: Song[] }) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const currentSong = songs[currentSongIndex];

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = currentSong.src;
            audioRef.current.load();
        }
    }, [currentSongIndex, currentSong.src]);

    useEffect(() => {
        if (isPlaying && audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error('Playback error:', error);
            });
        } else if (!isPlaying && audioRef.current) {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const handlePlayPause = () => {
        if (!audioRef.current) return;
        setIsPlaying(!isPlaying);
    };

    const handleStop = () => {
        if (!audioRef.current) return;
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        setCurrentTime(0);
    };

    const handlePrevious = () => {
        setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    };

    const handleNext = () => {
        setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    };

    const handleMute = () => {
        if (!audioRef.current) return;
        audioRef.current.muted = !audioRef.current.muted;
        setIsMuted(!isMuted);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!audioRef.current) return;
        const newTime = (parseFloat(e.target.value) / 100) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleSongSelect = (index: number) => {
        setCurrentSongIndex(index);
        setIsDropdownOpen(false);
        setIsPlaying(true);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const progressPercent = duration ? (currentTime / duration) * 100 : 0;

    return (
        <div id="media" className="snap-start min-h-screen pt-16 overflow-y-auto bg-cover bg-center bg-no-repeat md:bg-[url(../assets/wallpaper_2.jpg)] bg-[url(../assets/phone_2.jpg)]">
            <div className="flex flex-col md:h-1/2 p-5 ml-4 mr-4 md:ml-20 md:mr-20 bg-white/50 rounded-xl justify-items-center items-center shadow-lg">
                <h1 className="font-bebas text-5xl m-2.5 text-center">Audio Player</h1>
                <br />

                <div className="flex flex-col justify-center items-center h-1/2 w-full md:w-10/12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-5">
                    <div className="mb-3 text-center font-montserrat text-white">
                        <h5 className="text-lg font-semibold">{currentSong.title}</h5>
                    </div>

                    <div className="mb-3 flex gap-2">
                        <button
                            onClick={handlePrevious}
                            className="m-1 p-2 cursor-pointer hover:bg-white/20 rounded-lg transition"
                            aria-label="Previous"
                            title="Previous Song"
                        >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 6h2v12H6V6zm12 0v12l-10-6z" />
                            </svg>
                        </button>

                        <button
                            onClick={handlePlayPause}
                            className="m-1 p-2 cursor-pointer hover:bg-white/20 rounded-lg transition"
                            aria-label={isPlaying ? 'Pause' : 'Play'}
                            title={isPlaying ? 'Pause' : 'Play'}
                        >
                            {isPlaying ? (
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={handleStop}
                            className="m-1 p-2 cursor-pointer hover:bg-white/20 rounded-lg transition"
                            aria-label="Stop"
                            title="Stop"
                        >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 6h12v12H6z" />
                            </svg>
                        </button>

                        <button
                            onClick={handleNext}
                            className="m-1 p-2 cursor-pointer hover:bg-white/20 rounded-lg transition"
                            aria-label="Next"
                            title="Next Song"
                        >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 18h2V6h-2zm-12 0l10-6-10-6z" />
                            </svg>
                        </button>

                        <button
                            onClick={handleMute}
                            className="m-1 p-2 cursor-pointer hover:bg-white/20 rounded-lg transition"
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                            title={isMuted ? 'Unmute' : 'Mute'}
                        >
                            {isMuted ? (
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C23.16 14.05 24 12.15 24 10c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM17 5.27v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progressPercent}
                        onChange={handleSeek}
                        className="w-full md:w-9/12 h-2 bg-white/30 rounded-lg cursor-pointer appearance-none accent-white"
                    />

                    <div className="mt-2 text-white text-sm font-montserrat">
                        {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')} /{' '}
                        {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, '0')}
                    </div>
                </div>

                <div className="relative mt-5 w-full md:w-auto">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="px-5 py-3.5 border-solid border-gray-600 border-[1px] rounded-xl cursor-pointer hover:bg-gray-100 transition"
                    >
                        Playlist {currentSongIndex + 1}
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute top-16 w-80 rounded-3xl border-2 border-indigo-500 bg-white shadow-lg z-10">
                            {songs.map((song, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSongSelect(index)}
                                    className={`w-full block px-4 py-2 text-left hover:bg-gray-100 transition ${
                                        index === 0 ? 'rounded-t-2xl' : ''
                                    } ${index === songs.length - 1 ? 'rounded-b-2xl' : ''} ${
                                        index === currentSongIndex ? 'bg-indigo-100 font-semibold' : ''
                                    }`}
                                >
                                    {index + 1}. {song.title}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <audio
                    ref={audioRef}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    crossOrigin="anonymous"
                />
            </div>
        </div>
    );
}