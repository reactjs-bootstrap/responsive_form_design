import React from "react";
import { Link, Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <h1 className="text-center mt-3 fs-2 fw-bold" style={{ color: "purple" }}>
        React - Responsive Form Design
      </h1>

      <div style={{ textAlign: "center", margin: 0, padding: 0 }}>
        <Link className="btn btn-sm btn-success">Form Design</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
