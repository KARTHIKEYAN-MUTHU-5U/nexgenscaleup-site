import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export default function Contact() {
    return (
        <Section id="contact">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Let&apos;s Work Together</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                    Have a project in mind or want to discuss the latest tech? I&apos;m always open to new opportunities and collaborations.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-8 flex flex-col items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
                        <div className="text-4xl mb-4">📧</div>
                        <h3 className="text-lg font-semibold mb-2">Email Me</h3>
                        <p className="text-muted-foreground">reachmetamizha@gmail.com</p>
                    </Card>
                    <a href="https://www.linkedin.com/in/karthikeyan-m-b7b585138" target="_blank" rel="noopener noreferrer" className="block">
                        <Card className="p-8 flex flex-col items-center justify-center hover:border-primary/50 transition-colors cursor-pointer h-full">
                            <div className="text-4xl mb-4">💼</div>
                            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                            <p className="text-muted-foreground">in/karthikeyan-m</p>
                        </Card>
                    </a>
                </div>

                <div className="mt-12 p-8 glass-panel rounded-2xl">
                    <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                    <form className="space-y-4 text-left">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name</label>
                                <input type="text" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input type="email" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="Tell me about your project..." />
                        </div>
                        <Button className="w-full" size="lg">Send Message</Button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
