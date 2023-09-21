import axios from "axios";
import { states } from '../../utils/constants';
import { useEffect, useState } from "react";
import Colognes from "../../components/Colognes/Colognes";
import './zips.css';

const Zips = () => {
    // 285c0604-3066-4a26-b02b-a7704b2f0b0e
    // https://api.copomex.com/query/get_municipio_por_estado/Aguascalientes?token=pruebas
    const [currentState, setCurrentState] = useState('none');
    const [currentTown, setCurrentTown] = useState('none');
    const [towns, setTowns] = useState([]);

    const handleForm = (data) => {
        console.log(data);
    }

    const getTowns = () => {
        if(currentState !== 'none'){
            axios.get(`https://api.copomex.com/query/get_municipio_por_estado/${currentState}?token=pruebas`)
                .then(res => setTowns(res.data.response.municipios))
                .catch(err => console.error(err));
        }
    };

    useEffect( () => {
        getTowns();
    },[currentState])


    return (
        <section className="container">
            <h2>Consulta aquí tu Código Postale</h2>
            <form  className="form_consult" onSubmit={handleForm}>
                <h3>Ingresa los datos solicitados para obtener información sobre los códigos postales.</h3>
                <div className="select_item">
                    <label htmlFor="state">Estado :</label>
                    <select name="state" id="state" defaultValue="seleccionar" onChange={(e) => setCurrentState(e.target.value)}>
                        <option key="nonvalue"  value="none">seleccionar</option>
                        {
                            states.map(state => (
                                <option key={state} value={state}> {state}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="select_item">
                    <label htmlFor="town">Delegación / Municipio :</label>
                    <select name="town" id="town" defaultValue="seleccionar un estado" onChange={(e) => setCurrentTown(e.target.value)}>
                        <option key="nonvalue" value="none">selecciona un estado</option>
                        {
                            towns.map(town => (
                                <option key={town} value={town}>{town}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="select_item">
                    <label htmlFor="">Colonia :</label>
                    <select name="cologne" id="cologne">
                        <Colognes currentTown={currentTown}/>
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