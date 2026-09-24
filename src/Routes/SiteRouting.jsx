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
import { RegisterUser } from "../Components/Dynamic-Components/RegisterUser";
import { LoginUser } from "../Components/Dynamic-Components/LoginUser";
import { Cart } from "../Pages/Cart";
import { CartPopUp } from "../Components/Dynamic-Components/CartPopUp";
import { useContext } from "react";
import { MystoreContext } from "../Components/Context/StoreContext";
import { AccountPage } from "../Components/Dynamic-Components/AccountPage";
import { SingleProductPage } from "../Components/Dynamic-Components/SingleProductPage";

let DynamicPages = () => {
  const { CartPopUpToggle } = useContext(MystoreContext);

  return (
    <>
      <Header />
      <SignInCheckup>
        {/* {CartPopUpToggle && <CartPopUp />} */}
        <CartPopUp />

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
        { path: "/cart", element: <Cart /> },
        { path: "/register", element: <RegisterUser /> },
        { path: "/login", element: <LoginUser /> },
        { path: "/Account", element: <AccountPage /> },
        { path: "/singlepage", element: <SingleProductPage /> },
      ],
    },
  ]);

  return <RouterProvider router={Router} />;
};
