import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Copy, LogOut } from "lucide-react";
import { toast } from "sonner";

const Navbar = () => {
  const { publicKey, disconnect, connected, connecting, wallet } = useWallet();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Format wallet address for display
  const formatWalletAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  // Copy wallet address to clipboard
  const copyToClipboard = async () => {
    if (publicKey) {
      try {
        await navigator.clipboard.writeText(publicKey.toString());
        toast.success("Wallet address copied to clipboard!");
      } catch (err) {
        toast.error("Failed to copy address");
      }
    }
  };

  // Handle disconnect with proper error handling
  const handleDisconnect = async () => {
    try {
      await disconnect();
      setIsDropdownOpen(false);
      toast.success("Wallet disconnected");
    } catch (err) {
      console.error("Disconnect error:", err);
      toast.error("Failed to disconnect wallet");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🚀</span>
                </div>
                <span className="text-white font-bold text-xl bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Viral Launcher
                </span>
              </div>
            </div>
          </div>

          {/* Connect Wallet Section */}
          <div className="flex items-center">
            {!connected && !connecting ? (
              <div className="wallet-adapter-button-trigger">
                <WalletMultiButton className="!bg-gradient-to-r !from-pink-500 !to-blue-500 hover:!from-blue-500 hover:!to-pink-500 !text-white !font-bold !py-2 !px-6 !text-sm !rounded-full !border-0 neon-glow hover:!scale-105 !transition-all !duration-300" />
              </div>
            ) : connecting ? (
              <Button
                variant="outline"
                disabled
                className="bg-gradient-to-r from-pink-500/50 to-blue-500/50 text-white font-bold py-2 px-4 rounded-full border-0 opacity-75"
              >
                Connecting...
              </Button>
            ) : (
              <DropdownMenu
                open={isDropdownOpen}
                onOpenChange={setIsDropdownOpen}
              >
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-full border-0 neon-glow hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Badge className="bg-green-500 w-2 h-2 rounded-full p-0 mr-2" />
                    <span>
                      {formatWalletAddress(publicKey?.toString() || "")}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 bg-gray-800 border-gray-700 text-white"
                >
                  <DropdownMenuItem
                    onClick={copyToClipboard}
                    className="hover:bg-gray-700 cursor-pointer flex items-center space-x-2"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleDisconnect}
                    className="hover:bg-gray-700 cursor-pointer flex items-center space-x-2 text-red-400 hover:text-red-300"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Disconnect</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
