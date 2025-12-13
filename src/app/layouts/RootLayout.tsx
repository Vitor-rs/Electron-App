import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from '@/shared/components/ui/sidebar'
import { AppSidebar } from '@/app/components/AppSidebar'

export function RootLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex min-h-screen w-full flex-1 flex-col bg-background text-foreground">
        <header className="flex h-14 items-center gap-4 border-b border-border px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Electron Template</h1>
        </header>
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}
