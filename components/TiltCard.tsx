'use client';

import { useRef, useState, ReactNode } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltAmount?: number;
    glareEnable?: boolean;
}

export default function TiltCard({
    children,
    className = '',
    tiltAmount = 10,
    glareEnable = true
}: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('');
    const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
    const { theme } = useTheme();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        // Calculate mouse position relative to card center
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation angles
        const rotateX = ((y - centerY) / centerY) * -tiltAmount;
        const rotateY = ((x - centerX) / centerX) * tiltAmount;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);

        // Update glare position with theme-aware colors
        if (glareEnable) {
            const glareX = (x / rect.width) * 100;
            const glareY = (y / rect.height) * 100;
            // Use blue/purple tint in light mode for better visibility
            const glareColor = theme === 'dark'
                ? 'rgba(255,255,255,0.15)'
                : 'rgba(99, 102, 241, 0.25)';
            setGlareStyle({
                background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor} 0%, transparent 60%)`,
                opacity: 1,
            });
        }
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
        setGlareStyle({ opacity: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative ${className}`}
            style={{
                transform,
                transition: 'transform 0.15s ease-out',
                transformStyle: 'preserve-3d',
            }}
        >
            {children}

            {/* Glare overlay */}
            {glareEnable && (
                <div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                        ...glareStyle,
                        transition: 'opacity 0.3s ease-out',
                    }}
                />
            )}
        </div>
    );
}
