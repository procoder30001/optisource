'use client';

import { Button } from '@/components/ui/button';
import { Bell, Menu, Search } from 'lucide-react';

interface DashboardHeaderProps {
  onSidebarToggle: () => void;
}

export function DashboardHeader({ onSidebarToggle }: DashboardHeaderProps) {
  return (
    <header className="h-16 border-b border-border/50 bg-card flex items-center justify-between px-8">
      <div className="flex items-center gap-4 flex-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={onSidebarToggle}
          className="hover:bg-foreground/5 md:hidden"
        >
          <Menu className="w-5 h-5" />
        </Button>
        
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 border border-border/50 flex-1 max-w-md">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search models, deployments..."
            className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="hover:bg-foreground/5">
          <Bell className="w-5 h-5" />
        </Button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-border/50">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">Alex Chen</p>
            <p className="text-xs text-muted-foreground">@alex-2024</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center">
            <span className="text-sm font-display font-bold">AC</span>
          </div>
        </div>
      </div>
    </header>
  );
}
