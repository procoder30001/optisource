'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Search, Trash2, Download, Plus } from 'lucide-react';

export default function VectorDatabase() {
  const collections = [
    {
      id: 1,
      name: 'Documentation',
      vectors: 12453,
      dim: 1536,
      indexed: true,
      size: '2.3 GB',
      created: '2024-01-15',
    },
    {
      id: 2,
      name: 'Product Catalog',
      vectors: 8902,
      dim: 768,
      indexed: true,
      size: '1.8 GB',
      created: '2024-01-10',
    },
    {
      id: 3,
      name: 'Customer Feedback',
      vectors: 5234,
      dim: 1536,
      indexed: false,
      size: '0.9 GB',
      created: '2024-01-08',
    },
  ];

  const searchResults = [
    { id: 1, text: 'Product documentation page 42', score: 0.94, source: 'Documentation' },
    { id: 2, text: 'API reference guide section 3.2', score: 0.89, source: 'Documentation' },
    { id: 3, text: 'Getting started tutorial', score: 0.85, source: 'Documentation' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 800);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-display tracking-tight mb-2">Vector Database</h1>
        <p className="text-muted-foreground">Manage embeddings and semantic search across collections</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 border border-foreground/10">
          <p className="text-sm text-muted-foreground mb-1">Total Vectors</p>
          <p className="text-2xl font-display">26.6K</p>
        </Card>
        <Card className="p-4 border border-foreground/10">
          <p className="text-sm text-muted-foreground mb-1">Collections</p>
          <p className="text-2xl font-display">3</p>
        </Card>
        <Card className="p-4 border border-foreground/10">
          <p className="text-sm text-muted-foreground mb-1">Total Size</p>
          <p className="text-2xl font-display">5.0 GB</p>
        </Card>
        <Card className="p-4 border border-foreground/10">
          <p className="text-sm text-muted-foreground mb-1">Query Latency</p>
          <p className="text-2xl font-display">45ms</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Collections */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-6 border border-foreground/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-display">Collections</h2>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" /> New Collection
              </Button>
            </div>
            <div className="space-y-3">
              {collections.map((collection) => (
                <div
                  key={collection.id}
                  className="p-4 border border-foreground/10 rounded-lg hover:border-foreground/20 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium mb-1">{collection.name}</h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        {collection.vectors.toLocaleString()} vectors • {collection.dim}D • {collection.size}
                      </p>
                    </div>
                    <span className={`text-xs font-mono px-2 py-1 rounded ${
                      collection.indexed
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {collection.indexed ? 'indexed' : 'indexing'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">Created {collection.created}</p>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-foreground/5 rounded transition-colors">
                        <Download className="w-4 h-4 text-foreground/60" />
                      </button>
                      <button className="p-2 hover:bg-foreground/5 rounded transition-colors">
                        <Trash2 className="w-4 h-4 text-foreground/60" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Upload */}
        <Card className="p-6 border border-foreground/10 h-fit">
          <h3 className="font-display mb-4 text-sm">Upload Vectors</h3>
          <div className="border-2 border-dashed border-foreground/20 rounded-lg p-8 text-center hover:border-foreground/40 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 mx-auto mb-3 text-foreground/40" />
            <p className="text-sm font-medium mb-1">Drag & drop your file</p>
            <p className="text-xs text-muted-foreground">JSON, CSV, or Parquet</p>
          </div>
          <Button className="w-full mt-4">Choose File</Button>
        </Card>
      </div>

      {/* Semantic Search */}
      <Card className="p-6 border border-foreground/10">
        <h2 className="text-xl font-display mb-6">Semantic Search</h2>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search embeddings..."
              className="w-full pl-12 pr-4 py-2 bg-foreground/5 border border-foreground/10 rounded-lg text-sm focus:outline-none focus:border-foreground/30"
            />
          </div>
          <Button onClick={handleSearch} disabled={!searchQuery} className="w-full">
            {isSearching ? 'Searching...' : 'Search Vectors'}
          </Button>

          {searchQuery && (
            <div className="mt-6 space-y-3">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="p-4 border border-foreground/10 rounded-lg hover:border-foreground/20 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm">{result.text}</p>
                    <div className="text-right">
                      <p className="text-xs font-mono text-foreground/50">{result.source}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-4">
                      <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-foreground"
                          style={{ width: `${result.score * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-mono text-foreground/60 whitespace-nowrap">
                      {(result.score * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
