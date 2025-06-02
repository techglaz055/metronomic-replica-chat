import { Button } from '@/components/ui/button';
import { GraduationCap, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';
import Footer from '@/components/Footer';

const Education = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLogin = (email: string) => {
    console.log('Logged in:', email);
    setIsAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onLoginClick={() => setIsAuthModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Education
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Bring <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">NolanAI</span> to
                </h2>
                <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Your Classroom
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Empower your students with NolanAI's all-in-one pre-production platform. 
                  From script breakdown to storyboarding, our tools provide hands-on 
                  experience with industry technology, preparing future filmmakers for real-world 
                  success.
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Film education workspace"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Make Education Process More Efficient */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Make education process more efficient!
            </h2>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              We've merged NolanAI's tools with the features essential for tomorrow's classrooms, offering learners a cutting-edge story development and pre-production experience accessible from anywhere.
            </p>
          </div>

          {/* Teachers and Students Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Teachers Section */}
            <div className="text-center space-y-8">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap size={40} className="text-white" />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  Teachers
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  NolanAI offers teachers a streamlined way to assess student scripts, 
                  providing automated analysis and feedback. It allows educators to 
                  quickly identify areas for improvement and run interactive workshops, 
                  making coursework management easier, while fostering student growth.
                </p>
              </div>
            </div>

            {/* Students Section */}
            <div className="text-center space-y-8">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto">
                <Users size={40} className="text-white" />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  Students
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  NolanAI helps university students by providing instant, AI-driven 
                  feedback on their scripts, highlighting plot issues and character 
                  development needs. It ensures a polished work, allowing students to 
                  focus on creativity while preparing high-quality scripts.
                </p>
              </div>
            </div>
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

      <Chatbot />
      <Footer />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Education;
