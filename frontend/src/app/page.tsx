import Image from "next/image";
import CryptoMarket from "./components/CryptoMarket";

export default function Home() {
  const featuredNews = {
    title: "Bem-vindo ao Novo CryptoNews BR",
    excerpt: "Acompanhe as últimas notícias do mundo cripto com uma experiência totalmente renovada. Design moderno, informações em tempo real e conteúdo exclusivo.",
    image: "/images/crypto-featured.jpg",
    category: "DESTAQUE"
  };

  const recentNews = [
    {
      id: 1,
      title: "Bitcoin atinge nova máxima em 2024",
      excerpt: "A principal criptomoeda supera expectativas do mercado.",
      image: "/images/bitcoin-news.jpg",
      category: "Bitcoin"
    },
    {
      id: 2,
      title: "Ethereum 2.0: O Que Esperar",
      excerpt: "Principais mudanças e impactos da atualização.",
      image: "/images/ethereum-news.jpg",
      category: "Ethereum"
    },
    {
      id: 3,
      title: "DeFi atinge novo recorde",
      excerpt: "Valor total bloqueado em DeFi ultrapassa marca histórica.",
      image: "/images/defi-news.jpg",
      category: "DeFi"
    },
    {
      id: 4,
      title: "Regulamentação Cripto no Brasil",
      excerpt: "Novas diretrizes para o mercado nacional.",
      image: "/images/regulation-news.jpg",
      category: "Regulação"
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--dark-bg)]">
      {/* Navbar com cores mais vibrantes */}
      <nav className="relative bg-gradient-to-r from-[#000423] to-[#070024] border-b border-[var(--neon-blue)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--neon-blue)_0%,var(--neon-purple)_100%)] opacity-10"></div>
        <div className="container mx-auto px-4 py-4 relative">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold neon-text bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
              CryptoNews BR
            </h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-[var(--neon-blue)] transition-colors font-medium">Home</a>
              <a href="#" className="text-white hover:text-[var(--neon-blue)] transition-colors font-medium">Notícias</a>
              <a href="#" className="text-white hover:text-[var(--neon-blue)] transition-colors font-medium">Mercado</a>
              <a href="#" className="text-white hover:text-[var(--neon-blue)] transition-colors font-medium">Aprenda</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Área de Notícias */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-2xl font-bold text-white neon-text">Últimas Notícias</h2>
            
            {/* Card de Destaque */}
            <div className="card-glow rounded-xl overflow-hidden border border-[var(--neon-purple)] neon-border">
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--dark-card)] z-10"></div>
                <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  <span className="text-[var(--neon-purple)] text-sm font-semibold">{featuredNews.category}</span>
                  <h3 className="text-xl font-bold text-white">{featuredNews.title}</h3>
                  <p className="text-gray-400">{featuredNews.excerpt}</p>
                </div>
              </div>
            </div>

            {/* Grid de Notícias */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentNews.map((news) => (
                <div key={news.id} className="card-glow rounded-lg overflow-hidden border border-gray-800">
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
                  </div>
                  <div className="p-4">
                    <span className="text-[var(--neon-green)] text-sm">{news.category}</span>
                    <h3 className="text-lg font-semibold mt-2 text-white">{news.title}</h3>
                    <p className="text-gray-400 mt-2">{news.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <CryptoMarket />

            {/* Card de Newsletter */}
            <div className="card-glow rounded-xl p-6 border border-[var(--neon-pink)]">
              <h3 className="text-lg font-bold mb-2 text-white">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">
                Receba as principais notícias diretamente no seu email.
              </p>
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                className="w-full bg-[var(--dark-bg)] border border-gray-700 rounded-lg px-4 py-2 text-white mb-2 focus:border-[var(--neon-pink)] focus:outline-none"
              />
              <button className="w-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
