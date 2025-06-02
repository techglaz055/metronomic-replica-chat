import { Button } from '@/components/ui/button';
import { 
  Video, 
  FileText, 
  Presentation, 
  Brain, 
  Calendar, 
  Lightbulb,
  Image,
  BarChart3,
  Users
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';

const FeaturesPage = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLogin = (email: string) => {
    console.log('Logged in:', email);
    setIsAuthModalOpen(false);
  };

  const features = [
    {
      icon: Video,
      title: "NolanAI Video Generator",
      description: "Effortlessly create dynamic and professional-grade shots for your videos. With NolanAI Video Editor, customize angles, movements, and cinematic styles to bring your storyboards to life. From wide-angle establishing shots to close-ups, every frame is tailored to your script's vision with AI precision.",
      color: "bg-purple-600"
    },
    {
      icon: FileText,
      title: "SHOT LIST",
      description: "NolanAI's shot list feature adapts seamlessly to your schedule and storyboard.",
      color: "bg-green-600"
    },
    {
      icon: Presentation,
      title: "AI PITCH DECK",
      description: "The essential tool for filmmakers seeking to craft captivating pitch decks effortlessly.",
      color: "bg-orange-600"
    },
    {
      icon: Brain,
      title: "AI SCRIPT COVERAGE",
      description: "AI Script Coverage delivers a comprehensive report on your script's logline, impression, synopsis, and character details—all within minutes.",
      color: "bg-red-600"
    },
    {
      icon: BarChart3,
      title: "AI BUDGETING",
      description: "Available with Early access! Our AI budgeting goes beyond simple calculations. It leverages the power of AI to forecast your budget based on your script.",
      color: "bg-green-600"
    },
    {
      icon: Calendar,
      title: "SCHEDULING",
      description: "Automatically sorts your stripboard (with advanced algorithms within the power of AI) in the most efficient way for shooting.",
      color: "bg-blue-600"
    },
    {
      icon: Lightbulb,
      title: "BRAINSTORMING",
      description: "Collaborate with AI on brainstorming for script and screenplay",
      color: "bg-yellow-600"
    },
    {
      icon: Image,
      title: "AUTOMATED STORYBOARD",
      description: "Next-Level Storyboard for Film and Story Development",
      color: "bg-green-600"
    },
    {
      icon: Users,
      title: "CHARACTER DEVELOPMENT",
      description: "Create and edit your character with help of AI.",
      color: "bg-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onLoginClick={() => setIsAuthModalOpen(true)} />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              FEATURES
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              See what <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">NolanAI</span> comprehensive toolkit can do <span className="text-white">for you.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-slate-600 text-gray-300 hover:bg-slate-700"
                >
                  Explore Feature
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Chatbot />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default FeaturesPage;
