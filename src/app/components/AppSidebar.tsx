import { Home, Database, Layers, Code, FileText } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/components/ui/sidebar'

// Menu items.
const items = [
  {
    title: 'Visão Geral',
    url: '#overview',
    icon: Home,
  },
  {
    title: 'Tech Stack',
    url: '#stack',
    icon: Layers,
  },
  {
    title: 'Arquitetura',
    url: '#architecture',
    icon: Code,
  },
  {
    title: 'Database',
    url: '#database',
    icon: Database,
  },
  {
    title: 'IPC & Segurança',
    url: '#ipc',
    icon: FileText,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Electron Template</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
