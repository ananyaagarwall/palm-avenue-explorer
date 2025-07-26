import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const FloorPlansSection = () => {
  return (
    <section className="px-16 py-12">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-0.5 bg-muted-foreground" />
        <h2 className="text-lg font-medium text-muted-foreground font-body tracking-tight">
          Existing Floor Plans
        </h2>
      </div>

      {/* Search Tabs */}
      <div className="flex justify-center mb-8">
        <div className="relative bg-white rounded-full border border-muted p-1 inline-flex">
          {/* Background tab */}
          <div className="flex">
            <button className="px-8 py-3 text-lg font-semibold text-muted-foreground font-body">
              Search by Building
            </button>
            <div className="bg-white rounded-full shadow-property px-8 py-3">
              <span className="text-lg font-bold text-primary font-body">
                Search by Rooms
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Room Type Selection */}
      <div className="flex justify-center mb-12">
        <div className="relative bg-white rounded-full border border-muted p-1 inline-flex">
          <button className="px-6 py-3 text-lg font-semibold text-muted-foreground">
            2 BHK
          </button>
          
          {/* Active tab */}
          <div className="bg-white rounded-full shadow-property px-6 py-3">
            <span className="text-lg font-bold text-primary">3 BHK</span>
          </div>
          
          <button className="px-6 py-3 text-lg font-semibold text-muted-foreground">
            4 BHK
          </button>
        </div>
      </div>

      {/* Floor Plan Details Card */}
      <Card className="max-w-6xl mx-auto shadow-property">
        <CardContent className="p-8">
          <div className="bg-accent-light/20 rounded-xl p-8 space-y-6">
            
            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
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
              
              <div className="space-y-1">
                <p className="text-lg text-muted-foreground font-body">Modular Kitchen</p>
                <p className="text-lg text-foreground font-body">Yes, Premium Fittings</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation tabs at bottom */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-8 text-sm font-semibold text-foreground">
          <button className="hover:text-primary transition-colors">Overview</button>
          <button className="hover:text-primary transition-colors">Amenities</button>
          <button className="hover:text-primary transition-colors">Society</button>
          <button className="hover:text-primary transition-colors">Builder Details</button>
          <button className="hover:text-primary transition-colors">Society Reviews</button>
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