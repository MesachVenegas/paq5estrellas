import axios from "axios";
import { states } from '../../utils/constants';
import './zips.css';

const Zips = () => {
    // 285c0604-3066-4a26-b02b-a7704b2f0b0e


    return (
        <section className="container">
            <h2>Consulta aquí tu Código Postale</h2>
            <form  className="form_consult">
                <h3>Ingresa los datos solicitados para obtener información sobre los códigos postales.</h3>
                <div className="select_item">
                    <label htmlFor="state">Estado :</label>
                    <select name="state" id="state">
                        <option key="nonvalue" value="none" selected>seleccionar</option>
                        {
                            states.map(state => (
                                <option key={state} value={state}>{state}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="select_item">
                    <label htmlFor="town">Delegación / Municipio :</label>
                    <select name="town" id="town">
                        <option value="test" selected>seleccionar</option>
                    </select>
                </div>
                <div className="select_item">
                    <label htmlFor="">Colonia :</label>
                    <select name="cologne" id="cologne">
                        <option value="test" selected>seleccionar</option>
                    </select>
                </div>
                <div className="control">
                    <button>Enviar <i className="fa-solid fa-paper-plane"></i></button>
                    <small>Limpiar Formulario</small>
                </div>
            </form>
        </section>
    );
};

export default Zips;