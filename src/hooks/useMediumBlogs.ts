import { useState, useEffect } from 'react'
import type { BlogEntry } from '../types/portfolio'
import type { MediumFeedResponse } from '../types/medium'

const RSS_API = 'https://api.rss2json.com/v1/api.json'

/**
 * Fetches blog posts from a Medium account via RSS.
 * Uses rss2json.com to convert RSS to JSON (avoids CORS and XML parsing).
 * Set VITE_MEDIUM_USERNAME in .env (e.g. your-username for @your-username).
 */
export function useMediumBlogs(): {
  posts: BlogEntry[]
  loading: boolean
  error: string | null
} {
  const username = import.meta.env.VITE_MEDIUM_USERNAME ?? 'skher3318'
  const feedUrl = `https://medium.com/feed/@${username}`
  const apiUrl = `${RSS_API}?rss_url=${encodeURIComponent(feedUrl)}`

  const [posts, setPosts] = useState<BlogEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchFeed() {
      try {
        const res = await fetch(apiUrl)
        if (!res.ok) throw new Error(`Feed failed: ${res.status}`)
        const data: MediumFeedResponse = await res.json()
        if (cancelled) return
        if (data.status !== 'ok' || !data.items?.length) {
          setPosts([])
          setLoading(false)
          return
        }
        const mapped: BlogEntry[] = data.items.map((item) => ({
          title: item.title,
          platform: 'Medium',
          link: item.link,
          pubDate: item.pubDate,
          description: item.description,
          thumbnail: item.thumbnail,
        }))
        setPosts(mapped)
        setError(null)
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Failed to load blogs')
          setPosts([])
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchFeed()
    return () => {
      cancelled = true
    }
  }, [apiUrl])

  return { posts, loading, error }
}
