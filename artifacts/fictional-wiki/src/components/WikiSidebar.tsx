import { Link } from 'wouter';
import { X } from 'lucide-react';

interface WikiSidebarProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Main Page', href: '/wiki/main-page' },
  { label: 'About Thoshan', href: '/wiki/about' },
  { label: 'Random article', href: '/wiki/foss-coin' },
];

const articleLinks = [
  { label: 'About', href: '/wiki/about', category: 'Profile' },
  { label: 'FOSS Coin', href: '/wiki/foss-coin', category: 'Blockchain' },
  { label: 'Thoshan Flash', href: '/wiki/thoshan-flash', category: 'AI / ML' },
  { label: 'Insurance DApp', href: '/wiki/insurance-dapp', category: 'Blockchain' },
  { label: 'Libre Cloud — Homelab', href: '/wiki/homelab', category: 'Infrastructure' },
  { label: 'Privacy Stack', href: '/wiki/privacy-stack', category: 'Security' },
  { label: 'Linux Setup', href: '/wiki/linux-setup', category: 'Systems' },
  { label: 'Fraud Detection System', href: '/wiki/fraud-detection', category: 'AI / ML' },
  { label: 'LocalPulse', href: '/wiki/local-pulse', category: 'Web' },
  { label: 'Learning Roadmap', href: '/wiki/learning-roadmap', category: 'Learning' },
];

const categoryLabels: Record<string, { color: string }> = {
  'Profile':        { color: '#3366CC' },
  'Blockchain':     { color: '#E67E22' },
  'AI / ML':        { color: '#8E44AD' },
  'Infrastructure': { color: '#27AE60' },
  'Security':       { color: '#C0392B' },
  'Systems':        { color: '#2980B9' },
  'Web':            { color: '#16A085' },
  'Learning':       { color: '#F39C12' },
};

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
              {articleLinks.map((l) => {
                const cat = categoryLabels[l.category];
                return (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      onClick={onClose}
                      data-testid={`article-link-${l.href.split('/').pop()}`}
                      className="block px-2 py-1 hover:bg-background hover:text-accent text-foreground"
                    >
                      <span className="block text-xs leading-tight">{l.label}</span>
                      <span
                        className="text-[10px]"
                        style={{ color: cat?.color ?? '#A8A8A8' }}
                      >
                        {l.category}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
