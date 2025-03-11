import { useErrors } from "@/hooks/use-errors";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useErrors() // DO NOT REMOVE
  return <Component {...pageProps} />;
}
