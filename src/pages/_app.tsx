import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Script from "next/script";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
