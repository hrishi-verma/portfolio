'use client';

import { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function CustomCursor() {
    const [cursorVisible, setCursorVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Animation refs
    const cursorRef = useRef({ x: -100, y: -100 });
    const starRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);
    const { theme } = useTheme();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            cursorRef.current = { x: clientX, y: clientY };
            setCursorVisible(true);

            const target = e.target as HTMLElement;
            if (target) {
                const computedStyle = window.getComputedStyle(target);
                const isInteractive =
                    target.tagName === 'A' ||
                    target.tagName === 'BUTTON' ||
                    target.tagName === 'INPUT' ||
                    target.tagName === 'TEXTAREA' ||
                    target.tagName === 'SELECT' ||
                    target.closest('a') ||
                    target.closest('button') ||
                    target.getAttribute('role') === 'button' ||
                    target.getAttribute('contenteditable') === 'true' ||
                    computedStyle.cursor === 'pointer';

                setIsHovering(!!isInteractive);
            }
        };

        const handleMouseLeave = () => {
            setCursorVisible(false);
        };

        const handleMouseEnter = () => {
            setCursorVisible(true);
        };

        const animate = () => {
            // Update Star Position
            if (starRef.current) {
                starRef.current.style.left = `${cursorRef.current.x}px`;
                starRef.current.style.top = `${cursorRef.current.y}px`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    const cursorColor = theme === 'dark' ? '#FCD34D' : '#B45309'; // Amber-300 (Dark) / Amber-700 (Light)

    return (
        <div className="custom-cursor-layer fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <div
                ref={starRef}
                style={{
                    position: 'absolute',
                    left: -100,
                    top: -100,
                    transform: 'translate(-50%, -50%)',
                    width: '32px',
                    height: '32px',
                    opacity: cursorVisible ? 1 : 0,
                    transition: 'opacity 0.2s ease-out', // Simplified transition
                    willChange: 'transform, left, top',
                    pointerEvents: 'none'
                }}
                className={isHovering ? 'scale-110' : 'scale-100 transition-transform duration-200'}
            >
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    filter: isHovering ? `drop-shadow(0 0 4px ${theme === 'dark' ? 'rgba(167, 139, 250, 0.6)' : 'rgba(124, 58, 237, 0.5)'})` : 'none'
                }}>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                            fill={cursorColor}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
