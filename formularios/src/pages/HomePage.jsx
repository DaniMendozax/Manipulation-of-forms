import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'

const HomePage = () => {
  return (
    <div className='container'>
      <h1 className='description'>Bienvenido a nuestra aplicación</h1>
      <p className='description'>¡Bienvenido a nuestra plataforma de gestión de formularios! Nuestra aplicación te permite crear, editar y administrar formularios de manera rápida y sencilla. Diseña cuestionarios personalizados, encuestas interactivas o cualquier otro tipo de formulario que necesites. Con un proceso intuitivo y amigable, podrás recopilar datos importantes y tomar decisiones fundamentadas. ¡Simplifica la recopilación de información con nuestra herramienta de formularios eficiente y moderna! Haz clic a continuación para comenzar.</p>
      <Link to='/forms'>
        <button className='button'>Ir a la Gestión de Formularios</button>
      </Link>
    </div>
  );
};

export default HomePage;

