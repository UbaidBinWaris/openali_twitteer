
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    title: "Connect Wallet/Token",
    description: "Link your wallet and input your memecoin details",
    icon: "🔗",
    color: "from-purple-400 to-purple-600",
    details: "Connect MetaMask, Phantom, or any Web3 wallet. Input your token contract address and we'll fetch all the details automatically!"
  },
  {
    id: 2,
    title: "Select Platforms",
    description: "Choose where you want your memecoin to go viral",
    icon: "🎯",
    color: "from-blue-400 to-blue-600",
    details: "Pick from Twitter, Reddit, Discord, Telegram, TikTok, and more. Each platform has tailored content strategies!"
  },
  {
    id: 3,
    title: "Set Budget",
    description: "Adjust your marketing spend with our fun slider",
    icon: "💰",
    color: "from-green-400 to-green-600",
    details: "Start from $50 to $50,000+. Our AI optimizes spending across platforms for maximum viral potential!"
  },
  {
    id: 4,
    title: "Launch Campaign",
    description: "Watch your memecoin rocket to the moon!",
    icon: "🚀",
    color: "from-pink-400 to-pink-600",
    details: "Sit back and watch the magic happen! Our system posts, engages, and tracks performance 24/7."
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunch = () => {
    setIsLaunching(true);
    setTimeout(() => setIsLaunching(false), 3000);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">How It Works</span>
            <br />
            <span className="text-white">Easy as 1-2-3-🚀</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From zero to hero in 4 simple steps. No technical knowledge required - just pure memecoin magic!
          </p>
        </div>

        {/* Horizontal stepper */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div 
                    className={`
                      w-16 h-16 rounded-full bg-gradient-to-br ${step.color} 
                      flex items-center justify-center text-2xl cursor-pointer
                      transform transition-all duration-300 border-4
                      ${activeStep === step.id 
                        ? 'scale-125 border-white neon-glow' 
                        : activeStep > step.id 
                          ? 'border-green-400' 
                          : 'border-gray-600 scale-90 opacity-60'
                      }
                    `}
                    onClick={() => setActiveStep(step.id)}
                  >
                    {activeStep > step.id ? '✅' : step.icon}
                  </div>
                  <div className="text-sm font-semibold text-white mt-2 text-center">
                    Step {step.id}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`
                    flex-1 h-1 mx-4 rounded-full transition-all duration-500
                    ${activeStep > step.id ? 'bg-green-400' : 'bg-gray-600'}
                  `}></div>
                )}
              </div>
            ))}
          </div>

          {/* Step details */}
          <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-gray-600/50 p-8 card-glow">
            <div className="text-center">
              <div className={`
                inline-flex items-center justify-center w-20 h-20 rounded-full 
                bg-gradient-to-br ${steps[activeStep - 1].color} text-4xl mb-6
                animate-platform-bounce
              `}>
                {steps[activeStep - 1].icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {steps[activeStep - 1].title}
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                {steps[activeStep - 1].description}
              </p>
              <div className="max-w-2xl mx-auto text-gray-400 mb-8">
                {steps[activeStep - 1].details}
              </div>

              {/* Interactive elements based on step */}
              {activeStep === 1 && (
                <div className="bg-gray-800/50 rounded-xl p-6 max-w-md mx-auto">
                  <div className="text-sm text-gray-300 mb-2">Wallet Address:</div>
                  <div className="bg-gray-700 rounded-lg p-3 font-mono text-sm text-green-400">
                    0x742d35...b3f8a9c2
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  {['Twitter', 'Reddit', 'TikTok'].map(platform => (
                    <div key={platform} className="bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 rounded-xl p-4 border border-gray-600">
                      <div className="text-2xl mb-2">✅</div>
                      <div className="text-sm text-white">{platform}</div>
                    </div>
                  ))}
                </div>
              )}

              {activeStep === 3 && (
                <div className="max-w-md mx-auto">
                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <div className="text-2xl font-bold text-neon-green mb-2">$1,337</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-neon-pink to-neon-blue h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>$50</span>
                      <span>$50K</span>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="text-center">
                  <Button 
                    onClick={handleLaunch}
                    disabled={isLaunching}
                    className={`
                      bg-gradient-to-r from-neon-pink to-neon-blue 
                      hover:from-neon-blue hover:to-neon-pink 
                      text-white font-bold py-4 px-8 text-lg rounded-full 
                      border-0 neon-glow transition-all duration-300
                      ${isLaunching ? 'animate-rocket-float scale-110' : 'hover:scale-105'}
                    `}
                  >
                    {isLaunching ? '🚀 LAUNCHING... 🚀' : 'LAUNCH TO THE MOON! 🚀'}
                  </Button>
                  {isLaunching && (
                    <div className="mt-6 text-neon-yellow animate-sparkle">
                      ✨ Your memecoin is going viral! ✨
                    </div>
                  )}
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center space-x-4">
          <Button 
            variant="outline" 
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
            className="border-gray-600 text-gray-300 hover:text-white"
          >
            ← Previous
          </Button>
          <Button 
            onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
            disabled={activeStep === 4}
            className="bg-gradient-to-r from-neon-pink to-neon-blue text-white border-0"
          >
            Next →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
