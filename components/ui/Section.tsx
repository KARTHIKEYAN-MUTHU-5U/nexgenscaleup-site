import { HTMLAttributes, forwardRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className = '', container = true, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={`py-16 md:py-24 ${className}`}
                {...props}
            >
                {container ? (
                    <div className="container-width">
                        {children}
                    </div>
                ) : children}
            </section>
        );
    }
);

Section.displayName = 'Section';

export { Section };
