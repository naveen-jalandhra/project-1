import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartPopUp } from "../Dynamic-Components/CartPopUp";

export let MystoreContext = createContext();

export let ContextFnc = ({ children }) => {
  // Login Account Realated Coding +++++++++++++++++++++++++++++++++++++++++++

  const [Login, setLogin] = useState(
    JSON.parse(localStorage.getItem("Loggedin")) || false,
  );
  const [Accounts, setAccounts] = useState(
    JSON.parse(localStorage.getItem("SavedAccounts")) || [],
  );
  const [UserEmail, setUserEmail] = useState(
    JSON.parse(localStorage.getItem("SavedLoginEmail")) || "",
  );
  const [UserPassword, setUserPassword] = useState(
    JSON.parse(localStorage.getItem("SavedLoginPassword")) || "",
  );
  const [UserInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("AccountInfo")),
  );
  const [RegistrationPanel, setRegistrationPanel] = useState(true);
  let CheckLogFnc = () => {
    let IsExist = Accounts.find(
      (User) => User.Email === UserEmail && User.Password === UserPassword,
    );
    setUserInfo(IsExist);

    if (IsExist) {
      setLogin(true);
      localStorage.setItem("SavedLoginEmail", JSON.stringify(UserEmail));
      localStorage.setItem("SavedLoginPassword", JSON.stringify(UserPassword));
      localStorage.setItem("Loggedin", JSON.stringify(true));
      localStorage.setItem("AccountInfo", JSON.stringify(IsExist));

      return true;
    } else {
      setLogin(false);
      return false;
    }
  };

  // --------------------------------------------------------------------------

  // Product Data Main Data is here by API ++++++++++++++++++++++++++++++++++++
  const [CurrentProducts, setCurrentProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || [],
  );

  useEffect(() => {
    let ProductAllData = async () => {
      try {
        let Result = await axios.get("https://fakestoreapi.com/products");
        localStorage.setItem("products", JSON.stringify(Result.data));
        setCurrentProducts(Result.data);
        console.log(Result.data);
      } catch (error) {
        console.log(error);
      }
    };
    ProductAllData();
  }, []);
  //-------------------------------------------------------------------------------

  // main cart is here ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const [CartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("SavedCart")) || [],
  );

  const [CartAmount, setCartAmount] = useState(0);

  // Add to cart ==

  let TotalAmount = () => {
    let CalculatedAmount = CartItems.reduce((Amount, Item) => {
      return Amount + Number(Item.price * Item.quantity);
    }, 0);
    CalculatedAmount = ((CalculatedAmount * 100) / 100).toFixed(2);
    setCartAmount(CalculatedAmount);
    console.log(CalculatedAmount);
  };
  useEffect(() => {
    TotalAmount();
  }, [CartItems]);

  let AddToCartFnc = (Item) => {
    let IsExist = CartItems.find((Xitems) => Xitems.id === Item.id);

    if (IsExist) {
      let data = CartItems.map((prev) =>
        prev.id === Item.id ? { ...prev, quantity: prev.quantity + 1 } : prev,
      );

      setCartItems(data);
      localStorage.setItem("SavedCart", JSON.stringify(data));
    } else {
      let data = [...CartItems, { ...Item, quantity: 1 }];

      setCartItems(data);
      localStorage.setItem("SavedCart", JSON.stringify(data));
    }
  };

  let RemoveFromCart = (Item) => {
    let data = CartItems.filter((elem) => elem.id !== Item.id);
    localStorage.setItem("SavedCart", JSON.stringify(data));
    setCartItems(data);
  };

  let IncreaseFnc = (Item) => {
    let data = CartItems.map((elem) =>
      elem.id === Item.id ? { ...elem, quantity: elem.quantity + 1 } : elem,
    );
    setCartItems(data);
    localStorage.setItem("SavedCart", JSON.stringify(data));
  };

  let DecreaseFnc = (Item) => {
    let data = CartItems.map((elem) => {
      if (elem.id === Item.id) {
        return { ...elem, quantity: elem.quantity - 1 };
      }

      return elem;
    }).filter((elem) => elem.quantity > 0);

    setCartItems(data);
    localStorage.setItem("SavedCart", JSON.stringify(data));
  };

  // -------------------------------------------------------------------------------

  //  Cart Popup+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const [CartPopUpToggle, setCartPopUpToggle] = useState(false);

  // --------------------------------------------------------------------------------

  // Logout Fnc ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const [LogoutUser, setLogoutUser] = useState(false);

  let LogoutUserFnc = () => {
    localStorage.removeItem("Loggedin");
    setLogin(LogoutUser);
  };
  // -----------------------------------------------------------------------------------

  // category filter +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // let AllCategories = [];

  let AllCategories = [
    "All",
    ...new Set(CurrentProducts.map((item) => item.category)),
  ];

  const [CategorisedProduct, setCategorisedProduct] = useState(CurrentProducts);

  let CategoryProduct = (cat) => {
    if (cat === "All") {
      setCategorisedProduct(CurrentProducts);
    } else {
      let filterProduct = CurrentProducts.filter(
        (elems) => elems.category === cat,
      );
      setCategorisedProduct(filterProduct);
    }
  };

  // -------------------------------------------------------------------------------------------------

  // single product page function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [CurrentSinglePageItme, setCurrentSinglePageItme] = useState(null);
  let singlePageFnc = (item) => {
    let product = CurrentProducts.find((prev) => prev.id === item.id);
    setCurrentSinglePageItme(product);
    
  };

  // --------------------------------------------------------------------------------------------------

  return (
    <MystoreContext.Provider
      value={{
        Login,
        setLogin,
        CheckLogFnc,
        Accounts,
        setAccounts,
        UserEmail,
        setUserEmail,
        UserPassword,
        setUserPassword,
        RegistrationPanel,
        setRegistrationPanel,
        CurrentProducts,
        setCurrentProducts,
        CartItems,
        setCartItems,
        AddToCartFnc,
        RemoveFromCart,
        IncreaseFnc,
        DecreaseFnc,
        CartAmount,
        setCartAmount,
        CartPopUpToggle,
        setCartPopUpToggle,
        LogoutUserFnc,
        UserInfo,
        CategoryProduct,
        CategorisedProduct,
        AllCategories,
        CurrentSinglePageItme,
        setCurrentSinglePageItme,
        singlePageFnc,
      }}
    >
      {children}
    </MystoreContext.Provider>
  );
};
