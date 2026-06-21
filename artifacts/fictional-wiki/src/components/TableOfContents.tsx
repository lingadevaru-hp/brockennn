import { useState, useEffect } from 'react';
import type { Section } from '../types/article';

interface TableOfContentsProps {
  sections: Section[];
  activeId?: string;
}

function flattenSections(sections: Section[], prefix = ''): { id: string; title: string; level: number; num: string }[] {
  const result: { id: string; title: string; level: number; num: string }[] = [];
  sections.forEach((s, i) => {
    const num = prefix ? `${prefix}.${i + 1}` : `${i + 1}`;
    result.push({ id: s.id, title: s.title, level: s.level, num });
    if (s.subsections?.length) {
      result.push(...flattenSections(s.subsections, num));
    }
  });
  return result;
}

export default function TableOfContents({ sections, activeId }: TableOfContentsProps) {
  const [collapsed, setCollapsed] = useState(false);
  const flat = flattenSections(sections);

  if (flat.length < 3) return null;

  return (
    <div
      data-testid="table-of-contents"
      className="border border-border bg-card text-sm mb-4 inline-block min-w-[200px] max-w-full md:max-w-[350px]"
    >
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-border bg-card/80">
        <span className="font-bold text-foreground">Contents</span>
        <button
          data-testid="button-toc-toggle"
          onClick={() => setCollapsed((c) => !c)}
          className="text-accent text-xs hover:underline ml-auto"
        >
          [{collapsed ? 'show' : 'hide'}]
        </button>
      </div>
      {!collapsed && (
        <ol className="px-3 py-2 space-y-0.5">
          {flat.map((item) => (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
            >
              <a
                href={`#${item.id}`}
                data-testid={`toc-link-${item.id}`}
                className={`hover:underline ${activeId === item.id ? 'font-bold text-foreground' : 'text-accent'}`}
              >
                <span className="text-foreground mr-1">{item.num}</span>
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
