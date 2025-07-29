"use client";

import { ComponentType, lazy, Suspense } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ScrollLazyLoadProps {
    component: ComponentType<Record<string, unknown>>;
    fallback?: React.ReactNode;
    props?: Record<string, unknown>;
    className?: string;
    threshold?: number;
    rootMargin?: string;
}

const ScrollLazyLoad = ({ 
    component: Component, 
    fallback, 
    props, 
    className = "",
    threshold = 0.1,
    rootMargin = "100px"
}: ScrollLazyLoadProps) => {
    const { elementRef, hasIntersected } = useIntersectionObserver({
        threshold,
        rootMargin
    });

    if (!hasIntersected) {
        return (
            <div 
                ref={elementRef} 
                className={`min-h-[400px] ${className}`}
            >
                {fallback || (
                    <div className="h-96 flex items-center justify-center">
                        <div className="animate-pulse">
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    const LazyComponent = lazy(() => Promise.resolve({ default: Component }));

    return (
        <div ref={elementRef} className={className}>
            <Suspense fallback={fallback || <div className="h-96 flex items-center justify-center">Yükleniyor...</div>}>
                <LazyComponent {...props} />
            </Suspense>
        </div>
    );
};

export default ScrollLazyLoad; 