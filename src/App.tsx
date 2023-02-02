import React from "react";
import ReactDOM from "react-dom";
import { PageLayout } from "./components/PageLayout/PageLayout";

import "./index.scss";

const App = () => (
  <PageLayout>
    <h1>Hello shell</h1>
  </PageLayout>
);
ReactDOM.render(<App />, document.getElementById("app"));
