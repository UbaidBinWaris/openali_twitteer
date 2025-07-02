import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";
import GenerateButton from "./GenerateButton";
import Dashboard from "./Dashboard";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-pink-500 rounded-full animate-sparkle"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-blue-500 rounded-full animate-sparkle"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-sparkle"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-60 left-1/3 w-1 h-1 bg-purple-500 rounded-full animate-sparkle"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="animate-slide-up mb-6 opacity-100">
          <Badge className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 text-sm font-semibold rounded-full border-0 neon-glow">
            🚀 The Ultimate Memecoin Launcher
          </Badge>
        </div>

        {/* Main Headline */}
        <div
          className="animate-slide-up mb-6 opacity-100"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
            <span className="text-gradient">Launch Your</span>
            <br />
            <span className="text-white">Memecoin Into</span>
            <br />
            <span className="text-gradient">Orbit 🚀</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div
          className="animate-slide-up mb-8 opacity-100"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get featured on{" "}
            <span className="text-blue-500 font-bold">Twitter</span>,{" "}
            <span className="text-pink-500 font-bold">Reddit</span>,{" "}
            <span className="text-yellow-500 font-bold">Discord</span>,{" "}
            <span className="text-purple-500 font-bold">Telegram</span> &{" "}
            <span className="text-green-500 font-bold">TikTok</span> in one
            dashboard.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="animate-slide-up mb-12 opacity-100 flex flex-wrap gap-4 justify-center"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 text-white font-bold py-4 px-8 text-lg rounded-full border-0 neon-glow hover:scale-105 transition-all duration-300 animate-glow-pulse"
          >
            Start Your Blitz ⚡
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-gradient-to-r from-pink-500 to-blue-500 text-white hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-blue-500/20 font-bold py-4 px-8 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            View Whitepaper 📄
          </Button>
        </div>

        <div className="flex justify-between mx-[440px]">
          {/* Generate and Dashboard button */}
          <GenerateButton to="/Search" name="Generate your tweet" />
          <GenerateButton to="TweetDashboard" name="Go to Tweet Dashboard" />
        </div>

        {/* Dashboard Preview */}
        <div
          className="animate-slide-up opacity-100"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-gray-900/50 to-gray-800/30 rounded-3xl p-8 card-glow border border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
              {/* Platform tabs */}
              {[
                "Twitter",
                "Reddit",
                "Discord",
                "Telegram",
                "TikTok",
                "YouTube",
              ].map((platform, index) => (
                <div
                  key={platform}
                  className="bg-gray-800/50 rounded-xl p-3 text-center hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-blue-500/20 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mx-auto mb-2 group-hover:animate-platform-bounce"></div>
                  <span className="text-xs font-semibold text-gray-300 group-hover:text-white">
                    {platform}
                  </span>
                </div>
              ))}
            </div>

            {/* Engagement counters */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">12.5K</div>
                <div className="text-sm text-gray-400">❤️ Likes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">3.2K</div>
                <div className="text-sm text-gray-400">🔄 Retweets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">8.7K</div>
                <div className="text-sm text-gray-400">💬 Comments</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating rocket */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="text-6xl animate-rocket-float">🚀</div>
      </div>
    </section>
  );
};

export default Hero;
