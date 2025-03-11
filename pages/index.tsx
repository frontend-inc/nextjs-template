export default function Home() {
  // This will intentionally throw an error
  console.log("This should not appear in the browser console");
  
  // Force an error to be thrown - this is intentional
  throw new Error("Intentionally thrown error from index page");
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center text-center mx-auto space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Start prompting
        </h1>
        <p className="text-lg text-muted-foreground">
          Use AI to start building your next idea.
        </p>       
      </main>
    </div>
  );
}
