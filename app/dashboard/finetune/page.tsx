'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Play, Square, Download, Copy, Edit2, Trash2 } from 'lucide-react';

const finetuningJobs = [
  {
    id: 'ft-001',
    model: 'Claude 3 Opus',
    status: 'training',
    progress: 67,
    epochs: '2 / 3',
    trainingExamples: 5234,
    validationExamples: 1312,
    startTime: '2 hours ago',
  },
  {
    id: 'ft-002',
    model: 'Llama 2 70B',
    status: 'completed',
    progress: 100,
    epochs: '3 / 3',
    trainingExamples: 8900,
    validationExamples: 2225,
    startTime: '1 day ago',
  },
];

const trainingMetrics = [
  { epoch: 1, loss: 2.4, valLoss: 2.6, accuracy: 0.72 },
  { epoch: 2, loss: 1.8, valLoss: 1.95, accuracy: 0.81 },
  { epoch: 3, loss: 1.2, valLoss: 1.4, accuracy: 0.88 },
];

export default function FineTuning() {
  const [selectedJob, setSelectedJob] = useState('ft-001');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-display tracking-tight mb-2">Fine-tuning</h1>
        <p className="text-muted-foreground">Customize models with your own data</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 border border-foreground/10">
          <p className="text-sm text-muted-foreground mb-1">Active Jobs</p>
          <p className="text-2xl font-display">1</p>
        </Card>
        <Card className="p-4 border border-foreground/10">
          <p className="text-sm text-muted-foreground mb-1">Completed</p>
          <p className="text-2xl font-display">3</p>
        </Card>
        <Card className="p-4 border border-foreground/10">
          <p className="text-sm text-muted-foreground mb-1">Custom Models</p>
          <p className="text-2xl font-display">2</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Jobs List */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-6 border border-foreground/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-display">Training Jobs</h2>
              <Button size="sm">
                <Play className="w-4 h-4 mr-2" /> New Job
              </Button>
            </div>
            <div className="space-y-4">
              {finetuningJobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job.id)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedJob === job.id
                      ? 'border-foreground/50 bg-foreground/5'
                      : 'border-foreground/10 hover:border-foreground/20'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-mono text-sm text-foreground/60">{job.id}</p>
                        <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                          job.status === 'training'
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-green-500/20 text-green-300'
                        }`}>
                          {job.status}
                        </span>
                      </div>
                      <p className="font-medium">{job.model}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono">{job.epochs}</p>
                      <p className="text-xs text-muted-foreground">{job.startTime}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-foreground transition-all"
                        style={{ width: `${job.progress}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {job.trainingExamples.toLocaleString()} training • {job.validationExamples.toLocaleString()} validation examples
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Training Metrics */}
          {selectedJob && (
            <Card className="p-6 border border-foreground/10">
              <h3 className="text-lg font-display mb-6">Training Metrics</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trainingMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgb(255,255,255,0.1)" />
                    <XAxis dataKey="epoch" stroke="rgb(255,255,255,0.5)" />
                    <YAxis stroke="rgb(255,255,255,0.5)" />
                    <Tooltip
                      contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
                      labelStyle={{ color: 'rgba(255,255,255,0.9)' }}
                    />
                    <Line type="monotone" dataKey="loss" stroke="#ffffff" dot={false} />
                    <Line type="monotone" dataKey="valLoss" stroke="#ffffff" opacity={0.5} dot={false} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          )}
        </div>

        {/* Details Sidebar */}
        <Card className="p-6 border border-foreground/10 h-fit">
          <h3 className="font-display mb-4 text-sm">Job Details</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Status</p>
              <p className="font-medium">In Progress</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Model</p>
              <p className="font-medium font-mono">claude-3-opus</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Training Data</p>
              <p className="font-medium">5,234 examples</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Validation Split</p>
              <p className="font-medium">20%</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Batch Size</p>
              <p className="font-medium">32</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Learning Rate</p>
              <p className="font-medium">0.0001</p>
            </div>
            <div className="pt-4 border-t border-foreground/10 space-y-2">
              <Button className="w-full justify-center gap-2" variant="outline" size="sm">
                <Download className="w-4 h-4" /> Export Model
              </Button>
              <Button className="w-full justify-center gap-2" variant="outline" size="sm">
                <Copy className="w-4 h-4" /> Duplicate
              </Button>
              <Button className="w-full justify-center gap-2 text-red-400 hover:bg-red-500/10" variant="outline" size="sm">
                <Trash2 className="w-4 h-4" /> Cancel
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Create New Job */}
      <Card className="p-6 border border-foreground/10">
        <h2 className="text-xl font-display mb-6">Start New Fine-tuning Job</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-muted-foreground block mb-2">Base Model</label>
            <select className="w-full px-3 py-2 bg-foreground/5 border border-foreground/10 rounded-lg text-sm focus:outline-none focus:border-foreground/30">
              <option>Claude 3 Opus</option>
              <option>Llama 2 70B</option>
              <option>Mistral Large</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-2">Training Data</label>
            <input
              type="file"
              className="w-full px-3 py-2 bg-foreground/5 border border-foreground/10 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-2">Learning Rate</label>
            <input
              type="number"
              defaultValue="0.0001"
              step="0.00001"
              className="w-full px-3 py-2 bg-foreground/5 border border-foreground/10 rounded-lg text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="text-sm text-muted-foreground block mb-2">Epochs</label>
            <input
              type="number"
              defaultValue="3"
              className="w-full px-3 py-2 bg-foreground/5 border border-foreground/10 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-2">Batch Size</label>
            <input
              type="number"
              defaultValue="32"
              className="w-full px-3 py-2 bg-foreground/5 border border-foreground/10 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-2">Validation Split</label>
            <input
              type="number"
              defaultValue="0.2"
              step="0.05"
              min="0"
              max="0.5"
              className="w-full px-3 py-2 bg-foreground/5 border border-foreground/10 rounded-lg text-sm"
            />
          </div>
        </div>
        <Button className="mt-6">
          <Play className="w-4 h-4 mr-2" /> Start Training
        </Button>
      </Card>
    </div>
  );
}
