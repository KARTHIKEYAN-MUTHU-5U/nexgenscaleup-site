'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-red-500 p-10 font-mono">
                    <div>
                        <h1 className="text-xl mb-4">Application Crashed</h1>
                        <pre className="whitespace-pre-wrap break-all border border-red-900 p-4 rounded bg-red-950/20">
                            {this.state.error?.toString()}
                            {this.state.error?.stack}
                        </pre>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
