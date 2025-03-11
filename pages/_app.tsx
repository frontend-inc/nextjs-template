import { useErrors, ErrorBoundary } from "@/hooks/use-errors";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useErrors() // DO NOT REMOVE
  
  // Additional error silencing at the application root level
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Override Error constructor to silence errors
      const originalErrorConstructor = window.Error;
      window.Error = function(...args: any[]) {
        const error = new originalErrorConstructor(...args);
        
        // Send to parent window but prevent console output
        if (window.parent !== window) {
          try {
            window.parent.postMessage(
              { event: "error", message: error.message, stack: error.stack },
              "*"
            );
          } catch (e) {
            // Silent catch
          }
        }
        
        return error;
      } as any;
      window.Error.prototype = originalErrorConstructor.prototype;
      
      // Ensure console is completely disabled
      window.console.error = () => {};
      window.console.warn = () => {};
      window.console.log = () => {};
      window.console.info = () => {};
      window.console.debug = () => {};
      
      return () => {
        window.Error = originalErrorConstructor;
      };
    }
  }, []);
  
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
