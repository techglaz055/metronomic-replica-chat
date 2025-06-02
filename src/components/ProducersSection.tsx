
import { Button } from '@/components/ui/button';

const ProducersSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Save time
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                cutting down on trivial tasks
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                revolutionizing the filmmaking process for producers: cutting costs and resources by automating script analysis. Helping create outstanding pitch decks resonating with your project
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full"
            >
              NolanAI for Producers →
            </Button>
          </div>

          {/* Right Content - Producer Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face" 
                alt="Film producer"
                className="w-full max-w-md h-96 object-cover rounded-2xl mx-auto border-4 border-blue-500/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating geometric shapes */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-blue-400 rounded-lg rotate-12 opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-purple-400 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProducersSection;
