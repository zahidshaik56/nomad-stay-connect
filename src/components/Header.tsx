
import { Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">StayFinder</h1>
          </div>
          
          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center bg-gray-50 rounded-full p-2 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="px-4 py-2 border-r border-gray-200">
              <div className="text-sm font-medium text-gray-700">Where</div>
              <input 
                type="text" 
                placeholder="Search destinations"
                className="bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none w-32"
              />
            </div>
            <div className="px-4 py-2 border-r border-gray-200">
              <div className="text-sm font-medium text-gray-700">Check in</div>
              <div className="text-sm text-gray-400">Add dates</div>
            </div>
            <div className="px-4 py-2 border-r border-gray-200">
              <div className="text-sm font-medium text-gray-700">Check out</div>
              <div className="text-sm text-gray-400">Add dates</div>
            </div>
            <div className="px-4 py-2">
              <div className="text-sm font-medium text-gray-700">Guests</div>
              <div className="text-sm text-gray-400">Add guests</div>
            </div>
            <Button size="sm" className="rounded-full ml-2 bg-blue-600 hover:bg-blue-700">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Become a Host
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Menu className="h-4 w-4 mr-2" />
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
