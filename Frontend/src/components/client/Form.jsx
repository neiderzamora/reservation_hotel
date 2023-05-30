import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState({
    estancia: "",
    primer_nombre: "",
    segundo_nombre: "",
    hora: "",
    numero_contacto: "",
    metodo_pago: "",
    direccion_factura: "",
    habitacion: "",
    estado: true,
    identificacion: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name === "campus" ? "campus" : name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/reservas/reservascreate/",
        formData
      );
      toast.success("Reserva creada con exito", {
        position: "top-right",
      });
      console.log(response);
      setTimeout(() => {
        window.location.reload(); // recarga la página después de 5 segundos
      }, 1500); // establece un temporizador de 5 segundos
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          // bad request status code
          const errors = error.response.data;
          const errorMessages = {
            primer_nombre: (message) =>
              toast.error(message.join("\n"), { position: "top-center" }),
            fecha: (message) =>
              toast.error(message.join("\n"), { position: "top-center" }),
            numero_contacto: (message) =>
              toast.error(message.join("\n"), { position: "top-center" }),
            segundo_nombre: (message) =>
              toast.error(message.join("\n"), { position: "top-center" }),
            hora: (message) =>
              toast.error(message.join("\n"), { position: "top-center" }),
            estancia: (message) =>
              toast.error(message.join("\n"), { position: "top-center" }),
            habitacion: (message) =>
              toast.error(message.join("\n"), { position: "top-center" }),
            non_field_errors: (message) =>
              toast.error(message.join("\n"), { position: "top-center" }),
            default: () =>
              toast.error(
                "Parece que hubo un error, verifique su información",
                { position: "top-center" }
              ),
          };

          Object.entries(errors).forEach(([fieldName, messages]) => {
            const showError = errorMessages[fieldName] || errorMessages.default;
            showError(messages);
          });
        } else {
          toast.error("Parece que hubo un error, verifique su información", {
            position: "top-right",
          });
        }
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="sm:flex sm:flex-col min-h-screen bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 dark:bg-black-bg">
          <form onSubmit={handleSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12 dark:border-gray-300/10">
                <h2 className="text-lg font-semibold leading-7 text-gray-900 dark:text-gray-300">
                  Información Reserva
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Digite los datos de la reserva.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-1 sm:col-start-1">
                    <label
                      htmlFor="estancia"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                    >
                      Estancia<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="number"
                          name="estancia"
                          id="estancia"
                          value={formData.estancia}
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-800 dark:text-gray-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="fecha"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                      pattern="[0-9]{10}"
                      required
                    >
                      Fecha<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        value={formData.fecha}
                        onChange={handleChange}
                        autoComplete="date-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-800 dark:text-gray-300"
                      ></input>
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="hora"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                    >
                      Hora<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="time"
                        id="hora"
                        name="hora"
                        value={formData.hora}
                        onChange={handleChange}
                        autoComplete="hour-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-800 dark:text-gray-300"
                      ></input>
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="metodo_pago"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                    >
                      Metodo de pago<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="metodo_pago"
                        name="metodo_pago"
                        value={formData.metodo_pago}
                        onChange={handleChange}
                        autoComplete="hour-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-800 dark:text-gray-300"
                      ></input>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="direccion_factura"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                      pattern="[0-9]{10}"
                      required
                    >
                      Dirección Factura<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="direccion_factura"
                        name="direccion_factura"
                        value={formData.direccion_factura}
                        onChange={handleChange}
                        autoComplete="date-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-800 dark:text-gray-300"
                      ></input>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="identificacion"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                      pattern="[0-9]{10}"
                      required
                    >
                      Identidicacion<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="identificacion"
                        name="identificacion"
                        value={formData.identificacion}
                        onChange={handleChange}
                        autoComplete="date-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-800 dark:text-gray-300"
                      ></input>
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="habitacion"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                    >
                      Habitación<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="habitacion"
                        name="habitacion"
                        value={formData.habitacion}
                        onChange={handleChange}
                        autoComplete="hour-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-800 dark:text-gray-300"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12 dark:border-gray-300/10">
                <h2 className="text-lg font-semibold leading-7 text-gray-900 dark:text-gray-300">
                  Información Personal
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Digite sus datos personales.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="primer_nombre"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                    >
                      Nombre<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="primer_nombre"
                        id="primer_nombre"
                        value={formData.primer_nombre}
                        onChange={handleChange}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-800 dark:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="segundo_nombre"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                    >
                      Apellido<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="segundo_nombre"
                        id="segundo_nombre"
                        value={formData.segundo_nombre}
                        onChange={handleChange}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-800 dark:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="numero_contacto"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                    >
                      Telefono<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        id="numero_contacto"
                        name="numero_contacto"
                        type="tel"
                        placeholder=""
                        value={formData.numero_contacto}
                        onChange={handleChange}
                        maxLength={10}
                        autoComplete="numero_contacto"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-800 dark:text-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                onClick={() => window.location.reload()}
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:bg-green-400 dark:text-black"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
