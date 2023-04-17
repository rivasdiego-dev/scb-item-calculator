import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SC BuildIt Calculator</title>
        <link rel="icon" href={'../logo.ico'} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
