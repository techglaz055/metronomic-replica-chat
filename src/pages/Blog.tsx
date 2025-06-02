
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Unlocking the secrets of successful filmmaking",
      subtitle: "How to Save 90% of Your Time in Film Pre-Production",
      date: "Updated on May 26 2025, 09:43",
      tags: ["AI Automation", "Pre-production"],
      description: "Time is one of the most expensive resources in filmmaking. Between script breakdowns, scheduling, casting logistics, and shot lists, countless hours are burned before a single frame is shot. But what if you could cut that pre-production workload by 90% — without sacrificing control or creativity?",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Spotlight on Emerging Filmmakers: NolanAI Sponsors the 2025 Shorts Challenge",
      date: "March 21 2025, 06:11",
      description: "At NolanAI, we believe in empowering filmmakers at every stage of their journey. That's why we're thrilled to sponsor the",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Maximizing Efficiency in Pre-Production: A Producer's Guide",
      date: "March 14 2025, 08:17",
      tags: ["Budgeting", "Pre-production"],
      description: "Pre-production sets the stage for a smooth shoot and successful film. As a producer, your role in this phase is critical. Here's how to set yourself and your team up for success:",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "The Annapolis Film Festival: A Hub for Filmmakers and Industry Professionals",
      date: "March 11 2025, 10:18",
      description: "The Annapolis Film Festival (AFF) is an event like no other, bringing together filmmakers, creators, and industry professionals from all over the world to explore the art of cinema, share ideas, and celebrate the power of storytelling. This year's festival promises to be a standout event, with a rich mix of industry panels, film screenings, and networking opportunities.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              NOLANAI BLOG
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Unlocking the <span className="text-white">secrets</span> of successful <span className="text-white">filmmaking</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-2xl p-6">
                <img 
                  src={blogPosts[0].image}
                  alt="Featured article"
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <div className="text-center">
                  <div className="text-yellow-500 text-2xl font-bold mb-2">90% Faster</div>
                  <div className="text-white text-lg">Pre-Production for Filmmakers</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                {blogPosts[0].subtitle}
              </h3>
              <p className="text-gray-400 text-sm">{blogPosts[0].date}</p>
              <div className="flex gap-2">
                {blogPosts[0].tags?.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                {blogPosts[0].description}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Read article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-2">{post.date}</p>
                  {post.tags && (
                    <div className="flex gap-2 mb-3">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{post.description}</p>
                  <Button variant="link" className="text-blue-400 p-0">
                    Read article
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              See More Posts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
