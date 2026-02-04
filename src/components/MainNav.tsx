const tabs = [
  { id: "about" as const, label: "About" },
  { id: "blog" as const, label: "Blog" },
] as const

export type MainTabId = (typeof tabs)[number]["id"]

interface MainNavProps {
  activeTab: MainTabId
  onTabChange: (tab: MainTabId) => void
}

export function MainNav({ activeTab, onTabChange }: MainNavProps) {
  return (
    <nav className="flex justify-end">
      <div className="flex flex-wrap gap-1 rounded-lg px-2 py-1.5">
        {tabs.map(({ id, label }) => {
          const isActive = id === activeTab
          return (
            <button
              key={id}
              type="button"
              onClick={() => onTabChange(id)}
              className={
                isActive
                  ? "rounded-md bg-amber-500/20 px-3 py-1.5 text-sm font-medium text-amber-700 dark:text-amber-400"
                  : "rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/10"
              }
            >
              {label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
