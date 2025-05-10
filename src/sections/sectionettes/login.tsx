import { useState, useEffect, useRef } from 'react';
import '../../index.css';

export default function SubmissionPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formFadeIn, setFormFadeIn] = useState(false);
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Captcha states
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0, userAnswer: '' });
  
  // Form states
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  
  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    email: '',
    affiliation: '',
    country: '',
    password: '',
    confirmPassword: '',
  });
  
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  
  // Generate captcha on component mount and when refreshed
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({
      num1,
      num2,
      answer: num1 + num2,
      userAnswer: ''
    });
  };

  useEffect(() => {
    // Set up an intersection observer to detect when this component is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Add a slight delay for the form animation
        setTimeout(() => {
          setFormFadeIn(true);
        }, 500);
        
        // Generate captcha when component becomes visible
        generateCaptcha();
      }
    }, { threshold: 0.2 });
    
    // Get the current element to observe
    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRegisterForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptcha(prev => ({ ...prev, userAnswer: e.target.value }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    // Simple validation
    if (!loginForm.email || !loginForm.password) {
      setFormError('Please fill in all fields');
      return;
    }
    
    // Mock login success - in a real app, you'd call an API here
    setFormSuccess('Login successful! Redirecting to submission portal...');
    
    // Simulate redirect after login
    setTimeout(() => {
      window.location.href = '/submission-portal'; // Replace with your actual submission portal URL
    }, 2000);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    // Simple validation
    if (!registerForm.fullName || !registerForm.email || !registerForm.password || !registerForm.confirmPassword) {
      setFormError('Please fill in all required fields');
      return;
    }
    
    if (registerForm.password !== registerForm.confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }
    
    // Validate captcha
    if (parseInt(captcha.userAnswer) !== captcha.answer) {
      setFormError('Incorrect captcha answer. Please try again.');
      generateCaptcha();
      return;
    }
    
    // Mock registration success - in a real app, you'd call an API here
    setFormSuccess('Registration successful! You can now log in.');
    
    // Switch to login tab after successful registration
    setTimeout(() => {
      setActiveTab('login');
      setFormSuccess('');
    }, 2000);
  };

  // List of countries for the dropdown
  const countries = [
    { code: 'dz', name: 'Algeria' },
    { code: 'eg', name: 'Egypt' },
    { code: 'fr', name: 'France' },
    { code: 'ro', name: 'Romania' },
    { code: 'sa', name: 'Saudi Arabia' },
    { code: 'tn', name: 'Tunisia' },
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'de', name: 'Germany' },
    { code: 'it', name: 'Italy' },
    // Add more countries as needed
  ];
  
  const handleSubmissionGuide = () => {
    window.open('https://docs.google.com/document/d/1W6r1eHA2Z6FJiZ-Hudk8xK9YBL9JtIUe/edit?usp=sharing&ouid=100010354955434595196&rtpof=true&sd=true', '_blank'); // Replace with your actual guide URL
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-8xl">✧</div>
        <div className="absolute bottom-1/4 right-1/4 text-8xl">✧</div>
        <div className="absolute top-3/4 left-2/3 text-6xl">❖</div>
        <div className="absolute bottom-2/3 right-1/3 text-6xl">❖</div>
      </div>
  
      <div
        ref={sectionRef}
        className="flex flex-col font1 items-center justify-center w-full max-w-4xl px-4 z-10"
      >
        <h1
          className={`text-4xl md:text-6xl font-bold mb-12 text-yellow-500 transform transition-all duration-1000 ease-out w-full text-center ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          ABSTRACT SUBMISSION
        </h1>
  
        <div
          className={`w-full max-w-2xl transform transition-all duration-1000 ease-out ${
            formFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Tab navigation */}
          <div className="flex mb-6">
            <button
              className={`flex-1 py-3 text-center font-bold transition-all duration-300 ${
                activeTab === 'login'
                  ? 'bg-yellow-500/20 text-yellow-500 border-b-2 border-yellow-500'
                  : 'bg-transparent text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('login')}
            >
              LOGIN
            </button>
            <button
              className={`flex-1 py-3 text-center font-bold transition-all duration-300 ${
                activeTab === 'register'
                  ? 'bg-yellow-500/20 text-yellow-500 border-b-2 border-yellow-500'
                  : 'bg-transparent text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('register')}
            >
              REGISTER
            </button>
          </div>
  
          {/* Login Form */}
          {activeTab === 'login' && (
            <div className="rounded-xl border border-yellow-500/30 p-8 backdrop-blur-sm bg-gradient-to-br from-blue-900/30 to-blue-700/10"
              style={{ boxShadow: '0 10px 40px rgba(212, 175, 55, 0.15)' }}
            >
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-yellow-500 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={loginForm.email}
                    onChange={handleLoginChange}
                    className="w-full p-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white"
                    placeholder="Enter your email"
                  />
                </div>
  
                <div className="mb-6">
                  <label htmlFor="password" className="block text-yellow-500 mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    className="w-full p-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white"
                    placeholder="Enter your password"
                  />
                </div>
  
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-gray-300 text-sm">Remember me</label>
                  </div>
                  <a href="#" className="text-yellow-500 text-sm hover:underline">Forgot Password?</a>
                </div>
  
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 py-3 rounded-lg text-black font-bold hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105 duration-300"
                >
                  LOGIN
                </button>
  
                <div className="mt-4 text-center text-gray-400">
                  Don't have an account?{' '}
                  <button type="button" onClick={() => setActiveTab('register')} className="text-yellow-500 hover:underline">
                    Register here
                  </button>
                </div>
              </form>
            </div>
          )}
  
          {/* Registration Form */}
          {activeTab === 'register' && (
            <div className="rounded-xl border border-yellow-500/30 p-8 backdrop-blur-sm bg-gradient-to-br from-purple-900/30 to-purple-700/10"
              style={{ boxShadow: '0 10px 40px rgba(212, 175, 55, 0.15)' }}
            >
              <form onSubmit={handleRegisterSubmit}>
                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-yellow-500 mb-2">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" value={registerForm.fullName} onChange={handleRegisterChange}
                    className="w-full p-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white" required />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="email" className="block text-yellow-500 mb-2">Email Address *</label>
                  <input type="email" id="reg-email" name="email" value={registerForm.email} onChange={handleRegisterChange}
                    className="w-full p-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white" required />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="affiliation" className="block text-yellow-500 mb-2">Affiliation</label>
                  <input type="text" id="affiliation" name="affiliation" value={registerForm.affiliation} onChange={handleRegisterChange}
                    className="w-full p-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white" />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="country" className="block text-yellow-500 mb-2">Country</label>
                  <select id="country" name="country" value={registerForm.country} onChange={handleRegisterChange}
                    className="w-full p-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white">
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>{country.name}</option>
                    ))}
                  </select>
                </div>
  
                <div className="mb-4">
                  <label htmlFor="reg-password" className="block text-yellow-500 mb-2">Password *</label>
                  <input type="password" id="reg-password" name="password" value={registerForm.password} onChange={handleRegisterChange}
                    className="w-full p-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white" required />
                </div>
  
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-yellow-500 mb-2">Confirm Password *</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" value={registerForm.confirmPassword} onChange={handleRegisterChange}
                    className="w-full p-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white" required />
                </div>
  
                <div className="mb-6">
                  <label className="block text-yellow-500 mb-2">Security Check *</label>
                  <div className="flex items-center bg-yellow-900/20 p-3 rounded-lg border border-yellow-500/30">
                    <span className="text-white text-xl font-bold">{captcha.num1} + {captcha.num2} = ?</span>
                    <input type="text" value={captcha.userAnswer} onChange={handleCaptchaChange}
                      className="ml-4 w-16 p-2 bg-black/70 border border-yellow-500/40 rounded-lg text-white text-center"
                      placeholder="?" required />
                    <button type="button" onClick={generateCaptcha}
                      className="ml-3 bg-yellow-500/20 p-2 rounded-lg hover:bg-yellow-500/30" title="Refresh Captcha">
                      <span className="text-xl">🔄</span>
                    </button>
                  </div>
                  <p className="text-gray-400 text-xs mt-2">* Solve the math problem to verify you're human</p>
                </div>
  
                <button type="submit"
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 py-3 rounded-lg text-black font-bold hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105 duration-300">
                  REGISTER
                </button>
  
                <div className="mt-4 text-center text-gray-400">
                  Already have an account?{' '}
                  <button type="button" onClick={() => setActiveTab('login')} className="text-yellow-500 hover:underline">
                    Login here
                  </button>
                </div>
              </form>
            </div>
          )}
  
          {formError && (
            <div className="mt-4 p-3 bg-red-900/50 border border-red-500/50 rounded-lg text-red-200 text-center">
              {formError}
            </div>
          )}
          {formSuccess && (
            <div className="mt-4 p-3 bg-green-900/50 border border-green-500/50 rounded-lg text-green-200 text-center">
              {formSuccess}
            </div>
          )}
  
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleSubmissionGuide}
              className="flex items-center bg-gradient-to-r from-blue-600 to-blue-500 py-3 px-6 rounded-lg text-white font-bold hover:from-blue-500 hover:to-blue-400 transition-all transform hover:scale-105 duration-300"
            >
              <span className="mr-2">📋</span>
              SUBMISSION GUIDE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
}