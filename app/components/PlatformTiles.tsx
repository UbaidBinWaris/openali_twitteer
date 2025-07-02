
import { useState } from "react";

const platforms = [
  { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-600', users: '450M' },
  { name: 'Reddit', icon: '🤖', color: 'from-orange-400 to-red-500', users: '430M' },
  { name: 'Discord', icon: '🎮', color: 'from-indigo-400 to-purple-600', users: '150M' },
  { name: 'Telegram', icon: '✈️', color: 'from-blue-300 to-blue-500', users: '700M' },
  { name: 'TikTok', icon: '🎵', color: 'from-pink-400 to-rose-500', users: '1B' },
  { name: 'YouTube', icon: '📺', color: 'from-red-400 to-red-600', users: '2.7B' },
  { name: 'Instagram', icon: '📸', color: 'from-purple-400 to-pink-500', users: '2B' },
  { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-800', users: '900M' }
];

const PlatformTiles = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Multi-Platform</span>
            <br />
            <span className="text-white">Domination 💪</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Launch your memecoin across all major platforms with a single click. Our rocket ship will take you to the moon! 🌙
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Rocket */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="text-8xl animate-rocket-float">🚀</div>
          </div>

          {/* Platform tiles arranged in a circle */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`
                  relative group cursor-pointer transition-all duration-500 
                  ${hoveredPlatform === platform.name ? 'scale-110 z-20' : 'scale-100'}
                  ${hoveredPlatform && hoveredPlatform !== platform.name ? 'scale-95 opacity-70' : ''}
                `}
                onMouseEnter={() => setHoveredPlatform(platform.name)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                <div className={`
                  bg-gradient-to-br ${platform.color} 
                  rounded-3xl p-6 card-glow 
                  group-hover:neon-glow group-hover:animate-platform-bounce
                  transform transition-all duration-300
                `}>
                  <div className="text-center">
                    <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {platform.icon}
                    </div>
                    <h3 className="font-bold text-white mb-2">{platform.name}</h3>
                    <p className="text-sm text-white/80">{platform.users} users</p>
                  </div>
                  
                  {/* Hover effect sparkles */}
                  {hoveredPlatform === platform.name && (
                    <>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-yellow rounded-full animate-sparkle"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-neon-pink rounded-full animate-sparkle" style={{ animationDelay: '0.3s' }}></div>
                      <div className="absolute top-1/2 -right-3 w-2 h-2 bg-neon-blue rounded-full animate-sparkle" style={{ animationDelay: '0.6s' }}></div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-black text-neon-pink">8.9B+</div>
              <div className="text-sm text-gray-400">Total Reach</div>
            </div>
            <div>
              <div className="text-3xl font-black text-neon-blue">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-black text-neon-yellow">24/7</div>
              <div className="text-sm text-gray-400">Auto-Posting</div>
            </div>
            <div>
              <div className="text-3xl font-black text-neon-green">10X</div>
              <div className="text-sm text-gray-400">Engagement Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformTiles;
