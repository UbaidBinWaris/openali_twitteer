
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const mockPosts = [
  { platform: 'Twitter', user: '@cryptochad420', content: 'Just bought more $MEME 🚀 This is going parabolic!', likes: 247, time: '2m' },
  { platform: 'Reddit', user: 'u/diamondhands', content: 'HODLING until we reach Mars! 💎🙌', likes: 156, time: '5m' },
  { platform: 'Discord', user: 'MoonBoy#1337', content: 'Chat is this real? 📈📈📈', likes: 89, time: '8m' },
  { platform: 'Telegram', user: 'CryptoWhale', content: 'Accumulating more bags... 👀', likes: 203, time: '12m' },
  { platform: 'TikTok', user: '@memequeen', content: 'When your portfolio goes brrrrr 💰', likes: 1247, time: '15m' },
  { platform: 'Twitter', user: '@stonkmaster', content: 'This community is UNREAL! Best project 2024 🔥', likes: 89, time: '18m' },
  { platform: 'Reddit', user: 'u/apeman', content: 'Ape together strong! 🦍💪', likes: 67, time: '22m' },
  { platform: 'Discord', user: 'Shiba#4206', content: 'Wow much coin very moon! 🐕', likes: 134, time: '25m' }
];

const platformColors = {
  'Twitter': 'from-blue-400 to-blue-600',
  'Reddit': 'from-orange-400 to-red-500',
  'Discord': 'from-indigo-400 to-purple-600',
  'Telegram': 'from-blue-300 to-blue-500',
  'TikTok': 'from-pink-400 to-rose-500'
};

const platformIcons = {
  'Twitter': '🐦',
  'Reddit': '🤖',
  'Discord': '🎮',
  'Telegram': '✈️',
  'TikTok': '🎵'
};

const LiveFeed = () => {
  const [visiblePosts, setVisiblePosts] = useState(mockPosts.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisiblePosts(prev => {
        const newPosts = [...prev];
        newPosts.shift(); // Remove first post
        newPosts.push(mockPosts[currentIndex % mockPosts.length]); // Add new post
        return newPosts;
      });
      setCurrentIndex(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left content */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Live Engagement</span>
              <br />
              <span className="text-white">Feed 📡</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Watch your memecoin take off in real-time! See live posts, reactions, and engagement across all platforms as your campaign goes viral.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30 p-6 card-glow">
                <div className="text-3xl font-black text-neon-green">127%</div>
                <div className="text-sm text-gray-300">Engagement Growth</div>
              </Card>
              <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 p-6 card-glow">
                <div className="text-3xl font-black text-neon-pink">8.2M</div>
                <div className="text-sm text-gray-300">Total Impressions</div>
              </Card>
            </div>
          </div>

          {/* Live feed */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-b from-gray-900/80 to-gray-800/50 border-gray-600/50 p-6 card-glow sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">🔴 Live Activity</h3>
                <div className="flex items-center text-sm text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                  Live
                </div>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-hidden">
                {visiblePosts.map((post, index) => (
                  <div 
                    key={`${post.platform}-${post.user}-${index}`}
                    className={`
                      bg-gray-800/50 rounded-xl p-4 border border-gray-700/50
                      transform transition-all duration-500 ease-out
                      ${index === visiblePosts.length - 1 ? 'animate-slide-up' : ''}
                    `}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`
                        w-8 h-8 rounded-full bg-gradient-to-br ${platformColors[post.platform as keyof typeof platformColors]} 
                        flex items-center justify-center text-sm
                      `}>
                        {platformIcons[post.platform as keyof typeof platformIcons]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs font-semibold text-gray-400">{post.platform}</span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">{post.time}</span>
                        </div>
                        <div className="text-sm font-medium text-gray-300 mb-1">{post.user}</div>
                        <div className="text-sm text-white leading-relaxed">{post.content}</div>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1 text-xs text-gray-400">
                            <span>❤️</span>
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-gray-400">
                            <span>🔄</span>
                            <span>{Math.floor(post.likes * 0.3)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <div className="text-xs text-gray-400">
                  🚀 Your campaign is gaining momentum!
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveFeed;
