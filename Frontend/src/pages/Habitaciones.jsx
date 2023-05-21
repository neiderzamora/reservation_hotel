import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../components/admin/Header';
import ModalHabit from './ModalHabit';

const Habitaciones = () => {

  const imageStyles = {
    objectFit: 'cover',
    width: '90%',
    maxHeight: '65vh',
  };

  const carouselData = [
    {
        image: '/HabitacionesIMG/img1.jpg',
        title: '¡Descubre nuestras habitaciones urbanas!',
        description: 'Experimenta la comodidad en el corazón de la ciudad.',
      },
      {
        image: '/HabitacionesIMG/img2.jpg',
        title: '¡Tu oasis en medio del bullicio!',
        description: 'Relájate y recarga energías después de explorar la ciudad.',
      },
      {
        image: '/HabitacionesIMG/img3.jpg',
        title: '¡Hospédate en nuestro hotel de diseño moderno!',
        description: 'Sumérgete en una experiencia de estilo y confort.',
      },
      {
        image: '/HabitacionesIMG/img4.jpg',
        title: '¡Tu hogar lejos de casa en la ciudad!',
        description: 'Disfruta de todas las comodidades y servicios que ofrecemos.',
      },
      {
        image: '/HabitacionesIMG/img5.jpg',
        title: '¡Explora la ciudad desde nuestras habitaciones!',
        description: 'Accede fácilmente a los principales lugares de interés.',
      },
      {
        image: '/HabitacionesIMG/img6.jpg',
        title: '¡Vive la vibrante vida urbana en nuestro hotel!',
        description: 'Descubre la diversidad cultural y la emoción de la ciudad.',
      },
    ];
    const [showModal, setShowModal] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [hoveredRoom, setHoveredRoom] = useState(null);
  
    const handleOpenModal = (room) => {
      setSelectedRoom(room);
      setShowModal(true);
      document.body.style.overflow = 'hidden';
    };
  
    const handleCloseModal = () => {
      setSelectedRoom(null);
      setShowModal(false);
      document.body.style.overflow = 'auto';
    };
  
    const habitaciones = [
      {
        id: 1,
        nombre: 'Habitación Familiar',
        image: '/HabitacionesIMG/img1.jpg',
        caracteristicas:
          'Esta habitación espaciosa tiene capacidad para 4 personas y cuenta con comodidades como aire acondicionado, TV de pantalla plana, minibar y baño privado.',
        imagenes: ['/HabitacionesIMG/img1.jpg', '/HabitacionesIMG/img1.jpg', '/HabitacionesIMG/img1.jpg'],
        cantidadPersonas : 5,
        precio : '$10.000'
      },
      {
        id: 2,
        nombre: 'Habitación Doble',
        image: '/HabitacionesIMG/img2.jpg',
        caracteristicas:
          'La habitación doble ofrece una cama grande y confortable, vistas panorámicas y acceso a servicios adicionales como desayuno buffet y servicio de habitaciones las 24 horas.',
        imagenes: ['/HabitacionesIMG/img2_1.jpg', '/HabitacionesIMG/img2_2.jpg'],
      },
      // Agrega más objetos para más habitaciones
    ];
  return (
    <>
      <Header className="fixed"></Header>
      {/* Carrusel del Imagenes */}
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        transitionTime={900}
        className="relative "
      >
        {carouselData.map((item, index) => (
          <div className="relative" key={index}>
            <img src={item.image} alt={`Image ${index + 1}`} style={imageStyles} />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

{/* Contenido debajo de las Imagenes */}
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <header>  
        <h1 className='flex justify-center lg:text-4xl sm:text-3xl font-semibold text-gray-600'>
          Conoce nuestras habitaciones
        </h1>
        <div className="mx-auto py-2 w-1/6 border-b-4 border-gray-400 mb-6"></div>
        </header>
{/* Contenido del las imagenes y el Modal */}
          <section className="mt-8">
          <h2>Selecciona el tipo de habitacion que desees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {habitaciones.map((habitacion) => (
               <div
               key={habitacion.id}
               className="relative "
               onClick={() => handleOpenModal(habitacion)}
             >
               <div
                 className="relative transform transition-all duration-300 hover:scale-105 hover:shadow-inner"
                 onMouseEnter={() => setHoveredRoom(habitacion.id)}
                 onMouseLeave={() => setHoveredRoom(null)}
               >
                 <img
                   src={habitacion.image}
                   alt={habitacion.nombre}
                   className="w-full h-64 object-cover rounded-lg"
                 />
                 {hoveredRoom === habitacion.id && (
                   <button className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                     <div className="bg-black bg-opacity-50 p-4 text-white text-center">
                       <p className="text-lg font-bold">{habitacion.precio}</p>
                       <p>{habitacion.cantidadPersonas} personas</p>
                     </div>
                   </button>
                 )}
               </div>
               <h2 className="mt-2 text-xl font-semibold">{habitacion.nombre}</h2>
             </div>
               ))}
        </div>
      </section>


{/* Modal de características */}
        {showModal && selectedRoom && (
          <ModalHabit onClose={handleCloseModal} selectedRoom={selectedRoom}>
            <h2 className="text-2xl font-semibold mb-2">{selectedRoom.nombre}</h2>
            <div className="flex flex-col items-center">
              <Carousel
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={500}
              >
                {selectedRoom.imagenes.map((imagen, index) => (
                  <img
                    key={index}
                    src={imagen}
                    alt={`Image ${index + 1}`}
                    style={{ width: '40%', height: 'auto', maxHeight: '300px' }}
                    className="object-cover rounded-lg mb-4"
                  />
                ))}
              </Carousel>
              <p>{selectedRoom.caracteristicas}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                Reservar
              </button>
            </div>
          </ModalHabit>
        )}
      </div>
      
    </>
  );
};

export default Habitaciones;