import React, { useState } from 'react';
import ExitOfferModal from './components/ExitOfferModal';
import MusicPlayerBackground from './components/MusicPlayerBackground';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    // In a real app, you might trigger an analytics event here
    console.log("Offer dismissed");
  };

  const handleUpgrade = () => {
    // In a real app, this would redirect to checkout
    console.log("Upgrade clicked");
    alert("Redirecting to payment gateway...");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background simulating the app state behind the modal */}
      <MusicPlayerBackground />

      {/* The Exit Offer Modal */}
      {showModal && (
        <ExitOfferModal 
          onClose={handleClose} 
          onUpgrade={handleUpgrade} 
        />
      )}
      
      {!showModal && (
        <div className="absolute bottom-10 left-0 right-0 text-center z-10 animate-pulse">
          <button 
            onClick={() => setShowModal(true)}
            className="text-sm text-gray-400 underline"
          >
            Reset Demo (Show Popup)
          </button>
        </div>
      )}
    </div>
  );
};

export default App;