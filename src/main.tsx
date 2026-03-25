import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./components/ui/provider"; // Import the local provider snippet
import App from "./App.jsx";

const rootElement = document.getElementById("root")!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* Use the Provider from your snippets folder instead of ChakraProvider */}
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);
