import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-black text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-black text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-black text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-black text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© {currentYear} Your Company. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <span className="sr-only">Twitter</span>
              <i className="ri-twitter-fill text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <span className="sr-only">LinkedIn</span>
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <span className="sr-only">GitHub</span>
              <i className="ri-github-fill text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;