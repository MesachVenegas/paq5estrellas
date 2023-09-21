/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

const Colognes = ({ currentTown }) => {
    const [colognes, setColognes] = useState([]);

    const getCologne = () => {
        if(currentTown !== "none"){
            axios.get(`https://api.copomex.com/query/get_colonia_por_municipio/${currentTown}?token=pruebas`)
                .then(res => setColognes(res.data.response.colonia))
                .catch(err => console.error(err));
        }
    }

    useEffect( () => {
        getCologne();
    },[currentTown])

    return (
        <>
            <option key="nonvalue" value="none">selecciona la delegación</option>
            {
                colognes?.map(cologne => (
                    <option key={cologne} value={cologne}>{cologne}</option>
                ))
            }
        </>
    );
};

export default Colognes;