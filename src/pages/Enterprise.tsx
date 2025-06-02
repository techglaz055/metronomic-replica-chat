
import { Button } from '@/components/ui/button';
import { 
  Edit, 
  Clock, 
  Users, 
  DollarSign, 
  Settings 
} from 'lucide-react';

const Enterprise = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save Up to 80% on Costs",
      points: [
        "Replace multiple tools and licenses with one integrated platform.",
        "Cut expenses on software, labor, and external services by streamlining your workflow.",
        "Centralize key tasks like script coverage, scheduling, and storyboarding in a single tool, reducing reliance on external resources."
      ]
    },
    {
      icon: Clock,
      title: "Cut Pre-Production Time by 90%",
      points: [
        "Automate pre-production tasks like script breakdowns, scheduling, and storyboarding.",
        "Streamline multiple scripts simultaneously—run storyboards, breakdowns, and evaluations in parallel, saving your studio valuable time.",
        "Work globally with ease—cut translation costs and accelerate international projects."
      ]
    }
  ];

  const offerings = [
    {
      icon: Edit,
      title: "All-in-One Script Editor",
      description: "AI-powered editing and smart suggestions streamline a script, making it production-ready in record time."
    },
    {
      icon: Settings,
      title: "Automated Pre-Production",
      description: "Automate breakdowns, scheduling, budgeting and storyboarding, freeing up valuable time and resources."
    },
    {
      icon: Users,
      title: "Collaborative Workflow",
      description: "Keep your team in sync with real-time updates across all production tools."
    },
    {
      icon: DollarSign,
      title: "Budgeting & Forecasting",
      description: "Easily forecast and adjust your budget even as a script evolves, helping you stay on track with expenses."
    },
    {
      icon: Settings,
      title: "Customization & Integration",
      description: "Tailor NolanAI to fit your studio's unique workflow and integrate with existing tools."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Enterprise
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Bring <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">NolanAI</span> to
                </h2>
                <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Your Studio
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  NolanAI saves your studio time and money by centralizing tasks in one 
                  platform. Keep your team aligned across departments and manage multiple 
                  projects efficiently, speeding up your production cycle from concept to final 
                  delivery.
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
                alt="Film studio workspace"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Ahead Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Stay Ahead of the Industry with Smarter Film Production
            </h2>
            <p className="text-xl text-gray-300">
              Deliver projects faster, reduce overhead, and ensure financial precision
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="space-y-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Icon and Title */}
                <div className="flex items-center space-x-6">
                  <div className="w-32 h-32 bg-slate-700 rounded-full flex items-center justify-center">
                    <benefit.icon size={64} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                      {benefit.title}
                    </h3>
                  </div>
                </div>

                {/* Points */}
                <div className="space-y-4">
                  {benefit.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full"
            >
              Request a Demo →
            </Button>
          </div>
        </div>
      </section>

      {/* What NolanAI Offers */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              What NolanAI Offers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {offerings.map((offering, index) => (
              <div 
                key={index}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center space-y-6"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <offering.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{offering.title}</h3>
                <p className="text-gray-300 leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Customization & Integration
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
