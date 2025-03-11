// DO NOT REMOVE OR MODIFY THIS FILE. IT IS USED FOR ERROR REPORTING.
import { useEffect } from "react";
import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

// We still need to use a class component for error boundaries as React doesn't have a hook-based API for this yet
export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Send error to parent window silently
    if (typeof window !== 'undefined' && window.parent !== window) {
      window.parent.postMessage(
        {
          event: "error",
          data: error.message,
          source: "React Component",
          stack: error.stack,
          componentStack: errorInfo.componentStack,
        },
        "*"
      );
    }
    // Completely silent - don't log to console at all
  }
  
  render() {
    // Always render children even if there's an error
    return this.props.children;
  }
}

export function useErrors() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleError = (event: ErrorEvent) => {
      // Prevent default error behavior to silence browser console
      event.preventDefault();
      
      if (window.parent !== window) {
        window.parent.postMessage(
          { event: "error", message: event.message, source: event.filename, line: event.lineno, column: event.colno },
          "*"
        );
      }
    };

    // Store native console methods before overriding them
    // We need to do this to avoid losing the original references
    const nativeConsole = {
      log: window.console.log,
      warn: window.console.warn,
      error: window.console.error,
      info: window.console.info,
      debug: window.console.debug,
      trace: window.console.trace,
      dir: window.console.dir,
      table: window.console.table
    };

    // Override all console methods
    const consoleMethods = ["log", "warn", "error", "info", "debug", "trace", "dir", "table"] as const;
    
    consoleMethods.forEach((method) => {
      console[method] = (...args: any[]) => {
        if (window.parent !== window) {
          try {
            // Send to parent window
            window.parent.postMessage(
              { event: "console", method, args },
              "*"
            );
          } catch (e) {
            // Completely silent - don't log failures
          }
          
          // Console is completely silent - no logs will appear in the browser console
          // Do not call native console methods at all
        }
      };
    });

    // Listen for uncaught JavaScript errors
    window.addEventListener("error", handleError);
    
    // Override window.onerror to silence errors completely
    window.onerror = function(message, source, lineno, colno, error) {
      if (window.parent !== window) {
        window.parent.postMessage(
          { event: "error", message, source, line: lineno, column: colno, stack: error?.stack },
          "*"
        );
      }
      // Return true to prevent the error from showing in console
      return true;
    };

    // Listen for unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      // Prevent default rejection behavior to silence browser console
      event.preventDefault();
      
      if (window.parent !== window) {
        window.parent.postMessage(
          { event: "error", message: event.reason?.message || "Unhandled Promise Rejection", source: "Promise Rejection" },
          "*"
        );
      }
      // Completely silent - don't use native console
    };
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      // Restore original console methods on cleanup
      consoleMethods.forEach((method) => {
        console[method] = nativeConsole[method];
      });
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      window.onerror = null;
    };
  }, []);
}