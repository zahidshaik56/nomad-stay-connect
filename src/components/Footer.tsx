
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-600">StayFinder</h3>
            <p className="text-gray-600 text-sm">
              Find your perfect accommodation anywhere in the world. 
              From budget-friendly options to luxury stays.
            </p>
            <div className="flex items-center space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">Safety information</a></li>
              <li><a href="#" className="hover:text-gray-900">Cancellation options</a></li>
              <li><a href="#" className="hover:text-gray-900">Our COVID-19 Response</a></li>
            </ul>
          </div>
          
          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Community</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Diversity & Belonging</a></li>
              <li><a href="#" className="hover:text-gray-900">Against Discrimination</a></li>
              <li><a href="#" className="hover:text-gray-900">Accessibility</a></li>
              <li><a href="#" className="hover:text-gray-900">Guest Referrals</a></li>
            </ul>
          </div>
          
          {/* Hosting */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Hosting</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Host your home</a></li>
              <li><a href="#" className="hover:text-gray-900">Host an Online Experience</a></li>
              <li><a href="#" className="hover:text-gray-900">Host an Experience</a></li>
              <li><a href="#" className="hover:text-gray-900">Responsible hosting</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 StayFinder. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
