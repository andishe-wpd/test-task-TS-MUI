import { Provider } from "react-redux";

import store from "./store";

import "./App.css";
import BoxWrapper from "./component/interface/BoxWrapper";
import Header from "./component/interface/Header";

const AppWrapper = () => (
  <Provider store={store}>
    <Header />
    <BoxWrapper />
  </Provider>
);

export default AppWrapper;
