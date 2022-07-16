import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/:id" exact element={<Detail props={props} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
