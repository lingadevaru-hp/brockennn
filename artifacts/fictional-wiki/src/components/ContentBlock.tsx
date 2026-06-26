import { useState } from 'react';
import { Link } from 'wouter';
import { X } from 'lucide-react';
import type { ContentBlock as ContentBlockType } from '../types/article';

function parseWikiLink(inner: string): { slug: string; text: string } {
  const parts = inner.split('|');
  const rawSlug = parts[0].trim();
  const slug = rawSlug.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const text = parts[1]?.trim() || parts[0].trim();
  return { slug, text };
}

function parseWikiText(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Split into wiki links, bold, italic, inline code, markdown links
  const parts = text.split(/(\[\[.*?\]\]|\*\*.*?\*\*|\*[^*].*?\*|`[^`]*`|\[.*?\]\(.*?\))/);
  parts.forEach((part, i) => {
    if (!part) return;
    if (part.startsWith('[[') && part.endsWith(']]')) {
      const { slug, text: display } = parseWikiLink(part.slice(2, -2));
      nodes.push(
        <Link key={i} href={`/wiki/${slug}`} className="text-accent hover:underline">
          {display}
        </Link>
      );
    } else if (part.startsWith('**') && part.endsWith('**')) {
      nodes.push(<strong key={i}>{part.slice(2, -2)}</strong>);
    } else if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      nodes.push(<em key={i}>{part.slice(1, -1)}</em>);
    } else if (part.startsWith('`') && part.endsWith('`')) {
      const code = part.slice(1, -1);
      nodes.push(
        <span key={i} className="inline-flex items-center gap-2">
          <code className="bg-card px-1 rounded text-xs">{code}</code>
          <button
            onClick={() => navigator.clipboard?.writeText(code)}
            className="text-xs px-2 py-0.5 bg-card/60 rounded border border-border hover:bg-card/80"
            title="Copy"
          >
            Copy
          </button>
        </span>
      );
    } else if (part.match(/^\[.*?\]\(.*?\)$/)) {
      const m = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (m) {
        nodes.push(
          <a key={i} href={m[2]} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            {m[1]}
          </a>
        );
      }
    } else {
      nodes.push(part);
    }
  });
  return nodes;
}

function renderMarkdown(content: string): React.ReactNode {
  const lines = content.split('\n');
  const result: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      i++;
      const codeLines: string[] = [];
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      const code = codeLines.join('\n');
      result.push(
        <div key={i} className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2 py-1 bg-card/60 rounded">{lang || 'code'}</span>
            <button
              onClick={() => navigator.clipboard?.writeText(code)}
              className="text-xs px-2 py-0.5 bg-card/60 rounded border border-border hover:bg-card/80"
            >Copy</button>
            <a
              href={`data:text/plain;charset=utf-8,${encodeURIComponent(code)}`}
              download={lang ? `snippet.${lang}` : 'snippet.txt'}
              className="text-xs px-2 py-0.5 bg-card/60 rounded border border-border hover:bg-card/80"
            >Download</a>
          </div>
          <pre className="overflow-x-auto p-3 bg-black/5 rounded"><code>{code}</code></pre>
        </div>
      );
      continue;
    }

    // Table detection: header with pipes and separator of dashes
    if (line.includes('|') && i + 1 < lines.length && lines[i + 1].match(/^\s*\|?\s*:-{0,}\s*\|/)) {
      // parse header
      const headerLine = line;
      const sepLine = lines[i + 1];
      const headers = headerLine.split('|').map(h => h.trim()).filter(Boolean);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes('|')) {
        const cells = lines[i].split('|').map(c => c.trim()).filter(() => true);
        rows.push(cells);
        i++;
      }
      result.push(
        <div key={i} className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border text-sm">
            <thead>
              <tr className="bg-card">
                {headers.map((h, hi) => (
                  <th key={hi} className="border border-border px-3 py-1.5 text-left font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className={ri % 2 === 1 ? 'bg-card/40' : ''}>
                  {headers.map((_, ci) => (
                    <td key={ci} className="border border-border px-3 py-1.5">{r[ci] ?? ''}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      result.push(
        <ul key={i} className="list-disc pl-6 mb-4 text-sm leading-relaxed">
          {items.map((it, idx) => (
            <li key={idx}>{parseWikiText(it)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (line.startsWith('### ')) {
      result.push(<h3 key={i} className="text-lg font-bold mt-4 mb-2 font-serif">{line.slice(4)}</h3>);
      i++;
    } else if (line.startsWith('## ')) {
      result.push(<h2 key={i} className="text-xl font-bold mt-5 mb-2 border-b border-border pb-1 font-serif">{line.slice(3)}</h2>);
      i++;
    } else if (line.startsWith('# ')) {
      result.push(<h1 key={i} className="text-2xl font-bold mt-5 mb-2 font-serif">{line.slice(2)}</h1>);
      i++;
    } else if (line.trim() === '') {
      i++;
    } else {
      const paraLines: string[] = [];
      while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('#') && !lines[i].startsWith('```')) {
        paraLines.push(lines[i]);
        i++;
      }
      const text = paraLines.join(' ');
      result.push(
        <p key={i} className="mb-4 text-sm leading-relaxed" style={{ lineHeight: '1.6' }}>
          {parseWikiText(text)}
        </p>
      );
    }
  }

  return <>{result}</>;
}

