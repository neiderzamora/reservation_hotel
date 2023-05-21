import React from "react";
import { Routes, Route } from "react-router-dom";
import Panel from "../pages/Panel";
import Page_not_found from "../pages/Page_not_found";
import Habitaciones from "../pages/Habitaciones";

const AppRoutes = () => {
    return (
      <>
        <Routes>
          <Route path="/panel" element={<Panel />} />
          <Route path="/habitaciones" element={<Habitaciones />} />
          <Route path="/*" element={<Page_not_found />} />
        </Routes>
      </>
    );
  };
  export default AppRoutes;