import { Menu, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import companyLogo from "@/assets/company-logo.png";

export const PropertyHeader = () => {
  return (
    <header className="relative">
      {/* Navy curved header */}
      <div className="bg-gradient-hero h-20 w-full rounded-b-[50px] relative">
        {/* Logo */}
        <div className="absolute left-16 -top-4">
          <img 
            src={companyLogo}
            alt="Neelkanth Properties" 
            className="h-24 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center gap-20 pt-6">
          <Button variant="ghost" className="text-white/75 hover:text-white text-xl font-bold font-body">
            Search
          </Button>
          <Button variant="ghost" className="text-white/75 hover:text-white text-xl font-bold font-body">
            Home
          </Button>
          <Button variant="ghost" className="text-white/75 hover:text-white text-xl font-bold font-body">
            Builders
          </Button>
          <Button variant="ghost" className="text-white/75 hover:text-white text-xl font-bold font-body">
            Blogs
          </Button>
        </nav>

        {/* Mobile menu icon */}
        <div className="absolute right-8 top-6">
          <Menu className="text-white/75 w-7 h-7" />
        </div>

        {/* Profile icon */}
        <div className="absolute right-20 top-6">
          <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mt-6 px-16">
        <ArrowLeft className="w-6 h-6 text-foreground" />
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Home className="w-5 h-5" />
          <span>Home</span>
          <span className="text-muted-foreground">›</span>
          <span>View Builders</span>
          <span className="text-muted-foreground">›</span>
          <span className="font-medium text-foreground">Neelkanth Palm Avenue</span>
          <span className="text-muted-foreground">›</span>
          <span className="font-semibold text-foreground">Detail</span>
        </div>
      </div>
    </header>
  );
};