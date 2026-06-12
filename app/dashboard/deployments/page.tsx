'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GitBranch } from 'lucide-react';

const deployments = [
  {
    name: 'llama-2-prod',
    model: 'Llama 2 (13B)',
    region: 'us-east-1',
    status: 'healthy',
    uptime: '99.95%',
    lastDeploy: '2 hours ago',
  },
  {
    name: 'mistral-staging',
    model: 'Mistral 7B',
    region: 'eu-west-1',
    status: 'healthy',
    uptime: '99.87%',
    lastDeploy: '5 hours ago',
  },
  {
    name: 'custom-model-dev',
    model: 'Custom Fine-tuned',
    region: 'us-west-2',
    status: 'warning',
    uptime: '98.2%',
    lastDeploy: '12 hours ago',
  },
];

export default function DeploymentsPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-display tracking-tight mb-2">Deployments</h1>
          <p className="text-muted-foreground">Monitor your active deployments</p>
        </div>
        <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full">
          <GitBranch className="w-4 h-4 mr-2" />
          New Deployment
        </Button>
      </div>

      <div className="space-y-4">
        {deployments.map((deployment) => (
          <Card key={deployment.name} className="p-6 border border-border/50 hover:border-border transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-display mb-1">{deployment.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{deployment.model}</p>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Region</p>
                    <p className="text-sm font-mono">{deployment.region}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Status</p>
                    <span className={`text-xs px-2 py-1 rounded font-mono inline-block ${
                      deployment.status === 'healthy' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {deployment.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Uptime</p>
                    <p className="text-sm font-mono">{deployment.uptime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Last Deploy</p>
                    <p className="text-sm font-mono">{deployment.lastDeploy}</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="rounded-full">
                View
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
