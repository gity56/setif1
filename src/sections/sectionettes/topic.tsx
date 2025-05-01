import { useState, useEffect } from 'react';
import '../../index.css'

export default function TopicsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="flex font1 -mt-20 flex-col items-center justify-center min-h-screen bg-black p-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 items-center">
        <div 
          className={`md:w-1/2 transform transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-yellow-500">
            TOPICS
          </h1>
          
          <div className="text-gray-200 text-xl md:text-2xl space-y-6">
            <div className="flex items-start">
              <span className="mr-2">1.</span>
              <p>Sustainable Chemistry and Engineering in Industry</p>
            </div>
            
            <div className="flex items-start">
              <span className="mr-2">2.</span>
              <p>Green Chemistry and Energy Storage Innovation</p>
            </div>
            
            <div className="flex items-start">
              <span className="mr-2">3.</span>
              <p>Artificial Intelligence for Environmental Protection</p>
            </div>
            
            <div className="flex items-start">
              <span className="mr-2">4.</span>
              <p>Materials Science and Technologies</p>
            </div>
          </div>
        </div>
        
        <div 
          className={`md:w-1/2 transform transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <img 
            src="/p001.png" 
            alt="Scientific research illustration" 
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
}