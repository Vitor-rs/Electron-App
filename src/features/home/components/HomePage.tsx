export function HomePage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Bem-vindo ao Template Electron</h2>
        <p className="text-muted-foreground">
          Este é um template completo com React, TypeScript, Tailwind CSS, shadcn/ui, SQLite com
          Drizzle ORM, Zustand e Zod.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4 text-card-foreground">
            <h3 className="font-semibold">🎨 UI Moderna</h3>
            <p className="text-sm text-muted-foreground">Tailwind CSS v4 + shadcn/ui</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-card-foreground">
            <h3 className="font-semibold">💾 Banco Local</h3>
            <p className="text-sm text-muted-foreground">SQLite + Drizzle ORM</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-card-foreground">
            <h3 className="font-semibold">🔄 Estado Global</h3>
            <p className="text-sm text-muted-foreground">Zustand + Zod</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-card-foreground">
            <h3 className="font-semibold">✅ Qualidade</h3>
            <p className="text-sm text-muted-foreground">ESLint + Prettier + SonarQube</p>
          </div>
        </div>
      </div>
    </div>
  )
}
