
import React from 'react';
import { Logo } from './Logo';

export const NameCard = () => {
    return (
        <div className="relative group perspective-1000 w-full max-w-sm mx-auto md:mx-0">
            <div className="relative transform transition-all duration-500 ease-out preserve-3d group-hover:rotate-y-12 group-hover:rotate-x-12">

                {/* Card Background with Glass Effect */}
                <div className="relative w-full aspect-[1.586/1] rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl"></div>

                    {/* Card Content */}
                    <div className="relative h-full flex flex-col justify-between p-6">

                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <Logo showText={false} className="scale-125" />
                            <div className="text-right">
                                <h3 className="text-xs font-semibold text-primary tracking-widest uppercase">Venture Builder</h3>
                            </div>
                        </div>

                        {/* Main Info */}
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold text-white tracking-tight">NexGenScaleUp</h2>
                            <p className="text-sm text-gray-300 font-medium tracking-wide">Digital Agency</p>
                        </div>

                        {/* Footer / Contact */}
                        <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                            <div className="text-xs text-gray-400 font-mono">
                                EST. 2024
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-gray-300">reachmetamizha@gmail.com</p>
                                <p className="text-xs text-primary font-semibold mt-0.5">www.nexgenscaleup.com</p>
                            </div>
                        </div>

                    </div>

                    {/* Holographic Sheen Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

            </div>

            {/* Shadow Reflection */}
            <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/40 blur-lg rounded-[100%] transition-all duration-500 group-hover:scale-95 group-hover:bg-black/60"></div>
        </div>
    );
};
