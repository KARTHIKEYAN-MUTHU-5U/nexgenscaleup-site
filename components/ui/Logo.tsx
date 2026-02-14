
import React from 'react';

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* Icon Mark */}
            <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-lg transform rotate-3 hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute inset-[2px] bg-background rounded-[6px] flex items-center justify-center">
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-purple-600 text-lg leading-none select-none">
                        N
                    </span>
                </div>
            </div>

            {/* Text Mark */}
            {showText && (
                <div className="flex flex-col">
                    <span className="font-bold text-lg tracking-tight leading-none text-foreground">
                        NEXGEN<span className="text-primary">SCALEUP</span>
                    </span>
                </div>
            )}
        </div>
    );
};
