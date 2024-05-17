import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Survey from "./pages/Survey.jsx";
import Results from "./pages/Results.jsx";
import { SurveyProvider } from "./utils/context/SurveyContext.jsx";
import ImgIdentification from "./pages/ImgIdentification.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/survey/:questionNumber", element: <Survey /> },
  { path: "/results", element: <Results /> },
  { path: "img-identification", element: <ImgIdentification /> },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SurveyProvider>
      <RouterProvider router={router} />
    </SurveyProvider>
  </React.StrictMode>,
);
