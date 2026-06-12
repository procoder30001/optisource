'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Zap, Brain, Cpu, Database, TrendingUp, AlertCircle, Play, Code2, GitBranch } from 'lucide-react';

const modelData = [
  { name: 'Claude 3', requests: 4200, latency: 245, accuracy: 94.2 },
  { name: 'Llama 2', requests: 3800, latency: 189, accuracy: 91.5 },
  { name: 'Mistral', requests: 2900, latency: 156, accuracy: 89.8 },
  { name: 'GPT-4', requests: 5600, latency: 312, accuracy: 96.1 },
];

const performanceData = [
  { time: '00:00', throughput: 2400, errors: 24, latency: 140 },
  { time: '04:00', throughput: 2210, errors: 13, latency: 135 },
  { time: '08:00', throughput: 2290, errors: 8, latency: 145 },
  { time: '12:00', throughput: 2000, errors: 5, latency: 110 },
  { time: '16:00', throughput: 2181, errors: 12, latency: 155 },
  { time: '20:00', throughput: 2500, errors: 18, latency: 165 },
  { time: '24:00', throughput: 2100, errors: 22, latency: 120 },
];

const inferenceJobs = [
  { id: 'inf-001', model: 'Claude 3 Opus', status: 'processing', progress: 67, tokens: '2.4M / 3.6M', latency: '245ms' },
  { id: 'inf-002', model: 'Llama 2 70B', status: 'completed', progress: 100, tokens: '1.8M / 1.8M', latency: '189ms' },
  { id: 'inf-003', model: 'Mistral Large', status: 'queued', progress: 0, tokens: '0 / 5.2M', latency: '-' },
];

const recentActivity = [
  { type: 'deployment', title: 'Model v2.4 deployed to production', time: '2 min ago', model: 'claude-3-opus' },
  { type: 'training', title: 'Fine-tuning job completed', time: '1 hour ago', model: 'llama-2-70b' },
  { type: 'error', title: 'High latency spike detected', time: '3 hours ago', model: 'gpt-4' },
];

