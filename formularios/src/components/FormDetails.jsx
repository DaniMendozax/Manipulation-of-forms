import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FormDetails = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState(null);
    const [respuesta1, setRespuesta1] = useState('');
    const [respuesta2, setRespuesta2] = useState('');

    useEffect(() => {
        // Realizar una solicitud para obtener los detalles del formulario con el ID 
        fetch(`http://127.0.0.1:8000/apiFormularios/forms/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => console.error('Error al obtener los detalles del formulario:', error));
    }, [id]);

    const handleFormSubmit = async () => {
        try {
            // Enviar las respuestas al backend 
            const response = await fetch('http://127.0.0.1:8000/apiFormularios/responses/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formulario: id,
                    respuesta_1: respuesta1,
                    respuesta_2: respuesta2,
                }),
            });

            if (response.ok) {
                // Respuestas enviadas exitosamente
                alert('Respuestas enviadas exitosamente.');
            } else {
                alert('Error al enviar las respuestas.');
            }
        } catch (error) {
            alert('Error al enviar la solicitud de respuestas:', error);
        }
    };

    if (!formData) {
        // Si no se han cargado los datos del formulario
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1 className='title'>Detalles del Formulario</h1>
            <h2>{formData.titulo}</h2>
            <p className='fields'>Pregunta 1: {formData.pregunta1}</p>
            <label className='fields'>
                Respuesta 1:
                <input type="text" value={respuesta1} onChange={(e) => setRespuesta1(e.target.value)} />
            </label>

            <p className='fields'>Pregunta 2: {formData.pregunta2}</p>
            <label className='fields'>
                Respuesta 2:
                <input type="text" value={respuesta2} onChange={(e) => setRespuesta2(e.target.value)} />
            </label>

            <button className='button-finish' onClick={handleFormSubmit}>Enviar Respuestas</button>
        </div>
    );
};

export default FormDetails;

