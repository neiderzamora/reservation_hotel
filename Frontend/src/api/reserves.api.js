import axios from "axios";

const reserveApi = axios.create({
  baseURL: "http://127.0.0.1:8000/reservas/api",
});

export const getReserves = () => reserveApi.get("/reservas/");
export const getReserve = (id) => reserveApi.get(`/reservas/${id}/`);
export const createReserve = (reserve) =>
  reserveApi.post("/reservaspost/", reserve);
export const deleteReserve = (id) => reserveApi.delete(`/reservas/${id}/`);
export const updateReserve = (id, reserve) =>
  reserveApi.put(`/reservas/${id}/`, reserve);