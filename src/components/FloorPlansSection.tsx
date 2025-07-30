import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const FloorPlansSection = () => {
  return (
    <section className="px-16 py-12 bg-background">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-0.5 bg-muted-foreground" />
        <h2 className="text-lg font-medium text-muted-foreground font-body tracking-tight">
          Existing Floor Plans
        </h2>
      </div>

      {/* Room Type Selection */}
      <div className="flex justify-center mb-12">
        <div className="relative bg-muted/30 rounded-full border border-muted p-1 inline-flex">
          <button className="px-8 py-3 text-lg font-semibold text-muted-foreground">
            2 BHK
          </button>
          
          {/* Active tab */}
          <div className="bg-white rounded-full shadow-property px-8 py-3">
            <span className="text-lg font-bold text-navy">3 BHK</span>
          </div>
          
          <button className="px-8 py-3 text-lg font-semibold text-muted-foreground">
            4 BHK
          </button>
        </div>
      </div>

      {/* Floor Plan Details Card */}
      <Card className="max-w-7xl mx-auto shadow-property border border-accent-light/20">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Left side - Details */}
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-medium text-foreground font-body mb-1">
                  3 BHK Floor Plan
                </h3>
                <div className="w-16 h-1 bg-primary mb-6" />
              </div>
              
              {/* Details Grid */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-lg text-muted-foreground font-body">Built-up Area</p>
                  <p className="text-lg text-foreground font-body">1260 sq. ft (117.1 m²)</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-lg text-muted-foreground font-body">Ceiling Height</p>
                  <p className="text-lg text-foreground font-body">2.9 – 3.0 meters (approx. 9.5 ft)</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-lg text-muted-foreground font-body">Main Door Facing</p>
                  <p className="text-lg text-foreground font-body">East/North-East</p>
                </div>
                
                <div className="space-y-1 flex items-center gap-2">
                  <div>
                    <p className="text-lg text-muted-foreground font-body">Modular Kitchen</p>
                    <p className="text-lg text-foreground font-body">With Sitting area</p>
                  </div>
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="text-lg text-foreground font-body hover:text-primary transition-colors">
                  View Room-Wise Measurements ›
                </button>
              </div>
            </div>

            {/* Right side - 3D Floor Plan */}
            <div className="relative bg-navy rounded-r-xl overflow-hidden">
              <img 
                src="/lovable-uploads/4e72172c-7d1c-45e2-8d68-a19f3f0234da.png"
                alt="3D Floor Plan" 
                className="w-full h-full object-cover"
              />
              
              {/* Side thumbnails */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-2">
                <div className="w-12 h-20 bg-navy/80 rounded-l-lg overflow-hidden">
                  <img src="/lovable-uploads/4e72172c-7d1c-45e2-8d68-a19f3f0234da.png" alt="Bedroom" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-20 bg-navy/80 rounded-l-lg overflow-hidden">
                  <img src="/lovable-uploads/4e72172c-7d1c-45e2-8d68-a19f3f0234da.png" alt="Living Room" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-20 bg-navy/80 rounded-l-lg overflow-hidden">
                  <img src="/lovable-uploads/4e72172c-7d1c-45e2-8d68-a19f3f0234da.png" alt="Kitchen" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="absolute bottom-6 right-6">
                <button className="text-lg text-white font-body hover:text-accent transition-colors">
                  View more pictures by room ›
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation tabs at bottom */}
      <div className="flex justify-center mt-12 relative">
        <div className="flex items-center gap-8 text-sm font-semibold text-foreground">
          <button className="hover:text-primary transition-colors">Overview</button>
          <button className="hover:text-primary transition-colors">Amenities</button>
          <button className="hover:text-primary transition-colors">Society</button>
          <button className="hover:text-primary transition-colors">Builder Details</button>
          <button className="hover:text-primary transition-colors">Society Reviews</button>
        </div>
        
        {/* Navigation arrows */}
        <div className="absolute right-0 flex gap-2">
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ArrowLeft className="w-4 h-4 text-accent" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ArrowRight className="w-4 h-4 text-accent" />
          </Button>
        </div>
      </div>

      {/* Results section */}
      <div className="mt-8">
        <p className="text-lg font-medium text-muted-foreground font-body">
          Results for 3 BHKs ›
        </p>
      </div>
    </section>
  );
};