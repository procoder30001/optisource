'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Chen',
    email: 'alex@optisource.dev',
    role: 'Owner',
    joinedDate: 'Jan 1, 2024',
  },
  {
    name: 'Jordan Smith',
    email: 'jordan@optisource.dev',
    role: 'Admin',
    joinedDate: 'Jan 15, 2024',
  },
  {
    name: 'Sam Davis',
    email: 'sam@optisource.dev',
    role: 'Developer',
    joinedDate: 'Feb 1, 2024',
  },
];

export default function TeamPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-display tracking-tight mb-2">Team</h1>
          <p className="text-muted-foreground">Manage team members and permissions</p>
        </div>
        <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full">
          <Plus className="w-4 h-4 mr-2" />
          Add Member
        </Button>
      </div>

      <Card className="border border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="px-6 py-3 text-left text-sm font-mono text-muted-foreground">Name</th>
                <th className="px-6 py-3 text-left text-sm font-mono text-muted-foreground">Email</th>
                <th className="px-6 py-3 text-left text-sm font-mono text-muted-foreground">Role</th>
                <th className="px-6 py-3 text-left text-sm font-mono text-muted-foreground">Joined</th>
                <th className="px-6 py-3 text-right text-sm font-mono text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.email} className="border-b border-border/50 hover:bg-foreground/2 transition-colors">
                  <td className="px-6 py-4 text-sm">{member.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{member.email}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-2 py-1 rounded text-xs bg-foreground/10">
                      {member.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{member.joinedDate}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="outline" size="sm" className="rounded-full text-xs">
                      Manage
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
