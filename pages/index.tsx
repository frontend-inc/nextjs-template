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
          Use the AI assistant to start building your next idea.
        </p>        
      </main>
    </div>
  );
}
