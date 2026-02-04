/** Shape of item from rss2json.com API for Medium RSS */
export interface MediumFeedItem {
  title: string
  link: string
  pubDate: string
  thumbnail?: string
  description?: string
  author?: string
}

export interface MediumFeedResponse {
  status: string
  feed?: { title?: string; link?: string }
  items?: MediumFeedItem[]
}
