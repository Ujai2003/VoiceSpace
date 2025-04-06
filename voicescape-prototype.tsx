import React, { useState } from 'react';

const VoiceScapePrototype = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(18);
  const [voiceScapeEnabled, setVoiceScapeEnabled] = useState(true);
  const [intensity, setIntensity] = useState(70);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleVoiceScape = () => {
    setVoiceScapeEnabled(!voiceScapeEnabled);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-lg w-full max-w-md">
      {/* App Header */}
      <div className="flex justify-between items-center w-full mb-6">
        <div className="flex items-center">
          <div className="bg-purple-600 text-white font-bold rounded-lg p-2">
            Kuku FM
          </div>
        </div>
        <div className="text-gray-500 text-sm">Premium</div>
      </div>
      
      {/* Cover Art with VoiceScape Visualization */}
      <div className="relative w-full h-64 mb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-800 to-blue-900 rounded-lg overflow-hidden">
          {/* Dynamic visualization elements */}
          {voiceScapeEnabled && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute w-32 h-32 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
              <div className="absolute w-48 h-48 rounded-full bg-purple-500 opacity-10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute w-64 h-64 rounded-full bg-indigo-500 opacity-5 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          )}
        </div>
        
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold">The Last Storyteller</h2>
          <p className="text-sm opacity-80">by Radhika Sharma</p>
        </div>
        
        {/* VoiceScape Badge */}
        {voiceScapeEnabled && (
          <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs text-white font-medium">VoiceScape</span>
          </div>
        )}
        
        {/* Environment indicator */}
        {voiceScapeEnabled && (
          <div className="absolute top-4 left-4 bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs text-white font-medium">Evening Ambience</span>
          </div>
        )}
      </div>
      
      {/* Player Controls */}
      <div className="w-full mb-6">
        {/* Progress Bar */}
        <div className="flex items-center mb-2">
          <span className="text-xs text-gray-600 mr-2">18:32</span>
          <div className="flex-1 bg-gray-300 h-1 rounded-full overflow-hidden">
            <div className="bg-purple-600 h-full rounded-full" style={{width: `${(currentTime/45)*100}%`}}></div>
          </div>
          <span className="text-xs text-gray-600 ml-2">45:10</span>
        </div>
        
        {/* Control Buttons */}
        <div className="flex justify-between items-center">
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
            </svg>
          </button>
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="bg-purple-600 h-12 w-12 rounded-full flex items-center justify-center shadow-lg"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* VoiceScape Controls */}
      <div className="w-full bg-white p-4 rounded-lg shadow mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className={`w-10 h-6 rounded-full p-1 flex ${voiceScapeEnabled ? 'bg-purple-600' : 'bg-gray-300'}`} onClick={toggleVoiceScape}>
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${voiceScapeEnabled ? 'translate-x-4' : 'translate-x-0'}`}></div>
            </div>
            <span className="ml-2 text-gray-800 font-medium">VoiceScape</span>
          </div>
          <div className="text-sm text-purple-600 font-medium">Customize</div>
        </div>
        
        {voiceScapeEnabled && (
          <>
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-500">Ambience Intensity</span>
                <span className="text-xs font-bold text-gray-700">{intensity}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={intensity} 
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600" 
              />
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-purple-100 p-2 rounded-lg flex flex-col items-center">
                <div className="w-6 h-6 flex items-center justify-center mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <span className="text-xs text-purple-900">Forest</span>
              </div>
              <div className="bg-gray-100 p-2 rounded-lg flex flex-col items-center opacity-60">
                <div className="w-6 h-6 flex items-center justify-center mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500">Rain</span>
              </div>
              <div className="bg-gray-100 p-2 rounded-lg flex flex-col items-center opacity-60">
                <div className="w-6 h-6 flex items-center justify-center mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500">Cafe</span>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Next Up in Queue */}
      <div className="w-full bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-800 mb-3">Up Next</h3>
        <div className="flex items-center mb-3">
          <div className="w-12 h-12 bg-blue-900 rounded flex-shrink-0 mr-3"></div>
          <div className="flex-1">
            <h4 className="text-sm font-medium">Midnight Tales</h4>
            <p className="text-xs text-gray-500">Fantasy • 32 min</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-green-900 rounded flex-shrink-0 mr-3"></div>
          <div className="flex-1">
            <h4 className="text-sm font-medium">Deep Space Meditation</h4>
            <p className="text-xs text-gray-500">Wellness • 45 min</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceScapePrototype;
