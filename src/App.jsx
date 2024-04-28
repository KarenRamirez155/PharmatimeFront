import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './Components/LoginForm/LoginForm';
import Register from './Components/Register/Register';
import ViewPatient from "./Components/Patient/ViewPatient";
import RecoverPassword from "./Components/RecoverPassword/RecoverPassword";



//  modulo de maneejo de rutas de la aplicación
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Login"  element={<LoginForm />} /> {/** ruta de login */}
                <Route path="/Register" element={<Register />} /> {/** ruta de inicio de la app */}
                <Route path="/RecoverPassword" element={<RecoverPassword />} /> {/** ruta de recuperación de contraseña */}
                <Route path="/ViewPatient" element={<ViewPatient />} /> {/** ruta de visualizar paciente */}
            </Routes>
        </Router>
    )
}

export default App;
