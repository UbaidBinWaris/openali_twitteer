
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const badges = [
    { name: "Chonk Blitzer", icon: "🔥", description: "Posted 100+ times", earned: true },
    { name: "Hype Engine", icon: "⚡", description: "Generated 10K+ engagement", earned: true },
    { name: "Moon Walker", icon: "🌙", description: "Reached trending on 3+ platforms", earned: false },
    { name: "Diamond Hands", icon: "💎", description: "Campaign ran for 30+ days", earned: false },
  ];

  const postHistory = [
    { platform: "Twitter", content: "🚀 $MEME is taking off! Join the rocket ship!", engagement: "2.4K", time: "2h ago", status: "viral" },
    { platform: "Reddit", content: "This community is absolutely insane! HODL strong 💎🙌", engagement: "1.8K", time: "4h ago", status: "trending" },
    { platform: "TikTok", content: "When your memecoin portfolio goes brrrrr 📈", engagement: "12.3K", time: "6h ago", status: "viral" },
    { platform: "Discord", content: "Chat, are we really doing this? TO THE MOON! 🌙", engagement: "856", time: "8h ago", status: "normal" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Mission Control</span>
            <br />
            <span className="text-white">Dashboard 🎛️</span>
          </h2>
          <p className="text-xl text-gray-300">
            Track your memecoin's journey to the moon in real-time!
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-purple-500/30 p-6 card-glow">
            <div className="text-center">
              <div className="text-3xl mb-2">🪙</div>
              <div className="text-2xl font-bold text-white">$MEME</div>
              <div className="text-sm text-gray-300">Token Symbol</div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-500/30 p-6 card-glow">
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-2xl font-bold text-neon-green">$1,337</div>
              <div className="text-sm text-gray-300">Budget Left</div>
              <Progress value={65} className="mt-2" />
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-500/30 p-6 card-glow">
            <div className="text-center">
              <div className="text-3xl mb-2">📝</div>
              <div className="text-2xl font-bold text-neon-blue">247</div>
              <div className="text-sm text-gray-300">Posts Made</div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border-pink-500/30 p-6 card-glow">
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-2xl font-bold text-neon-pink">127%</div>
              <div className="text-sm text-gray-300">Growth Rate</div>
            </div>
          </Card>
        </div>

        {/* Main Dashboard */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 border border-gray-600/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-neon-pink data-[state=active]:to-neon-blue">
              📊 Overview
            </TabsTrigger>
            <TabsTrigger value="posts" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-neon-pink data-[state=active]:to-neon-blue">
              📝 Post History
            </TabsTrigger>
            <TabsTrigger value="badges" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-neon-pink data-[state=active]:to-neon-blue">
              🏆 Badges
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Performance Chart */}
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-gray-600/50 p-8 card-glow">
                <h3 className="text-2xl font-bold text-white mb-6">📈 Performance Overview</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Twitter Engagement</span>
                      <span className="text-neon-blue font-bold">89%</span>
                    </div>
                    <Progress value={89} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Reddit Upvotes</span>
                      <span className="text-neon-pink font-bold">76%</span>
                    </div>
                    <Progress value={76} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">TikTok Views</span>
                      <span className="text-neon-yellow font-bold">94%</span>
                    </div>
                    <Progress value={94} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Discord Activity</span>
                      <span className="text-neon-green font-bold">67%</span>
                    </div>
                    <Progress value={67} className="h-3" />
                  </div>
                </div>
              </Card>

              {/* Live Stats */}
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-gray-600/50 p-8 card-glow">
                <h3 className="text-2xl font-bold text-white mb-6">🔴 Live Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-neon-pink">42.7K</div>
                    <div className="text-sm text-gray-300">Total Likes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-neon-blue">18.3K</div>
                    <div className="text-sm text-gray-300">Shares</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-neon-yellow">5.2K</div>
                    <div className="text-sm text-gray-300">Comments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-neon-green">892K</div>
                    <div className="text-sm text-gray-300">Impressions</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center justify-center text-green-400 text-sm mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                    Live Activity
                  </div>
                  <div className="text-center text-white text-sm">
                    🚀 Someone just bought $MEME on Uniswap!
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="posts" className="mt-8">
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-gray-600/50 p-8 card-glow">
              <h3 className="text-2xl font-bold text-white mb-6">📝 Recent Posts</h3>
              <div className="space-y-4">
                {postHistory.map((post, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge className={`
                            ${post.platform === 'Twitter' ? 'bg-blue-500' : 
                              post.platform === 'Reddit' ? 'bg-orange-500' :
                              post.platform === 'TikTok' ? 'bg-pink-500' : 'bg-purple-500'}
                          `}>
                            {post.platform}
                          </Badge>
                          <Badge variant={post.status === 'viral' ? 'default' : post.status === 'trending' ? 'secondary' : 'outline'}>
                            {post.status === 'viral' ? '🔥 Viral' : post.status === 'trending' ? '📈 Trending' : '✅ Posted'}
                          </Badge>
                          <span className="text-sm text-gray-400">{post.time}</span>
                        </div>
                        <p className="text-white mb-2">{post.content}</p>
                        <div className="text-sm text-gray-300">
                          Engagement: <span className="font-bold text-neon-blue">{post.engagement}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="badges" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {badges.map((badge, index) => (
                <Card key={index} className={`
                  p-8 card-glow transition-all duration-300
                  ${badge.earned 
                    ? 'bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border-yellow-500/50 neon-glow' 
                    : 'bg-gradient-to-br from-gray-900/30 to-gray-800/20 border-gray-600/30 opacity-60'
                  }
                `}>
                  <div className="text-center">
                    <div className={`text-6xl mb-4 ${badge.earned ? 'animate-platform-bounce' : 'grayscale'}`}>
                      {badge.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{badge.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{badge.description}</p>
                    <Badge className={badge.earned ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-gray-300'}>
                      {badge.earned ? '✅ Earned' : '🔒 Locked'}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Dashboard;
