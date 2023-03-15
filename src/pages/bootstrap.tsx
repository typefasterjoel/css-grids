import Head from "next/head";
import React from "react";
import Navigation from "~/components/nav";

function Bootstrap() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-600 to-slate-900">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
      </Head>
      <h1 className="text-5xl font-bold text-white">Bootstrap</h1>
      <Navigation />
    </main>
  );
}

export default Bootstrap;
