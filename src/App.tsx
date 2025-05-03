// In App.tsx
import './App.css'
import { useState, useEffect } from 'react'
import Entete from './components/entete'
import SecondPage from './sections/2nd-page'
import SetifPage from './sections/stif'
import Mainn from './sections/mainn'
import Navbar from './components/nav'
import OrganizationCommitteePage from './sections/sectionettes/com'

function App() {
  const [currentPage, setCurrentPage] = useState('first')
  const [isAnimating, setIsAnimating] = useState(false)
  const [startSecondPageAnimation, setStartSecondPageAnimation] = useState(false)
  const [startSetifAnimation, setStartSetifAnimation] = useState(false)

  const handlePageTransition = () => {
    setIsAnimating(true)
    
    // After animation completes, set the page
    setTimeout(() => {
      setCurrentPage('second')
      setStartSecondPageAnimation(true)
      setIsAnimating(false)
    }, 1000) // Match the animation duration
  }

  // Handler for Skip button on Setif page to go directly to Mainn page
  const handleSkipToMain = () => {
    setIsAnimating(true)
    
    setTimeout(() => {
      setCurrentPage('main')
      setIsAnimating(false)
    }, 1000) // Match the animation duration
  }

  // Auto-transition from second page to Setif page
  useEffect(() => {
    if (currentPage === 'second' && startSecondPageAnimation) {
      // Wait for the complete second page animation cycle before transitioning to Setif page
      // The second page animation takes about 30 seconds total (from the timers in 2nd-page.tsx)
      const setifTransitionTimer = setTimeout(() => {
        setIsAnimating(true)
        
        setTimeout(() => {
          setCurrentPage('setif')
          setIsAnimating(false)
          
          // Start Setif animations after a short delay to ensure the page is fully visible
          setTimeout(() => {
            setStartSetifAnimation(true)
          }, 500)
        }, 1000) // Match the animation duration
      }, 53000) // Allow full animation cycle plus a buffer
      
      return () => clearTimeout(setifTransitionTimer)
    }
  }, [currentPage, startSecondPageAnimation])

  // Add global styles to ensure no margins or padding anywhere
  const globalStyles = `
    html, body, #root {
      margin: 0;
      padding: 0;
      width: 100%;
    }
    
    /* Set scrolling behavior based on current page */
    ${currentPage === 'main' ? `
      html, body, #root {
        height: auto;
        overflow-y: auto;
        overflow-x: hidden;
      }
    ` : `
      html, body, #root {
        height: 100%;
        overflow: hidden;
      }
    `}
    
    /* Fix section heights to make them properly visible */
    #problematic, #topic, #objectives, #registration-fees, #scientific-committee, #organization-committee, #sponsors {
      min-height: 100vh;
      padding-top: 70px; /* Ensure content appears below fixed navbar */
    }
  `;

  return (
    <>
      {/* Add inline style tag to fix global padding/margin issues */}
      <style>{globalStyles}</style>
      
      <div className={currentPage === 'main' ? "w-full" : "absolute inset-0 w-full h-full"} style={{ margin: 0, padding: 0 }}>
        {/* First Page */}
        <div 
          className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
            isAnimating && currentPage === 'first' ? '-translate-x-full' : 
            currentPage !== 'first' ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{ margin: 0, padding: 0 }}
        >
          <Entete onSeeMore={handlePageTransition} />
        </div>
        
        {/* Second Page */}
        <div 
          className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
            currentPage === 'first' ? 'translate-x-full' : 
            isAnimating && currentPage === 'second' ? '-translate-x-full' : 
            currentPage !== 'second' ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{ margin: 0, padding: 0 }}
        >
          <SecondPage onAnimationComplete={OrganizationCommitteePage} startAnimation={startSecondPageAnimation} />
        </div>

        {/* Setif Page */}
        <div 
          className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
            currentPage === 'first' || currentPage === 'second' ? 'translate-x-full' : 
            isAnimating && currentPage === 'setif' ? '-translate-x-full' : 
            currentPage !== 'setif' ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{ margin: 0, padding: 0 }}
        >
          <SetifPage startAnimation={startSetifAnimation} onSkip={handleSkipToMain} />
        </div>

        {/* Main Page */}
        <div 
          className={`${currentPage === 'main' ? 'relative w-full' : 'absolute inset-0 w-full h-full'} transition-transform duration-1000 ease-in-out ${
            currentPage !== 'main' ? 'translate-x-full' : 'translate-x-0'
          }`}
          style={{ margin: 0, padding: 0 }}
        >
          {currentPage === 'main' && (
            <div className="bg-black w-full">
              <Navbar />
              <Mainn />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App