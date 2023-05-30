import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ModalHabit from "./ModalHabit";
import habitacionesData from "./habitacionesData";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill, RiTwitterFill, RiInstagramLine, RiMapPin2Line } from "react-icons/ri";
import axios from "axios";

const Habitaciones = () => {

  const [disponible, setDisponible] = useState(false);

  const handleClick = () => {
    setDisponible(!disponible);
  };


  const imageStyles = {
    objectFit: "cover",
    width: "90%",
    maxHeight: "65vh",
  };

  const carouselData = [
    {
      image: "/HabitacionesIMG/Presidencial_1.jpg",
      title: "¡Descubre nuestras habitaciones urbanas!",
      description: "Experimenta la comodidad en el corazón de la ciudad.",
    },
    {
      image: "/HabitacionesIMG/quad_1.jpg",
      title: "¡Tu oasis en medio del bullicio!",
      description: "Relájate y recarga energías después de explorar la ciudad.",
    },
    {
      image: "/HabitacionesIMG/individual.jpg",
      title: "¡Hospédate en nuestro hotel de diseño moderno!",
      description: "Sumérgete en una experiencia de estilo y confort.",
    },
    {
      image: "/HabitacionesIMG/Presidencial.jpg",
      title: "¡Tu hogar lejos de casa en la ciudad!",
      description:
        "Disfruta de todas las comodidades y servicios que ofrecemos.",
    },
    {
      image: "/HabitacionesIMG/doble_4.jpg",
      title: "¡Explora la ciudad desde nuestras habitaciones!",
      description: "Accede fácilmente a los principales lugares de interés.",
    },
    {
      image: "/HabitacionesIMG/doble_5.jpg",
      title: "¡Vive la vibrante vida urbana en nuestro hotel!",
      description: "Descubre la diversidad cultural y la emoción de la ciudad.",
    },
    // Agrega más objetos para más imágenes del carrusel
  ];

      const apiUrl = 'http://127.0.0.1:8000/habitaciones/';

      useEffect(() => {
        fetchHabitaciones();
      }, []);

      const fetchHabitaciones = async () => {
        try {
          const response = await axios.get(`${apiUrl}api/habitaciones/`);
          setHabitaciones(response.data);
        } catch (error) {
          console.log(error);
        }
      };


  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [hoveredRoom, setHoveredRoom] = useState(null);

  const handleOpenModal = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  /* Habitaciones para seleccionar */
  //const [habitaciones, setHabitaciones] = useState(habitacionesData);
  const [habitaciones, setHabitaciones] = useState([]);


  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroPrecio, setFiltroPrecio] = useState("");
  const [filtroPersonas, setFiltroPersonas] = useState("");

  const tiposHabitaciones = [
    ...new Set(habitaciones.map((habitacion) => habitacion.tipo)),
  ];
  const preciosHabitaciones = [
    ...new Set(habitaciones.map((habitacion) => habitacion.precio)),
  ];
  const cantidadesPersonas = [
    ...new Set(habitaciones.map((habitacion) => habitacion.capacidad)),
  ];

  const habitacionesFiltradas = habitaciones.filter((habitacion) => {
    const cumpleTipo = filtroTipo === "" || habitacion.tipo === filtroTipo;
    const cumplePrecio =
      filtroPrecio === "" ||
      parseFloat(habitacion.precio) === parseFloat(filtroPrecio);
    const cumplePersonas =
      filtroPersonas === "" ||
      habitacion.capacidad === parseInt(filtroPersonas);

    return cumpleTipo && cumplePrecio && cumplePersonas;
  });

  return (
    <>
      {/* <Header/> */}
      <header className="fixed top-0 left-0 z-50 right-0 bg-gray-900 shadow-md" style={{ zIndex: 50 }}>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold">BirdApp</h1>
          <ul className="ml-10 flex space-x-10">
            <li>
              <a className="text-white hover:text-gray-400" href="/">Inicio</a>
            </li>
            <li>
            <a
              href="#habitaciones"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#habitaciones').scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              Habitaciones
            </a>
            </li>
            <li>
            <a
              href="#footer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#footer').scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              Contactanos
            </a>
            </li>
            <li><a href="/agendar-reserva/"><a class="text-white hover:text-gray-300 cursor-pointer">Agendar Reserva</a></a></li>
          </ul>
        </div>
      </nav>
    </header>
    
    {/* Carrusel de imágenes */}
    <div className="relative" style={{ paddingTop: '63px' }}>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        transitionTime={900}
        className="relative"
        style={{ position: 'relative', zIndex: 0 }}
      >
        {carouselData.map((item, index) => (
          <div className="relative" key={index}>
            <img
              src={item.image}
              alt={`Image ${index + 1}`}
              style={imageStyles}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      </div>

      {/* Titulo debajo de las imágenes */}
      <div className="custom-background mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <h1
          id="habitaciones"
          className="h1 flex justify-center lg:text-4xl font-semibold text-gray-700"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Conoce nuestras habitaciones
        </h1>
        <div className="mx-auto py-2 w-1/6 border-b-4 border-gray-400 mb-6" />
        <div className="text-justify">
          <p
            className="text-md text-gray-800 leading-relaxed"
            style={{ textShadow: "4px 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            ¡Descubre la habitación perfecta y reserva con un solo clic! Explora
            nuestras increíbles opciones y elige la imagen que más te atraiga.
            ¡Estamos aquí para ayudarte a encontrar la habitación perfecta,
            adaptada a tus preferencias de tipo, precio y capacidad! Haz una
            selección informada y reserva ahora para asegurar tu estancia
            inolvidable. No esperes más, ¡nuestro equipo está ansioso por
            recibirte en nuestro acogedor y confortable alojamiento!
          </p>
        </div>
        {/* Menú de filtrado */}
        <section className="mt-8">
          <div className="flex flex-wrap justify-between space-x-2 mt-4 mb-8 text-xl">
            <div className="flex space-x-2 ">
              <label htmlFor="tipoHabitacion">Tipo:</label>
              <select
                id="tipoHabitacion"
                className="rounded-md bg-transparent transition-all duration-300 hover:scale-105 text-gray-500"
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
              >
                <option value="">Todas las habitaciones</option>
                {tiposHabitaciones.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex space-x-2  ">
              <label htmlFor="precioHabitacion">Precio:</label>
              <select
                id="precioHabitacion"
                className="rounded-md bg-transparent transition-all duration-300 hover:scale-105 text-gray-500"
                value={filtroPrecio}
                onChange={(e) => setFiltroPrecio(e.target.value)}
              >
                <option value="">Cualquier precio</option>
                {preciosHabitaciones.map((precio) => (
                  <option key={precio} value={precio}>
                    {precio}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex space-x-2">
              <label htmlFor="precioHabitacion">Personas:</label>
              <select
                id="personasHabitacion"
                className="rounded-md bg-transparent transition-all duration-300 hover:scale-105 text-gray-500"
                value={filtroPersonas}
                onChange={(e) => setFiltroPersonas(e.target.value)}
              >
                <option value="">Seleccionar cantidad</option>
                {cantidadesPersonas.map((cantidad) => (
                  <option key={cantidad} value={cantidad}>
                    {cantidad}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {habitacionesFiltradas.length === 0 && (
            <div className="text-center text-gray-600">
              No encontramos habitaciones con estas características.
            </div>
          )}

          {/* IMAGENES */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {habitacionesFiltradas.map((habitacion) => (
              <div
                key={habitacion.id}
                className="relative"
                onClick={() => handleOpenModal(habitacion)}
              >
                <div
                  className="relative transform transition-all duration-300 hover:scale-105 hover:shadow-inner "
                  onMouseEnter={() => setHoveredRoom(habitacion.id)}
                  onMouseLeave={() => setHoveredRoom(null)}
                >
                  <img
                    src={habitacion.imagen}
                    alt={habitacion.tipo}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  {hoveredRoom === habitacion.id && (
                    <button className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-50 p-4 text-white text-center">
                        <p className="text-lg font-bold">
                          ${habitacion.precio} Pesos
                        </p>
                        <p>{habitacion.capacidad} personas</p>
                      </div>
                    </button>
                  )}
                </div>
                <h2 className="mt-2 text-xl font-semibold">
                  Habitación {habitacion.tipo}
                </h2>
              </div>
            ))}
          </div>
        </section>
        
      {/*{disponible ? (
          <label className="text-green-500">Disponible</label>
        ) : (
          <label className="text-red-500">No disponible</label>
        )} */}

        {/* Modal de características */}
        {showModal && selectedRoom && (
            <ModalHabit onClose={handleCloseModal} selectedRoom={selectedRoom}>
              <h2 className="text-2xl font-semibold mb-2">
                {selectedRoom.tipo}
              </h2>
              <div className="flex flex-col items-center">
                <img
                  src={selectedRoom.imagen}
                  alt={selectedRoom.tipo}
                  style={{ width: "40%", height: "auto", maxHeight: "300px" }}
                  className="object-cover rounded-lg mb-4"
                />
                <p className="py-2">{selectedRoom.caracteristicas}</p>               
                <p className="py-2">Habitación número {selectedRoom.numero}</p>               
                <p className="py-2">Por tan solo ${selectedRoom.precio} Pesos</p>
                <Link className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" to="/agendar-reserva">
                  Reservar
                </Link>
              </div>
            </ModalHabit>
          )}

      <footer className="border-t border-gray-400 text-white py-4" id="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-semibold mb-2">Contáctanos</h4>
            <p className="font-semibold"><span className="text-gray-100 font-bold">Teléfono:</span>+57 322-716-5692</p>
            <p className="font-semibold"><span className="text-gray-100 font-bold">Correo:</span> birdapp@hotel.com</p>
            <p className="font-semibold"><span className="text-gray-100 font-bold">Dirección: </span> Calle Principal, Ciudad</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="flex md:justify-center sm:justify-left text-xl font-semibold mb-2">Estamos úbicados aquí</h4>
            <div className="flex md:justify-evenly sm:justify-left text-3xl">
              <a href="https://goo.gl/maps/HU8pGbKxTysnaedq9" target="_blank" className="mr-4 mt-5 transition-all duration-300 hover:scale-125"><i><RiMapPin2Line /></i></a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="flex md:justify-center sm:justify-left text-xl font-semibold mb-2">Síguenos</h4>
            <div className="flex md:justify-evenly sm:justify-left text-3xl">
              <a href="https://www.facebook.com/hotel" target="_blank" className="mr-4 mt-5 transition-all duration-300 hover:scale-125"><i><RiFacebookCircleFill /></i></a>
              <a href="https://www.twitter.com/hotel" target="_blank" className="mr-4 mt-5 transition-all duration-300 hover:scale-125"><i><RiTwitterFill/></i></a>
              <a href="https://www.instagram.com/hotel" target="_blank" className="mr-4 mt-5 transition-all duration-300 hover:scale-125"><i><RiInstagramLine/></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>

      </div>    
    </>
  );
};

export default Habitaciones;
