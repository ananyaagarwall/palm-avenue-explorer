import { Heart, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import propertyHero from "@/assets/property-hero.jpg";

export const PropertyHero = () => {
  return (
    <section className="px-16 py-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left - Property Image */}
        <div className="relative">
          <img 
            src={propertyHero}
            alt="Neelkanth Palm Avenue" 
            className="w-full h-[400px] object-cover rounded-t-xl"
          />
          
          {/* Wishlist button */}
          <div className="absolute top-4 left-4">
            <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Heart className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Rating badge */}
          <div className="absolute bottom-4 left-4 bg-golden/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
            <Shield className="w-4 h-4 text-foreground" />
            <Star className="w-4 h-4 text-foreground fill-current" />
            <span className="font-display text-lg text-foreground">95%</span>
          </div>
        </div>

        {/* Right - Property Details */}
        <div className="space-y-6">
          {/* Property badges */}
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="border-accent text-muted-foreground">Home</Badge>
            <Badge variant="outline" className="border-accent text-muted-foreground">Ready-to-move</Badge>
            <Badge variant="outline" className="border-accent text-muted-foreground">RERA Verified</Badge>
            <Badge variant="outline" className="border-accent text-muted-foreground">2-4 BHK</Badge>
          </div>

          {/* Property title */}
          <div>
            <h1 className="font-display text-5xl text-foreground mb-2">
              Neelkanth Palm Avenue
            </h1>
            <p className="text-xl text-muted-foreground">
              Neelkanth Palm Avenue, Ghansoli, Navi Mumbai
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4">
            <Button variant="outline" className="border-accent-light text-foreground hover:bg-accent-light/10">
              Add to My List
            </Button>
            <Button className="bg-gradient-accent text-foreground hover:opacity-90">
              Contact Builder
            </Button>
          </div>

          {/* More Details Section */}
          <div className="bg-gradient-hero p-6 rounded-xl text-white">
            <p className="text-base font-semibold mb-4">More Details -</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Carpet Area */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-sm text-white/70 mb-2">Carpet Area</div>
                <div className="font-bold text-lg">685.3 sq.ft. to<br/>715.5 sq.ft.</div>
                <div className="text-xs text-white/60 mt-2">View more rates ›</div>
              </div>

              {/* Pricing */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-sm text-white/70 mb-2">Pricing</div>
                <div className="font-bold text-lg">1.56 Cr +<br/>[Negotiable]</div>
                <div className="text-xs text-white/60 mt-2">Starting from 90.2 L</div>
              </div>

              {/* Highlights */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-sm text-white/70 mb-2">Highlights</div>
                <div className="flex justify-center gap-2 mb-2">
                  <Shield className="w-4 h-4" />
                  <Shield className="w-4 h-4" />
                  <Shield className="w-4 h-4" />
                </div>
                <div className="text-sm">Schools</div>
                <div className="text-sm">Hospital</div>
                <div className="text-sm">Railway station</div>
              </div>

              {/* Extra Charges */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-sm text-white/70 mb-2">Extra Charges</div>
                <div className="text-sm">Application Fee</div>
                <div className="text-sm">Parking Fee</div>
                <div className="text-xs text-white/60 mt-2">View detailed breakdown ›</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};