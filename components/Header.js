import React, { useState, useEffect } from 'react';

export default function Header({
  menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Testimonials', href: '#' },
    { label: 'Contact', href: '#' }
  ]
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu on window resize (if changing from mobile to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold text-black">
                Logo
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {/* Sign In Button (Desktop) */}
            <div className="hidden md:flex items-center">
              <button className="inline-flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition-colors">
                Sign In
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu, show/hide based on menu state */}
        <div 
          className={`md:hidden ${mobileMenuOpen ? 'fixed inset-0 z-40 bg-white' : 'hidden'}`}
          style={{ top: '68px' }} // Adjust based on header height
        >
          <div className="space-y-1 px-4 pb-10 pt-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-4 text-lg font-medium text-black hover:text-gray-600 transition-colors border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <button 
                className="w-full rounded-md border border-black bg-white px-4 py-3 text-center font-medium text-black hover:bg-black hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}