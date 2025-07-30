import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import floorPlan2BHK from "@/assets/floor-plan-2bhk.jpg";
import floorPlan3BHK from "@/assets/floor-plan-3bhk.jpg";
import floorPlan4BHK from "@/assets/floor-plan-4bhk.jpg";

const configurations = [
  {
    id: "2bhk",
    title: "Exclusive 2 bedroom apts",
    image: floorPlan2BHK,
    badge: "2BHK",
    carpetArea: "685–715 sq.ft.",
    features: "Spacious balconies",
    fittings: "Premium fittings from Jaquar & Havells.",
    maintenance: "₹2.5/sq.ft.",
    age: "2 Years old"
  },
  {
    id: "3bhk",
    title: "Elegant 3 bedroom houses",
    image: floorPlan3BHK,
    badge: "3BHK",
    carpetArea: "950–1080 sq.ft.",
    features: "Large living areas",
    fittings: "Premium fittings from Jaquar & Havells.",
    maintenance: "₹3.0/sq.ft.",
    age: "2 Years old"
  },
  {
    id: "4bhk",
    title: "Phrase words for BHKs",
    image: floorPlan4BHK,
    badge: "4BHK",
    carpetArea: "1250–1480 sq.ft.",
    features: "Premium layouts",
    fittings: "Premium fittings from Jaquar & Havells.",
    maintenance: "₹3.5/sq.ft.",
    age: "2 Years old"
  }
];

export const PropertyConfigurations = () => {
  return (
    <section className="px-16 py-12 bg-background">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-0.5 bg-muted-foreground" />
        <h2 className="text-lg font-medium text-muted-foreground font-body tracking-tight">
          Existing Configurations
        </h2>
      </div>

      {/* Search Tabs */}
      <div className="flex justify-end mb-8">
        <div className="relative bg-muted/30 rounded-full border border-muted p-1 inline-flex">
          <button className="px-6 py-3 text-lg font-semibold text-muted-foreground font-body">
            Search by Building
          </button>
          <div className="bg-white rounded-full shadow-card px-6 py-3">
            <span className="text-lg font-bold text-navy font-body">
              Search by Rooms
            </span>
          </div>
        </div>
      </div>

      {/* Configuration Cards */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {configurations.map((config, index) => (
          <Card key={config.id} className={`shadow-property overflow-hidden ${index === 2 ? 'border-2 border-accent' : ''}`}>
            {/* Badge */}
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-muted px-4 py-1 rounded-full">
                  <span className="text-xl font-semibold text-foreground font-body">
                    {config.badge}
                  </span>
                </div>
              </div>
              
              {/* Image */}
              <img 
                src={config.image}
                alt={config.title}
                className="w-full h-60 object-cover"
              />
            </div>

            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground font-body leading-7">
                {config.title}
              </h3>
              
              <div className="space-y-2 text-base">
                <p className="text-muted-foreground font-body">
                  <span>Carpet Area: </span>
                  <span className="text-foreground font-medium">{config.carpetArea}</span>
                  <span> | {config.features}</span>
                </p>
                
                <p className="text-muted-foreground font-body">
                  {config.fittings}
                </p>
                
                <p className="text-muted-foreground font-body">
                  <span>{config.age} | Maintenance: </span>
                  <span className="text-foreground font-medium">{config.maintenance}</span>
                </p>
              </div>
              
              <div className="w-full h-px bg-muted opacity-20" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-end gap-4">
        <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-muted">
          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
        </Button>
        <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-muted">
          <ArrowRight className="w-5 h-5 text-muted-foreground" />
        </Button>
      </div>
    </section>
  );
};