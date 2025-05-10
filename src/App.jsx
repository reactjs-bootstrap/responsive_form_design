import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Home from "./Pages/Home";
import Form from "./Pages/Form";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form></Form>}>
          <Route path="/form" element={<Form></Form>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
