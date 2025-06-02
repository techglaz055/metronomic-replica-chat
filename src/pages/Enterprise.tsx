
import { Button } from '@/components/ui/button';
import { Building2, Shield, Zap, Users, Globe, Headphones } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';

const Enterprise = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLogin = (email: string) => {
    console.log('Logged in:', email);
    setIsAuthModalOpen(false);
  };

  const features = [
    {
      icon: Building2,
      title: "Studio-Grade Infrastructure",
      description: "Enterprise-level security and performance built for large-scale film production workflows."
    },
    {
      icon: Shield,
      title: "Advanced Security & Compliance",
      description: "SOC 2 compliance, SSO integration, and advanced permission controls for your studio's needs."
    },
    {
      icon: Zap,
      title: "Priority Performance",
      description: "Dedicated resources and priority processing for your most critical projects and deadlines."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Advanced team management, role-based access, and collaborative workflows for large productions."
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Multi-region deployment options with data residency controls for international productions."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "24/7 premium support with dedicated account management and custom training sessions."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onLoginClick={() => setIsAuthModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              ENTERPRISE & STUDIOS
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Scale your production with <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">NolanAI</span> Enterprise
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Purpose-built for studios, production companies, and enterprise teams that need 
              advanced security, unlimited scale, and dedicated support for their film production workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full"
              >
                Contact Sales
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg rounded-full"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Enterprise Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Everything you need to power large-scale film production workflows with enterprise-grade reliability and security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to transform your studio's workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join leading studios and production companies who trust NolanAI Enterprise 
            to power their most ambitious projects.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-full"
          >
            Get Started Today →
          </Button>
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

export default Enterprise;
