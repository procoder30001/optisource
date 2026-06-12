'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Zap,
  Settings,
  Users,
  BarChart3,
  GitBranch,
  Shield,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Brain,
  Code2,
  Database,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const navItems = [
  {
    label: 'AI Hub',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Playground',
    href: '/dashboard/playground',
    icon: Code2,
  },
  {
    label: 'Fine-tune',
    href: '/dashboard/finetune',
    icon: Brain,
  },
  {
    label: 'Vectors',
    href: '/dashboard/vectors',
    icon: Database,
  },
  {
    label: 'Models',
    href: '/dashboard/models',
    icon: Zap,
  },
  {
    label: 'Deployments',
    href: '/dashboard/deployments',
    icon: GitBranch,
  },
  {
    label: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
  },
  {
    label: 'Team',
    href: '/dashboard/team',
    icon: Users,
  },
  {
    label: 'Security',
    href: '/dashboard/security',
    icon: Shield,
  },
];

export function DashboardSidebar({ open, onOpenChange }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-0 z-40 h-screen bg-card border-r border-border/50 transition-all duration-300 flex flex-col',
          open ? 'w-64' : 'w-20'
        )}
      >
        {/* Logo Area */}
        <div className="h-16 border-b border-border/50 flex items-center justify-between px-4">
          {open && (
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-foreground flex items-center justify-center text-background font-display font-bold text-sm">
                O
              </div>
              <span className="font-display text-lg tracking-tight">OptiSource</span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(!open)}
            className="ml-auto hover:bg-foreground/5"
          >
            {open ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group text-sm',
                    isActive
                      ? 'bg-foreground/10 text-foreground'
                      : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
                  )}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {open && <span className="truncate">{item.label}</span>}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-border/50 p-3 space-y-2">
          <Link
            href="/dashboard/settings"
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm',
              pathname === '/dashboard/settings'
                ? 'bg-foreground/10 text-foreground'
                : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
            )}
          >
            <Settings className="w-5 h-5 flex-shrink-0" />
            {open && <span>Settings</span>}
          </Link>
          <button
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {open && <span>Sign out</span>}
          </button>
        </div>
      </div>

      {/* Sidebar Spacer */}
      <div className={cn('transition-all duration-300', open ? 'w-64' : 'w-20')} />
    </>
  );
}
