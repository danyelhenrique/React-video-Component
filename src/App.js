import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Hero from "./hero";
import Main from "./components/main";

import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Hero>
          <Header />
          <Sidebar />
          <Main>
            <Routes />
          </Main>
        </Hero>
      </Provider>
    </div>
  );
}
export default App;
