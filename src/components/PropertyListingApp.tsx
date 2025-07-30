import React from "react";
import { Menu, Home, ArrowLeft, Heart, Star, Shield, ArrowRight, Check } from "lucide-react";
import companyLogo from "@/assets/company-logo.png";
import propertyHero from "@/assets/property-hero.jpg";
import floorPlan2BHK from "@/assets/floor-plan-2bhk.jpg";
import floorPlan3BHK from "@/assets/floor-plan-3bhk.jpg";
import floorPlan4BHK from "@/assets/floor-plan-4bhk.jpg";
import locationMap from "@/assets/location-map.jpg";

// ============= UI COMPONENTS =============
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "icon";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = "default", 
  size = "default", 
  className = "", 
  children, 
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground"
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    icon: "h-10 w-10"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

interface BadgeProps {
  variant?: "default" | "outline";
  className?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = "default", className = "", children }) => {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    outline: "text-foreground"
  };
  
  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
      {children}
    </div>
  );
};

const CardContent: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

// ============= MAIN COMPONENTS =============

// Header Component
const PropertyHeader = () => {
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

// Hero Component
const PropertyHero = () => {
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

// Builder Profile Component
const BuilderProfile = () => {
  return (
    <section className="px-16 py-8 border-b border-border">
      <div className="flex items-center gap-8">
        {/* Builder Avatar */}
        <div className="w-32 h-32 bg-muted rounded-full flex-shrink-0" />
        
        {/* Builder Info */}
        <div className="flex-1 space-y-2">
          <h2 className="font-display text-4xl text-foreground leading-tight">
            Builder Full Name
          </h2>
          <p className="text-2xl font-display text-foreground">
            One line motto | Extra detail.
          </p>
          <p className="text-xl font-body text-foreground">
            This Property is at 7th Position in builders rankings.
          </p>
        </div>

        {/* Builder Stats */}
        <div className="text-right space-y-1">
          <p className="text-lg font-bold text-foreground">
            123 Cities | 23 Projects Done | 14 New Projects
          </p>
          <p className="text-lg font-medium text-foreground cursor-pointer hover:text-primary">
            Visit this Builder's Profile ›
          </p>
        </div>
      </div>
    </section>
  );
};

// Configurations Component
const PropertyConfigurations = () => {
  const configurations = [
    {
      id: "2bhk",
      title: "Exclusive 2 bedroom apts",
      image: floorPlan2BHK,
      badge: "2BHK",
      carpetArea: "685–715 sq.ft.",
      features: "Spacious balconies",
      fittings: "Premium fittings from Jaquar & Havells.",
      maintenance: "₹2.5/sq.ft.",
      age: "2 Years old"
    },
    {
      id: "3bhk",
      title: "Elegant 3 bedroom houses",
      image: floorPlan3BHK,
      badge: "3BHK",
      carpetArea: "950–1080 sq.ft.",
      features: "Large living areas",
      fittings: "Premium fittings from Jaquar & Havells.",
      maintenance: "₹3.0/sq.ft.",
      age: "2 Years old"
    },
    {
      id: "4bhk",
      title: "Phrase words for BHKs",
      image: floorPlan4BHK,
      badge: "4BHK",
      carpetArea: "1250–1480 sq.ft.",
      features: "Premium layouts",
      fittings: "Premium fittings from Jaquar & Havells.",
      maintenance: "₹3.5/sq.ft.",
      age: "2 Years old"
    }
  ];

  return (
    <section className="px-16 py-12 bg-background">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-0.5 bg-muted-foreground" />
        <h2 className="text-lg font-medium text-muted-foreground font-body tracking-tight">
          Existing Configurations
        </h2>
      </div>

      {/* Search Tabs */}
      <div className="flex justify-end mb-8">
        <div className="relative bg-muted/30 rounded-full border border-muted p-1 inline-flex">
          <button className="px-6 py-3 text-lg font-semibold text-muted-foreground font-body">
            Search by Building
          </button>
          <div className="bg-white rounded-full shadow-card px-6 py-3">
            <span className="text-lg font-bold text-navy font-body">
              Search by Rooms
            </span>
          </div>
        </div>
      </div>

      {/* Configuration Cards */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {configurations.map((config, index) => (
          <Card key={config.id} className={`shadow-property overflow-hidden ${index === 2 ? 'border-2 border-accent' : ''}`}>
            {/* Badge */}
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-muted px-4 py-1 rounded-full">
                  <span className="text-xl font-semibold text-foreground font-body">
                    {config.badge}
                  </span>
                </div>
              </div>
              
              {/* Image */}
              <img 
                src={config.image}
                alt={config.title}
                className="w-full h-60 object-cover"
              />
            </div>

            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground font-body leading-7">
                {config.title}
              </h3>
              
              <div className="space-y-2 text-base">
                <p className="text-muted-foreground font-body">
                  <span>Carpet Area: </span>
                  <span className="text-foreground font-medium">{config.carpetArea}</span>
                  <span> | {config.features}</span>
                </p>
                
                <p className="text-muted-foreground font-body">
                  {config.fittings}
                </p>
                
                <p className="text-muted-foreground font-body">
                  <span>{config.age} | Maintenance: </span>
                  <span className="text-foreground font-medium">{config.maintenance}</span>
                </p>
              </div>
              
              <div className="w-full h-px bg-muted opacity-20" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-end gap-4">
        <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-muted">
          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
        </Button>
        <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-muted">
          <ArrowRight className="w-5 h-5 text-muted-foreground" />
        </Button>
      </div>
    </section>
  );
};

// Floor Plans Component
const FloorPlansSection = () => {
  return (
    <section className="px-16 py-12 bg-background">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-0.5 bg-muted-foreground" />
        <h2 className="text-lg font-medium text-muted-foreground font-body tracking-tight">
          Existing Floor Plans
        </h2>
      </div>

      {/* Room Type Selection */}
      <div className="flex justify-center mb-12">
        <div className="relative bg-muted/30 rounded-full border border-muted p-1 inline-flex">
          <button className="px-8 py-3 text-lg font-semibold text-muted-foreground">
            2 BHK
          </button>
          
          {/* Active tab */}
          <div className="bg-white rounded-full shadow-property px-8 py-3">
            <span className="text-lg font-bold text-navy">3 BHK</span>
          </div>
          
          <button className="px-8 py-3 text-lg font-semibold text-muted-foreground">
            4 BHK
          </button>
        </div>
      </div>

      {/* Floor Plan Details Card */}
      <Card className="max-w-7xl mx-auto shadow-property border border-accent-light/20">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Left side - Details */}
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-medium text-foreground font-body mb-1">
                  3 BHK Floor Plan
                </h3>
                <div className="w-16 h-1 bg-primary mb-6" />
              </div>
              
              {/* Details Grid */}
              <div className="space-y-6">
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
                
                <div className="space-y-1 flex items-center gap-2">
                  <div>
                    <p className="text-lg text-muted-foreground font-body">Modular Kitchen</p>
                    <p className="text-lg text-foreground font-body">With Sitting area</p>
                  </div>
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-foreground font-body cursor-pointer hover:text-primary">
                View Room-Wise Measurements ›
              </p>
            </div>
            
            {/* Right side - 3D Visualization */}
            <div className="relative bg-navy-dark rounded-lg overflow-hidden">
              <img 
                src={floorPlan3BHK}
                alt="3 BHK Floor Plan 3D View"
                className="w-full h-full object-cover"
              />
              
              {/* Thumbnails */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-2">
                <div className="w-16 h-16 bg-navy-dark rounded-l-lg overflow-hidden">
                  <img src={floorPlan2BHK} alt="View 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-4 h-16 bg-navy-dark rounded-l-lg" />
                <div className="w-4 h-16 bg-navy-dark rounded-l-lg" />
              </div>
              
              <p className="absolute bottom-4 left-4 text-lg text-white font-body cursor-pointer hover:text-accent">
                View more pictures by room ›
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

// Property Showcase Component
const PropertyShowcase = () => {
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

// Property Highlights Component
const PropertyHighlights = () => {
  const highlights = [
    "Recently Renovated",
    "Gated Society", 
    "Visitor Parking Available",
    "Corner Property",
    "Overlooking Park/Garden",
    "On-Call Maintenance Staff"
  ];

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

// Property Description Component
const PropertyDescription = () => {
  return (
    <section className="px-16 py-12 bg-white">
      <div className="max-w-4xl">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-4 bg-gradient-to-br from-muted/70 to-navy/30 rounded-full px-6 py-3 shadow-card">
            <span className="text-lg font-display text-foreground">Description</span>
          </div>
        </div>

        {/* Address */}
        <div className="mb-6">
          <p className="text-base font-bold text-foreground mb-2">
            Address: 001, Ghansoli, Navi Mumbai
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-base text-foreground leading-normal">
            This lovely 2bhk apartment/flat in ghansoli is available for sale in one of navi mumbai's most popular projects, neelkanth palm avenue. This is a east-Facing property. Constructed on a carpet area of 44 sq.M., the flat comprises 3 bedroom(s), 5 bathrooms and 3 balconies.
          </p>
          <button className="text-base text-foreground hover:text-primary font-medium mt-2">
            Read More &gt;&gt;
          </button>
        </div>

        {/* Property Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Property Type</span>
              <span className="text-base font-bold text-foreground">3 BHK Flat</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Carpet Area</span>
              <span className="text-base font-bold text-foreground">1250 sq. ft.</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Built-up Area</span>
              <span className="text-base font-bold text-foreground">1260 sq. ft. (117.1m.sq.)</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Super Built-up Area</span>
              <span className="text-base font-bold text-foreground">1294 sq. ft.</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Price</span>
              <span className="text-base font-bold text-foreground">₹ 75 Lakh</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Price per Sq. Ft.</span>
              <span className="text-base font-bold text-foreground">₹8,500</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Loan Availability</span>
              <span className="text-base font-bold text-foreground">Approved by SBI | HDFC</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-base font-medium text-foreground">Approved by Authorities</span>
              <span className="text-base font-bold text-foreground">Yes | PMC | BBMP</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Project Status</span>
              <span className="text-base font-bold text-foreground">Ready to Move</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Possession date</span>
              <span className="text-base font-bold text-foreground">Dec 2025</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">RERA ID</span>
              <span className="text-base font-bold text-foreground">P51800012345</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Vastu Compliant</span>
              <span className="text-base font-bold text-foreground">Yes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Parking</span>
              <span className="text-base font-bold text-foreground">With extra charges</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Lift Availability</span>
              <span className="text-base font-bold text-foreground">Yes | 2 Lifts</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-muted">
              <span className="text-base font-medium text-foreground">Security</span>
              <span className="text-base font-bold text-foreground">24x7 | CCTVs</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-base font-medium text-foreground">Connectivity</span>
              <span className="text-base font-bold text-foreground">Near Metro | Highway | Airport</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button className="bg-gradient-accent text-foreground rounded-full">
            Contact Builder
          </Button>
          <Button className="bg-gradient-accent text-foreground rounded-full">
            View More Details
          </Button>
        </div>

        {/* Additional Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-4 bg-gradient-to-br from-muted/70 to-accent/30 rounded-full px-6 py-3 shadow-card mb-6">
            <span className="text-lg font-display text-foreground">Rental Details</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Location Section Component
const LocationSection = () => {
  return (
    <section className="px-16 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-foreground font-body mb-8">
          Map and Location
        </h2>
        
        {/* Map */}
        <div className="mb-8">
          <img 
            src={locationMap}
            alt="Neelkanth Palm Avenue Location"
            className="w-full h-[445px] object-cover rounded-xl"
          />
        </div>
        
        {/* Location Description */}
        <p className="text-lg text-foreground font-body tracking-tight">
          Scholarships, awards and bursaries are offered to the international and national students pursuing undergraduate, graduate, masters and degree programs.
        </p>
      </div>
    </section>
  );
};

// Footer Component
const PropertyFooter = () => {
  return (
    <footer className="px-16 py-12">
      <div className="bg-foreground rounded-3xl p-12 text-center relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 gap-4 h-full">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="bg-white rounded-full w-12 h-12" />
            ))}
          </div>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-semibold text-white font-body leading-tight mb-8 max-w-2xl mx-auto">
            Look and find more, browsing with HouseNSeek!
          </h2>
          
          <div className="flex justify-center space-x-8">
            <div className="text-white/10 text-6xl font-bold">HOUSE</div>
            <div className="text-white/10 text-6xl font-bold">N</div>
            <div className="text-white/10 text-6xl font-bold">SEEK</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============= MAIN APP COMPONENT =============
export const PropertyListingApp = () => {
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

export default PropertyListingApp;