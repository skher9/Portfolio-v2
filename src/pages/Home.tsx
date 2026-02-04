import { useState } from 'react'
import {
  About,
  Skills,
  Experience,
  Blogs,
  MainNav,
} from '../components'
import type { MainTabId } from '../components/MainNav'

export function Home() {
  const [activeTab, setActiveTab] = useState<MainTabId>('about')

  return (
    <div className="min-h-full text-left">
      <div className="sticky top-0 z-10 -mx-8 -mt-[1px] border-b border-white/40 bg-white/75 px-8 py-2 backdrop-blur-xl dark:border-slate-500/30 dark:bg-slate-900/75">
        <MainNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="max-w-3xl space-y-2 pb-8 pt-2.5">
        {activeTab === 'about' ? (
          <>
            <About />
            <Skills />
            <Experience />
          </>
        ) : (
          <Blogs />
        )}
      </div>
    </div>
  )
}
