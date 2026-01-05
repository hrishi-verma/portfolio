'use client';

import { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface TrailPoint {
    x: number;
    y: number;
    age: number;
}

export default function CustomCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [cursorVisible, setCursorVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Animation refs
    const cursorRef = useRef({ x: -100, y: -100 });
    const trailRef = useRef<TrailPoint[]>([]);
    const starRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);
    const { theme } = useTheme();

    // Configuration
    const TRAIL_LENGTH = 20;
    const POINT_LIFETIME = 15;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();

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
            // 1. Add new point
            trailRef.current.push({
                x: cursorRef.current.x,
                y: cursorRef.current.y,
                age: 0
            });

            // 2. Age points
            for (let i = 0; i < trailRef.current.length; i++) {
                trailRef.current[i].age++;
            }

            // 3. Remove old points
            trailRef.current = trailRef.current.filter(p => p.age < POINT_LIFETIME);

            // Update Star Position
            if (starRef.current) {
                starRef.current.style.left = `${cursorRef.current.x}px`;
                starRef.current.style.top = `${cursorRef.current.y}px`;
            }

            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                const trail = trailRef.current;
                // Only draw if we have enough points for a line
                if (trail.length > 2) {
                    // Colors
                    const baseColor = theme === 'dark' ? '167, 139, 250' : '124, 58, 237';

                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    // Use a larger width that tapers? 
                    // With single path, we can't taper width easily without more complex drawing.
                    // But a gradient stroke looks very smooth.

                    ctx.beginPath();
                    ctx.moveTo(trail[0].x, trail[0].y);

                    // Draw smooth curve through points
                    for (let i = 1; i < trail.length - 1; i++) {
                        const xc = (trail[i].x + trail[i + 1].x) / 2;
                        const yc = (trail[i].y + trail[i + 1].y) / 2;
                        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
                    }
                    // Connect last point
                    if (trail.length > 1) {
                        ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
                    }

                    // Gradient Stroke
                    // Create gradient from older points (tail) to newer (head)
                    const gradient = ctx.createLinearGradient(
                        trail[0].x, trail[0].y,
                        trail[trail.length - 1].x, trail[trail.length - 1].y
                    );

                    gradient.addColorStop(0, `rgba(${baseColor}, 0)`); // Tail fade
                    gradient.addColorStop(1, `rgba(${baseColor}, 0.5)`); // Head visible

                    ctx.lineWidth = 4; // Constant width for single stroke smoothness
                    ctx.strokeStyle = gradient;
                    ctx.stroke();
                }
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            cancelAnimationFrame(requestRef.current);
        };
    }, [theme]);

    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    const cursorColor = theme === 'dark' ? '#a78bfa' : '#7c3aed';

    return (
        <div className="custom-cursor-layer fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 1
                }}
            />

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
                    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, filter 0.5s ease-out',
                    willChange: 'transform, left, top',
                    transformOrigin: 'center center',
                    filter: isHovering ? `drop-shadow(0 0 4px ${theme === 'dark' ? 'rgba(167, 139, 250, 0.6)' : 'rgba(124, 58, 237, 0.5)'})` : 'none'
                }}
                className={isHovering ? 'scale-110' : 'scale-100'}

            >
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                        fill={cursorColor}
                    />
                </svg>
            </div>
        </div>
    );
}
