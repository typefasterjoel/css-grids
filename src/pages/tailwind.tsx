import React from "react";
import Navigation from "~/components/nav";

function Tailwind() {
  const columns = Array.from(Array(6).keys());

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-600 to-slate-900">
      <h1 className="text-5xl font-bold text-white">TailwindCSS</h1>
      <div className="grid w-full grid-cols-2 gap-8">
        <div className="m-8 grid grid-cols-6 gap-6">
          {columns.map((column, index) => (
            <div
              key={`col-${index}`}
              className="flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl"
            >
              {column}
            </div>
          ))}
        </div>
        <div className="m-8 grid grid-cols-4 grid-rows-5 gap-6">
          <div className="row-span-2 flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            1
          </div>
          <div className="col-span-2 flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            2
          </div>
          <div className="col-span-1 col-start-4 row-span-full flex items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-400 to-fuchsia-600 p-4 text-4xl font-bold text-white shadow-xl">
            3
          </div>
          <div className="flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            4
          </div>
          <div className="flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            5
          </div>
          <div className="col-span-3 flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            6
          </div>
          <div className="flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            7
          </div>
          <div className="flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            8
          </div>
          <div className="flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            9
          </div>
          <div className="col-span-3 flex items-center justify-center rounded-md bg-gradient-to-tr from-pink-400 to-pink-600 p-4 text-4xl font-bold text-white shadow-xl">
            10
          </div>
        </div>
      </div>
      <Navigation />
    </main>
  );
}

export default Tailwind;
