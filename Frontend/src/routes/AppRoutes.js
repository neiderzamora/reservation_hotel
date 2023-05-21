import React from "react";
import { Routes, Route } from "react-router-dom";
import Panel from "../pages/Panel";
import Page_not_found from "../pages/Page_not_found";

const AppRoutes = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Panel />} />
          <Route path="/" element={<Page_not_found />} />
        </Routes>
      </>
    );
  };
  export default AppRoutes;