import { Section } from '../ui/Section';

export default function About() {
    return (
        <Section id="about" className="bg-secondary/20 my-16 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-12 items-center px-4 md:px-8">
                <div>
                    <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent mb-4">
                        WHO WE ARE
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                        Powering the Next Generation of Scale-Ups
                    </h2>
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            At <strong className="text-foreground">NexGenScaleUp</strong>, we don&apos;t just write code; we build businesses.
                            We are a premier digital agency specializing in end-to-end development for startups and enterprises.
                        </p>
                        <p>
                            From conceptualization to deployment, our team creates robust
                            <span className="text-primary font-medium"> Android</span> &
                            <span className="text-primary font-medium"> iOS applications</span> and
                            high-traffic <span className="text-primary font-medium">Web Portals</span> that drive growth.
                        </p>
                        <p>
                            Whether you need a complex educational platform or a sleek corporate site, we deliver
                            dead-simple navigation with complex, powerful backends.
                        </p>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative aspect-video rounded-2xl bg-card border border-border flex items-center justify-center p-8 overflow-hidden">
                        <div className="text-center">
                            <h3 className="text-6xl font-bold text-foreground mb-2">10+</h3>
                            <p className="text-muted-foreground uppercase tracking-widest text-sm">Projects Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
