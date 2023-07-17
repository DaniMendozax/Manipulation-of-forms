import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/FormList.css'

const FormList = () => {
  const [forms, setForms] = useState([]);
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:8000/apiFormularios/forms/')
      .then((response) => response.json())
      .then((data) => {
        setForms(data);
        const initialShowDetails = {};
        data.forEach((form) => {
          initialShowDetails[form.id] = false;
        });
        setShowDetails(initialShowDetails);
      })
      .catch((error) => console.error('Error al obtener la lista de formularios:', error));
  }, []);

  const handleFormSubmit = async (formId, respuesta1, respuesta2) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/apiFormularios/responses/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formulario: formId,
          respuesta_1: respuesta1,
          respuesta_2: respuesta2,
        }),
      });

      if (response.ok) {
        const initialShowDetails = { ...showDetails };
        initialShowDetails[formId] = false;
        setShowDetails(initialShowDetails);

        alert('Respuestas enviadas exitosamente.');
      } else {
        alert('Error al enviar las respuestas.');
      }
    } catch (error) {
      alert('Error al enviar la solicitud de respuestas:', error);
    }
  };

  return (
    <div>
      <h1 className='title'>Lista de Formularios</h1>
      <ul>
        {forms.map((form) => {
          const resp1Name = `respuesta1-${form.id}`;
          const resp2Name = `respuesta2-${form.id}`;
          return (
            <li key={form.id}>
              <div>
                <Link to={`/form/${form.id}`}>
                  <h2 className=''>{form.titulo}</h2>
                </Link>
              </div>
              {/* ... */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FormList;
