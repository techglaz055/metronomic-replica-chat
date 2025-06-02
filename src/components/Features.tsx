
import { 
  Brain, 
  Edit3, 
  BarChart3, 
  Users, 
  Languages, 
  FileText 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Budgeting",
      description: "Generate accurate film budgets with AI-powered analysis. NolanAI reviews your script to identify cost drivers, providing data-driven budget projections."
    },
    {
      icon: Edit3,
      title: "AI Co-Pilot Editor",
      description: "Overcome writer's block with AI-driven prompts and suggestions, ensuring a seamless writing flow."
    },
    {
      icon: BarChart3,
      title: "AI Pitch Deck",
      description: "Create compelling pitch decks effortlessly with ready-made templates. NolanAI extracts crucial details to suggest costs and visualize your story."
    },
    {
      icon: Users,
      title: "Analytics",
      description: "Instantly identify plot holes and receive thorough script coverage analysis. Perfect your screenplay with targeted insights and scores."
    },
    {
      icon: Languages,
      title: "Multilingual",
      description: "Work seamlessly in Spanish, French, Portuguese, or Russian - no language barriers to hold back your projects."
    },
    {
      icon: FileText,
      title: "Automated Breakdown",
      description: "Streamline pre-production with automatic breakdowns that quickly organize script elements for efficient planning."
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 mb-4 text-lg">
            "covering the full film production process from concept creation and screenwriting to planning and stage production"
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
            Sign Up For Free →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
