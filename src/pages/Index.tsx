import { PropertyHeader } from "@/components/PropertyHeader";
import { PropertyHero } from "@/components/PropertyHero";
import { BuilderProfile } from "@/components/BuilderProfile";
import { PropertyConfigurations } from "@/components/PropertyConfigurations";
import { FloorPlansSection } from "@/components/FloorPlansSection";
import { PropertyShowcase } from "@/components/PropertyShowcase";
import { PropertyHighlights } from "@/components/PropertyHighlights";
import { PropertyDescription } from "@/components/PropertyDescription";
import { LocationSection } from "@/components/LocationSection";
import { PropertyFooter } from "@/components/PropertyFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PropertyHeader />
      <PropertyHero />
      <BuilderProfile />
      <PropertyConfigurations />
      <FloorPlansSection />
      <PropertyShowcase />
      <PropertyHighlights />
      <PropertyDescription />
      <LocationSection />
      <PropertyFooter />
    </div>
  );
};

export default Index;