interface LightboxProps {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}

function Lightbox({ src, alt, caption, onClose }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute -top-8 right-0 text-white"
          onClick={onClose}
          data-testid="button-lightbox-close"
        >
          <X size={24} />
        </button>
        <img src={src} alt={alt} className="max-w-full max-h-[80vh] object-contain" />
        {caption && <p className="text-white/80 text-sm mt-2 text-center">{caption}</p>}
      </div>
    </div>
  );
}

export default function ContentBlock({ block }: { block: ContentBlockType }) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; caption?: string } | null>(null);

  switch (block.type) {
    case 'text':
      return <div className="wiki-text mb-2">{renderMarkdown(block.content || '')}</div>;

    case 'banner': {
      const isGif = block.src?.endsWith('.gif') || block.src?.includes('giphy');
      const src = block.src || '';
      const fallback = block.fallbackSrc;
      const expandable = block.expandable ?? false;

      const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        if (fallback && e.currentTarget.src !== fallback) {
          e.currentTarget.src = fallback;
        }
      };

      return (
        <>
          <div
            className={`mb-5 border border-border${isGif ? '' : ' overflow-hidden'}${expandable ? ' group relative' : ''}`}
            data-testid="banner-block"
          >
            <img
              src={src}
              alt={block.alt || ''}
              onError={fallback ? handleError : undefined}
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                ...(isGif ? {} : { maxHeight: '340px', objectFit: 'cover' }),
                cursor: expandable ? 'zoom-in' : 'default',
              }}
              loading="eager"
              onClick={
                expandable
                  ? () => setLightbox({ src, alt: block.alt || '', caption: block.caption })
                  : undefined
              }
              title={expandable ? 'Click to view full screen' : undefined}
            />

            {/* Hover overlay hint for expandable banners */}
            {expandable && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none flex items-end justify-end">
                <span className="m-2 px-2 py-1 text-[10px] bg-black/60 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity select-none">
                  🔍 Click to expand
                </span>
              </div>
            )}

            {block.caption && (
              <p className="text-xs text-muted-foreground p-2 italic text-center bg-card/50 border-t border-border">
                {block.caption}
              </p>
            )}
          </div>

          {/* Fullscreen lightbox for expandable banners */}
          {lightbox && (
            <div
              className="fixed inset-0 bg-black/90 z-[200] flex flex-col items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              {/* Top bar: show controls only; avoid duplicating caption/alt text if caption matches alt */}
              <div
                className="w-full max-w-5xl flex items-center justify-end mb-3"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-2">
                  <a
                    href={lightbox.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
                    title="Open in new tab"
                  >
                    ↗ New tab
                  </a>
                  <a
                    href={lightbox.src}
                    download
                    className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
                    title="Download"
                  >
                    ↓ Download
                  </a>
                  <button
                    className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
                    onClick={() => setLightbox(null)}
                    aria-label="Close"
                  >
                    ✕ Close
                  </button>
                </div>
              </div>

              {/* Image */}
              <div
                className="max-w-5xl w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  title={lightbox.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>

              {/* Caption: show below image if present. If caption === alt, show once here only. */}
              {(lightbox.caption || lightbox.alt) && (
                <p
                  className="text-white/60 text-xs mt-3 text-center max-w-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {lightbox.caption && lightbox.caption !== lightbox.alt ? lightbox.caption : lightbox.alt}
                </p>
              )}

              <p className="text-white/30 text-xs mt-2">Click outside to close</p>
            </div>
          )}
        </>
      );
    }


    case 'image':
      return (
        <div className="float-none md:float-right md:clear-right mx-auto md:ml-4 mb-4 max-w-full md:max-w-[240px] border border-border bg-card text-center">
          <img
            src={block.src}
            alt={block.alt || ''}
            className="w-full cursor-zoom-in"
            loading="lazy"
            onClick={() => setLightbox({ src: block.src!, alt: block.alt || '', caption: block.caption })}
            data-testid={`image-block-${block.src?.split('/').pop()}`}
          />
          {block.caption && (
            <p className="text-xs text-muted-foreground p-1 italic">{block.caption}</p>
          )}
          {lightbox && <Lightbox {...lightbox} onClose={() => setLightbox(null)} />}
        </div>
      );

    case 'table':
      return (
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border text-sm" data-testid="table-block">
            {block.columns && (
              <thead>
                <tr className="bg-card">
                  {block.columns.map((col, i) => (
                    <th key={i} className="border border-border px-3 py-1.5 text-left font-bold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows?.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 1 ? 'bg-card/40' : ''}>
                  {block.columns?.map((col, ci) => (
                    <td key={ci} className="border border-border px-3 py-1.5">
                      {row[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'video':
      return (
        <div className="mb-4" data-testid="video-block">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={block.src}
              title={block.caption || 'Video'}
              className="absolute inset-0 w-full h-full border border-border"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          {block.caption && (
            <p className="text-xs text-muted-foreground mt-1 italic">{block.caption}</p>
          )}
        </div>
      );

    case 'gallery':
      return (
        <div className="mb-4" data-testid="gallery-block">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {block.items?.map((item, i) => (
              <div key={i} className="border border-border bg-card cursor-zoom-in" onClick={() => setLightbox(item)}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-32 object-cover"
                  data-testid={`gallery-image-${i}`}
                />
                {item.caption && (
                  <p className="text-xs text-muted-foreground p-1 italic">{item.caption}</p>
                )}
              </div>
            ))}
          </div>
          {lightbox && (
            <Lightbox {...lightbox} onClose={() => setLightbox(null)} />
          )}
        </div>
      );

    case 'callout': {
      const variantStyles: Record<string, string> = {
        info: 'bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-800',
        warning: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-400 dark:border-yellow-700',
        success: 'bg-green-50 dark:bg-green-950/30 border-green-400 dark:border-green-700',
        error: 'bg-red-50 dark:bg-red-950/30 border-red-400 dark:border-red-700',
      };
      const v = block.variant || 'info';
      return (
        <div
          className={`border-l-4 px-4 py-3 mb-4 text-sm ${variantStyles[v]}`}
          data-testid={`callout-${v}`}
        >
          {block.title && <p className="font-bold mb-1">{block.title}</p>}
          <div>{renderMarkdown(block.content || '')}</div>
        </div>
      );
    }

    case 'quote':
      return (
        <blockquote
          className="border-l-4 border-border pl-4 pr-2 py-2 mb-4 italic text-muted-foreground"
          data-testid="quote-block"
        >
          <p className="text-sm leading-relaxed">&ldquo;{block.content}&rdquo;</p>
          {block.author && (
            <cite className="text-xs not-italic block mt-1">— {block.author}</cite>
          )}
        </blockquote>
      );

    default:
      return null;
  }
}
