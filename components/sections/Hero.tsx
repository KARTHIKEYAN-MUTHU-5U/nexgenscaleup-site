import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { NameCard } from '../ui/NameCard';

export default function Hero() {
    return (
        <Section className="min-h-screen flex items-center justify-center pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4 border border-primary/20">
                        🚀 Elevating Businesses Digitally
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
                        We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Scalable</span> <br />
                        Web & Mobile Solutions
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        <strong className="text-foreground">NexGenScaleUp</strong> transforms your vision into high-performance Android, iOS, and Web Applications.
                        Expert developers delivering top-tier UI/UX for the modern digital era.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center lg:justify-start">
                        <a href="#projects">
                            <Button size="lg" className="w-full md:w-auto text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25">
                                View Our Work
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button variant="outline" size="lg" className="w-full md:w-auto text-lg px-8 py-6 rounded-xl border-2">
                                Start Your Project
                            </Button>
                        </a>
                    </div>

                    {/* Trust Signals */}
                    <div className="pt-12 flex flex-col md:flex-row items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground border-t border-border/50 mt-8">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">📱</span>
                            <span>iOS & Android Experts</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">💻</span>
                            <span>Custom Web Portals</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">✨</span>
                            <span>Premium UI/UX Design</span>
                        </div>
                    </div>
                </div>

                {/* Right Visual - Name Card */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000">
                    <div className="relative w-full max-w-md">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/20 to-transparent blur-3xl -z-10"></div>
                        <NameCard />
                    </div>
                </div>
            </div>
        </Section>
    );
}
