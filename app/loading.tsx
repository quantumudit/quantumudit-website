import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Navigation Skeleton */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Skeleton className="h-8 w-32" />
                    <div className="hidden md:flex gap-2">
                        {[...Array(5)].map((_, i) => (
                            <Skeleton key={i} className="h-8 w-20" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Hero Skeleton */}
            <div className="pt-16 min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 text-center">
                    <Skeleton className="h-12 w-48 mx-auto mb-4" />
                    <Skeleton className="h-16 w-96 mx-auto mb-4" />
                    <Skeleton className="h-8 w-64 mx-auto mb-8" />
                    <div className="flex gap-4 justify-center">
                        <Skeleton className="h-12 w-40" />
                        <Skeleton className="h-12 w-40" />
                    </div>
                </div>
            </div>
        </div>
    );
}