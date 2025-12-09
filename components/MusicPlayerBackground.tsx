import React from 'react';
import { Play, SkipForward, SkipBack, Heart, Shuffle, Repeat, Volume2, Menu } from 'lucide-react';

const MusicPlayerBackground: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-b from-slate-900 via-slate-900 to-black select-none pointer-events-none opacity-50 blur-[2px] scale-[0.98]">
      {/* Header */}
      <div className="px-6 py-12 flex justify-between items-center text-gray-400">
        <div className="w-8 h-1 rounded bg-gray-600/50"></div>
        <div className="text-xs font-semibold tracking-widest uppercase text-gray-500">Playing from Album</div>
        <Menu size={20} />
      </div>

      {/* Album Art Area */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full aspect-square max-w-xs bg-gradient-to-br from-indigo-500 to-purple-800 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
             <img src="https://picsum.photos/400/400" alt="Album Cover" className="object-cover w-full h-full opacity-80 mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>

      {/* Player Controls */}
      <div className="px-8 pb-12 pt-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Midnight City</h1>
            <p className="text-gray-400 font-medium">M83 • Hurry Up, We're Dreaming</p>
          </div>
          <Heart className="text-green-500 fill-green-500" size={24} />
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-800 rounded-full mb-2">
          <div className="w-1/3 h-full bg-white rounded-full relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-gray-500 font-medium mb-8">
          <span>1:24</span>
          <span>4:03</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center text-white mb-8">
          <Shuffle size={20} className="text-gray-400" />
          <SkipBack size={28} className="fill-white" />
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
            <Play size={28} className="fill-black ml-1" />
          </div>
          <SkipForward size={28} className="fill-white" />
          <Repeat size={20} className="text-gray-400" />
        </div>
        
        <div className="flex items-center space-x-3 text-gray-500">
             <Volume2 size={16} />
             <div className="h-1 flex-1 bg-gray-800 rounded-full overflow-hidden">
                 <div className="w-3/4 h-full bg-gray-500"></div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerBackground;