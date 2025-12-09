import React, { useEffect, useState } from 'react';
import { Timer, X, Check } from 'lucide-react';
import PricingCard from './PricingCard';
import Button from './Button';

interface ExitOfferModalProps {
  onClose: () => void;
  onUpgrade: () => void;
}

const ExitOfferModal: React.FC<ExitOfferModalProps> = ({ onClose, onUpgrade }) => {
  // 10 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
      {/* Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-sm bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 transform transition-all">
        
        {/* Decorative top shape/glow (optional aesthetic touch) */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />

        <div className="relative p-6 sm:p-8 flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="bg-red-500 text-white text-[10px] tracking-widest font-extrabold px-3 py-1.5 rounded-full mb-5 shadow-sm uppercase">
            Limited Time Offer
          </div>

          {/* Headlines */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
            Premium Listening Offer
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-[260px]">
            Unlock all MusicPro Premium features for a special discount. Offer valid only for the next 10 minutes!
          </p>

          {/* Pricing Card */}
          <PricingCard 
            timeLeft={formatTime(timeLeft)} 
            originalPrice="₹1999" 
            discountedPrice="₹999" 
          />

          {/* Features List (Mini) */}
          <ul className="text-left w-full mb-6 space-y-2 pl-2">
            {[
              "Ad-free listening",
              "High fidelity audio",
              "Offline playback"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center text-xs text-gray-500 font-medium">
                <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 text-blue-600">
                  <Check size={10} strokeWidth={4} />
                </div>
                {feature}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="w-full space-y-3">
            <Button onClick={onUpgrade} variant="primary" className="w-full shadow-lg shadow-blue-500/20">
              Upgrade to MusicPro Premium
            </Button>
            
            <button 
              onClick={onClose}
              className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors py-2"
            >
              No, thanks
            </button>
          </div>
        </div>

        {/* Close Icon Absolute Top Right */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-300 hover:text-gray-500 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default ExitOfferModal;