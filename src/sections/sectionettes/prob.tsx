import '../../index.css'

const ProblematicPage = () => {
  return (
    <div className="min-h-screen mt-10 font1 text-[#eeeeee] font-sans overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl">✧</div>
        <div className="absolute bottom-10 right-10 text-6xl">✧</div>
        <div className="absolute top-1/4 left-1/3 text-8xl">❖</div>
        <div className="absolute bottom-1/4 right-1/3 text-8xl">❖</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-10">⟐</div>
      </div>
      
      <div className="container mx-auto px-8 py-10 flex flex-col md:flex-row items-center">
        {/* Content section - slightly reduced width to accommodate larger image */}
        <div className="w-full md:w-2/5 pr-0 md:pr-0 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-8 relative inline-block">
            <span className="relative">
              {/* Decorative elements for title */}
              <span className="absolute -left-6 -top-6 text-sm text-[#d4af37] opacity-70">✦</span>
              <span className="absolute -right-6 -top-6 text-sm text-[#d4af37] opacity-70">✦</span>
              <span className="absolute -left-6 -bottom-6 text-sm text-[#d4af37] opacity-70">✦</span>
              <span className="absolute -right-6 -bottom-6 text-sm text-[#d4af37] opacity-70">✦</span>
              PROBLEMATIC
            </span>
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              <strong>(ICICT 2025)</strong> cordially invites you to participate at our upcoming joint event scheduled for Nov. 18-19th, 2025, Setif, Algeria.
            </p>
            <p>
              The First International Congress on Chemistry, Technology, and Materials Innovation is a unique platform designed to bring together researchers, engineers, and professionals to explore advancements in chemistry and materials science. Topics include integrating sustainable technologies into industry, such as green chemistry and energy optimization, as well as the development of new materials for environmental and energy applications.
            </p>
            <p>
              Artificial intelligence and mathematical modeling play a central role in predicting material properties and improving process efficiency. This congress serves as a catalyst for innovation to address global challenges in sustainability and energy transition.
            </p>
          </div>
        </div>
        
        {/* Image section - significantly increased width and added drop shadow */}
        <div className="w-full md:w-3/5 flex justify-center items-center">
          <div className="relative w-[350px] md:w-[550px] lg:w-[650px] xl:w-[700px]">
            <img 
              src="/p000.png" 
              alt="ICICTM2025 Conference" 
              className="w-full h-auto relative z-10 hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
            />
            {/* Optional decorative element behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent -z-10 blur-xl rounded-full scale-90"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblematicPage;