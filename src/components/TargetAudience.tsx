
import { Button } from '@/components/ui/button';

const TargetAudience = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Up Your Game Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Up your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Game</span> with NolanAI
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            NolanAI is the ultimate tool for filmmakers looking to improve their craft. With its AI-powered features and user-friendly interface, it can help you bring your stories to life in the most efficient and effective way possible, while respecting your unique creative voice.
          </p>
        </div>

        {/* Tabs Section */}
        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold">
              Screenwriters
            </button>
            <button className="px-6 py-3 text-gray-300 hover:text-white transition-colors">
              Producers
            </button>
            <button className="px-6 py-3 text-gray-300 hover:text-white transition-colors">
              Directors
            </button>
          </div>

          {/* Features for Screenwriters */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Write and experiment for a free script editor with affordable Premium plans.</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Avoid writer's blocks with AI-powered suggestions.</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Brainstorm with AI to develop story beats and test out scene and character concepts.</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Cut down on tedious tasks such as formatting with Built-in automated script formatting.</h3>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Create scripts that look and feel professional without stressing out about the technicalities.</h3>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Collaborate with your team, get suggestions and feedback from your peers and colleagues.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
