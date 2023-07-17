import React, { useState, useEffect } from 'react';
import '../styles/Components.css'

const UpdateForm = () => {
    const [forms, setForms] = useState([]);
    const [selectedForm, setSelectedForm] = useState(null);
    const [formData, setFormData] = useState({
        titulo: '',
        pregunta1: '',
        pregunta2: '',
    });
    const [showFormList, setShowFormList] = useState(false);

    useEffect(() => {
        fetchForms(); 
    }, []);

    const fetchForms = () => {
        fetch('http://127.0.0.1:8000/apiFormularios/forms/')
            .then((response) => response.json())
            .then((data) => {
                setForms(data);
            })
            .catch((error) => console.error('Error al obtener la lista de formularios:', error));
    };

    const handleFormSelect = (formId) => {
        const selectedForm = forms.find((form) => form.id === formId);
        if (selectedForm) {
            setSelectedForm(selectedForm);
            setFormData({
                titulo: selectedForm.titulo,
                pregunta1: selectedForm.pregunta1,
                pregunta2: selectedForm.pregunta2,
            });
        } else {
            setSelectedForm(null);
            setFormData({
                titulo: '',
                pregunta1: '',
                pregunta2: '',
            });
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch(`http://127.0.0.1:8000/apiFormularios/forms/update/${selectedForm.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    titulo: formData.titulo,
                    pregunta1: formData.pregunta1,
                    pregunta2: formData.pregunta2,
                }),
            });

            if (response.ok) {
        
                setSelectedForm(null);
                setFormData({
                    titulo: '',
                    pregunta1: '',
                    pregunta2: '',
                });
                alert('Formulario actualizado exitosamente.');
            
                fetchForms();
            } else {
                console.error('Error al actualizar el formulario.');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud de actualización:', error);
        }
    };


    return (
        <div>
            <button className='nav-button nav-button-primary' onClick={() => setShowFormList((prevState) => !prevState)}>Editar formulario</button>

            {showFormList && (
                <div>
                    <select className='select-form' onChange={(e) => handleFormSelect(Number(e.target.value))}>
                        <option value="">Selecciona un formulario</option>
                        {forms.map((form) => (
                            <option key={form.id} value={form.id}>
                                {form.titulo}
                            </option>
                        ))}
                    </select>

                    {selectedForm && (
                        <form onSubmit={handleFormSubmit}>
                            <label className='fields'>
                                Título:
                                <input
                                    type="text"
                                    value={formData.titulo}
                                    onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                                />
                            </label>
                            <label className='fields'>
                                Pregunta 1:
                                <input
                                    type="text"
                                    value={formData.pregunta1}
                                    onChange={(e) => setFormData({ ...formData, pregunta1: e.target.value })}
                                />
                            </label>
                            <label className='fields'>
                                Pregunta 2:
                                <input
                                    type="text"
                                    value={formData.pregunta2}
                                    onChange={(e) => setFormData({ ...formData, pregunta2: e.target.value })}
                                />
                            </label>

                            <button className='button-finish' type="submit">Guardar cambios</button>
                        </form>
                    )}
                </div>
            )}
        </div>
    );
};

export default UpdateForm;
