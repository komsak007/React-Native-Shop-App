import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { composeWithDevTools } from "redux-devtools-extension";

import CartReducer from "./store/reducers/cart";
import productsReducer from "./store/reducers/products";
import orderReducer from "./store/reducers/orders";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: CartReducer,
  orders: orderReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
