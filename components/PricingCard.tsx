import React from 'react';
import { Timer } from 'lucide-react';

interface PricingCardProps {
  originalPrice: string;
  discountedPrice: string;
  timeLeft: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ originalPrice, discountedPrice, timeLeft }) => {
  return (
    <div className="w-full bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6 relative overflow-hidden group">
      
      {/* Background pattern (subtle) */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60 pointer-events-none group-hover:scale-110 transition-transform duration-500" />

      <div className="relative flex flex-col items-start text-left">
        <div className="flex w-full justify-between items-start mb-1">
          <span className="text-blue-900 font-semibold text-sm tracking-wide">Yearly Premium</span>
          
          {/* Timer inside card */}
          <div className="flex items-center space-x-1.5 text-red-500 bg-white/60 px-2 py-0.5 rounded-md backdrop-blur-sm">
            <Timer size={12} className="animate-pulse" />
            <span className="text-[10px] font-bold tabular-nums">Ends in {timeLeft}</span>
          </div>
        </div>

        <div className="flex items-baseline space-x-2 mt-1">
          <span className="text-gray-400 text-sm font-medium line-through decoration-gray-400/80">
            {originalPrice}
          </span>
          <span className="text-3xl font-bold text-gray-900 tracking-tight">
            {discountedPrice}
          </span>
        </div>

        <div className="mt-2 flex items-center bg-green-100/80 px-2 py-1 rounded text-green-700 text-xs font-bold">
            Save 50% today!
        </div>
      </div>
    </div>
  );
};

export default PricingCard;