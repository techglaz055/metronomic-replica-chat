
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const features = [
    {
      name: "AI Budgeting",
      description: "Create your film's Top Sheet and detailed breakdown in minutes with AI-powered budget projections and rebate recommendations. (US, Mexico, Canada)",
      basic: false,
      creator: false,
      pro: "Unlimited AI powered budgets, full export options (PDF/Excel)"
    },
    {
      name: "Unlimited Projects and Scripts",
      description: "Create as many projects and scripts as you want without limitation",
      basic: true,
      creator: true,
      pro: true
    },
    {
      name: "AI Video Generator",
      description: "Transform your scripts into cinematic visuals",
      basic: "15 one time credits",
      creator: "100 monthly credits",
      pro: "210 monthly credits"
    },
    {
      name: "Automatic Cloud sync and Backup",
      description: "",
      basic: true,
      creator: true,
      pro: true
    },
    {
      name: "History",
      description: "Access previous versions of your scripts.",
      basic: "Last 3 days",
      creator: "Last 90 days",
      pro: "Last 365 days"
    },
    {
      name: "Co-Pilot/AI requests",
      description: "Ask AI to create, refine, or adjust scenes, dialogue, and tone—your story, your way.",
      basic: "Basic AI 100 one time requests",
      creator: "Unlimited BASIC AI requests. Co-Pilot will analyze twice as much content as Free and Basic Plans.",
      pro: "Unlimited PRO AI requests. Co-Pilot will analyze twice as much content as Free and Basic Plans."
    },
    {
      name: "AI Image Generations",
      description: "Draw Scenes and Characters",
      basic: "5 one time requests",
      creator: "Unlimited",
      pro: "Unlimited"
    },
    {
      name: "PDF and Final Draft export",
      description: "",
      basic: "Watermarked",
      creator: "Unlimited",
      pro: "Unlimited"
    },
    {
      name: "Script Sharing",
      description: "",
      basic: true,
      creator: true,
      pro: true
    },
    {
      name: "Storyboard",
      description: "Automated storyboard.",
      basic: "Up to five frames per scene and up to AI sketches.",
      creator: "Basic AI sketches",
      pro: "PRO AI sketch all scenes with one click"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              FEATURE COMPARISON
            </h1>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-6 px-4 text-gray-400 font-medium">Features</th>
                  <th className="text-center py-6 px-4 text-white font-bold text-xl">Basic</th>
                  <th className="text-center py-6 px-4 text-white font-bold text-xl">Creator</th>
                  <th className="text-center py-6 px-4 text-white font-bold text-xl">Pro</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-slate-800">
                    <td className="py-6 px-4">
                      <div className="text-white font-medium mb-2">{feature.name}</div>
                      {feature.description && (
                        <div className="text-gray-400 text-sm">{feature.description}</div>
                      )}
                    </td>
                    <td className="py-6 px-4 text-center">
                      {typeof feature.basic === 'boolean' ? (
                        feature.basic ? (
                          <Check className="w-6 h-6 text-blue-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-500 mx-auto" />
                        )
                      ) : (
                        <div className="text-gray-300 text-sm">{feature.basic}</div>
                      )}
                    </td>
                    <td className="py-6 px-4 text-center">
                      {typeof feature.creator === 'boolean' ? (
                        feature.creator ? (
                          <Check className="w-6 h-6 text-blue-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-500 mx-auto" />
                        )
                      ) : (
                        <div className="text-gray-300 text-sm">{feature.creator}</div>
                      )}
                    </td>
                    <td className="py-6 px-4 text-center">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-500 mx-auto" />
                        )
                      ) : (
                        <div className="text-green-400 text-sm font-medium">{feature.pro}</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
