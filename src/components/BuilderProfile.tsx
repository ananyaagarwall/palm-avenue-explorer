export const BuilderProfile = () => {
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