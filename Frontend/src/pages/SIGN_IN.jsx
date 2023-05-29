import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

import { LockClosedIcon, UserIcon } from "@heroicons/react/24/solid";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";

const SIGN_IN = () => {
  const authContext = useContext(AuthContext);
  const { login } = authContext;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToPanel, setRedirectToPanel] = useState(false);

  const handleLogin = async () => {
    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user/login/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      login(response.data.token);
      toast.success(`Bienvenido ${username}`, {
        position: "top-right",
        style: {
          background: '#4bb543',
          color: '#ffffff',
          fontFamily: 'WinterPoppins',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        },
        iconTheme: {
          primary: '#ffffff',
          secondary: '#4bb543',
        },
      });
      setRedirectToPanel(true);
    } catch (error) {
      console.error(error);
      toast.error("Contraseña o nombre de usuario incorrecto", {
        position: "top-right",
        style: {
          background: '#ff3d3d',
          color: '#ffffff',
          fontFamily: 'WinterPoppins',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        },
        iconTheme: {
          primary: '#ffffff',
          secondary: '#ff3d3d',
        },
      });
    }
  };

  useEffect(() => {
    if (redirectToPanel) {
      setTimeout(() => {
        setRedirectToPanel(true);
      }, 2000); // Esperar 2 segundos antes de redirigir
    }
  }, [redirectToPanel]);

  if (redirectToPanel) {
    return <Navigate to="/panel" />;
  }

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión | Hotel</title>
      </Helmet>
      <section className="bg-[#060607]">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12 min-h-screen">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://cdn.discordapp.com/attachments/1008571051392909393/1112541491135533097/labaunza_barack_obama_morbidly_obese_eating_a_pizza_while_layin_5883ac59-c054-44e2-9439-7f79c3adf45a.png"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-gray-200" href="/">
                <span className="sr-only">Home</span>
              </a>

              <div className="backdrop-blur backdrop-opacity-75 rounded-full p-7">
                <h2 className="mt-6 text-2xl rounded-full font-bold text-gray-200 sm:text-3xl md:text-4xl text-shadow font-WinterPoppins">
                  Bienvenido a Hotel
                </h2>

                <p className="mt-4 rounded-full leading-relaxed text-white/90 text-shadow font-WinterPoppins">
                  Aquí podrás gestionar tus reservas de forma fácil y rápida.
                  ¡Comencemos!
                </p>
                <br />
              </div>
            </div>
          </section>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 sm:h-full md:h-full"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-sky-600 shadow-xl sm:h-20 sm:w-20"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                  <img
                    alt="Hotel"
                    src="https://cdn.discordapp.com/attachments/1008571051392909393/1100856618863820871/Balvin_a_bird_house_made_for_bats_to_be_used_as_a_logo_for_a_ho_af48a1ea-5b41-4668-b557-d485f9d303b0.png"
                    className="h-16 w-16 rounded-full object-cover shadow-xl"
                  />
                </a>

                <h1 className="mt-2 text-3xl font-bold text-gray-200 sm:text-3xl md:text-4xl font-WinterPoppins">
                  Bienevenido a Hotel 🥂
                </h1>

                <p className="mt-4 leading-relaxed text-gray-200 font-WinterPoppins">
                  Aquí podrás gestionar tus reservas de forma fácil y rápida.
                  ¡Comencemos!
                </p>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" className="animate-pulse mt-8 grid grid-cols-6 gap-6 bg-gray-800 p-8 rounded-2xl shadow-2xl border-gray-900 border-3">
                  <div className="col-span-6 flex justify-center h-26">
                    <img
                      alt="hotel"
                      src="https://cdn.discordapp.com/attachments/1008571051392909393/1100856618863820871/Balvin_a_bird_house_made_for_bats_to_be_used_as_a_logo_for_a_ho_af48a1ea-5b41-4668-b557-d485f9d303b0.png"
                      className="h-20 w-20 hidden lg:block rounded-full"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="username"
                      className="inline-flex items-center text-sm font-medium text-gray-300 font-WinterPoppins"
                    >
                      <UserIcon className="w-5 h-5 text-zinc-200 mr-1" />
                      Nombre de usuario
                    </label>

                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-300 bg-black-field text-sm text-gray-300 shadow-sm focus:ring-purple-500 font-WinterPoppins"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="Password"
                      className="text-sm font-medium text-gray-300 inline-flex items-center font-WinterPoppins"
                    >
                      {" "}
                      <LockClosedIcon className="w-5 h-5 text-zinc-200 mr-1" />
                      Contraseña
                    </label>

                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-300 bg-black-field text-sm text-gray-300 shadow-sm focus:ring-purple-500 font-WinterPoppins"
                    />
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      type="button"
                      onClick={handleLogin}
                      className="items-center font-semibold block px-5 py-4 text-base text-center text-white transition duration-500 ease-in-out transform bg-purple-600 lg:px-10 rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 animate-pulse font-WinterPoppins"
                      style={{
                        backgroundColor: "#0D0D0D",
                        animationDuration: "2s",
                      }}
                    >
                      Iniciar Sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};
export default SIGN_IN;