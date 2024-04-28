import React from 'react'
import './Table.css';

class table extends React.Component {
    render() {
      return (
        <div>
          <table className='tableP'>
            <thead>
              <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Cédula</th>
                <th>Correo</th>
                <th>Genero</th>
                <th>Edad</th>
                <th>Enfermedades</th>
                <th>Restricciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>lola</td>
                <td>mento</td>
                <td>123456</td>
                <td>lm@gmail.com</td>
                <td>mujer</td>
                <td>78</td>
                <td>nada</td>
                <td>nada</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {/* Aquí puedes agregar más filas según necesites */}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  export default table;