import React from "react";

function Footer() {
  return (
    <>
      <footer className="bottom-0 flex flex-col justify-center items-center p-5 mt-8">
        <p className="text-slate-400">Created by IsaacDev</p>
        <p className="text-slate-400 text-lg">
          Inspired by{" "}
          <a
            href="https://brittanychiang.com/"
            className="font-semibold text-cyan-400 hover:underline"
          >
            Brittany Chiang
          </a>
        </p>{" "}
      </footer>
    </>
  );
}

export default Footer;
