import React from "react";
import { Routes, Route } from "react-router-dom";
import Panel from "../pages/Panel";
import Page_not_found from "../pages/Page_not_found";
import Habitaciones from "../pages/Habitaciones";
import EditReserve from "../pages/EditReserve";
import Reserva from "../pages/Reserva";
import AddHabit from "../pages/AddHabit";

const AppRoutes = () => {
    return (
      <>
        <Routes>
          <Route path="/panel" element={<Panel />} />
          <Route path="/" element={<Habitaciones />} />
          <Route path="/reservar" element={<Reserva />} />
          <Route path="/add" element={<AddHabit />} />
          <Route path="/editarreserva" element={<EditReserve />} /> {/* agregar el id cuando se consuma datos del back */}
          {/* <Route path="/habitaciones" element={<Habitaciones />} /> */}
          <Route path="/*" element={<Page_not_found />} />
        </Routes>
      </>
    );
  };
  export default AppRoutes;