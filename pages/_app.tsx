import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://www.svgrepo.com/show/303341/netflix-1-logo.svg"
          type="image/x-icon"
        />
        <title>Netflix</title>
      </Head>
      <Toaster toastOptions={{ className: "font-semibold" }} />
      <Component {...pageProps} />
    </>
  );
}
