import React from "react";
import { BrowserRouter } from "react-router-dom";
import DashboardRoute from "./routes/admin/DashboardRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <DashboardRoute />
      </BrowserRouter>
    </>
  );
};

export default App;
