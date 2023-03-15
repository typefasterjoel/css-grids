import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navigation from "~/components/nav";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-600 to-slate-900">
        <h1 className="text-5xl font-bold text-white">CSS Grids</h1>
        <Navigation />
      </main>
    </>
  );
};

export default Home;
