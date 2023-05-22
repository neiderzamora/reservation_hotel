import {
  UsersIcon,
  PhoneArrowUpRightIcon,
  AtSymbolIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { TrashIcon, CakeIcon } from "@heroicons/react/24/outline";

import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Select from "react-select";

const Table = () => {
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

                  <th className="p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Descripción
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Estado
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Nombre
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Apellido
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Fecha
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Hora
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Fecha Creación
                  </th>

                  <th className="w-32 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Correo
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200">
                    Numero Telefono
                  </th>

                  <th className="w-24 p-3 text-sm font-WinterPoppins tracking-wide text-left text-gray-200"></th>
                </tr>
              </thead>

              {/* 
              <tbody className="divide-y divide-gray-100 dark:divide-gray-900">
                  {currentPageData.map((item, index) => (
                    <tr
                      key={item.id}
                      className={`${
                        index % 2 === 0
                          ? "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-950 cursor-pointer"
                          : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-950 cursor-pointer"
                      }`}
                    >
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <b className="font-bold text-blue-500 font-WinterPoppins">
                          {item.num_person}
                        </b>
                      </td>
  
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                        {item.description}
                      </td>
  
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200">
                        <span
                          className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg font-WinterPoppins bg-opacity-50 ${
                            item.status.toLowerCase() === "activo"
                              ? "text-green-800 bg-green-200 dark:text-green-200 dark:bg-green-800"
                              : "dark:text-red-200 dark:bg-red-800 text-red-800 bg-red-200"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
  
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                        {item.campus}
                      </td>
  
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                        {item.name}
                      </td>
  
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                        {item.last_name}
                      </td>
  
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                        {item.date}
                      </td>
  
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                        {item.hour}
                      </td>
  
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                        {item.created_at}
                      </td>
  
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                        {item.email}
                      </td>
  
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                        {item.telefone_number}
                      </td>
  
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                        {item.decoration ? "Sí" : "No"}
                      </td>
  
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex items-center space-x-2">
                        <Link to={`/editar-reserva/${item.id}`}>
                          <PencilSquareIcon className="h-5 w-5 text-gray-80 dark:text-gray-200" />
                        </Link>
                        <button onClick={() => handleDelete(item.id)}>
                          <TrashIcon className="h-5 w-5 text-red-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody> 
                */}
              <tbody className="divide-y divide-gray-100 dark:divide-gray-900">
                <tr className="bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-950 cursor-pointer">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <b className="font-bold text-blue-500 font-WinterPoppins">
                      12
                    </b>
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                    reserva con niños
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                    activo
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                    jordan
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                    cacorro
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                    15/05/2023
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                    15:00
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                    14/15/2023 17:00
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                    jordangei@gmail.com
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-gray-200 font-WinterPoppins">
                    312975614
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex items-center space-x-2">
                    <Link to="/editarreserva">
                      <PencilSquareIcon className="h-5 w-5 text-gray-80 dark:text-gray-200" />
                    </Link>
                    <button>
                      <TrashIcon className="h-5 w-5 text-red-600" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/*             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
              {currentPageData.map((item) => (
                <div className="bg-white space-y-3 p-4 rounded-lg shadow dark:bg-gray-800 dark:shadow-lg dark:shadow-offset-x-2 dark:shadow-offset-y-4 dark:shadow-opacity-50 dark:shadow-color-blue-500 hover:bg-gray-100 dark:hover:bg-gray-950">
                  <div className="flex items-center space-x-2 text-sm">
                    <UsersIcon className="text-blue-500 font-bold h-5 w-5" />
                    <div>
                      <b className="text-blue-500 font-bold">{item.num_person}</b>
                    </div>
  
                    <div className="text-blue-800 bg-blue-200 rounded-lg bg-opacity-50 p-1.5 tracking-wider text-xs font-medium dark:bg-blue-800 dark:text-blue-200">
                      {item.date}
                    </div>
                    <div className="text-blue-800 bg-blue-200 rounded-lg bg-opacity-50 p-1.5 tracking-wider text-xs font-medium dark:bg-blue-800 dark:text-blue-200">
                      {item.hour}
                    </div>
  
                    <div>
                      <span
                        className={`p-1.5 text-xs font-medium uppercase tracking-wider  rounded-lg bg-opacity-50 ${
                          item.status.toLowerCase() === "activo"
                            ? "text-green-800 bg-green-200 dark:bg-green-800 dark:text-green-200"
                            : "text-red-800 bg-red-200 dark:bg-red-800 dark:text-red-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
  
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="text-gray-500 dark:text-gray-200">
                      {item.name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-200">
                      {item.last_name}
                    </div>
  
                    <div>
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 dark:bg-yellow-800 dark:text-yellow-200">
                        {item.campus}
                      </span>
                    </div>
                  </div>
  
                  <div className="flex items-center space-x-2 text-sm">
                    <PhoneArrowUpRightIcon className="w-5 h-5 text-gray-600 dark:text-gray-50" />
  
                    <div className="text-gray-500 dark:text-gray-200">
                      {item.telefone_number}
                    </div>
                    <div className="text-blue-800 rounded-lg bg-opacity-50 p-1.5 tracking-wider text-xs font-medium dark:text-blue-400">
                      {item.created_at}
                    </div>
                  </div>
  
                  <div className="flex items-center space-x-2 text-sm">
                    <AtSymbolIcon className="w-5 h-5 dark:text-gray-50 " />
  
                    <div className="text-sm text-gray-700 dark:text-gray-200">
                      {item.email}
                    </div>
                  </div>
  
                  <div className="flex items-center space-x-2 text-sm">
                    <CakeIcon className="w-5 h-5  dark:text-yellow-200" />
  
                    <div className="text-sm text-gray-700 dark:text-gray-200">
                      {item.decoration ? "Sí" : "No"}
                    </div>
                  </div>
  
                  <div className="text-sm text-gray-700 dark:text-gray-200">
                    {item.description}
                  </div>
  
                  <hr className="my-4 border border-solid border-gray-600 border-opacity-50 dark:border-gray-400" />
  
                  <div className="flex items-center justify-end space-x-2 text-sm">
                    <button className="bg-gray-200 rounded-3xl w-9 flex items-center justify-center dark:bg-gray-900">
                      <Link to={`/editar-reserva/${item.id}`}>
                        <PencilSquareIcon className="h-8 w-8 p-1 text-gray-800 dark:text-gray-200" />
                      </Link>
                    </button>
  
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-gray-200 rounded-3xl w-9 flex items-center justify-center dark:bg-gray-900"
                    >
                      <TrashIcon className="h-8 w-8 p-1 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            <div className="space-y-3 p-4 rounded-lg bg-gray-800 shadow-lg shadow-offset-x-2 shadow-offset-y-4 shadow-opacity-50 shadow-color-blue-500">
              <div className="flex items-center space-x-2 text-sm">
                <UsersIcon className="text-blue-500 font-bold h-5 w-5" />
                <div>
                  <b className="text-blue-500 font-bold">12</b>
                </div>

                <div className="rounded-lg bg-opacity-50 p-1.5 tracking-wider text-xs font-medium bg-blue-800 text-blue-200">
                  15/05/2023
                </div>
                <div className="rounded-lg bg-opacity-50 p-1.5 tracking-wider text-xs font-medium bg-blue-800 text-blue-200">
                  15:00
                </div>

                <div>
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider  rounded-lg bg-opacity-50 bg-green-800 text-green-200">
                    activo
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <div className="text-gray-200">jordan</div>
                <div className="text-gray-200">cacorro</div>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <PhoneArrowUpRightIcon className="w-5 h-5 text-gray-50" />

                <div className="text-gray-200">31264958741</div>
                <div className="rounded-lg bg-opacity-50 p-1.5 tracking-wider text-xs font-medium text-blue-400">
                  14/05/2023 17:00
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <AtSymbolIcon className="w-5 h-5 text-gray-50 " />

                <div className="text-sm text-gray-200">
                  jordancacorro@gmail.com
                </div>
              </div>

              <div className="text-sm text-gray-200">reserva con niños</div>

              <hr className="my-4 border border-solid border-opacity-50 border-gray-400" />

              <div className="flex items-center justify-end space-x-2 text-sm">
                <button className="rounded-3xl w-9 flex items-center justify-center bg-gray-900">
                <Link to="/editarreserva">
                  <PencilSquareIcon className="h-8 w-8 p-1 text-gray-200" />
                  </Link>
                </button>

                <button className="rounded-3xl w-9 flex items-center justify-center bg-gray-900">
                  <TrashIcon className="h-8 w-8 p-1 text-red-500" />
                </button>
              </div>
            </div>
          </div>
          {/* vista de movil */}
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Table;
