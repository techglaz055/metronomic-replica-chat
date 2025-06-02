
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, FileText, BarChart3, Users, Calendar, LogOut } from 'lucide-react';

interface DashboardProps {
  userEmail: string;
  onLogout: () => void;
  onCreateScript: () => void;
}

const Dashboard = ({ userEmail, onLogout, onCreateScript }: DashboardProps) => {
  const [scripts] = useState([
    { id: 1, title: "The Last Stand", status: "In Progress", lastEdited: "2 hours ago" },
    { id: 2, title: "Midnight Runner", status: "Draft", lastEdited: "1 day ago" },
    { id: 3, title: "Ocean Dreams", status: "Completed", lastEdited: "3 days ago" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              NolanAI
            </h1>
            <span className="text-gray-400">Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome, {userEmail.split('@')[0]}</span>
            <Button onClick={onLogout} variant="outline" size="sm" className="border-slate-600 text-white hover:bg-slate-800">
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button 
              onClick={onCreateScript}
              className="h-20 bg-blue-600 hover:bg-blue-700 text-white flex flex-col items-center space-y-2"
            >
              <Plus size={24} />
              <span>Create Script</span>
            </Button>
            <Button className="h-20 bg-purple-600 hover:bg-purple-700 text-white flex flex-col items-center space-y-2">
              <BarChart3 size={24} />
              <span>Generate Pitch</span>
            </Button>
            <Button className="h-20 bg-green-600 hover:bg-green-700 text-white flex flex-col items-center space-y-2">
              <Users size={24} />
              <span>Collaborate</span>
            </Button>
            <Button className="h-20 bg-orange-600 hover:bg-orange-700 text-white flex flex-col items-center space-y-2">
              <Calendar size={24} />
              <span>Schedule</span>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="scripts" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="scripts" className="text-white data-[state=active]:bg-blue-600">My Scripts</TabsTrigger>
            <TabsTrigger value="projects" className="text-white data-[state=active]:bg-blue-600">Projects</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white data-[state=active]:bg-blue-600">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="scripts" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Recent Scripts</h3>
              <Button onClick={onCreateScript} className="bg-blue-600 hover:bg-blue-700">
                <Plus size={16} className="mr-2" />
                New Script
              </Button>
            </div>
            
            <div className="grid gap-4">
              {scripts.map((script) => (
                <Card key={script.id} className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-colors cursor-pointer">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <FileText className="text-blue-400 mr-3" size={24} />
                    <div className="flex-1">
                      <CardTitle className="text-white">{script.title}</CardTitle>
                      <p className="text-gray-400 text-sm">Last edited {script.lastEdited}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      script.status === 'Completed' ? 'bg-green-600 text-white' :
                      script.status === 'In Progress' ? 'bg-blue-600 text-white' :
                      'bg-yellow-600 text-white'
                    }`}>
                      {script.status}
                    </span>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Manage your film projects, budgets, and production schedules.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Script Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">View detailed analytics and insights about your scripts.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
