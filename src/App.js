import React from "react";
import LoginScreen from "./Component/LoginScreen";
import LoginSuccess from "./Component/LoginSuccess";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LoginScreen} />

        <Route exact path="/LoginSuccess" component={LoginSuccess} />
      </div>
    </BrowserRouter>
  );
}

export default App;
