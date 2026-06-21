import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import WikiHeader from '../components/WikiHeader';
import WikiSidebar from '../components/WikiSidebar';
import WikiFooter from '../components/WikiFooter';
import { loadArticlesIndex } from '../lib/articleLoader';
import type { ArticleIndexEntry } from '../types/article';

export default function MainPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [articles, setArticles] = useState<ArticleIndexEntry[]>([]);

  useEffect(() => {
    loadArticlesIndex().then((idx) => setArticles(idx.articles));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <WikiHeader onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex flex-1 max-w-[1400px] mx-auto w-full">
        <WikiSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 px-4 py-4 min-w-0">
          <div className="mb-4 border-b border-border pb-3 text-sm text-muted-foreground flex items-center gap-3">
            <Link href="/wiki/main-page" className="text-accent hover:underline font-medium">Main Page</Link>
            <span>Talk</span>
            <span>Read</span>
            <span>View source</span>
            <span>View history</span>
            <span>Tools</span>
          </div>

          <div className="text-center mb-4 text-sm">
            <strong>Welcome to Wikipedia,</strong>{' '}
            the free encyclopedia that anyone can edit.{' '}
            <Link href="/wiki/aethelgard" className="text-accent hover:underline">
              10 articles
            </Link>{' '}
            in the Aethelgard Codex.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-4">
            <div className="border border-border p-3">
              <h2 className="font-bold border-b border-border pb-1 mb-2 text-sm">From today's featured article</h2>
              <div className="flex gap-3">
                <img
                  src="https://picsum.photos/seed/aethelgard-featured/120/90"
                  alt="Aethelgard"
                  className="w-28 h-20 object-cover border border-border shrink-0"
                />
                <div>
                  <p className="text-sm">
                    <Link href="/wiki/aethelgard" className="font-bold text-accent hover:underline">Aethelgard</Link>{' '}
                    is a vast realm of wonders, where ancient magic and industrial ingenuity exist in fragile balance.
                    Home to four great factions — the luminous Lumina Collective, the iron-fisted Ironclad Dominion,
                    the nature-bound Verdant Weavers, and the daring Sky-Merchants Guild — it is a world on the cusp
                    of transformation.
                  </p>
                  <p className="text-right mt-1">
                    <Link href="/wiki/aethelgard" className="text-accent text-xs hover:underline">Full article...</Link>
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Recently featured:{' '}
                <Link href="/wiki/lumina-collective" className="text-accent hover:underline">Lumina Collective</Link>
                {' · '}
                <Link href="/wiki/ironclad-dominion" className="text-accent hover:underline">Ironclad Dominion</Link>
                {' · '}
                <Link href="/wiki/great-aetheric-rift" className="text-accent hover:underline">Great Aetheric Rift</Link>
              </p>
            </div>

            <div className="border border-border border-l-0 p-3 bg-[#FFF8E7] dark:bg-[#3A3A1A]">
              <h2 className="font-bold border-b border-[#A2A9B1] dark:border-[#555] pb-1 mb-2 text-sm">In the news</h2>
              <ul className="text-sm space-y-1.5 list-disc list-inside">
                <li>The <Link href="/wiki/lumina-collective" className="text-accent font-bold hover:underline">Lumina Collective</Link> announces a new Aether-Crystal powered communication network spanning the Northern Reaches.</li>
                <li>The <Link href="/wiki/ironclad-dominion" className="text-accent font-bold hover:underline">Ironclad Dominion</Link> unveils its latest generation of <Link href="/wiki/steam-golems" className="text-accent hover:underline">Steam-Golems</Link>, capable of operating for 72 hours without refueling.</li>
                <li>The <Link href="/wiki/sky-merchants-guild" className="text-accent font-bold hover:underline">Sky-Merchants Guild</Link> opens a new trade corridor through the <Link href="/wiki/whispering-woods" className="text-accent hover:underline">Whispering Woods</Link>.</li>
                <li>Researchers report unusual activity near the <Link href="/wiki/great-aetheric-rift" className="text-accent font-bold hover:underline">Great Aetheric Rift</Link>, with crystal formations growing at unprecedented rates.</li>
                <li><strong>Ongoing:</strong> Diplomatic summit between the four factions — <Link href="/wiki/aethelgard" className="text-accent hover:underline">background</Link></li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-4">
            <div className="border border-border border-t-0 p-3 bg-[#E7F3FF] dark:bg-[#1A3A52]">
              <h2 className="font-bold border-b border-[#A2A9B1] dark:border-[#555] pb-1 mb-2 text-sm">Did you know...</h2>
              <ul className="text-sm space-y-1.5 list-disc list-inside">
                <li>...that <Link href="/wiki/aether-crystals" className="text-accent font-bold hover:underline">Aether-Crystals</Link> resonate at different frequencies depending on their depth of formation?</li>
                <li>...that the <Link href="/wiki/whispering-woods" className="text-accent font-bold hover:underline">Whispering Woods</Link> have never been fully mapped despite centuries of exploration?</li>
                <li>...that <Link href="/wiki/cloud-skimmers" className="text-accent font-bold hover:underline">Cloud-Skimmers</Link> are capable of reaching altitudes where conventional airships would lose buoyancy?</li>
                <li>...that practitioners of <Link href="/wiki/life-threads" className="text-accent font-bold hover:underline">Life-Threads</Link> must spend years in silent meditation before weaving their first thread?</li>
                <li>...that the <Link href="/wiki/great-aetheric-rift" className="text-accent font-bold hover:underline">Great Aetheric Rift</Link> produces a faint harmonic hum audible up to 40 km away?</li>
              </ul>
            </div>

            <div className="border border-border border-l-0 border-t-0 p-3">
              <h2 className="font-bold border-b border-border pb-1 mb-2 text-sm">On this day</h2>
              <p className="text-xs text-muted-foreground mb-2">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
              <ul className="text-sm space-y-1.5 list-disc list-inside">
                <li><strong>347 AE</strong> — The first recorded crossing of the <Link href="/wiki/great-aetheric-rift" className="text-accent hover:underline">Great Aetheric Rift</Link> by a solo explorer.</li>
                <li><strong>1654 AE</strong> — Founding of the <Link href="/wiki/ironclad-dominion" className="text-accent hover:underline">Ironclad Dominion</Link> by High Marshal Korrath the Unyielding.</li>
                <li><strong>1778 AE</strong> — Charter of the <Link href="/wiki/sky-merchants-guild" className="text-accent hover:underline">Sky-Merchants Guild</Link> signed at Port Azure.</li>
                <li><strong>1891 AE</strong> — First modern scientific expedition to the <Link href="/wiki/great-aetheric-rift" className="text-accent hover:underline">Great Aetheric Rift</Link>.</li>
                <li><strong>1923 AE</strong> — Deployment of the first combat-ready <Link href="/wiki/steam-golems" className="text-accent hover:underline">Steam-Golem</Link> battalion.</li>
              </ul>
            </div>
          </div>

          <div className="border border-border border-t-0 p-3 mb-4">
            <h2 className="font-bold border-b border-border pb-1 mb-3 text-sm">All articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {articles.map((article) => (
                <div key={article.id} className="flex gap-2 border border-border p-2 hover:bg-card" data-testid={`article-card-${article.id}`}>
                  {article.thumbnail && (
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-16 h-12 object-cover border border-border shrink-0"
                    />
                  )}
                  <div className="min-w-0">
                    <Link href={`/wiki/${article.slug}`} className="text-accent hover:underline text-sm font-medium block truncate">
                      {article.title}
                    </Link>
                    <p className="text-xs text-muted-foreground truncate">{article.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border border-t-0 p-3 mb-4">
            <h2 className="font-bold border-b border-border pb-1 mb-3 text-sm">Other areas of the Codex</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div>
                <p className="font-bold mb-1">Community</p>
                <ul className="space-y-0.5 text-muted-foreground">
                  <li><a href="#" className="text-accent hover:underline">Community portal</a></li>
                  <li><a href="#" className="text-accent hover:underline">Village pump</a></li>
                  <li><a href="#" className="text-accent hover:underline">Site news</a></li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1">Contribute</p>
                <ul className="space-y-0.5 text-muted-foreground">
                  <li><a href="#" className="text-accent hover:underline">Help desk</a></li>
                  <li><a href="#" className="text-accent hover:underline">Teahouse</a></li>
                  <li><a href="#" className="text-accent hover:underline">Sandbox</a></li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1">Portals</p>
                <ul className="space-y-0.5">
                  <li><Link href="/wiki/aethelgard" className="text-accent hover:underline">Geography</Link></li>
                  <li><Link href="/wiki/lumina-collective" className="text-accent hover:underline">Factions</Link></li>
                  <li><Link href="/wiki/aether-crystals" className="text-accent hover:underline">Technology</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1">Categories</p>
                <ul className="space-y-0.5">
                  <li><Link href="/wiki/search?q=geography" className="text-accent hover:underline">Geography</Link></li>
                  <li><Link href="/wiki/search?q=magic" className="text-accent hover:underline">Magic</Link></li>
                  <li><Link href="/wiki/search?q=history" className="text-accent hover:underline">History</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
      <WikiFooter />
    </div>
  );
}
