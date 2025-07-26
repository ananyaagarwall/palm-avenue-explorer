export const PropertyFooter = () => {
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