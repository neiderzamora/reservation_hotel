import {
  UsersIcon,
  PhoneArrowUpRightIcon,
  MegaphoneIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { TrashIcon, CakeIcon } from "@heroicons/react/24/outline";

import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getReserves, deleteReserve } from "../../api/reserves.api";
import { toast } from "react-hot-toast";
import Select from "react-select";

const Table = () => {
  const [reservas, setReservas] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await getReserves(token);
        setReservas(response.data);
      } catch (error) {
        toast.error("Error al cargar los datos", {
          position: "top-right",
        });
        console.error("Error al obtener las reservas:", error);
      }
    };

    fetchReservas();
  }, []);

  const handleDeleteReserve = async (id) => {
    try {
      await deleteReserve(id, token);
      setReservas(reservas.filter((reserva) => reserva.id !== id));
      toast.success("Reserva eliminada con éxito", {
        position: "top-right",
      });
    } catch (error) {
      console.error("Error al eliminar la reserva:", error);
    }
  };

  /* const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 8;
    const [selectedCampus, setSelectedCampus] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
  
    useEffect(() => {
      getReserves()
        .then((response) => {
          setTotalPages(Math.ceil(response.data.length / itemsPerPage));
          setData(response.data);
          setFilteredData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    const handleDelete = (id) => {
      deleteReserve(id)
        .then(() => {
          toast.success("Reserva eliminada con éxito", {
            position: "top-right",
          });
          setData(data.filter((item) => item.id !== id));
          setFilteredData(filteredData.filter((item) => item.id !== id));
        })
        .catch((error) => {
          toast.error("Error, la reserva no ha sido eliminada", {
            position: "top-right",
          });
          console.error(`Error al eliminar reserva con ID ${id}:`, error);
        });
    };
  
    const handleCampusChange = (selectedOption) => {
      setSelectedCampus(selectedOption);
    };
  
    useEffect(() => {
      const filteredByCampus = selectedCampus
        ? data.filter((item) => item.campus === selectedCampus.value)
        : data;
  
      const results = filteredByCampus.filter((item) =>
        Object.values(item).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
  
      setFilteredData(results);
      setTotalPages(Math.ceil(results.length / itemsPerPage));
      setCurrentPage(1);
    }, [data, selectedCampus, searchTerm]); 
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = filteredData.slice(startIndex, endIndex);
  */
  return (
    <>
      <div className="sm:flex sm:flex-col min-h-screen bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 xl:max-w-full">
          {/* <Select
              options={campusOptions}
              value={selectedCampus}
              onChange={handleCampusChange}
              className="sm:w-auto max-w-[14rem] px-3 py-2 mb-3 border text-gray-700 font-semibold dark:text-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900 dark:focus:ring-blue-500 inline-flex mr-5 font-WinterPoppins"
              styles={{
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected
                    ? "var(--color-blue-500)"
                    : state.isFocused
                    ? "var(--color-blue-100)"
                    : "transparent",
                  color: state.isSelected ? "#fff" : "inherit",
                  "&:hover": {
                    backgroundColor: state.isSelected
                      ? "var(--color-blue-500)"
                      : "var(--color-blue-100)",
                    color: state.isSelected ? "#fff" : "inherit",
                  },
                  backdropFilter: "blur(5px)", // agrega el efecto de desenfoque
                }),
                control: (provided, state) => ({
                  ...provided,
                  backgroundColor: "var(--color-gray-100)",
                  borderColor: "var(--color-gray-300)",
                  "&:hover": {
                    borderColor: state.isFocused
                      ? "var(--color-blue-500)"
                      : "var(--color-gray-400)",
                  },
                  "&:active": {
                    backgroundColor: "var(--color-gray-200)",
                  },
                  boxShadow: state.isFocused
                    ? "0 0 0 2px var(--color-blue-500)"
                    : "none",
                }),
                singleValue: (provided, state) => ({
                  ...provided,
                  color: "inherit",
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 4,
                colors: {
                  ...theme.colors,
                  primary25: "var(--color-blue-100)",
                  primary: "var(--color-blue-500)",
                  neutral0: "var(--color-gray-100)",
                  neutral50: "var(--color-gray-300)",
                  neutral80: "var(--color-gray-700)",
                },
              })}
              placeholder="Filtrar Sede"
              isSearchable={false}
              aria-label="Filtrar Sede"
            />
            <div className="relative inline-block max-w-screen-2xl text-gray-400 dark:text-gray-500 font-WinterPoppins">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                  </div>
                  <input
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 rounded-full bg-white border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-1 dark:focus:ring-blue-500"
                    placeholder="Buscar reserva..."
                  />
                </div>
              </div>
            </div> */}

          <h1 className="text-2xl my-4 text-gray-200 font-Rostley">
            Tus reservas
          </h1>

          <div className="overflow-auto rounded-lg shadow hidden md:block max-w-full sm:max-w-full md:max-w-xl lg:max-w-4xl xl:max-w-full">
            <table className="max-w-full table-auto w-full md:w-auto lg:w-auto xl:w-full">
              <thead className="border-b-2 bg-gray-700 border-gray-800">
                <tr>
                  <th className="w-5 p-3 text-sm font-semibold tracking-wide text-left text-gray-200">
                    <UsersIcon className="text-blue-500 font-bold h-5 w-5" />
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Nombres
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Apellidos
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Fecha
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Hora
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Metodo de Pago
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Direccion Factura
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Habitacion
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Telefono
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Estado
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 dark:divide-gray-900">
                {reservas.map((reserva, index) => (
                  <tr
                    key={reserva.id}
                    className={`${
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-950 cursor-pointer"
                        : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-950 cursor-pointer"
                    }`}
                  >
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <b className="font-bold text-blue-500 font-WinterPoppins">
                        {reserva.estancia}
                      </b>
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                      {reserva.primer_nombre}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                      {reserva.segundo_nombre}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                      {reserva.fecha}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                      {reserva.hora}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                      {reserva.metodo_pago}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                      {reserva.direccion_factura}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                      {reserva.habitacion}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                      {reserva.numero_contacto}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                      {reserva.estado ? "Disponible" : "No Dispobible"}
                    </td>

                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex items-center space-x-2">
                      <Link to={`/editar-reserva/${reserva.id}`}>
                        <PencilSquareIcon className="h-5 w-5 text-gray-80 dark:text-gray-200" />
                      </Link>
                      <button
                        title="Eliminar reserva"
                        onClick={() => handleDeleteReserve(reserva.id)}
                      >
                        <TrashIcon className="h-5 w-5 text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {reservas.map((reserva) => (
              <div className="space-y-3 p-4 rounded-lg bg-gray-800 shadow-lg shadow-offset-x-2 shadow-offset-y-4 shadow-opacity-50 shadow-color-blue-500">
                <div className="flex items-center space-x-2 text-sm">
                  <UsersIcon className="text-blue-500 font-bold h-5 w-5" />
                  <div>
                    <b className="text-blue-500 font-bold">
                      {reserva.estancia}
                    </b>
                  </div>

                  <div className="rounded-lg bg-opacity-50 p-1.5 tracking-wider text-xs font-medium bg-blue-800 text-blue-200">
                    {reserva.fecha}
                  </div>
                  <div className="rounded-lg bg-opacity-50 p-1.5 tracking-wider text-xs font-medium bg-blue-800 text-blue-200">
                    {reserva.hora}
                  </div>

                  <div>
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider  rounded-lg bg-opacity-50 bg-green-800 text-green-200">
                      {reserva.metodo_pago}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <div className="text-gray-200">{reserva.primer_nombre}</div>
                  <div className="text-gray-200">{reserva.segundo_nombre}</div>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <PhoneArrowUpRightIcon className="w-5 h-5 text-gray-50" />

                  <div className="text-gray-200">{reserva.numero_contacto}</div>
                  <MegaphoneIcon className="text-red-500 font-bold h-5 w-5" />
                  <div>
                    <b className="text-red-200 font-bold">
                      {reserva.estado ? "Disponible" : "No Dispobible"}
                    </b>
                  </div>
                </div>

                <hr className="my-4 border border-solid border-opacity-50 border-gray-400" />

                <div className="flex items-center justify-end space-x-2 text-sm">
                  <button className="bg-gray-200 rounded-3xl w-9 flex items-center justify-center dark:bg-gray-900">
                    <Link to={`/editar-reserva/${reserva.id}`}>
                      <PencilSquareIcon className="h-8 w-8 p-1 text-gray-800 dark:text-gray-200" />
                    </Link>
                  </button>

                  <button
                    onClick={() => handleDeleteReserve(reserva.id)}
                    className="bg-gray-200 rounded-3xl w-9 flex items-center justify-center dark:bg-gray-900"
                  >
                    <TrashIcon className="h-8 w-8 p-1 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* vista de movil */}
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Table;
