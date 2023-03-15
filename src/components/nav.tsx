import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <div className="m-5 grid grid-cols-3 items-center justify-center gap-6">
      <Link
        href="/tailwind"
        className="block rounded-lg bg-sky-400 bg-gradient-to-br from-sky-400 to-sky-600 px-6 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:scale-125 hover:bg-sky-700"
      >
        Tailwind
      </Link>
      {/* <Link
        href="/bootstrap"
        className="block rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 px-6 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:scale-125 hover:bg-sky-700"
      >
        Bootstrap
      </Link> */}
      <Link
        href="/vanilla"
        className="block rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 px-6 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:scale-125 hover:bg-sky-700"
      >
        Vanilla
      </Link>
    </div>
  );
}

export default Navigation;
