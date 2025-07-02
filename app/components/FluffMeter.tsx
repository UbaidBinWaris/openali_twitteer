
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

const FluffMeter = () => {
  const [chonkIntensity, setChonkIntensity] = useState([50]);
  const [hypeCharge, setHypeCharge] = useState([75]);
  const [chaosLevel, setChaosLevel] = useState([30]);

  const getChonkLabel = (value: number) => {
    if (value < 20) return "Smol Bean 🥺";
    if (value < 40) return "Medium Chonk 😊";
    if (value < 60) return "Big Chonk 😎";
    if (value < 80) return "Mega Chonk 🤩";
    return "ABSOLUTE UNIT 🔥";
  };

  const getHypeLabel = (value: number) => {
    if (value < 20) return "Chill Vibes 😌";
    if (value < 40) return "Getting Excited 😄";
    if (value < 60) return "HYPED AF 🚀";
    if (value < 80) return "TO THE MOON 🌙";
    return "DIAMOND HANDS 💎";
  };

  const getChaosLabel = (value: number) => {
    if (value < 20) return "Zen Mode 🧘";
    if (value < 40) return "Mild Chaos 😈";
    if (value < 60) return "Chaotic Energy ⚡";
    if (value < 80) return "Pure Madness 🤪";
    return "ANARCHY MODE 💀";
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Fluff Meter</span>
            <br />
            <span className="text-white">Control Panel 🎛️</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fine-tune your memecoin's personality! Adjust these sliders to control how your posts will sound across all platforms.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Chonk Intensity */}
          <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 p-8 card-glow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">🐱 Chonk Intensity</h3>
                <p className="text-gray-300">How chunky should your meme energy be?</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-neon-pink">{chonkIntensity[0]}%</div>
                <div className="text-sm text-neon-pink">{getChonkLabel(chonkIntensity[0])}</div>
              </div>
            </div>
            <Slider
              value={chonkIntensity}
              onValueChange={setChonkIntensity}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>Smol</span>
              <span>ABSOLUTE UNIT</span>
            </div>
          </Card>

          {/* Hype Charge */}
          <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30 p-8 card-glow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">⚡ Hype Charge</h3>
                <p className="text-gray-300">How much excitement should we inject?</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-neon-blue">{hypeCharge[0]}%</div>
                <div className="text-sm text-neon-blue">{getHypeLabel(hypeCharge[0])}</div>
              </div>
            </div>
            <Slider
              value={hypeCharge}
              onValueChange={setHypeCharge}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>Chill</span>
              <span>DIAMOND HANDS</span>
            </div>
          </Card>

          {/* Chaos Level */}
          <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/30 p-8 card-glow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">🌪️ Chaos Level</h3>
                <p className="text-gray-300">How unhinged should we get?</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-neon-yellow">{chaosLevel[0]}%</div>
                <div className="text-sm text-neon-yellow">{getChaosLabel(chaosLevel[0])}</div>
              </div>
            </div>
            <Slider
              value={chaosLevel}
              onValueChange={setChaosLevel}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>Zen</span>
              <span>ANARCHY</span>
            </div>
          </Card>
        </div>

        {/* Preview */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-600/50 p-6 card-glow">
            <h4 className="text-lg font-bold text-white mb-4">🔮 Preview Your Vibe</h4>
            <div className="bg-gray-800/50 rounded-xl p-4 text-left max-w-md mx-auto">
              <div className="text-sm text-gray-300 mb-2">Sample post:</div>
              <div className="text-white">
                {chonkIntensity[0] > 60 && "🚀 "}
                {hypeCharge[0] > 70 ? "LFG! " : hypeCharge[0] > 40 ? "Hey everyone! " : "Check this out "}
                Our memecoin is 
                {chaosLevel[0] > 60 ? " ABSOLUTELY INSANE " : chaosLevel[0] > 30 ? " pretty wild " : " really cool "}
                {hypeCharge[0] > 80 && "💎🙌 TO THE MOON! "}
                {chonkIntensity[0] > 80 && "🔥🔥🔥"}
                {chaosLevel[0] > 80 && " AAAAAAHHHHHHH! 💀"}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FluffMeter;
