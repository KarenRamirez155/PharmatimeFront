import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './Components/LoginForm/LoginForm';
import Register from './Components/Register/Register';



//  modulo de maneejo de rutas de la aplicación
const App = () => {
    return (
        <Router>
            <Routes>
               <Route path="/Login"  element={<LoginForm />} /> {/** ruta de login */}
                <Route path="/Register" element={<Register />} /> {/** ruta de inicio de la app */}
               
            </Routes>
        </Router>
    )
}

export default App;
