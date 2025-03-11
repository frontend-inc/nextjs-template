// DO NOT REMOVE OR MODIFY THIS FILE. IT IS USED FOR ERROR REPORTING.
import { useEffect } from "react";

export function useErrors() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (window.parent !== window) {
        window.parent.postMessage(
          { event: "error", message: event.message, source: event.filename, line: event.lineno, column: event.colno },
          "*"
        );
      }
    };

    // Listen for uncaught JavaScript errors
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);
}
