import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta viewport="initial-scale=1.0, width=device-width" />
        <title>Next Events</title>
        <meta name="description" content="NextJS Events" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
