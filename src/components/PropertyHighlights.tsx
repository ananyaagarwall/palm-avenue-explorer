import { Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  "Recently Renovated",
  "Gated Society", 
  "Visitor Parking Available",
  "Corner Property",
  "Overlooking Park/Garden",
  "On-Call Maintenance Staff"
];

export const PropertyHighlights = () => {
  return (
    <section className="px-16 py-12 bg-white">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Key Highlights Badge */}
        <div className="lg:col-span-1">
          <Card className="bg-gradient-to-br from-purple-400 to-navy-dark relative overflow-hidden">
            <CardContent className="p-6 text-center">
              <div className="w-8 h-8 border-2 border-white rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <p className="text-white text-xs font-display">
                Key Highlights<br/>of this Property
              </p>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Highlights Grid */}
        <div className="lg:col-span-3">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-display text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};