import React, { useState, useEffect } from 'react';
import Header from '../components/admin/Header';
import axios from 'axios';

const AddHabit = () => {
  const apiUrl = 'http://127.0.0.1:8000/habitaciones/api/';

  useEffect(() => {
    fetchHabitaciones();
  }, []);

  const fetchHabitaciones = async () => {
    try {
      const response = await axios.get(`${apiUrl}habitaciones/`);
      setHabitaciones(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const crearHabitacion = async (habitacionData) => {
    try {
      const disponibilidad = habitacionData.disponibilidad === "Disponible";
      const data = { ...habitacionData, disponibilidad };
      const response = await axios.post(`${apiUrl}habitaciones/`, data);
      fetchHabitaciones();
      setHabitaciones([...habitaciones, response.data]);
    } catch (error) {
      console.log(error);
    }
  };
  
  const actualizarHabitacionApi = async (id, habitacionData) => {
    try {
      const disponibilidad = habitacionData.disponibilidad === "Disponible";
      const data = { ...habitacionData, disponibilidad };
      await axios.put(`${apiUrl}habitaciones/${id}/`, data);
      fetchHabitaciones();
      const habitacionActualizada = { ...habitaciones[indiceEdicion], ...habitacionData };
      const nuevasHabitaciones = [...habitaciones];
      nuevasHabitaciones[indiceEdicion] = habitacionActualizada;
      setHabitaciones(nuevasHabitaciones);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarHabitacion = async (id) => {
    try {
      await axios.delete(`${apiUrl}habitaciones/${id}/`);
      fetchHabitaciones();
      const nuevasHabitaciones = habitaciones.filter((habitacion) => habitacion.id !== id);
      setHabitaciones(nuevasHabitaciones);
    } catch (error) {
      console.log(error);
    }
  };

  const [habitaciones, setHabitaciones] = useState([]);
  const [habitacionActual, setHabitacionActual] = useState({
    imagen: '',
    tipo: '',
    precio: '',
    capacidad: '',
    caracteristicas: '',
    numero: '',
    disponibilidad: '',
  });
  const [modoEdicion, setModoEdicion] = useState(false);
  const [indiceEdicion, setIndiceEdicion] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    if (name === 'disponibilidad') {
      const disponibilidad = value === 'Disponible';
      setHabitacionActual({ ...habitacionActual, disponibilidad });
    } else {
      setHabitacionActual({ ...habitacionActual, [name]: value });
    }
  };
  

  const agregarHabitacion = () => {
    if (validarCampos()) {
      crearHabitacion(habitacionActual);
      limpiarFormulario();
    }
  };

  const editarHabitacion = (index) => {
    const habitacionSeleccionada = habitaciones[index];
    setHabitacionActual(habitacionSeleccionada);
    setModoEdicion(true);
    setIndiceEdicion(index);
  };

  const actualizarHabitacion = () => {
    if (validarCampos()) {
      const id = habitaciones[indiceEdicion].id;
      actualizarHabitacionApi(id, habitacionActual);
      limpiarFormulario();
      setModoEdicion(false);
      setIndiceEdicion(null);
    }
  };

  const borrarHabitacion = (index) => {
    const id = habitaciones[index].id;
    eliminarHabitacion(id);
  };

  const limpiarFormulario = () => {
    setHabitacionActual({
      imagen: '',
      tipo: '',
      precio: '',
      capacidad: '',
      caracteristicas: '',
      numero: '',
      disponibilidad: '',
    });
    setError('');
  };

  const validarCampos = () => {
    if (
      habitacionActual.imagen.trim() === '' ||
      habitacionActual.tipo.trim() === '' ||
      habitacionActual.precio.trim() === '' ||
      habitacionActual.capacidad.trim() === '' ||
      habitacionActual.caracteristicas.trim() === '' ||
      habitacionActual.numero.trim() === ''
    ) {
      alert('Todos los campos son obligatorios');
      return false;
    }
  
    // Validar disponibilidad si es una cadena de texto
    if (typeof habitacionActual.disponibilidad === 'string' && habitacionActual.disponibilidad.trim() === '') {
      alert('La disponibilidad es obligatoria');
      return false;
    }
  
    setError('');
    return true;
  };



    
  return (
    <div className="bg-gray-900 text-white">
        <Header></Header>
        <div className='mx-auto p-4'>
    <h1 className="text-2xl font-bold mb-4">Administración de Habitaciones</h1>

    <form className="w-full max-w-lg">
      <div className="flex flex-wrap mb-4">
        <label htmlFor="imagen" className="w-full">
          Imagen:
          <input
            type="text"
            id="imagen"
            name="imagen"
            value={habitacionActual.imagen}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-gray-500"
            required
          />
        </label>
      </div>

      <div className="flex flex-wrap mb-4">
        <label htmlFor="tipo" className="w-full">
          Tipo de Habitación:
          <select
            type="text"
            id="tipo"
            name="tipo"
            value={habitacionActual.tipo}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            required
          >
          <option value="">Seleccione una opción</option>
          <option value="Individual">Habitación Individual</option>
          <option value="Doble">Habitación Doble</option>
          <option value="Familiar">Habitación Familiar</option>
          <option value="Presidencial">Habitación Presidencial</option>
          </select>
        </label>
      </div>

      <div className="flex flex-wrap mb-4">
        <label htmlFor="precio" className="w-full">
          Precio:
          <input
            type="number"
            id="precio"
            name="precio"
            value={habitacionActual.precio}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </label>
      </div>

      <div className="flex flex-wrap mb-4">
        <label htmlFor="capacidad" className="w-full">
          Capacidad:
          <input
            type="number"
            id="capacidad"
            name="capacidad"
            value={habitacionActual.capacidad}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            required
            min={1}
            max={10}
          />
        </label>
      </div>

      <div className="flex flex-wrap mb-4">
        <label htmlFor="caracteristicas" className="w-full">
          Características:
          <input
            type="text"
            id="caracteristicas"
            name="caracteristicas"
            value={habitacionActual.caracteristicas}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </label>
      </div>

      <div className="flex flex-wrap mb-4">
        <label htmlFor="numero" className="w-full">
          Número de Habitación:
          <input
            type="text"
            id="numero"
            name="numero"
            value={habitacionActual.numero}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </label>
      </div>

      <div className="flex flex-wrap mb-4">
        <label htmlFor="disponibilidad" className="w-full">
          Disponibilidad:
          <select
            type="text"
            id="disponibilidad"
            name="disponibilidad"
            value={habitacionActual.disponibilidad}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Disponible">Disponible</option>
            <option value="No_Disponible">No Disponible</option>
        </select>
        </label>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={agregarHabitacion}
          className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 focus:outline-none"
        >
          Añadir Habitación
        </button>
        <button
          type="button"
          onClick={actualizarHabitacion}
          className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 focus:outline-none"
        >
          Actualizar Habitación
        </button>
        <button
          type="button"
          onClick={limpiarFormulario}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
        >
          Limpiar Formulario
        </button>
      </div>
    </form>

    <table className="mt-8 w-full overflow-x-auto">
  <thead>
    <tr>
      <th className="px-4 py-2">Imagen</th>
      <th className="px-4 py-2">Tipo</th>
      <th className="px-4 py-2">Precio</th>
      <th className="px-4 py-2">Capacidad</th>
      <th className="px-4 py-2">Características</th>
      <th className="px-4 py-2">Número de Habitación</th>
      <th className="px-4 py-2">Disponibilidad</th>
      <th className="px-4 py-2">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {habitaciones.map((habitacion, index) => (
      <tr key={index}>
        <td className="px-4 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis">{habitacion.imagen.slice(0, 10)}</td>
        <td className="px-4 py-2">{habitacion.tipo}</td>
        <td className="px-4 py-2">{habitacion.precio}</td>
        <td className="px-4 py-2">{habitacion.capacidad}</td>
        <td className="px-4 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
          {habitacion.caracteristicas.slice(0, 30)}
        </td>
        <td className="px-4 py-2">{habitacion.numero}</td>
        <td className="px-4 py-2">{habitacion.disponibilidad}</td>
        <td className="px-4 py-2">
          <button
            type="button"
            onClick={() => editarHabitacion(index)}
            className="mr-2 px-2 py-1 bg-blue-400 text-white rounded hover:bg-blue-500 focus:outline-none"
          >
            Editar
          </button>
          <button
            type="button"
            onClick={() => borrarHabitacion(index)}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
          >
            Borrar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
  </div> 
  </div>   

);
};


export default AddHabit