
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find your perfect
            <span className="text-blue-600 block">stay anywhere</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover unique accommodations around the world. From cozy apartments to luxury villas, 
            find the perfect place for your next adventure.
          </p>
          
          {/* Mobile Search */}
          <div className="md:hidden bg-white rounded-lg p-4 shadow-lg max-w-md mx-auto">
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Where are you going?"
                className="flex-1 outline-none text-gray-700"
              />
            </div>
            <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
              Search
            </Button>
          </div>
          
          <div className="hidden md:block mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Start exploring
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
