import './App.css'
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import FormsManagementPage from "./pages/FormsManagementPage.jsx";
import FormList from "./pages/FormList.jsx";
import FormDetails from "./components/FormDetails.jsx";
import ResponsePage from "./pages/ResponsesPage.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/forms" Component={FormsManagementPage} />
          <Route path="/formsl" Component={FormList}/>
          <Route path="/form/:id" Component={FormDetails}/>
          <Route path="/responses" Component={ResponsePage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
