import CreateForms from '../components/CreateForms';
import UpdateForm from '../components/UpdateForm';
import DeleteForm from '../components/DeleteForm';
import { Link } from 'react-router-dom';
import '../styles/FormsManagementPage.css';

const FormsManagementPage = () => {
    return (
        <nav className="nav-container">
            <h1 className='title'>Gestion De Formularios</h1>
            <CreateForms />
            <UpdateForm />
            <DeleteForm />
            <div className="button-container">
                <Link to="/formsl">
                    <button className='nav-button nav-button-primary'>Responder Formularios</button>
                </Link>
                <Link to="/responses">
                    <button className='nav-button nav-button-primary'>Respuestas de formularios</button>
                </Link>
            </div>
        </nav>

    );
};

export default FormsManagementPage;