export default function DashboardOverview() {
  const [selectedModel, setSelectedModel] = useState('all');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-display tracking-tight mb-2">AI Hub</h1>
        <p className="text-muted-foreground">Real-time monitoring and management of your AI infrastructure</p>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 border border-foreground/10 hover:border-foreground/20 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Active Models</p>
              <p className="text-3xl font-display">12</p>
            </div>
            <div className="p-2 bg-foreground/5 rounded-lg">
              <Brain className="w-5 h-5 text-foreground/60" />
            </div>
          </div>
          <p className="text-xs text-foreground/50">+2 this week</p>
        </Card>

        <Card className="p-6 border border-foreground/10 hover:border-foreground/20 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Daily Requests</p>
              <p className="text-3xl font-display">1.2M</p>
            </div>
            <div className="p-2 bg-foreground/5 rounded-lg">
              <Zap className="w-5 h-5 text-foreground/60" />
            </div>
          </div>
          <p className="text-xs text-foreground/50">↑ 12% from yesterday</p>
        </Card>

        <Card className="p-6 border border-foreground/10 hover:border-foreground/20 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Avg Latency</p>
              <p className="text-3xl font-display">187ms</p>
            </div>
            <div className="p-2 bg-foreground/5 rounded-lg">
              <Cpu className="w-5 h-5 text-foreground/60" />
            </div>
          </div>
          <p className="text-xs text-foreground/50">↓ 4% improvement</p>
        </Card>

        <Card className="p-6 border border-foreground/10 hover:border-foreground/20 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Error Rate</p>
              <p className="text-3xl font-display">0.12%</p>
            </div>
            <div className="p-2 bg-foreground/5 rounded-lg">
              <TrendingUp className="w-5 h-5 text-foreground/60" />
            </div>
          </div>
          <p className="text-xs text-foreground/50">Within SLA</p>
        </Card>
      </div>

      {/* Model Performance Comparison */}
      <Card className="p-6 border border-foreground/10">
        <div className="mb-6">
          <h2 className="text-xl font-display mb-2">Model Performance Comparison</h2>
          <p className="text-sm text-muted-foreground">Last 24 hours - Request volume vs accuracy</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={modelData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgb(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="rgb(255,255,255,0.5)" />
              <YAxis stroke="rgb(255,255,255,0.5)" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
                labelStyle={{ color: 'rgba(255,255,255,0.9)' }}
              />
              <Legend />
              <Bar dataKey="requests" fill="#ffffff" opacity={0.7} />
              <Bar dataKey="accuracy" fill="#ffffff" opacity={0.4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Real-time Performance */}
        <div className="lg:col-span-2">
          <Card className="p-6 border border-foreground/10">
            <div className="mb-6">
              <h2 className="text-xl font-display mb-2">System Performance (24h)</h2>
              <p className="text-sm text-muted-foreground">Throughput, errors, and latency trends</p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorThroughput" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="rgba(255,255,255,0.4)" />
                      <stop offset="95%" stopColor="rgba(255,255,255,0.0)" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgb(255,255,255,0.1)" />
                  <XAxis dataKey="time" stroke="rgb(255,255,255,0.5)" />
                  <YAxis stroke="rgb(255,255,255,0.5)" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
                    labelStyle={{ color: 'rgba(255,255,255,0.9)' }}
                  />
                  <Area type="monotone" dataKey="throughput" stroke="#ffffff" fill="url(#colorThroughput)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="p-6 border border-foreground/10">
          <h3 className="text-lg font-display mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button className="w-full bg-foreground/10 hover:bg-foreground/20 text-foreground justify-start" variant="outline">
              <Play className="w-4 h-4 mr-2" /> Start Inference
            </Button>
            <Button className="w-full bg-foreground/10 hover:bg-foreground/20 text-foreground justify-start" variant="outline">
              <Code2 className="w-4 h-4 mr-2" /> Prompt Playground
            </Button>
            <Button className="w-full bg-foreground/10 hover:bg-foreground/20 text-foreground justify-start" variant="outline">
              <Database className="w-4 h-4 mr-2" /> Vector DB
            </Button>
            <Button className="w-full bg-foreground/10 hover:bg-foreground/20 text-foreground justify-start" variant="outline">
              <GitBranch className="w-4 h-4 mr-2" /> Workflows
            </Button>
          </div>
        </Card>
      </div>

      {/* Active Inference Jobs */}
      <Card className="p-6 border border-foreground/10">
        <div className="mb-6">
          <h2 className="text-xl font-display mb-2">Active Inference Jobs</h2>
          <p className="text-sm text-muted-foreground">Real-time token processing and latency</p>
        </div>
        <div className="space-y-4">
          {inferenceJobs.map((job) => (
            <div key={job.id} className="p-4 border border-foreground/10 rounded-lg hover:border-foreground/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-mono text-sm text-foreground/60 mb-1">{job.id}</p>
                  <p className="font-medium">{job.model}</p>
                </div>
                <span className={`text-xs font-mono px-2 py-1 rounded ${
                  job.status === 'processing' ? 'bg-yellow-500/20 text-yellow-300' :
                  job.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                  'bg-gray-500/20 text-gray-300'
                }`}>
                  {job.status}
                </span>
              </div>
              <div className="mb-3">
                <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-foreground transition-all" 
                    style={{ width: `${job.progress}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{job.tokens}</span>
                <span>{job.latency}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Activity Feed */}
      <Card className="p-6 border border-foreground/10">
        <h2 className="text-xl font-display mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, idx) => (
            <div key={idx} className="flex items-start gap-4 pb-4 border-b border-foreground/10 last:pb-0 last:border-0">
              <div className="p-2 bg-foreground/5 rounded-lg mt-1">
                {activity.type === 'deployment' && <Zap className="w-4 h-4" />}
                {activity.type === 'training' && <Brain className="w-4 h-4" />}
                {activity.type === 'error' && <AlertCircle className="w-4 h-4" />}
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm mb-1">{activity.title}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">{activity.model}</span>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
