'use client';

import { useState, useEffect } from 'react';

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

export default function CryptoMarket() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'
        );
        
        if (!response.ok) {
          throw new Error('Falha ao carregar dados');
        }

        const data = await response.json();
        setCryptoData(data);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar dados do mercado');
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: price < 1 ? 4 : 2,
      maximumFractionDigits: price < 1 ? 4 : 2,
    }).format(price);
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(2)}T`;
    }
    if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(2)}B`;
    }
    if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(2)}M`;
    }
    return `$${marketCap.toFixed(2)}`;
  };

  if (error) {
    return (
      <div className="card-glow rounded-xl p-6 border border-[var(--neon-pink)]">
        <p className="text-[var(--neon-pink)]">{error}</p>
      </div>
    );
  }

  return (
    <div className="card-glow rounded-xl p-6 border border-[var(--neon-blue)]">
      <h2 className="text-xl font-bold mb-4 text-white neon-text">Mercado Cripto</h2>
      <div className="space-y-4">
        {loading ? (
          Array(5).fill(0).map((_, i) => (
            <div key={i} className="animate-pulse flex justify-between items-center py-2 border-b border-gray-800">
              <div className="h-4 bg-gray-700 rounded w-20"></div>
              <div className="h-4 bg-gray-700 rounded w-24"></div>
            </div>
          ))
        ) : (
          cryptoData.map((coin) => (
            <div key={coin.id} className="flex justify-between items-center py-2 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">{coin.symbol.toUpperCase()}</span>
                <span className="text-gray-500 text-sm">{formatMarketCap(coin.market_cap)}</span>
              </div>
              <div className="text-right">
                <div className="font-medium">{formatPrice(coin.current_price)}</div>
                <div className={coin.price_change_percentage_24h >= 0 ? 'crypto-price-up' : 'crypto-price-down'}>
                  {coin.price_change_percentage_24h >= 0 ? '↑' : '↓'} 
                  {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 