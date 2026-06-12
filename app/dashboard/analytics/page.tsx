'use client';

import { Card } from '@/components/ui/card';

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-display tracking-tight mb-2">Analytics</h1>
        <p className="text-muted-foreground">Detailed performance metrics and insights</p>
      </div>

      <Card className="p-8 border border-border/50">
        <div className="flex items-center justify-center h-96">
          <p className="text-muted-foreground text-center">
            <span className="text-2xl font-display mb-2 block">Analytics Dashboard</span>
            Detailed metrics and insights coming soon
          </p>
        </div>
      </Card>
    </div>
  );
}
