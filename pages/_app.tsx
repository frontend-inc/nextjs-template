import { useErrors, ErrorBoundary } from "@/hooks/use-errors";
import type { AppProps } from "next/app";
import "@/styles/globals.css";


export default function App({ Component, pageProps }: AppProps) {
  useErrors()
  
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
