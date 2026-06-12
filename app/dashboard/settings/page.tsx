'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-display tracking-tight mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and workspace settings</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        <Card className="p-6 border border-border/50">
          <h3 className="text-lg font-display mb-4">Account</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                defaultValue="alex@optisource.dev"
                className="w-full px-3 py-2 rounded border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:border-border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Display Name</label>
              <input
                type="text"
                defaultValue="Alex Chen"
                className="w-full px-3 py-2 rounded border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:border-border"
              />
            </div>
            <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full">
              Save Changes
            </Button>
          </div>
        </Card>

        <Card className="p-6 border border-border/50">
          <h3 className="text-lg font-display mb-4">Workspace</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Workspace Name</label>
              <input
                type="text"
                defaultValue="My AI Platform"
                className="w-full px-3 py-2 rounded border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:border-border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Region</label>
              <select className="w-full px-3 py-2 rounded border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:border-border">
                <option>us-east-1</option>
                <option>eu-west-1</option>
                <option>ap-southeast-1</option>
              </select>
            </div>
            <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full">
              Update Workspace
            </Button>
          </div>
        </Card>

        <Card className="p-6 border border-border/50 border-red-200">
          <h3 className="text-lg font-display mb-2">Danger Zone</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Delete your workspace and all associated data
          </p>
          <Button variant="outline" className="rounded-full border-red-200 text-red-600 hover:bg-red-50">
            Delete Workspace
          </Button>
        </Card>
      </div>
    </div>
  );
}
