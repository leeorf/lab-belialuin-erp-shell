import React from "react";
import { createRoot } from "react-dom/client";
import { Shell } from "./components/Shell";
import "./index.scss";

const mount = (el) => {
  const root = createRoot(el);
  root.render(
    <Shell>
      <div className="flex items-center justify-center bg-gray-100 h-full">
        <h1 className="text-9xl ">It's empty here... 🤕</h1>
      </div>{" "}
    </Shell>
  );
};

const devRoot = document.getElementById("app");
mount(devRoot);
