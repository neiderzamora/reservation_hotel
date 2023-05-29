import axios from "axios";

const reserveApi = axios.create({
  baseURL: "http://127.0.0.1:8000/reservas/api",
});

export const getReserves = (token) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  };
  return reserveApi.get("/reservas/", config);
};

export const getReserve = (id, token) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  };
  return reserveApi.get(`/reservas/${id}/`, config);
};

export const createReserve = (reserve) =>
  reserveApi.post("/reservaspost/", reserve);

export const deleteReserve = (id, token) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  };
  return reserveApi.delete(`/reservas/${id}/`, config);
};

export const updateReserve = (id, reserve, token) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  };
  return reserveApi.put(`/reservas/${id}/`, reserve, config);
};
