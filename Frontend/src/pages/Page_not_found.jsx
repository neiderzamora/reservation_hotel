import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Page_not_found = () => {
  return (
    <>
      <Helmet>
        <title>Pagina no encontrada | Hotel</title>
      </Helmet>
      <section className="w-full h-screen lg:p-100 bg-gray-900 ">
        <div className="relative items-center w-full h-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full h-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-transparent text-6xl md:text-7xl lg:text-9xl lg:max-w-7xl">
                  404
                </h1>
                <h2 className="max-w-5xl text-5xl font-bold leading-none tracking-tighter text-neutral-300 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Pagina no encontrada
                </h2>

                <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-300">
                  La página que estas buscando pudo ser removida, sufrió un
                  cambio de nombre o temporalmente no está disponible.
                </p>
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <Link to={"/"}>
                      <button
                        className="items-center font-bold block px-5 py-4 text-base text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 animate-pulse"
                        style={{
                          backgroundColor: "#0D0D0D",
                          animationDuration: "3s",
                        }}
                      >
                        Volver al inicio
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page_not_found;