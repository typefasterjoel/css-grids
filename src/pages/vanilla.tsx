import React from "react";
import Navigation from "~/components/nav";

function Vanilla() {
  const columns = Array.from(Array(6).keys());
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-600 to-slate-900">
      <h1 className="text-5xl font-bold text-white">Vanilla</h1>
      <div className="m-8 grid w-full grid-cols-1 gap-8 p-8">
        <div className="v-grid">
          {columns.map((column, index) => (
            <div
              key={`col-${index}`}
              className="flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl"
            >
              {column}
            </div>
          ))}
        </div>
        <div className="v-grid-area">
          <div className="v-grid-area-header flex items-center justify-center rounded-md bg-gradient-to-tr from-purple-400 to-purple-600 p-4 text-4xl font-bold text-white shadow-xl">
            header
          </div>
          <div className="v-grid-area-tall flex items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-400 to-fuchsia-600 p-4 text-4xl font-bold text-white shadow-xl">
            tall
          </div>
          <div className="flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            short
          </div>
          <div className="flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            short
          </div>
          <div className="flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            short
          </div>
          <div className="flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            short
          </div>
          <div className="v-grid-area-medium flex items-center justify-center rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-600 p-4 text-4xl font-bold text-white shadow-xl">
            medium
          </div>
          <div className="v-grid-area-footer flex items-center justify-center rounded-md bg-gradient-to-tr from-blue-400 to-blue-600 p-4 text-4xl font-bold text-white shadow-xl">
            footer
          </div>
        </div>
      </div>
      <Navigation />
    </main>
  );
}

export default Vanilla;
