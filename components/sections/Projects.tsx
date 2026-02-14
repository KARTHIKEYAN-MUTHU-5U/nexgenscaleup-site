import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const projects = [
    {
        title: "Jobs For You Tamizha",
        description: "Official portal for the biggest job search community in Tamil Nadu. A comprehensive platform handling thousands of daily users searching for Government and Private sector jobs.",
        tags: ["High Traffic", "Web Portal", "Android App", "Educational"],
        link: "#",
        featured: true
    },
    {
        title: "E-Commerce Scale-Up",
        description: "Custom-built e-commerce engine designed for high conversion rates. Integrated with secure payment gateways and inventory management systems.",
        tags: ["Next.js", "Stripe", "Sanity CMS"],
        link: "#",
        featured: false
    },
    {
        title: "SaaS Analytics Dashboard",
        description: "Real-time analytics platform for enterprise clients. Visualizing complex data streams to provide actionable business intelligence.",
        tags: ["Enterprise", "Big Data", "React"],
        link: "#",
        featured: false
    }
];

export default function Projects() {
    return (
        <Section id="projects" className="bg-secondary/20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Showcasing our impact through successful client partnerships.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} hoverEffect className={`flex flex-col h-full ${project.featured ? 'border-primary shadow-lg shadow-primary/10' : ''}`}>
                        <div className={`h-48 rounded-t-lg mb-4 animate-pulse flex items-center justify-center text-4xl ${project.featured ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                            {project.featured ? '🏆' : '💼'}
                        </div>

                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            {project.featured && <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full font-bold">FLAGSHIP</span>}
                        </div>

                        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-xs font-medium px-2 py-1 rounded-full bg-background border border-border text-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Button variant={project.featured ? "primary" : "outline"} className="w-full opacity-75 cursor-not-allowed" disabled>
                            Case Study (Construction)
                        </Button>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
