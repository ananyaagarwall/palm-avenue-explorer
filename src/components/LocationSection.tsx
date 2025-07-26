import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import locationMap from "@/assets/location-map.jpg";

export const LocationSection = () => {
  return (
    <section className="px-16 py-12 bg-white">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Map Section */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-foreground font-body">
            Map and Location
          </h2>
          
          <div className="relative">
            <img 
              src={locationMap}
              alt="Property Location Map"
              className="w-full h-[445px] object-cover rounded-xl"
            />
          </div>

          <p className="text-lg text-foreground font-body">
            Scholarships, awards and bursaries are offered to the international and national 
            students pursuing undergraduate, graduate, masters and degree programs.
          </p>
        </div>

        {/* Pricing Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-muted/30 shadow-property">
            <CardContent className="p-6 space-y-6">
              <div className="text-center">
                <p className="text-sm font-bold text-foreground font-body mb-2">
                  Price Breakdown
                </p>
                <p className="text-2xl font-bold text-foreground">
                  ₹8,500 per sqm.
                </p>
              </div>

              <Button className="w-full bg-gradient-accent text-foreground hover:opacity-90 rounded-lg">
                Contact Builder
              </Button>

              <div className="text-center">
                <p className="text-sm font-bold text-foreground font-body mb-4">
                  Request Home Tour
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="text-sm">
                    In person
                  </Button>
                  <Button variant="outline" className="text-sm border-foreground">
                    Virtual
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-2">
                <Button className="bg-gradient-accent text-foreground hover:opacity-90 text-sm">
                  Share
                </Button>
                <Button className="bg-gradient-accent text-foreground hover:opacity-90 text-sm">
                  My List
                </Button>
              </div>

              <Button className="w-full bg-gradient-accent text-foreground hover:opacity-90 text-sm">
                Browse nearby Listings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};