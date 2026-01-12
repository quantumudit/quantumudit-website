import { Badge } from '@/components/ui/badge';

interface SkillBadgeProps {
    skill: string;
    category?: string;
}

export default function SkillBadge({ skill, category }: SkillBadgeProps) {
    // Color mapping by category
    const getCategoryColor = (cat?: string) => {
        if (!cat) return 'default';

        const colors: { [key: string]: string } = {
            'programming': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
            'data-analysis': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
            'machine-learning': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
            'big-data': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
            'databases': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
            'tools': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
        };

        return colors[cat.toLowerCase().replace(/\s+/g, '-')] || 'default';
    };

    return (
        <Badge
            variant="secondary"
            className={`px-4 py-2 text-sm font-medium transition-all hover:scale-105 hover:shadow-md cursor-default ${getCategoryColor(category)}`}
        >
            {skill}
        </Badge>
    );
}