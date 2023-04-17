import "@/styles/globals.css";
import Head from "next/head";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SC BuildIt Calculator</title>
        <link rel="icon" href={"../logo.ico"} />
      </Head>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </>
  );
}
