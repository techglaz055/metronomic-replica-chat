import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TargetAudience from '@/components/TargetAudience';
import ProducersSection from '@/components/ProducersSection';
import SecuritySection from '@/components/SecuritySection';
import EthicalAI from '@/components/EthicalAI';
import AuthModal from '@/components/AuthModal';
import Dashboard from '@/components/Dashboard';
import ScriptEditor from '@/components/ScriptEditor';
import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'dashboard' | 'script-editor'>('home');

  const handleLogin = (email: string) => {
    setUser(email);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  const handleCreateScript = () => {
    setCurrentView('script-editor');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  if (currentView === 'dashboard' && user) {
    return (
      <Dashboard 
        userEmail={user} 
        onLogout={handleLogout}
        onCreateScript={handleCreateScript}
      />
    );
  }

  if (currentView === 'script-editor' && user) {
    return (
      <ScriptEditor onBack={handleBackToDashboard} />
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar onLoginClick={() => setIsAuthModalOpen(true)} />
      <Hero />
      <Features />
      <TargetAudience />
      <ProducersSection />
      <SecuritySection />
      <EthicalAI />
      
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

export default Index;
