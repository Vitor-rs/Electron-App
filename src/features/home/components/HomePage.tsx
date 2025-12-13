import { Badge } from '@/shared/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import { ScrollArea } from '@/shared/components/ui/scroll-area'

export function HomePage() {
  const stack = [
    {
      category: 'Core',
      items: ['Electron', 'React 18', 'TypeScript', 'Vite'],
    },
    {
      category: 'UI & Styling',
      items: ['Tailwind CSS v4', 'Shadcn/ui', 'Lucide Icons'],
    },
    {
      category: 'Data & State',
      items: ['SQLite (better-sqlite3)', 'Drizzle ORM', 'Zustand', 'React Query'],
    },
    {
      category: 'Validation & Forms',
      items: ['Zod', 'React Hook Form'],
    },
    {
      category: 'Tooling & Quality',
      items: ['ESLint', 'Prettier', 'Plop (Scaffolding)', 'Husky', 'Commitlint'],
    },
  ]

  return (
    <ScrollArea className="h-full">
      <div className="container mx-auto max-w-5xl space-y-8 py-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Electron App Template
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Uma fundação robusta e moderna para construir aplicações desktop de alta performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <Card key={group.category} className="h-full">
              <CardHeader>
                <CardTitle>{group.category}</CardTitle>
                <CardDescription>Tecnologias principais</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Arquitetura do Projeto</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-primary">Backend (Main Process)</h3>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>Node.js environment</li>
                <li>SQLite Database com Drizzle</li>
                <li>IPC Handlers Type-Safe</li>
                <li>Arquitetura segura (Sandbox ativado)</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-primary">Frontend (Renderer Process)</h3>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>React + Vite</li>
                <li>Feature-based Folder Structure</li>
                <li>Componentes Shadcn/ui</li>
                <li>Separação estrita via ContextBridge</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
