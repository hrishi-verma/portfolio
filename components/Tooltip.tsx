'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
    children: React.ReactNode;
    content: string;
}

export default function Tooltip({ children, content }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 border border-gray-700 text-white text-xs rounded-md whitespace-nowrap z-50 shadow-xl pointer-events-none"
                    >
                        {content}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-r border-b border-gray-700 transform rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </div>
    );
}
