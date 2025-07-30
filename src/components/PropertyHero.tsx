import { Heart, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import propertyHero from "@/assets/property-hero.jpg";

export const PropertyHero = () => {
  return (
    <section className="px-16 py-8">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left - Property Image */}
        <div className="relative">
          <img 
            src={propertyHero}
            alt="Neelkanth Palm Avenue" 
            className="w-full h-[357px] object-cover rounded-t-xl"
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
            <Badge variant="outline" className="border-accent text-muted-foreground px-3 py-1 rounded-full">Home</Badge>
            <Badge variant="outline" className="border-accent text-muted-foreground px-3 py-1 rounded-full">OC Verified</Badge>
            <Badge variant="outline" className="border-accent text-muted-foreground px-3 py-1 rounded-full">CC Verified</Badge>
            <Badge variant="outline" className="border-accent text-muted-foreground px-3 py-1 rounded-full">RERA Verified</Badge>
            <Badge variant="outline" className="border-accent text-muted-foreground px-3 py-1 rounded-full">2-4 BHK</Badge>
          </div>

          {/* Property title */}
          <div>
            <h1 className="font-display text-4xl text-foreground mb-2 leading-tight">
              Neelkanth Palm Avenue
            </h1>
            <p className="text-lg text-muted-foreground">
              Neelkanth Palm Avenue, Ghansoli, Navi Mumbai
            </p>
          </div>

          {/* More Details Section */}
          <div className="bg-navy p-6 rounded-xl text-white">
            <p className="text-base font-semibold mb-6">More Details -</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              {/* Carpet Area */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Carpet Area</span>
                </div>
                <div className="font-bold text-sm">685.3 sq.ft. to<br/>715.5 sq.ft.</div>
                <div className="text-xs text-white/60">View more rates ›</div>
              </div>

              {/* Pricing */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Pricing</span>
                </div>
                <div className="font-bold text-sm">1.56 Cr +<br/>[Negotiable]</div>
                <div className="text-xs text-white/60">Starting from 90.2 L</div>
                <div className="text-xs text-white/60">View detailed pricing ›</div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Highlights</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3" />
                    <span className="text-xs">Railway station</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3" />
                    <span className="text-xs">Hospital</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3" />
                    <span className="text-xs">Schools</span>
                  </div>
                </div>
                <div className="text-xs text-white/60">View more nearby details ›</div>
              </div>

              {/* Extra Charges */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Extra Charges</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3" />
                    <span className="text-xs">Application Fee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3" />
                    <span className="text-xs">Parking Fee</span>
                  </div>
                </div>
                <div className="text-xs text-white/60">View detailed breakdown ›</div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4">
            <Button variant="outline" className="border-accent-light text-foreground hover:bg-accent-light/10 rounded-full px-6">
              Add to My List
            </Button>
            <Button className="bg-gradient-accent text-foreground hover:opacity-90 rounded-full px-6">
              Contact Builder
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};