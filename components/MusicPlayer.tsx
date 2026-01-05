'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function MusicPlayer() {
    const { theme } = useTheme();
    const [isPlaying, setIsPlaying] = useState(true); // Default to ON
    const [hasInitialized, setHasInitialized] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const currentTrackRef = useRef<string>('');

    // Get the correct audio source based on theme
    const getAudioSrc = useCallback(() => {
        return theme === 'dark' ? '/audio/dark-ambient.mp3' : '/audio/light-lofi.mp3';
    }, [theme]);

    // Initialize audio on first mount
    useEffect(() => {
        if (hasInitialized) return;

        const audio = new Audio(getAudioSrc());
        audio.loop = true;
        audio.volume = 0.3;
        audio.preload = 'auto';
        audioRef.current = audio;
        currentTrackRef.current = getAudioSrc();

        // Try to autoplay
        audio.play().then(() => {
            setIsPlaying(true);
        }).catch(err => {
            console.log('Autoplay blocked:', err.message);
            setIsPlaying(false);
        });

        setHasInitialized(true);
    }, [getAudioSrc, hasInitialized]);

    // Handle theme changes - switch track ONLY if currently playing
    useEffect(() => {
        if (!hasInitialized) return;

        const newSrc = getAudioSrc();

        // Only switch if track actually changed
        if (currentTrackRef.current !== newSrc) {
            const wasPlaying = isPlaying;

            // Stop current audio
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }

            // Create new audio with new track
            const audio = new Audio(newSrc);
            audio.loop = true;
            audio.volume = 0.3;
            audioRef.current = audio;
            currentTrackRef.current = newSrc;

            // Only play if was playing before theme switch
            if (wasPlaying) {
                audio.play().catch(err => {
                    console.log('Play failed:', err.message);
                });
            }
        }
    }, [theme, getAudioSrc, hasInitialized, isPlaying]);

    // Handle play/pause toggle
    const toggleMusic = () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().catch(err => {
                console.log('Play failed:', err.message);
            });
            setIsPlaying(true);
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    return (
        <button
            onClick={toggleMusic}
            className={`p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all hover:scale-110 ${isPlaying ? 'ring-2 ring-blue-400/50' : ''
                }`}
            aria-label={isPlaying ? 'Mute music' : 'Play music'}
            title={isPlaying ? 'Click to mute' : 'Click to play music'}
        >
            {isPlaying ? (
                <Volume2 className="w-5 h-5 text-blue-400" />
            ) : (
                <VolumeX className="w-5 h-5 text-gray-400" />
            )}
        </button>
    );
}
