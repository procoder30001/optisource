'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send, Copy, Settings, Plus, Trash2 } from 'lucide-react';

export default function PromptPlayground() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState('claude-3-opus');

  const models = [
    { id: 'claude-3-opus', name: 'Claude 3 Opus', tokens: '200K' },
    { id: 'llama-2-70b', name: 'Llama 2 70B', tokens: '4K' },
    { id: 'mistral-large', name: 'Mistral Large', tokens: '32K' },
    { id: 'gpt-4', name: 'GPT-4', tokens: '128K' },
  ];

  const handleExecute = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResponse(`This is a simulated response from ${selectedModel}. In a real implementation, this would contain the actual model output based on your prompt.\n\nYour prompt was: "${prompt}"\n\nThe model processed this and generated a relevant response that demonstrates the capabilities of the selected model.`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-display tracking-tight mb-2">Prompt Playground</h1>
        <p className="text-muted-foreground">Experiment with different models and prompts in real-time</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="p-4 border border-foreground/10">
            <h3 className="font-display mb-3 text-sm">Model Selection</h3>
            <div className="space-y-2">
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    selectedModel === model.id
                      ? 'border-foreground/50 bg-foreground/5'
                      : 'border-foreground/10 hover:border-foreground/20'
                  }`}
                >
                  <p className="text-sm font-medium">{model.name}</p>
                  <p className="text-xs text-muted-foreground">{model.tokens} context</p>
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-4 border border-foreground/10">
            <h3 className="font-display mb-3 text-sm">Parameters</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground block mb-2">Temperature</label>
                <input type="range" min="0" max="1" step="0.1" defaultValue="0.7" className="w-full" />
                <p className="text-xs text-foreground/50 mt-1">0.7</p>
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-2">Max Tokens</label>
                <input type="number" defaultValue="1000" className="w-full px-3 py-2 bg-foreground/5 border border-foreground/10 rounded text-sm" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-2">Top P</label>
                <input type="range" min="0" max="1" step="0.1" defaultValue="0.9" className="w-full" />
                <p className="text-xs text-foreground/50 mt-1">0.9</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border border-foreground/10">
            <h3 className="font-display mb-3 text-sm">Saved Prompts</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded-lg border border-foreground/10 hover:border-foreground/20 transition-all text-sm hover:bg-foreground/5">
                <p className="truncate">Summarize this text...</p>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-foreground/10 hover:border-foreground/20 transition-all text-sm hover:bg-foreground/5">
                <p className="truncate">Generate code snippet...</p>
              </button>
              <Button variant="outline" className="w-full text-sm">
                <Plus className="w-4 h-4 mr-2" /> Save Prompt
              </Button>
            </div>
          </Card>
        </div>

        {/* Main Area */}
        <div className="lg:col-span-3 space-y-4">
          {/* Input */}
          <Card className="p-6 border border-foreground/10">
            <h3 className="font-display mb-4 text-sm">Prompt</h3>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here... Start typing to see completions"
              className="w-full h-40 bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-sm resize-none focus:outline-none focus:border-foreground/30 transition-colors"
            />
            <div className="flex gap-3 mt-4">
              <Button
                onClick={handleExecute}
                disabled={!prompt || isLoading}
                className="flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isLoading ? 'Processing...' : 'Execute'}
              </Button>
              <Button variant="outline" size="sm">
                <Copy className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </Card>

          {/* Output */}
          {response && (
            <Card className="p-6 border border-foreground/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-sm">Response</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-sm leading-relaxed whitespace-pre-wrap">
                {isLoading ? (
                  <div className="animate-pulse">Generating response...</div>
                ) : (
                  response
                )}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>Tokens used: 245 / 1000</span>
                <span>Latency: 1.2s</span>
              </div>
            </Card>
          )}

          {/* History */}
          {!response && (
            <Card className="p-6 border border-foreground/10 text-center">
              <div className="py-12">
                <h4 className="font-display mb-2">No responses yet</h4>
                <p className="text-sm text-muted-foreground">Enter a prompt and click Execute to see responses</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
