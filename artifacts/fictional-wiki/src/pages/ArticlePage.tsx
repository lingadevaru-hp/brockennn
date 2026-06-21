import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'wouter';
import WikiHeader from '../components/WikiHeader';
import WikiSidebar from '../components/WikiSidebar';
import WikiFooter from '../components/WikiFooter';
import ArticleView from '../components/ArticleView';
import { loadArticle } from '../lib/articleLoader';
import type { Article } from '../types/article';

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [, setLocation] = useLocation();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(false);
    loadArticle(slug)
      .then((a) => {
        setArticle(a);
        setLoading(false);
        document.title = `${a.metadata.title} - Aethelgard Codex`;
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <WikiHeader onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex flex-1 max-w-[1400px] mx-auto w-full">
        <WikiSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 px-4 py-4 min-w-0">
          {loading && (
            <div className="text-sm text-muted-foreground py-8 text-center" data-testid="loading-indicator">
              Loading article...
            </div>
          )}
          {error && !loading && (
            <div>
              <h1 className="text-[1.95em] font-serif font-normal mb-3">Article not found</h1>
              <hr className="border-border mb-3" />
              <p className="text-sm mb-2">
                There is no article titled <strong>&ldquo;{slug}&rdquo;</strong> in the Aethelgard Codex.
              </p>
              <p className="text-sm">
                <button onClick={() => setLocation('/wiki/main-page')} className="text-accent hover:underline">
                  Return to the main page
                </button>
              </p>
            </div>
          )}
          {article && !loading && (
            <div>
              <div className="mb-2 text-xs text-muted-foreground flex items-center gap-2 border-b border-border pb-2">
                <button onClick={() => setLocation('/wiki/main-page')} className="text-accent hover:underline">Main Page</button>
                <span>·</span>
                <span className="text-foreground">{article.metadata.title}</span>
                <span>·</span>
                <span className="text-muted-foreground">Talk</span>
                <span>·</span>
                <span className="text-muted-foreground">Read</span>
                <span>·</span>
                <span className="text-muted-foreground">Edit</span>
                <span>·</span>
                <span className="text-muted-foreground">View history</span>
              </div>
              <ArticleView article={article} />
            </div>
          )}
        </main>
      </div>
      <WikiFooter />
    </div>
  );
}
