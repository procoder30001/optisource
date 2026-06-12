'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SecurityPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-display tracking-tight mb-2">Security</h1>
        <p className="text-muted-foreground">Manage your security settings and API keys</p>
      </div>

      <div className="space-y-6">
        <Card className="p-6 border border-border/50">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-display mb-1">API Keys</h3>
              <p className="text-sm text-muted-foreground">Manage your API keys for integrations</p>
            </div>
            <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full text-sm">
              Generate Key
            </Button>
          </div>
          <div className="mt-4 space-y-2">
            <div className="p-3 rounded bg-foreground/5 border border-border/50 flex items-center justify-between">
              <div>
                <p className="text-sm font-mono">opt_sk_1a2b3c...</p>
                <p className="text-xs text-muted-foreground">Created 30 days ago</p>
              </div>
              <Button variant="outline" size="sm" className="text-xs rounded-full">
                Revoke
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 border border-border/50">
          <h3 className="text-lg font-display mb-4">Two-Factor Authentication</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Add an extra layer of security to your account
          </p>
          <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full">
            Enable 2FA
          </Button>
        </Card>

        <Card className="p-6 border border-border/50">
          <h3 className="text-lg font-display mb-4">Session Activity</h3>
          <div className="space-y-2">
            <div className="p-3 rounded bg-foreground/5 border border-border/50 flex items-center justify-between">
              <div>
                <p className="text-sm">Chrome on macOS</p>
                <p className="text-xs text-muted-foreground">192.168.1.1 • Active now</p>
              </div>
              <Button variant="outline" size="sm" className="text-xs rounded-full">
                Logout
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
