import type { Article, ArticleIndex, ArticleIndexEntry } from '../types/article';

const articleCache = new Map<string, Article>();
let indexCache: ArticleIndex | null = null;

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export async function loadArticle(slug: string): Promise<Article> {
  if (articleCache.has(slug)) {
    return articleCache.get(slug)!;
  }
  const res = await fetch(`${base}/data/articles/${slug}.json`);
  if (!res.ok) throw new Error(`Article not found: ${slug}`);
  const data: Article = await res.json();
  articleCache.set(slug, data);
  return data;
}

export async function loadArticlesIndex(): Promise<ArticleIndex> {
  if (indexCache) return indexCache;
  const res = await fetch(`${base}/data/articles-index.json`);
  if (!res.ok) throw new Error('Failed to load articles index');
  indexCache = await res.json();
  return indexCache!;
}

export async function searchArticles(query: string): Promise<ArticleIndexEntry[]> {
  const index = await loadArticlesIndex();
  if (!query.trim()) return index.articles;
  const q = query.toLowerCase();
  return index.articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
  );
}

export function titleToSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}
