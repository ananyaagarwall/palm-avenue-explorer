import { PropertyHeader } from "@/components/PropertyHeader";
import { PropertyHero } from "@/components/PropertyHero";
import { BuilderProfile } from "@/components/BuilderProfile";
import { PropertyConfigurations } from "@/components/PropertyConfigurations";
import { FloorPlansSection } from "@/components/FloorPlansSection";
import { PropertyShowcase } from "@/components/PropertyShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PropertyHeader />
      <PropertyHero />
      <BuilderProfile />
      <PropertyConfigurations />
      <FloorPlansSection />
      <PropertyShowcase />
    </div>
  );
};

export default Index;
