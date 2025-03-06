export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">
          <span className="inline-block animate-fade-in bg-gradient-to-r from-purple-500 via-blue-500 to-rose-500 bg-clip-text text-transparent">
            Start prompting
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground">
          Your gateway to intelligent conversations and creative possibilities
        </p>
        <div className="flex items-center gap-4 mt-8">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
            Get Started
            <i className="ri-arrow-right-line ml-2"></i>
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
            Learn More
            <i className="ri-information-line ml-2"></i>
          </button>
        </div>
      </main>
    </div>
  );
}
