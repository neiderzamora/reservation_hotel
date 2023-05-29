import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getReserve, updateReserve } from "../../api/reserves.api";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Form = () => {
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();
  const params = useParams();
  const token = localStorage.getItem("token");

  console.log(params);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updateReserve(params.id, data, token);
      navigate("/panel");
      toast.success("Reserva actualizada con exito", {
        position: "top-right",
      });
    } catch (error) {
      toast.error("Parece que hubo un error", {
        position: "top-right",
      });
      console.log(error);
    }
  });

  useEffect(() => {
    async function loadReserve() {
      const {
        data: {
          estancia,
          primer_nombre,
          segundo_nombre,
          fecha,
          hora,
          numero_contacto,
          metodo_pago,
          direccion_factura,
          habitacion,
          estado,
          identificacion,
        },
      } = await getReserve(params.id, token);
      setValue("estancia", estancia);
      setValue("primer_nombre", primer_nombre);
      setValue("segundo_nombre", segundo_nombre);
      setValue("fecha", fecha);
      setValue("hora", hora);
      setValue("numero_contacto", numero_contacto);
      setValue("metodo_pago", metodo_pago);
      setValue("direccion_factura", direccion_factura);
      setValue("habitacion", habitacion);
      setValue("estado", estado);
      setValue("identificacion", identificacion);
    }
    loadReserve();
  }, []);

  return (
    <div className="sm:flex sm:flex-col min-h-screen bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-gray-900">
        <form onSubmit={onSubmit}>
          <div className="space-y-12">
            <div className="border-b pb-12 border-gray-300/10">
              <h2 className="text-lg font-semibold leading-7 text-gray-300">
                Reserva
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Datos almacenados de la reserva.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-1 sm:col-start-1">
                  <label
                    htmlFor="estancia"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    Estancia
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        name="estancia"
                        id="estancia"
                        {...register("estancia", { required: true })}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="estado"
                    className="block text-sm font-medium leading-6  text-gray-300"
                  >
                    Estado
                  </label>
                  <div className="mt-2">
                    <select
                      id="estado"
                      name="estado"
                      {...register("estado", { required: true })}
                      autoComplete="estado-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    >
                      <option>true</option>
                      <option>false</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="fecha"
                    className="block text-sm font-medium leading-6text-gray-300"
                  >
                    Fecha
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      id="fecha"
                      name="fecha"
                      {...register("fecha", { required: true })}
                      autoComplete="date-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    ></input>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="hora"
                    className="block text-sm font-medium leading-6  text-gray-300"
                  >
                    Hora
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      id="hora"
                      name="hora"
                      mask="00:00"
                      {...register("hora", { required: true })}
                      autoComplete="hora"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    ></input>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="metodo_pago"
                    className="block text-sm font-medium leading-6  text-gray-300"
                  >
                    Metodo de Pago
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="metodo_pago"
                      id="metodo_pago"
                      {...register("metodo_pago", { required: true })}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="direccion_factura"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    Direccion Factura
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="direccion_factura"
                      id="direccion_factura"
                      {...register("direccion_factura", { required: true })}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    />
                  </div>
                </div>

              </div>
            </div>

            <div className="border-b  pb-12 border-gray-300/10">
              <h2 className="text-lg font-semibold leading-7  text-gray-300">
                Información Personal
              </h2>
              <p className="mt-1 text-sm leading-6  text-gray-400">
                Datos personales del cliente.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="primer_nombre"
                    className="block text-sm font-medium leading-6  text-gray-300"
                  >
                    Nombres
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="primer_nombre"
                      id="primer_nombre"
                      {...register("primer_nombre", { required: true })}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="segundo_nombre"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    Apellidos
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="segundo_nombre"
                      id="segundo_nombre"
                      {...register("segundo_nombre", { required: true })}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="identificacion"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    Identificacion
                  </label>
                  <div className="mt-2">
                    <input
                      id="identificacion"
                      name="identificacion"
                      type="number"
                      {...register("identificacion", { required: true })}
                      autoComplete="identificacion"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="numero_contacto"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    Telefono
                  </label>
                  <div className="mt-2">
                    <input
                      id="numero_contacto"
                      name="numero_contacto"
                      type="tel"
                      {...register("numero_contacto", { required: true })}
                      maxLength={10}
                      autoComplete="telephone_number"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-300"
            >
              <Link to="/panel">Cancelar</Link>
            </button>
            <button
              type="submit"
              className="rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 bg-green-400 text-black"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
