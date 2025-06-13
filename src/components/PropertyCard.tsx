
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isNew?: boolean;
}

const PropertyCard = ({ 
  title, 
  location, 
  price, 
  rating, 
  reviewCount, 
  imageUrl, 
  isNew 
}: PropertyCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-3">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button 
          variant="ghost" 
          size="sm" 
          className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full p-2"
        >
          <Heart className="h-4 w-4" />
        </Button>
        {isNew && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            New
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 truncate">{title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-gray-500">({reviewCount})</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm">{location}</p>
        
        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="font-semibold text-gray-900">${price}</span>
            <span className="text-gray-600 text-sm"> / night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
