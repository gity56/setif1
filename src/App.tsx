// In App.tsx - Updated with always visible navigation
import './App.css'
import { useState, useEffect } from 'react'
import Entete from './components/entete'
import SecondPage from './sections/2nd-page'
import SetifPage from './sections/stif'
import Mainn from './sections/mainn'
import Navbar from './components/nav'
import AlgerianRepublicPage from './sections/alg' // Import the AlgerianRepublicPage component

function App() {
  const [currentPage, setCurrentPage] = useState('algerian') // Start with Algerian page
  const [isAnimating, setIsAnimating] = useState(false)
  const [startSecondPageAnimation, setStartSecondPageAnimation] = useState(false)
  const [startSetifAnimation, setStartSetifAnimation] = useState(false)
  const [activeSection, setActiveSection] = useState('problematic')
  
  // Track if setif page has been viewed or skipped
  const [, setSetifVisited] = useState(false)
  
  // Component mount/unmount control
  const [mountAlgerian, setMountAlgerian] = useState(true) // Add Algerian page mount state
  const [mountFirst, setMountFirst] = useState(false) // Start with first page not mounted
  const [mountSecond, setMountSecond] = useState(false)
  const [mountSetif, setMountSetif] = useState(false)
  const [mountMain, setMountMain] = useState(false)

  // Handle page transitions with proper mounting/unmounting
  useEffect(() => {
    if (currentPage === 'algerian') {
      setMountAlgerian(true)
      setMountFirst(false)
      setMountSecond(false)
      setMountSetif(false)
      setMountMain(false)
    } else if (currentPage === 'first') {
      setMountAlgerian(false)
      setMountFirst(true)
      setMountSecond(false)
      setMountSetif(false)
      setMountMain(false)
    } else if (currentPage === 'second') {
      setMountAlgerian(false)
      setMountFirst(true) // Keep first mounted during transition
      setMountSecond(true)
      setMountSetif(false)
      setMountMain(false)
      
      // After animation completes, unmount first page
      setTimeout(() => {
        setMountFirst(false)
      }, 1000)
    } else if (currentPage === 'setif') {
      setMountAlgerian(false)
      setMountFirst(false)
      setMountSecond(true) // Keep second mounted during transition
      setMountSetif(true)
      setMountMain(false)
      setSetifVisited(true)
      
      // After animation completes, unmount second page
      setTimeout(() => {
        setMountSecond(false)
      }, 1000)
    } else if (currentPage === 'main') {
      setMountAlgerian(false)
      setMountFirst(false)
      setMountSecond(false)
      
      // Only keep setif mounted during transition if we're coming from setif
      if (mountSetif) {
        setTimeout(() => {
          setMountSetif(false)
        }, 1000)
      } else {
        setMountSetif(false)
      }
      
      setMountMain(true)
    }
  }, [currentPage, mountSetif])

  // Handler for Skip button on Algerian Republic page
  const handleSkipToEntete = () => {
    setIsAnimating(true)
    
    setTimeout(() => {
      setCurrentPage('first')
      setIsAnimating(false)
    }, 1000)
  }

  // First page "See More" button handler
  const handlePageTransition = () => {
    setIsAnimating(true)
    
    setTimeout(() => {
      setCurrentPage('second')
      setStartSecondPageAnimation(true)
      setIsAnimating(false)
    }, 1000)
  }

  // Handler for SecondPage animation complete
  const handleSecondPageComplete = () => {
    setIsAnimating(true)
    
    setTimeout(() => {
      setCurrentPage('setif')
      setStartSetifAnimation(true)
      setIsAnimating(false)
    }, 1000)
  }

  // Handler for Skip button on second page
  const handleSkipToSetif = () => {
    setIsAnimating(true)
    
    setTimeout(() => {
      setCurrentPage('setif')
      setStartSetifAnimation(true)
      setIsAnimating(false)
    }, 1000)
  }

  // Handler for Skip button on Setif page
  const handleSkipToMain = () => {
    setIsAnimating(true)
    
    setTimeout(() => {
      setCurrentPage('main')
      setIsAnimating(false)
      // Reset the Setif animation state when leaving the page
      setStartSetifAnimation(false)
    }, 1000)
  }

  // Handle navigation to specific sections in the main page
  const handleNavigateToSection = (sectionId: string) => {
    // First ensure we're on the main page
    if (currentPage !== 'main') {
      setIsAnimating(true)
      
      setTimeout(() => {
        setCurrentPage('main')
        setActiveSection(sectionId) // Set the active section
        setIsAnimating(false)
      }, 1000)
    } else {
      // If already on main page, just update the active section
      setActiveSection(sectionId)
    }
  }

  // Add global styles
  const globalStyles = `
    html, body, #root {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
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
    
    /* Center content for all pages */
    .page-content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    
    /* Fix section heights for main content */
    #problematic, #topic, #objectives, #registration-fees, #scientific-committee, #organization-committee, #sponsors {
      min-height: 100vh;
      padding-top: 70px;
    }
    
    /* Custom background colors for sidebar */
    .bg-navy {
      background-color: #222831;
    }
    
    /* Custom hover color for sidebar items */
    .hover-custom:hover {
      background-color: #6B240C !important;
    }
  `;

  return (
    <>
      <style>{globalStyles}</style>
      
      {/* Navigation - Always visible across all pages */}
      <Navbar onNavigateToSection={handleNavigateToSection} />
      
      <div className={currentPage === 'main' ? "w-full" : "w-full h-full"}>
        {/* Algerian Republic Page - Only mounted when needed */}
        {mountAlgerian && (
          <div 
            className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
              isAnimating && currentPage === 'algerian' ? '-translate-x-full' : 
              currentPage !== 'algerian' ? '-translate-x-full' : 'translate-x-0'
            } page-content`}
          >
            <AlgerianRepublicPage onSkip={handleSkipToEntete} />
          </div>
        )}
        
        {/* First Page - Only mounted when needed */}
        {mountFirst && (
          <div 
            className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
              currentPage === 'algerian' ? 'translate-x-full' :
              isAnimating && currentPage === 'first' ? '-translate-x-full' : 
              currentPage !== 'first' ? '-translate-x-full' : 'translate-x-0'
            } page-content`}
          >
            <Entete onSeeMore={handlePageTransition} />
          </div>
        )}
        
        {/* Second Page - Only mounted when needed */}
        {mountSecond && (
          <div 
            className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
              currentPage === 'first' || currentPage === 'algerian' ? 'translate-x-full' : 
              isAnimating && currentPage === 'second' ? '-translate-x-full' : 
              currentPage !== 'second' ? '-translate-x-full' : 'translate-x-0'
            }`}
          >
            <SecondPage 
              onAnimationComplete={handleSecondPageComplete} 
              startAnimation={startSecondPageAnimation} 
              onSkipToSetif={handleSkipToSetif}
            />
          </div>
        )}

        {/* Setif Page - Only mounted when needed */}
        {mountSetif && (
          <div 
            className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
              currentPage === 'first' || currentPage === 'second' || currentPage === 'algerian' ? 'translate-x-full' : 
              isAnimating && currentPage === 'setif' ? '-translate-x-full' : 
              currentPage !== 'setif' ? '-translate-x-full' : 'translate-x-0'
            }`}
          >
            <SetifPage startAnimation={startSetifAnimation} onSkip={handleSkipToMain} />
          </div>
        )}

        {/* Main Page - Only mounted when needed */}
        {mountMain && (
          <div 
            className={`${currentPage === 'main' ? 'relative w-full' : 'absolute inset-0 w-full h-full'} transition-transform duration-1000 ease-in-out ${
              currentPage !== 'main' ? 'translate-x-full' : 'translate-x-0'
            } z-10`}
          >
            <div className="bg-black w-full">
              {/* Navbar moved to be always visible at the application level */}
              <Mainn initialActiveSection={activeSection} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App