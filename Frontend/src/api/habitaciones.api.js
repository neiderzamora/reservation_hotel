import axios from "axios";

const habitacionesApi = axios.create({
  baseURL: "http://127.0.0.1:8000/habitaciones/api",
});

export const getHabitaciones = (token) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  };
  return habitacionesApi.get("/habitaciones/", config);
};

export const getHabitaciones = (id, token) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  };
  return habitacionesApi.get(`/habitaciones/${id}/`, config);
};

export const createHabitacion = (habitaciones) =>
  habitacionesApi.post("/habitacionespost/", habitaciones);

export const deleteHabitaciones = (id, token) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  };
  return habitacionesApi.delete(`/habitaciones/${id}/`, config);
};

export const updateHabitaciones = (id, habitaciones, token) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  };
  return habitacionesApi.put(`/habitaciones/${id}/`, habitaciones, config);
};
