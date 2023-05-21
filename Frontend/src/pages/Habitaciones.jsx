import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../components/admin/Header';

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

  return (
    <>
      <Header />
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        transitionTime={900}
        className="relative"
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
    </>
  );
};

export default Habitaciones;
