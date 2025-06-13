import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";

const PropertyGrid = () => {
  const sampleProperties = [
    {
      id: "1",
      title: "Modern Downtown Apartment",
      location: "New York, NY",
      price: 185,
      rating: 4.9,
      reviewCount: 124,
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
      isNew: true
    },
    {
      id: "2",
      title: "Cozy Mountain Cabin",
      location: "Aspen, CO",
      price: 220,
      rating: 4.8,
      reviewCount: 89,
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop"
    },
    {
      id: "3",
      title: "Beachfront Villa",
      location: "Malibu, CA",
      price: 450,
      rating: 5.0,
      reviewCount: 67,
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop"
    },
    {
      id: "4",
      title: "Historic Loft",
      location: "Portland, OR",
      price: 125,
      rating: 4.7,
      reviewCount: 203,
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=300&fit=crop"
    },
    {
      id: "5",
      title: "Urban Studio",
      location: "Chicago, IL",
      price: 95,
      rating: 4.6,
      reviewCount: 156,
      imageUrl: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=500&h=300&fit=crop",
      isNew: true
    },
    {
      id: "6",
      title: "Luxury Penthouse",
      location: "Miami, FL",
      price: 380,
      rating: 4.9,
      reviewCount: 92,
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop&auto=format&q=80"
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Discover amazing places
          </h2>
          <p className="text-gray-600">{sampleProperties.length} stays found</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Show more properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
