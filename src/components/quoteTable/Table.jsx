import { useEffect, useState } from 'react';
import './table.css';

const Table = ({ weight }) => {
    const [landGuide, setLandGuide] = useState(0);
    const [airGuide, setAirGuide] = useState(0);
    const [landExtra, setLandExtra] = useState(0);
    const peso = parseInt(weight)

    const getLandGuide = () => {
        if(peso > 0 && peso == 1 ){
            setLandExtra(0)
            setLandGuide(525);
        } else if(peso >= 2 && peso <= 5){
            setLandExtra(0)
            setLandGuide(675);
        } else if(peso >= 6 && peso <= 10){
            setLandExtra(0)
            setLandGuide(907)
        } else if (peso >= 11 && peso <= 15){
            setLandExtra(0)
            setLandGuide(1155);
        } else if (peso >= 16 && peso <= 20){
            setLandExtra(0)
            setLandGuide(1320);
        } else if (peso >= 21 && peso <= 25){
            setLandExtra(0)
            setLandGuide(1530);
        } else if (peso >= 26 && peso <= 30){
            setLandExtra(0)
            setLandGuide(1700);
        } else if (peso >= 31 && peso <= 35){
            setLandExtra(0)
            setLandGuide(1925);
        } else if (peso >= 36 && peso <= 40){
            setLandExtra(0)
            setLandGuide(2100);
        } else if (peso == 41){
            setLandExtra(0)
            setLandGuide(2275);
        } else if (peso >= 42 ){
            const extraWeight = peso - 41;
            console.log(extraWeight);
            setLandExtra(extraWeight * 43.50)
        }
    }

    const getAirGuide = () => {
        if (peso > 0 && peso == 1) {
            setAirGuide(525);
        } else if (peso >= 2 && peso <= 5) {
            setAirGuide(675);
        } else if (peso >= 6 && peso <= 10) {
            setAirGuide(907)
        } else if (peso >= 11 && peso <= 15) {
            setAirGuide(1155);
        } else if (peso >= 16 && peso <= 20) {
            setAirGuide(1320);
        } else if (peso >= 21 && peso <= 25) {
            setAirGuide(1530);
        } else if (peso >= 26 && peso <= 30) {
            setAirGuide(1700);
        } else if (peso >= 31 && peso <= 35) {
            setAirGuide(1925);
        } else if (peso >= 36 && peso <= 40) {
            setAirGuide(2100);
        } else if (peso > 40) {
            setAirGuide(undefined);
        }
    }

    useEffect( () => {
        getLandGuide();
        getAirGuide();
    },[weight])


    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th className='concept'>Conceptos</th>
                        <th className='send_type'>Terrestre</th>
                        <th className='send_type' >Aéreo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Peso</td>
                        <td className='land'>{weight ? `${weight} kgs` : `No Aplica`}</td>
                        <td className='air'>{weight ? `${weight} kgs` : `No Aplica`}</td>
                    </tr>
                    <tr>
                        <td>Coste de Guía</td>
                        <td className='land'>{`$ ${landGuide.toFixed(2)}`}</td>
                        <td className='air'>{airGuide ? `$ ${airGuide.toFixed(2)}` : "Peso excedido"}</td>
                    </tr>
                    <tr>
                        <td>Coste de peso excedente</td>
                        <td className='land'>{`$ ${landExtra.toFixed(2)}`}</td>
                        <td className='air'>$ 0.00</td>
                    </tr>
                    <tr>
                        <td className='total_ceil'>
                            Total
                            <span>(Cotización Aproximada)</span>
                        </td>
                        <td>$ {(landGuide + landExtra).toFixed(2)}</td>
                        <td>$ {airGuide.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <ul>
                <li>Costos de embalaje ya incluidos</li>
                <li>IVA incluido</li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Table;