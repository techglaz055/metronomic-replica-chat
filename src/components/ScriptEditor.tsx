
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, Download, Brain, FileText } from 'lucide-react';

interface ScriptEditorProps {
  onBack: () => void;
}

const ScriptEditor = ({ onBack }: ScriptEditorProps) => {
  const [scriptTitle, setScriptTitle] = useState('Untitled Script');
  const [scriptContent, setScriptContent] = useState(`FADE IN:

EXT. CITY STREET - DAY

A bustling street filled with people. The camera follows JANE (30s), a determined screenwriter walking with purpose.

JANE
(to herself)
Today's the day everything changes.

She stops in front of a modern office building, takes a deep breath, and walks inside.

INT. OFFICE BUILDING - CONTINUOUS

Jane approaches the reception desk where a RECEPTIONIST (20s) greets her with a smile.

RECEPTIONIST
Good morning! How can I help you?

JANE
I'm here for the 10 AM meeting with Mr. Thompson.

RECEPTIONIST
Of course! Please take a seat, he'll be with you shortly.

Jane sits down, nervously checking her portfolio.

FADE OUT.`);

  const [aiSuggestion, setAiSuggestion] = useState('');

  const handleAISuggestion = () => {
    const suggestions = [
      "Consider adding more visual details to the city street scene to establish the setting better.",
      "The dialogue could be more specific about Jane's goals. What kind of meeting is she attending?",
      "You might want to add some internal conflict or obstacle to create more tension.",
      "Consider showing Jane's nervousness through action rather than just telling us about it.",
    ];
    
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    setAiSuggestion(randomSuggestion);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button onClick={onBack} variant="ghost" size="sm" className="text-white hover:bg-slate-800">
              <ArrowLeft size={16} className="mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-xl font-semibold text-white">Script Editor</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Save size={16} className="mr-2" />
              Save
            </Button>
            <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              <Download size={16} className="mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Input
                    value={scriptTitle}
                    onChange={(e) => setScriptTitle(e.target.value)}
                    className="text-xl font-bold bg-transparent border-none text-white p-0 focus:ring-0"
                  />
                  <FileText className="text-blue-400" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={scriptContent}
                  onChange={(e) => setScriptContent(e.target.value)}
                  className="min-h-96 bg-slate-900 border-slate-600 text-white font-mono text-sm leading-relaxed resize-none"
                  placeholder="Start writing your script..."
                />
              </CardContent>
            </Card>

            {/* Formatting Toolbar */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                    Character
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                    Dialogue
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                    Action
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                    Scene Heading
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                    Transition
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Assistant Sidebar */}
          <div className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Brain className="text-blue-400 mr-2" size={20} />
                  AI Co-Pilot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handleAISuggestion}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Get AI Suggestion
                </Button>
                {aiSuggestion && (
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-600">
                    <p className="text-gray-300 text-sm">{aiSuggestion}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Script Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Pages:</span>
                  <span className="text-white">2.5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Scenes:</span>
                  <span className="text-white">3</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Characters:</span>
                  <span className="text-white">2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Est. Runtime:</span>
                  <span className="text-white">2-3 min</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                  Generate Character
                </Button>
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                  Plot Analysis
                </Button>
                <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
                  Budget Estimate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptEditor;
