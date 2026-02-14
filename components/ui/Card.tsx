import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`bg-card text-card-foreground rounded-xl border border-border p-6 shadow-sm 
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/50' : ''} 
        ${className}`}
                {...props}
            />
        );
    }
);

Card.displayName = 'Card';

export { Card };
