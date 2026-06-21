import { Link } from 'wouter';
import { X } from 'lucide-react';

interface WikiSidebarProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Main Page', href: '/wiki/main-page' },
  { label: 'Contents', href: '/wiki/main-page#contents' },
  { label: 'Current events', href: '/wiki/main-page#news' },
  { label: 'Random article', href: '/wiki/aethelgard' },
  { label: 'About', href: '/wiki/main-page#about' },
  { label: 'Help', href: '/wiki/main-page' },
];

const articleLinks = [
  { label: 'Aethelgard', href: '/wiki/aethelgard' },
  { label: 'Lumina Collective', href: '/wiki/lumina-collective' },
  { label: 'Aether-Crystals', href: '/wiki/aether-crystals' },
  { label: 'Steam-Golems', href: '/wiki/steam-golems' },
  { label: 'Ironclad Dominion', href: '/wiki/ironclad-dominion' },
  { label: 'Whispering Woods', href: '/wiki/whispering-woods' },
  { label: 'Sky-Merchants Guild', href: '/wiki/sky-merchants-guild' },
  { label: 'Cloud-Skimmers', href: '/wiki/cloud-skimmers' },
  { label: 'Life-Threads', href: '/wiki/life-threads' },
  { label: 'Great Aetheric Rift', href: '/wiki/great-aetheric-rift' },
];

export default function WikiSidebar({ open, onClose }: WikiSidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed md:static top-0 left-0 h-full md:h-auto z-50 md:z-auto
          w-64 md:w-[180px] lg:w-[200px] shrink-0
          bg-card md:bg-transparent
          border-r border-border md:border-r-0
          transform transition-transform duration-200 ease-in-out md:transform-none
          ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          overflow-y-auto md:overflow-visible
          md:sticky md:top-[49px] md:max-h-[calc(100vh-49px)]
        `}
      >
        <div className="flex items-center justify-between p-3 border-b border-border md:hidden">
          <span className="font-serif font-bold">Navigation</span>
          <button onClick={onClose} className="p-1" data-testid="button-close-sidebar">
            <X size={18} />
          </button>
        </div>

        <nav className="p-3 text-sm">
          <ul className="space-y-0.5">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={onClose}
                  data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-2 py-1 hover:bg-background hover:text-accent text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-3 border-t border-border">
            <p className="px-2 py-1 text-xs font-bold uppercase text-muted-foreground tracking-wider">Articles</p>
            <ul className="space-y-0.5 mt-1">
              {articleLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={onClose}
                    data-testid={`article-link-${l.href.split('/').pop()}`}
                    className="block px-2 py-1 hover:bg-background hover:text-accent text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
