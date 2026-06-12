'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Zap } from 'lucide-react';

const models = [
  {
    name: 'Llama 2 (13B)',
    status: 'active',
    deployed: '3 regions',
    requests: '12.4K',
    latency: '45ms',
  },
  {
    name: 'Mistral 7B',
    status: 'active',
    deployed: '2 regions',
    requests: '8.2K',
    latency: '38ms',
  },
  {
    name: 'Custom Fine-tuned',
    status: 'training',
    deployed: '1 region',
    requests: '2.1K',
    latency: '52ms',
  },
];

export default function ModelsPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-display tracking-tight mb-2">Models</h1>
          <p className="text-muted-foreground">Manage your AI models and deployments</p>
        </div>
        <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full">
          <Plus className="w-4 h-4 mr-2" />
          Add Model
        </Button>
      </div>

      <div className="space-y-4">
        {models.map((model) => (
          <Card key={model.name} className="p-6 border border-border/50 hover:border-border transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-display">{model.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded font-mono ${
                    model.status === 'active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {model.status}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Deployed</p>
                    <p className="text-sm font-mono">{model.deployed}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Requests</p>
                    <p className="text-sm font-mono">{model.requests}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Latency</p>
                    <p className="text-sm font-mono">{model.latency}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Health</p>
                    <div className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-green-600" />
                      <span className="text-sm">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="rounded-full">
                Manage
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
