import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import Layout from "./components/Layout/index.tsx";
import Contact from "./pages/Contact/index.tsx";
import Register from "./pages/Register/index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="contact" element={<Contact />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
