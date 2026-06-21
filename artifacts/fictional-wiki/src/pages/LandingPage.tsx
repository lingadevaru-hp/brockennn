import { useState } from 'react';
import { useLocation } from 'wouter';
import { Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const languages = [
  [
    { name: 'English', count: '7,189,000+', href: '/wiki/main-page' },
    { name: 'Deutsch', count: '2,891,000+', href: '#' },
    { name: 'Français', count: '2,612,000+', href: '#' },
    { name: 'Italiano', count: '1,821,000+', href: '#' },
    { name: 'Polski', count: '1,623,000+', href: '#' },
  ],
  [
    { name: '日本語', count: '1,455,000+', href: '#' },
    { name: 'Español', count: '1,915,000+', href: '#' },
    { name: 'Русский', count: '1,988,000+', href: '#' },
    { name: '中文', count: '1,385,000+', href: '#' },
    { name: 'Português', count: '1,109,000+', href: '#' },
  ],
];

const sisterProjects = [
  { name: 'Commons', desc: 'Free media repository' },
  { name: 'Wikibooks', desc: 'Free textbooks & manuals' },
  { name: 'Wikiquote', desc: 'Free quote compendium' },
  { name: 'Wikidata', desc: 'Free knowledge base' },
  { name: 'Wikisource', desc: 'Free content library' },
  { name: 'Wikiversity', desc: 'Free learning resources' },
  { name: 'MediaWiki', desc: 'Wiki software development' },
  { name: 'Wiktionary', desc: 'Free dictionary' },
  { name: 'Wikinews', desc: 'Free news source' },
  { name: 'Wikivoyage', desc: 'Free travel guide' },
];

export default function LandingPage() {
  const [query, setQuery] = useState('');
  const [, setLocation] = useLocation();

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
          <div className="mb-2">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Wikipedia globe">
              <circle cx="40" cy="40" r="38" stroke="#A8A8A8" strokeWidth="2" fill="none" />
              <ellipse cx="40" cy="40" rx="18" ry="38" stroke="#A8A8A8" strokeWidth="1.5" fill="none" />
              <ellipse cx="40" cy="40" rx="38" ry="12" stroke="#A8A8A8" strokeWidth="1.5" fill="none" />
              <line x1="2" y1="40" x2="78" y2="40" stroke="#A8A8A8" strokeWidth="1.5" />
              <path d="M10 22 Q40 30 70 22" stroke="#A8A8A8" strokeWidth="1" fill="none" />
              <path d="M10 58 Q40 50 70 58" stroke="#A8A8A8" strokeWidth="1" fill="none" />
              <text x="40" y="45" textAnchor="middle" fill="#E8E8E8" fontSize="22" fontFamily="Georgia, serif" fontWeight="bold">W</text>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-[#E8E8E8] uppercase">
            Wikipedia
          </h1>
          <p className="text-sm text-[#A8A8A8] mt-1 tracking-wide">The Free Encyclopedia</p>
        </div>

        <div className="flex gap-8 mb-10">
          <div className="space-y-3 text-center">
            {languages[0].map((lang) => (
              <div key={lang.name}>
                <a
                  href={lang.href === '/wiki/main-page' ? lang.href : '#'}
                  onClick={lang.href === '/wiki/main-page' ? (e) => { e.preventDefault(); setLocation('/wiki/main-page'); } : undefined}
                  className="text-[#3366CC] hover:underline font-medium block"
                  data-testid={`lang-link-${lang.name}`}
                >
                  {lang.name}
                </a>
                <span className="text-[#A8A8A8] text-xs">{lang.count} articles</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="36" stroke="#505050" strokeWidth="1.5" fill="#1A1A1A" />
                <ellipse cx="40" cy="40" rx="16" ry="36" stroke="#505050" strokeWidth="1" fill="none" />
                <ellipse cx="40" cy="40" rx="36" ry="11" stroke="#505050" strokeWidth="1" fill="none" />
                <line x1="4" y1="40" x2="76" y2="40" stroke="#505050" strokeWidth="1" />
                <text x="40" y="45" textAnchor="middle" fill="#A8A8A8" fontSize="26" fontFamily="Georgia, serif" fontWeight="bold">W</text>
              </svg>
            </div>
          </div>

          <div className="space-y-3 text-center">
            {languages[1].map((lang) => (
              <div key={lang.name}>
                <a href="#" className="text-[#3366CC] hover:underline font-medium block" data-testid={`lang-link-${lang.name}`}>
                  {lang.name}
                </a>
                <span className="text-[#A8A8A8] text-xs">{lang.count} articles</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSearch} className="flex w-full max-w-md mb-4 gap-1">
          <div className="relative flex-1">
            <input
              data-testid="input-landing-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full px-3 py-2 text-sm border border-[#404040] bg-[#1A1A1A] text-[#E8E8E8] focus:outline-none focus:border-[#3366CC]"
            />
          </div>
          <select className="px-2 py-2 border border-[#404040] border-l-0 bg-[#1A1A1A] text-[#A8A8A8] text-sm focus:outline-none">
            <option>EN</option>
          </select>
          <button
            data-testid="button-landing-search"
            type="submit"
            className="px-3 py-2 bg-[#3366CC] text-white text-sm hover:bg-[#2255bb]"
          >
            <Search size={14} />
          </button>
        </form>

        <button
          onClick={() => setLocation('/wiki/main-page')}
          className="text-[#3366CC] text-sm hover:underline mb-12"
          data-testid="button-read-wikipedia"
        >
          Read Wikipedia in your language
        </button>

        <div className="border-t border-[#404040] w-full max-w-3xl pt-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-xs">
            {sisterProjects.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-1" data-testid={`sister-project-${p.name}`}>
                <div className="w-8 h-8 rounded-full bg-[#2A2A2A] border border-[#404040] flex items-center justify-center text-[10px] font-bold text-[#A8A8A8]">
                  {p.name.slice(0, 2)}
                </div>
                <span className="text-[#3366CC] hover:underline cursor-pointer">{p.name}</span>
                <span className="text-[#A8A8A8]">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-[#404040] py-3 px-4 text-xs text-[#A8A8A8] text-center">
        <p>
          This page is available under the{' '}
          <a href="#" className="text-[#3366CC] hover:underline">Creative Commons Attribution-ShareAlike License</a>
          {' · '}
          <a href="#" className="text-[#3366CC] hover:underline">Terms of Use</a>
          {' · '}
          <a href="#" className="text-[#3366CC] hover:underline">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}
