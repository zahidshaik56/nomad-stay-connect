
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

const FilterBar = () => {
  const categories = [
    "All",
    "Apartments",
    "Houses",
    "Condos",
    "Villas",
    "Cabins",
    "Lofts",
    "Studios"
  ];

  return (
    <div className="bg-white border-b sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Category Filters */}
          <div className="flex items-center space-x-6 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "ghost"}
                size="sm"
                className={`whitespace-nowrap ${
                  category === "All" 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "hover:bg-gray-100"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Price Filter */}
          <div className="flex items-center space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2">
                  <span>Price</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-semibold">Price range</h4>
                  <div className="space-y-2">
                    <Slider
                      defaultValue={[50, 500]}
                      max={1000}
                      min={0}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>$50</span>
                      <span>$500+</span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <Button variant="outline">
              More filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
