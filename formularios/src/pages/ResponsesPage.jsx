import React, { useState, useEffect } from 'react';

const ResponsePage = () => {
  const [responses, setResponses] = useState([]);
  const [forms, setForms] = useState([]);

  useEffect(() => {
    // Cargar las respuestas y los formularios desde el backend de manera simultánea
    Promise.all([
      fetch('http://127.0.0.1:8000/apiFormularios/responses/').then((response) => response.json()),
      fetch('http://127.0.0.1:8000/apiFormularios/forms/').then((response) => response.json()),
    ])
      .then(([responseData, formData]) => {
        setResponses(responseData);
        setForms(formData);
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div>
      <h1 className='title'>Página de Respuestas</h1>
      <ul>
        {responses.map((response) => {
          // Encontrar el formulario asociado a esta respuesta por su ID
          const associatedForm = forms.find((form) => form.id === response.formulario);

          if (associatedForm) {
            return (
              <li key={response.id}>
                {/* Mostrar el título y las preguntas del formulario */}
                <h2>Formulario: {associatedForm.titulo}</h2>
                <p>Pregunta 1: {associatedForm.pregunta1}</p>
                <p>Respuesta 1: {response.respuesta_1}</p>
                <p>Pregunta 2: {associatedForm.pregunta2}</p>
                <p>Respuesta 2: {response.respuesta_2}</p>
              </li>
            );
          }

          return null; // Si no se encuentra el formulario asociado, no mostrar nada
        })}
      </ul>
    </div>
  );
};

export default ResponsePage;