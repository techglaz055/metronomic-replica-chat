
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecuritySection = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Security Icon */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Shield size={120} className="text-white" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full blur-xl opacity-30"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Secure
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Don't worry, your data is secure and encrypted with NolanAI
              </p>
              <p className="text-gray-400 leading-relaxed">
                We take your privacy and the ownership of your work very seriously. We respect your creative content and have no rights over it. We do not use your work for training our models or for any other purposes without your explicit consent. Your scripts and content remain your intellectual property. So, when you create/upload or edit content using our software, you retain full ownership of the intellectual property. We do not claim any rights to your scripts or any other content you produce. Your creative work is yours and yours alone.
              </p>
            </div>
          </div>
        </div>

        {/* NolanAI in Action Section */}
        <div className="mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  NolanAI <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">in Action</span>
                </h2>
                <p className="text-gray-300 text-lg">Meet Bryce</p>
                <p className="text-gray-400 leading-relaxed">
                  An independent filmmaker who is utilizing the full power of NolanAI to break down scripts, create pitch decks and storyboards, and reach his ultimate goal.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  With its AI-powered features and user-friendly interface, it can help you bring your stories to life in the most efficient and effective way possible, while respecting your unique creative voice.
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full"
              >
                View premium plans →
              </Button>
            </div>

            {/* Right Content - Video Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-4 border border-slate-600">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                  alt="Filmmaker at work"
                  className="w-full h-80 object-cover rounded-xl"
                />
                {/* Video controls overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
