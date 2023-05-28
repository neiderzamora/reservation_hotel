import React from "react";
import { Routes, Route } from "react-router-dom";
import Panel from "../pages/Panel";
import Page_not_found from "../pages/Page_not_found";
import Habitaciones from "../pages/Habitaciones";
import EditReserve from "../pages/EditReserve";
import Reserva from "../pages/Reserva";

const AppRoutes = () => {
    return (
      <>
        <Routes>
          <Route path="/panel" element={<Panel />} />
          <Route path="/" element={<Habitaciones />} />
          <Route path="/reservar" element={<Reserva />} />
          
        </Routes>
      </>
    );
  };
  export default AppRoutes;