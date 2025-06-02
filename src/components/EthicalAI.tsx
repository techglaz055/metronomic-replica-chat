
import { Button } from '@/components/ui/button';

const EthicalAI = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leading the charge section */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full mb-8"
            >
              Sign Up For Free →
            </Button>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Leading the charge in <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Ethical AI</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-gray-300 leading-relaxed">
              At NolanAI, we prioritize the ethical implications of AI in the creative industry.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              We believe in AI-powered tools that enhance human-driven storytelling.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full mt-8"
          >
            Lear more →
          </Button>
        </div>

        {/* From screen writing section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop" 
              alt="Woman screenwriter"
              className="w-full max-w-md h-96 object-cover rounded-2xl mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl max-w-md mx-auto"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                From <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">screen writing</span> to <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">pre-production</span>,
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                we got you covered!
              </h3>
            </div>
          </div>
        </div>

        {/* Enhance your screenwriting section */}
        <div className="mt-32 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Enhance your
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              screenwriting experience
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              providing tailored solutions to overcome writer's block and streamlining your creative process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicalAI;
