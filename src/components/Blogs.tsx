import { useMediumBlogs } from '../hooks'

const cardClass =
  'rounded-lg border border-slate-300 bg-slate-50 p-6 transition-colors hover:border-slate-400 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700 dark:hover:bg-slate-900/70'

/** Character limit for excerpt; a few lines of content then "..." */
const DESCRIPTION_MAX = 280

function stripHtml(html: string): string {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent?.trim() ?? ''
}

function formatDate(iso: string | undefined): string {
  if (!iso) return ''
  try {
    const d = new Date(iso)
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return ''
  }
}

export function Blogs() {
  const { posts, loading, error } = useMediumBlogs()

  return (
    <section id="blogs" className="py-12">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
        Blogs
      </h2>
      <div className="mt-1 h-0.5 w-12 bg-amber-500" aria-hidden />
      {loading && (
        <p className="mt-6 text-slate-500 dark:text-slate-400">Loading posts…</p>
      )}
      {error && (
        <p className="mt-6 text-amber-600 dark:text-amber-500/90">{error}</p>
      )}
      {!loading && !error && posts.length > 0 && (
        <ul className="mt-6 space-y-4">
          {posts.map((post, i) => {
            const plain = post.description ? stripHtml(post.description) : ''
            const truncated = plain.length > DESCRIPTION_MAX
            const excerpt =
              plain.slice(0, DESCRIPTION_MAX) + (truncated ? '...' : '')
            return (
              <li key={i}>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass + ' block'}
                >
                  <div className="flex gap-4">
                    {post.thumbnail && (
                      <img
                        src={post.thumbnail}
                        alt=""
                        className="h-24 w-32 shrink-0 rounded-md object-cover"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-slate-800 dark:text-slate-100">
                        {post.title}
                      </h3>
                      {post.pubDate && (
                        <span className="mt-1 block text-sm text-slate-500">
                          {formatDate(post.pubDate)} · {post.platform}
                        </span>
                      )}
                      {excerpt && (
                        <p className="mt-2 line-clamp-4 text-sm text-slate-600 dark:text-slate-400">
                          {excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      )}
      {!loading && !error && posts.length === 0 && (
        <p className="mt-6 text-slate-500 dark:text-slate-500">No posts yet.</p>
      )}
    </section>
  )
}
