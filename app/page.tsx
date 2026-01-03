import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            shadcn/ui Component Showcase
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Testing our newly installed components
          </p>
        </div>

        <Separator className="mb-12" />

        {/* Card Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Card Component</CardTitle>
            <CardDescription>
              A beautiful card component with header, content, and footer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This card is built with shadcn/ui. The code lives in your project,
              so you can customize it however you want!
            </p>
          </CardContent>
        </Card>

        {/* Badge Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Badge Component</CardTitle>
            <CardDescription>Various badge styles for tags and labels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Button Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Button Component</CardTitle>
            <CardDescription>Different button variants and sizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button>Default Size</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </main>
  );
}