import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

const services = [
    {
        category: "Web Development",
        items: ["Next.js & React Portals", "E-Commerce Solutions", "Progressive Web Apps (PWA)", "Performance Optimization", "SEO-First Architecture"],
        icon: "💻"
    },
    {
        category: "Mobile Application",
        items: ["Android Development", "iOS Development", "Flutter Cross-Platform", "App Store Deployment", "Native Performance"],
        icon: "📱"
    },
    {
        category: "UI/UX Design",
        items: ["User Interface Systems", "User Experience Research", "Prototyping & Wireframing", "Modern Visual Identity", "Interaction Design"],
        icon: "🎨"
    },
    {
        category: "Digital Growth",
        items: ["Technical SEO", "Cloud Infrastructure (AWS)", "Database Scalability", "Analytics Integration", "Security Audits"],
        icon: "🚀"
    },
];

export default function Services() {
    return (
        <Section id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">We provide comprehensive digital solutions tailored to your business needs.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <Card key={index} className="h-full hover:border-primary/50 transition-colors p-6 group">
                        <div className="text-4xl mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-foreground">{service.category}</h3>
                        <ul className="space-y-3">
                            {service.items.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-muted-foreground">
                                    <span className="text-primary mr-2 mt-1">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
