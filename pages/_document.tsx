import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        {/* Script to run before any other JS to silence all errors at browser level */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Override console methods before any other scripts run
            window.console.log = function() {};
            window.console.error = function() {};
            window.console.warn = function() {};
            window.console.info = function() {};
            window.console.debug = function() {};
            window.console.trace = function() {};
            window.console.dir = function() {};
            window.console.table = function() {};
            
            // Override window.onerror to completely silence errors
            window.onerror = function(message, source, lineno, colno, error) {
              // Send to parent if available but don't show in console
              if (window.parent !== window) {
                try {
                  window.parent.postMessage(
                    { event: "error", message, source, line: lineno, column: colno },
                    "*"
                  );
                } catch (e) {}
              }
              return true; // Prevents the error from showing in console
            };
            
            // Suppress unhandled promise rejections
            window.addEventListener('unhandledrejection', function(event) {
              event.preventDefault();
              if (window.parent !== window) {
                try {
                  window.parent.postMessage(
                    { event: "error", message: event.reason?.message || "Unhandled Promise Rejection" },
                    "*"
                  );
                } catch (e) {}
              }
              return true;
            });
          `
        }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
