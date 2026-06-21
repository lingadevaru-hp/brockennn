import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import type { Article } from '../types/article';
import Infobox from './Infobox';
import TableOfContents from './TableOfContents';
import Section from './Section';
import References from './References';
import RevisionHistory from './RevisionHistory';

interface ArticleViewProps {
  article: Article;
}

function parseLeadText(text: string) {
  const paras = text.split(/\n\n+/);
  return paras.map((p, i) => {
    const parsed = p.replace(/\[\[(.*?)\]\]/g, (_m, title) => {
      const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return `<a href="/wiki/${slug}" class="text-accent hover:underline">${title}</a>`;
    }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
    return <p key={i} className="mb-4 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: parsed }} />;
  });
}

export default function ArticleView({ article }: ArticleViewProps) {
  const [activeSection, setActiveSection] = useState('');
  const [fontSize, setFontSize] = useState<'small' | 'standard' | 'large'>('standard');
  const [contentWidth, setContentWidth] = useState<'standard' | 'wide'>('standard');
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefs = localStorage.getItem('wiki-preferences');
    if (prefs) {
      const p = JSON.parse(prefs);
      if (p.fontSize) setFontSize(p.fontSize);
      if (p.contentWidth) setContentWidth(p.contentWidth);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wiki-preferences', JSON.stringify({ fontSize, contentWidth }));
  }, [fontSize, contentWidth]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    const sections = document.querySelectorAll('.wiki-section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [article]);

  const fontSizeClass = fontSize === 'small' ? 'text-xs' : fontSize === 'large' ? 'text-base' : 'text-sm';
  const maxWidthClass = contentWidth === 'wide' ? 'max-w-none' : 'max-w-[680px]';

  return (
    <div className="flex gap-6 flex-1">
      <div className={`flex-1 min-w-0 ${fontSizeClass}`} ref={articleRef}>
        <div className={`${maxWidthClass}`}>
          <h1
            className="text-[1.95em] font-normal font-serif mb-1 text-foreground"
            data-testid="article-title"
          >
            {article.metadata.title}
          </h1>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 pb-3 border-b border-border">
            <span>Last edited {new Date(article.metadata.lastEdited).toLocaleDateString()}</span>
            <span>·</span>
            <span>{article.metadata.editCount} edits</span>
            <span>·</span>
            <span>{article.metadata.views.toLocaleString()} views</span>
            <span>·</span>
            <span className="text-accent">{article.metadata.category}</span>
          </div>

          {article.infobox && (
            <Infobox data={article.infobox} />
          )}

          <div className="lead mb-2">
            {parseLeadText(article.lead)}
          </div>

          <TableOfContents sections={article.sections} activeId={activeSection} />

          <div className="clearfix">
            {article.sections.map((section) => (
              <Section key={section.id} section={section} />
            ))}
          </div>

          {article.perspectives && article.perspectives.length > 0 && (
            <section className="mt-6 border-t border-border pt-4">
              <h2 className="text-[1.4em] font-bold border-b border-border pb-1 mb-3 font-serif">
                Different Perspectives
              </h2>
              <div className="space-y-3">
                {article.perspectives.map((p, i) => (
                  <div key={i} className="border border-border p-3 bg-card">
                    <h3 className="font-bold text-sm mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.content}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <References references={article.references} />

          <div className="mt-4 pt-3 border-t border-border text-sm">
            <span className="font-bold">Categories: </span>
            {article.categories.map((cat, i) => (
              <span key={cat}>
                {i > 0 && ' · '}
                <Link href={`/wiki/search?q=${encodeURIComponent(cat)}`} className="text-accent hover:underline">
                  {cat}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>

      <aside className="hidden lg:block w-[200px] shrink-0">
        <div className="sticky top-[56px] space-y-4">
          <div className="border border-border bg-card p-3 text-sm" data-testid="appearance-panel">
            <p className="font-bold text-xs uppercase tracking-wider mb-2 text-muted-foreground">Appearance</p>
            <div className="mb-3">
              <p className="text-xs font-bold mb-1">Text size</p>
              <div className="flex gap-1">
                {(['small', 'standard', 'large'] as const).map((s) => (
                  <button
                    key={s}
                    data-testid={`font-size-${s}`}
                    onClick={() => setFontSize(s)}
                    className={`flex-1 py-0.5 text-xs border ${fontSize === s ? 'border-accent bg-accent/10 text-accent' : 'border-border'}`}
                  >
                    {s === 'small' ? 'S' : s === 'large' ? 'L' : 'M'}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold mb-1">Width</p>
              <div className="flex gap-1">
                {(['standard', 'wide'] as const).map((w) => (
                  <button
                    key={w}
                    data-testid={`width-${w}`}
                    onClick={() => setContentWidth(w)}
                    className={`flex-1 py-0.5 text-xs border ${contentWidth === w ? 'border-accent bg-accent/10 text-accent' : 'border-border'}`}
                  >
                    {w === 'standard' ? 'Std' : 'Wide'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {article.relatedArticles.length > 0 && (
            <div className="border border-border bg-card p-3 text-sm" data-testid="related-articles">
              <p className="font-bold text-xs uppercase tracking-wider mb-2 text-muted-foreground">Related articles</p>
              <ul className="space-y-1">
                {article.relatedArticles.map((slug) => (
                  <li key={slug}>
                    <Link href={`/wiki/${slug}`} className="text-accent hover:underline text-xs">
                      {slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border border-border bg-card p-3 text-sm" data-testid="edit-history-sidebar">
            <RevisionHistory history={article.editHistory} />
          </div>
        </div>
      </aside>
    </div>
  );
}
