import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Search } from 'lucide-react';
import { loadArticlesIndex } from '../lib/articleLoader';
import type { ArticleIndexEntry } from '../types/article';

const categoryColors: Record<string, string> = {
  'Profile': '#3366CC',
  'Blockchain': '#E67E22',
  'AI / ML': '#8E44AD',
  'Infrastructure': '#27AE60',
  'Security': '#C0392B',
  'Systems': '#2980B9',
  'Web': '#16A085',
  'Learning': '#F39C12',
};

export default function LandingPage() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState<ArticleIndexEntry[]>([]);
  const [, setLocation] = useLocation();

  useEffect(() => {
    loadArticlesIndex().then((idx) => setArticles(idx.articles));
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      setLocation(`/wiki/search?q=${encodeURIComponent(query)}`);
    } else {
      setLocation('/wiki/main-page');
    }
  }

  return (
    <div className="min-h-screen bg-[#101418] text-[#E8E8E8] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Wiki globe">
              <circle cx="40" cy="40" r="38" stroke="#A8A8A8" strokeWidth="2" fill="none" />
              <ellipse cx="40" cy="40" rx="18" ry="38" stroke="#A8A8A8" strokeWidth="1.5" fill="none" />
              <ellipse cx="40" cy="40" rx="38" ry="12" stroke="#A8A8A8" strokeWidth="1.5" fill="none" />
              <line x1="2" y1="40" x2="78" y2="40" stroke="#A8A8A8" strokeWidth="1.5" />
              <path d="M10 22 Q40 30 70 22" stroke="#A8A8A8" strokeWidth="1" fill="none" />
              <path d="M10 58 Q40 50 70 58" stroke="#A8A8A8" strokeWidth="1" fill="none" />
              <text x="40" y="46" textAnchor="middle" fill="#E8E8E8" fontSize="22" fontFamily="Georgia, serif" fontWeight="bold">T</text>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-[#E8E8E8] uppercase">
            Thoshan's Wiki
          </h1>
          <p className="text-sm text-[#A8A8A8] mt-1 tracking-wide">A personal knowledge base</p>
        </div>

        <form onSubmit={handleSearch} className="flex w-full max-w-md mb-3 gap-1">
          <div className="relative flex-1">
            <input
              data-testid="input-landing-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full px-3 py-2 text-sm border border-[#404040] bg-[#1A1A1A] text-[#E8E8E8] focus:outline-none focus:border-[#3366CC]"
            />
          </div>
          <button
            data-testid="button-landing-search"
            type="submit"
            className="px-4 py-2 bg-[#3366CC] text-white text-sm hover:bg-[#2255bb] flex items-center gap-1"
          >
            <Search size={14} />
            <span>Search</span>
          </button>
        </form>

        <button
          onClick={() => setLocation('/wiki/main-page')}
          className="text-[#3366CC] text-sm hover:underline mb-10"
          data-testid="button-read-wikipedia"
        >
          Browse all articles →
        </button>

        {articles.length > 0 && (
          <div className="w-full max-w-3xl">
            <div className="border-t border-[#404040] pt-8 mb-4">
              <h2 className="text-center text-xs font-bold uppercase tracking-widest text-[#A8A8A8] mb-6">Articles in this wiki</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {articles.map((article) => (
                  <button
                    key={article.id}
                    data-testid={`article-card-${article.id}`}
                    onClick={() => setLocation(`/wiki/${article.slug}`)}
                    className="text-left border border-[#404040] bg-[#1A1A1A] hover:bg-[#222] hover:border-[#3366CC] transition-colors p-3 group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                        style={{
                          color: categoryColors[article.category] || '#A8A8A8',
                          background: `${categoryColors[article.category] || '#A8A8A8'}22`,
                        }}
                      >
                        {article.category}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-[#3366CC] group-hover:underline leading-tight mb-1">
                      {article.title}
                    </p>
                    <p className="text-xs text-[#888] leading-snug line-clamp-2">
                      {article.excerpt}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="border-t border-[#404040] py-3 px-4 text-xs text-[#A8A8A8] text-center">
        <p>
          Thoshan's personal wiki — built with the same design principles as Wikipedia
          {' · '}
          <a href="https://github.com/lingadevaru-hp" className="text-[#3366CC] hover:underline" target="_blank" rel="noreferrer">GitHub</a>
          {' · '}
          <a href="https://lingadevaru.in" className="text-[#3366CC] hover:underline" target="_blank" rel="noreferrer">lingadevaru.in</a>
        </p>
      </footer>
    </div>
  );
}
