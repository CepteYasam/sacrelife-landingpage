"use client";

import { Suspense, lazy, ComponentType } from 'react';

interface LazyWrapperProps {
    component: ComponentType<Record<string, unknown>>;
    fallback?: React.ReactNode;
    props?: Record<string, unknown>;
}

const LazyWrapper = ({ component: Component, fallback, props }: LazyWrapperProps) => {
    const LazyComponent = lazy(() => Promise.resolve({ default: Component }));

    return (
        <Suspense fallback={fallback || <div className="h-96 flex items-center justify-center">Yükleniyor...</div>}>
            <LazyComponent {...props} />
        </Suspense>
    );
};

export default LazyWrapper; 