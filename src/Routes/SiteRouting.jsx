import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Service } from "../Pages/Service";
import { Header } from "../Components/Dynamic-Components/Header";
import { Footer } from "../Components/Dynamic-Components/Footer";
import { Store } from "../Pages/Store";
import { SignInCheckup } from "../Components/Dynamic-Components/SignInCheckup";

let DynamicPages = () => {
  return (
    <>
      <Header />
      <SignInCheckup>
        <Outlet />
      </SignInCheckup>
      <Footer />
    </>
  );
};

export const SiteRouting = () => {
  let Router = createBrowserRouter([
    {
      path: "/",
      element: <DynamicPages />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/service", element: <Service /> },
        { path: "/store", element: <Store /> },
      ],
    },
  ]);

  return <RouterProvider router={Router} />;
};
