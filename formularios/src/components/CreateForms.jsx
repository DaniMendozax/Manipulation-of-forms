import React, { useState } from 'react';
import '../styles/Components.css'

const CreateForms = () => {
    const [showFormFields, setShowFormFields] = useState(false);
    const [title, setTitle] = useState('');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');

    const handleCreateForm = () => {
        setShowFormFields(!showFormFields);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/apiFormularios/forms/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    titulo: title,
                    pregunta1: question1,
                    pregunta2: question2,
                }),
            });

            if (response.ok) {
                setTitle('');
                setQuestion1('');
                setQuestion2('');
                setShowFormFields(false);
                alert('Formulario creado exitosamente.');
            } else {
                alert('Error al crear el formulario.');
            }
        } catch (error) {
            alert('Error al enviar la solicitud de creación:', error);
        }
    };

    return (
        <div>
            <button onClick={handleCreateForm} className='nav-button nav-button-primary'>
                {showFormFields ? 'Cancelar' : 'Crear Formulario'}
            </button>

            {showFormFields && (
                <form onSubmit={handleFormSubmit}>
                    <label className='fields'>
                        Título:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    <label className='fields'>
                        Pregunta 1:
                        <input
                            type="text"
                            value={question1}
                            onChange={(e) => setQuestion1(e.target.value)}
                        />
                    </label>
                    <label className='fields'>
                        Pregunta 2:
                        <input
                            type="text"
                            value={question2}
                            onChange={(e) => setQuestion2(e.target.value)}
                        />
                    </label>
                    <button className='button-finish' type="submit">Crear Formulario</button>
                </form>
            )}
        </div>
    );
};

export default CreateForms;
