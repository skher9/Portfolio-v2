import type { ReactNode } from 'react'
import { Sidebar, ThemeToggle } from '../components'
import { useTheme } from '../hooks'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-200 p-4 items-center dark:bg-black">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <div className="flex min-h-0 w-full max-w-5xl flex-1 flex-row gap-4 overflow-hidden">
        <Sidebar />
        <main className="min-h-0 flex-1 overflow-hidden rounded-xl border border-white/40 bg-white/75 text-slate-800 shadow-lg shadow-slate-300/20 backdrop-blur-xl dark:border-slate-500/30 dark:bg-slate-900/75 dark:shadow-black/20 dark:text-slate-200">
          <div className="h-full overflow-y-auto px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
