import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const PropertyDescription = () => {
  return (
    <section className="px-16 py-12 bg-white">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Description Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description Badge */}
          <div className="inline-block">
            <Button 
              variant="secondary" 
              className="bg-gradient-to-br from-blue-100 to-blue-200 text-foreground font-display rounded-[20px] px-6"
            >
              Description
            </Button>
          </div>

          {/* Address */}
          <div>
            <p className="text-base font-bold text-foreground mb-4">
              Address: 001, Ghansoli, Navi Mumbai
            </p>
            <p className="text-base text-foreground leading-relaxed">
              This lovely 2bhk apartment/flat in ghansoli is available for sale in one of navi mumbai's 
              most popular projects, neelkanth palm avenue. This is a east-Facing property. 
              Constructed on a carpet area of 44 sq.M., the flat comprises 3 bedroom(s), 
              5 bathrooms and 3 balconies.<br/>
              <span className="text-primary cursor-pointer hover:underline">Read More &gt;&gt;</span>
            </p>
          </div>

          {/* Contact Button */}
          <Button className="bg-gradient-accent text-foreground hover:opacity-90 rounded-[20px] px-8">
            Contact Builder
          </Button>
        </div>

        {/* Property Details Grid */}
        <div className="lg:col-span-1">
          <Card className="shadow-property">
            <CardContent className="p-6">
              {/* Rental Details Badge */}
              <div className="mb-6">
                <Button 
                  variant="secondary" 
                  className="bg-gradient-to-br from-blue-200 to-blue-300 text-foreground font-display rounded-[20px] px-6"
                >
                  Rental Details
                </Button>
              </div>

              {/* Details Grid */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">Property Type</span>
                  <span className="text-base font-bold text-foreground">3 BHK Flat</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">Carpet Area</span>
                  <span className="text-base font-bold text-foreground">1250 sq. ft.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">Built-up Area</span>
                  <span className="text-base font-bold text-foreground">1260 sq. ft. (117.1m.sq.)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">Super Built-up Area</span>
                  <span className="text-base font-bold text-foreground">1294 sq. ft.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">Price</span>
                  <span className="text-base font-bold text-foreground">₹ 75 Lakh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">Price per Sq. Ft.</span>
                  <span className="text-base font-bold text-foreground">₹8,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">Loan Availability</span>
                  <span className="text-base font-bold text-foreground">Approved by SBI | HDFC</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t space-y-4">
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">Project Status</span>
                  <span className="text-base font-bold text-foreground">Ready to Move</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">Possession date</span>
                  <span className="text-base font-bold text-foreground">Dec 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">RERA ID</span>
                  <span className="text-base font-bold text-foreground">P51800012345</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">Vastu Compliant</span>
                  <span className="text-base font-bold text-foreground">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">Parking</span>
                  <span className="text-base font-bold text-foreground">With extra charges</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-medium text-foreground">Security</span>
                  <span className="text-base font-bold text-foreground">24x7 | CCTVs</span>
                </div>
              </div>

              <Button className="w-full mt-6 bg-gradient-accent text-foreground hover:opacity-90 rounded-[20px]">
                View More Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};