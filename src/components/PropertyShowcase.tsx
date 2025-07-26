import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import propertyHero from "@/assets/property-hero.jpg";

export const PropertyShowcase = () => {
  return (
    <section className="px-16 py-12 bg-navy-dark relative overflow-hidden">
      <div className="max-w-md mx-auto relative">
        {/* Navigation arrows */}
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
        >
          <ArrowRight className="w-6 h-6" />
        </Button>

        {/* Property Card */}
        <Card className="bg-navy-dark border-none text-white shadow-hero">
          <CardContent className="p-0">
            {/* Property Image */}
            <div className="relative">
              <img 
                src={propertyHero}
                alt="Neelkanth Palm Avenue"
                className="w-full h-80 object-cover rounded-t-lg"
              />
            </div>

            {/* Property Info */}
            <div className="p-8 space-y-4">
              <h3 className="font-display text-4xl text-white leading-tight">
                Neelkanth Palm<br />Avenue
              </h3>
              
              <p className="text-xl font-display text-white">
                One line motto | Extra detail.
              </p>
              
              <p className="text-base font-semibold text-white leading-tight font-body">
                An elegant blend of modern architecture and nature-inspired living. 
                This premium residential project offers spacious 2, 3 & 4 BHK apartments 
                ranging from 950 to 1800 sq. ft., designed to maximize light, 
                ventilation, and comfort.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};