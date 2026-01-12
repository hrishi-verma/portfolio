'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Globe, Clock, Wifi, Minimize2 } from 'lucide-react';

export default function SystemStatus() {
    const [time, setTime] = useState<string>('');
    const [latency, setLatency] = useState<number>(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [isOnline, setIsOnline] = useState(true);
    const [region, setRegion] = useState<string>('Unknown');
    const [fps, setFps] = useState<number>(60);

    useEffect(() => {
        setIsClient(true);
        setRegion(Intl.DateTimeFormat().resolvedOptions().timeZone);
        setIsOnline(navigator.onLine);

        // Update time every second
        const timeInterval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }));
        }, 1000);

        // Real Ping Test (fetch favicon head)
        const measurePing = async () => {
            // If browser says offline, believe it and don't try to ping
            if (!navigator.onLine) {
                setIsOnline(false);
                setLatency(0);
                return;
            }

            const start = performance.now();
            try {
                await fetch('/favicon.png', { method: 'HEAD', cache: 'no-store' });
                const end = performance.now();
                setLatency(Math.round(end - start));
                // Don't force setIsOnline(true) here, let the event listeners handle it
                // But if it works, we are definitely connected to server
            } catch (e) {
                // Ping failed
                setLatency(0);
            }
        };

        measurePing();
        const pingInterval = setInterval(measurePing, 5000);

        // Network Status Listeners
        const handleOnline = () => {
            setIsOnline(true);
            measurePing(); // Trigger immediate ping check
        };
        const handleOffline = () => {
            setIsOnline(false);
            setLatency(0);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // FPS Counter
        let frameCount = 0;
        let lastTime = performance.now();

        const countFrames = () => {
            const now = performance.now();
            frameCount++;

            if (now - lastTime >= 1000) {
                setFps(frameCount);
                frameCount = 0;
                lastTime = now;
            }
            requestAnimationFrame(countFrames);
        };
        const animId = requestAnimationFrame(countFrames);

        return () => {
            clearInterval(timeInterval);
            clearInterval(pingInterval);
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            cancelAnimationFrame(animId);
        };
    }, []);

    if (!isClient) return null;

    const statusColor = isOnline ? (latency < 100 ? 'text-green-400' : 'text-yellow-400') : 'text-red-500';
    const statusBg = isOnline ? (latency < 100 ? 'bg-green-500' : 'bg-yellow-500') : 'bg-red-500';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 right-6 z-40 hidden md:block font-mono"
        >
            <div
                className={`backdrop-blur-md border transition-all duration-300 ease-spring overflow-hidden
          ${isExpanded
                        ? 'bg-gray-900/95 border-purple-500/30 p-5 rounded-2xl w-72'
                        : 'bg-black/80 border-gray-800 p-2 rounded-full w-auto hover:border-gray-600'
                    }
        `}
            >
                {/* Collapsed State */}
                {!isExpanded && (
                    <div
                        className="flex items-center gap-3 cursor-pointer px-2"
                        onClick={() => setIsExpanded(true)}
                    >
                        <div className="relative flex h-3 w-3">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusBg} opacity-75`}></span>
                            <span className={`relative inline-flex rounded-full h-3 w-3 ${statusBg}`}></span>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">SYS: {isOnline ? 'ONLINE' : 'OFFLINE'}</span>
                        <div className="h-4 w-[1px] bg-gray-700 mx-1"></div>
                        <span className={`text-xs ${statusColor} flex items-center gap-1 font-mono`}>
                            <Activity className="w-3 h-3" />
                            {latency}ms
                        </span>
                    </div>
                )}

                {/* Expanded State */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-800 select-none">
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">System Metrics</span>
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="text-gray-500 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                                >
                                    <Minimize2 className="w-3 h-3" />
                                </button>
                            </div>

                            <div className="space-y-4 text-sm font-mono">

                                {/* Status Row */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Wifi className="w-3.5 h-3.5" />
                                        <span>Network</span>
                                    </div>
                                    <span className={`font-semibold ${isOnline ? 'text-green-400' : 'text-red-500'}`}>
                                        {isOnline ? 'Connected' : 'Disconnected'}
                                    </span>
                                </div>

                                {/* Latency (Real Ping) */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Activity className="w-3.5 h-3.5" />
                                        <span>Ping (RTT)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-20 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-blue-500"
                                                animate={{ width: `${Math.min(100, (latency / 200) * 100)}%` }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </div>
                                        <span className="text-white w-10 text-right">{latency}ms</span>
                                    </div>
                                </div>

                                {/* FPS (Real Performance) */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <span className="text-[10px] border border-gray-600 rounded px-1 min-w-[28px] text-center">FPS</span>
                                        <span>Display</span>
                                    </div>
                                    <span className={`text-right font-semibold ${fps < 30 ? 'text-red-400' : 'text-green-400'}`}>{fps} Hz</span>
                                </div>

                                {/* Region (Real Timezone) */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Globe className="w-3.5 h-3.5" />
                                        <span>Zone</span>
                                    </div>
                                    <span className="text-gray-200 text-xs truncate max-w-[140px]" title={region}>
                                        {region}
                                    </span>
                                </div>

                                {/* Time Row */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>Local</span>
                                    </div>
                                    <span className="text-white font-medium">{time}</span>
                                </div>

                            </div>

                            <div className="mt-4 pt-3 border-t border-gray-800 flex justify-between text-[10px] text-gray-600 font-sans font-medium">

                                <span>v2.5.0</span>
                                <span className="uppercase">{isOnline ? 'Stable' : 'Unstable'}</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
