'use client';

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ArrowDownLeft, Zap, Users, GitFork, TrendingUp } from 'lucide-react';

const dashboardData = [
  { date: 'Jan 1', models: 12, deployments: 8, requests: 2400 },
  { date: 'Jan 2', models: 15, deployments: 12, requests: 2210 },
  { date: 'Jan 3', models: 18, deployments: 15, requests: 2290 },
  { date: 'Jan 4', models: 22, deployments: 18, requests: 2000 },
  { date: 'Jan 5', models: 25, deployments: 22, requests: 2181 },
  { date: 'Jan 6', models: 28, deployments: 25, requests: 2500 },
  { date: 'Jan 7', models: 32, deployments: 28, requests: 2100 },
];

const metrics = [
  {
    label: 'Active Models',
    value: '32',
    change: '+12%',
    trend: 'up',
    icon: Zap,
  },
  {
    label: 'Deployments',
    value: '156',
    change: '+8%',
    trend: 'up',
    icon: TrendingUp,
  },
  {
    label: 'Contributors',
    value: '2,847',
    change: '+24%',
    trend: 'up',
    icon: Users,
  },
  {
    label: 'Total Forks',
    value: '5,234',
    change: '+18%',
    trend: 'up',
    icon: GitFork,
  },
];

const recentActivity = [
  {
    title: 'Llama 2 Model Deployed',
    description: 'Successfully deployed to 3 regions',
    timestamp: '2 hours ago',
    status: 'success',
  },
  {
    title: 'New Contributor Joined',
    description: 'alex-2024 started contributing',
    timestamp: '4 hours ago',
    status: 'info',
  },
  {
    title: 'API Rate Limit Warning',
    description: 'Usage at 87% of daily limit',
    timestamp: '6 hours ago',
    status: 'warning',
  },
  {
    title: 'Model Training Complete',
    description: 'Custom model finished fine-tuning',
    timestamp: '8 hours ago',
    status: 'success',
  },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-display tracking-tight mb-2">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Monitor your AI applications and deployments
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label} className="p-6 border border-border/50 hover:border-border transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                  <p className="text-3xl font-display tracking-tight">{metric.value}</p>
                </div>
                <div className="p-2 bg-foreground/5 rounded-lg">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                {metric.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 text-green-600" />
                ) : (
                  <ArrowDownLeft className="w-4 h-4 text-red-600" />
                )}
                <span className={metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                  {metric.change}
                </span>
                <span className="text-muted-foreground">vs last month</span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Line Chart */}
        <Card className="col-span-1 lg:col-span-2 p-6 border border-border/50">
          <div className="mb-6">
            <h3 className="text-lg font-display tracking-tight">API Requests</h3>
            <p className="text-sm text-muted-foreground">Last 7 days</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="requests" stroke="hsl(var(--foreground))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Bar Chart */}
        <Card className="p-6 border border-border/50">
          <div className="mb-6">
            <h3 className="text-lg font-display tracking-tight">Growth</h3>
            <p className="text-sm text-muted-foreground">Models & Deployments</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="models" fill="hsl(var(--foreground))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="deployments" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border border-border/50">
        <div className="p-6 border-b border-border/50">
          <h3 className="text-lg font-display tracking-tight">Recent Activity</h3>
        </div>
        <div className="divide-y divide-border/50">
          {recentActivity.map((activity, idx) => (
            <div key={idx} className="p-6 hover:bg-foreground/2 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-medium text-foreground mb-1">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
                <div className="text-right ml-4">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-mono mb-2 ${
                    activity.status === 'success' ? 'bg-green-100 text-green-700' :
                    activity.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {activity.status}
                  </span>
                  <p className="text-xs text-muted-foreground mt-2">{activity.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
