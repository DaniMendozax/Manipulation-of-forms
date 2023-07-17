import React, { useState, useEffect } from 'react';

const DeleteForm = () => {
    const [forms, setForms] = useState([]);
    const [showFormList, setShowFormList] = useState(false);
    const [selectedForm, setSelectedForm] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/apiFormularios/forms/')
            .then((response) => response.json())
            .then((data) => {
                setForms(data);
            })
            .catch((error) => console.error('Error al obtener la lista de formularios:', error));
    }, []);

    const handleFormSelect = (formId) => {
        const selectedForm = forms.find((form) => form.id === formId);
        setSelectedForm(selectedForm);
    };

    const handleFormDelete = async () => {
        try {
            // Enviar la solicitud al backend para eliminar el formulario utilizando la URL /forms/delete/:id
            const response = await fetch(`http://127.0.0.1:8000/apiFormularios/forms/delete/${selectedForm.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Si la eliminación es exitosa, mostrar un mensaje de éxito.
                setSelectedForm(null);
                setShowFormList(false);
                alert('Formulario eliminado exitosamente.');
                // Después de eliminar el formulario en el backend, podemos volver a obtener la lista de formularios actualizada.
                fetchForms();
            } else {
                console.error('Error al eliminar el formulario.');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud de eliminación:', error);
        }
    };

    const handleCancel = () => {
        setSelectedForm(null);
    };

    const fetchForms = () => {
        // Obtener la lista de formularios actualizada después de eliminar un formulario
        fetch('http://127.0.0.1:8000/apiFormularios/forms/')
            .then((response) => response.json())
            .then((data) => {
                setForms(data);
            })
            .catch((error) => alert('Error al obtener la lista de formularios:', error));
    };

    return (
        <div>
            <button className='nav-button nav-button-primary' onClick={() => setShowFormList(!showFormList)}>Eliminar formulario</button>

            {/* Mostrar el menú desplegable con los títulos de los formularios al hacer clic en el botón */}
            {showFormList && (
                <select className='select-form' onChange={(e) => handleFormSelect(Number(e.target.value))}>
                    <option value="select">Selecciona un formulario</option>
                    {forms.map((form) => (
                        <option key={form.id} value={form.id}>
                            {form.titulo}
                        </option>
                    ))}
                </select>
            )}

            {/* Mostrar el mensaje de confirmación y botón "Eliminar" cuando se seleccione un formulario */}
            {selectedForm && (
                <div>
                    <p className=''>¿Estás seguro que deseas eliminar el formulario "{selectedForm.titulo}"?</p>
                    <button className='button-finish' onClick={handleFormDelete}>Eliminar</button>
                    <button className='button-finish' onClick={handleCancel}>Cancelar</button>
                </div>
            )}
        </div>
    );
};

export default DeleteForm;