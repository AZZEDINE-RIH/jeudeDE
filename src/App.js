import React from "react";
import ReactDOM from "react-dom/client";
import JeuDEFunction from "./JeuDEFunction"; // Ensure this path is correct

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

export default function App() {
  return (
    <div>
      <JeuDEFunction cache={2} />
    </div>
  );
}

root.render(<App />);
