import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
/* import { getReserve, updateReserve } from "../../api/reserve.api"; */
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Form = () => {
  /*   const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updateReserve(params.id, data);
      navigate("/");
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
          num_person,
          name,
          last_name,
          telefone_number,
          campus,
          email,
          date,
          hour,
          description,
          status,
          created_at,
          decoration,
        },
      } = await getReserve(params.id);
      setValue("num_person", num_person);
      setValue("name", name);
      setValue("last_name", last_name);
      setValue("telefone_number", telefone_number);
      setValue("campus", campus);
      setValue("email", email);
      setValue("date", date);
      setValue("hour", hour);
      setValue("description", description);
      setValue("status", status);
      setValue("created_at", created_at);
      setValue("decoration", decoration);
    }
    loadReserve();
  }, []); */

  return (
    /*  <div className="sm:flex sm:flex-col min-h-screen bg-gray-900">
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
                    htmlFor="num_person"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    No. Personas
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        name="num_person"
                        id="num_person"
                        {...register("num_person", { required: true })}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium leading-6  text-gray-300"
                  >
                    Estado
                  </label>
                  <div className="mt-2">
                    <select
                      id="status"
                      name="status"
                      {...register("status", { required: true })}
                      autoComplete="status-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    >
                      <option>Activo</option>
                      <option>Inactivo</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium leading-6text-gray-300"
                    pattern="[0-9]{10}"
                    required
                  >
                    Fecha
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      {...register("date", { required: true })}
                      autoComplete="date-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    ></input>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="hour"
                    className="block text-sm font-medium leading-6  text-gray-300"
                  >
                    Hora
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      id="hour"
                      name="hour"
                      mask="00:00"
                      {...register("hour", { required: true })}
                      autoComplete="hour"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    ></input>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6  text-gray-300"
                  >
                    Descripción

                    <span
                        className="text-sm text-gray-500 ml-1"
                        id="link-checkbox-help"
                      >
                        (Opcional)
                      </span>
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      {...register("description", { required: false })}
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Más información acerca de la reserva.
                  </p>
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
                    htmlFor="name"
                    className="block text-sm font-medium leading-6  text-gray-300"
                  >
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      {...register("name", { required: true })}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    Apellido
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      {...register("last_name", { required: true })}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    Correo Electronico
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="ejemplo@correo.com"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="telefone_number"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    Telefono
                  </label>
                  <div className="mt-2">
                    <input
                      id="telefone_number"
                      name="telefone_number"
                      type="tel"
                      placeholder="XXX-XXX-XXXX"
                      maxLength={10}
                      {...register("telefone_number", { required: true })}
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
    </div> */

    <div className="sm:flex sm:flex-col min-h-screen bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-gray-900">
        <form>
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
                    htmlFor="num_person"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    No. Personas
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        name="num_person"
                        id="num_person"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium leading-6  text-gray-300"
                  >
                    Estado
                  </label>
                  <div className="mt-2">
                    <select
                      id="status"
                      name="status"
                      autoComplete="status-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    >
                      <option>Activo</option>
                      <option>Inactivo</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium leading-6text-gray-300"
                    pattern="[0-9]{10}"
                    required
                  >
                    Fecha
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      autoComplete="date-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    ></input>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="hour"
                    className="block text-sm font-medium leading-6  text-gray-300"
                  >
                    Hora
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      id="hour"
                      name="hour"
                      mask="00:00"
                      autoComplete="hour"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    ></input>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6  text-gray-300"
                  >
                    Descripción
                    <span
                      className="text-sm text-gray-500 ml-1"
                      id="link-checkbox-help"
                    >
                      (Opcional)
                    </span>
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Más información acerca de la reserva.
                  </p>
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
                    htmlFor="name"
                    className="block text-sm font-medium leading-6  text-gray-300"
                  >
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    Apellido
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    Correo Electronico
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ejemplo@correo.com"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-700 text-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="telefone_number"
                    className="block text-sm font-medium leading-6 text-gray-300"
                  >
                    Telefono
                  </label>
                  <div className="mt-2">
                    <input
                      id="telefone_number"
                      name="telefone_number"
                      type="tel"
                      placeholder="XXX-XXX-XXXX"
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
