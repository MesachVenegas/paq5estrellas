/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './table.css';

const Table = ({ weight, type, places }) => {
    const [landGuide, setLandGuide] = useState(0);
    const [airGuide, setAirGuide] = useState(0);
    const [landExtra, setLandExtra] = useState(0);
    const [showAir, setShowAir] = useState('normal')
    const peso = parseInt(weight)

    const getLandGuide = () => {
        if (!type) {
            setLandGuide(490);
            setAirGuide(525);
            setLandExtra(0);
        } else if (peso >= 0 && peso <= 5) { // de 0 a 5 kgs
            setLandExtra(0)
            setLandGuide(490);
        } else if (peso >= 6 && peso <= 10) { // de 6 a 10 kgs
            setLandExtra(0)
            setLandGuide(700)
        } else if (peso >= 11 && peso <= 15) { // de 11 a 15 kgs
            setLandExtra(0)
            setLandGuide(840);
        } else if (peso >= 16 && peso <= 20) { // de 16 a 20 kgs
            setLandExtra(0)
            setLandGuide(1007.50);
        } else if (peso >= 21 && peso <= 25) { // de 21 a 25 kgs
            setLandExtra(0)
            setLandGuide(1162.50);
        } else if (peso >= 26 && peso <= 30) { // de 26 a 30 kgs
            setLandExtra(0)
            setLandGuide(1317);
        } else if (peso >= 31 && peso <= 35) { // de 31 a 35 kgs
            setLandExtra(0)
            setLandGuide(1395);
        }
        else if (peso >= 36 && peso <= 40) { // de 36 a 40 kgs
            setLandExtra(0)
            setLandGuide(1472.50);
        }
        else if (peso >= 41 && peso <= 45) { // de 41 a 45 kgs
            setLandExtra(0)
            setLandGuide(1627.50);
        }
        else if (peso >= 46 && peso <= 50) { // de 46 a 50 kgs
            setLandExtra(0)
            setLandGuide(1782.50);
        }
        else if (peso == 50) { // 2217.50 x 60kgs
            setLandExtra(0)
            setLandGuide();
        } else if (peso >= 52) {
            const extraWeight = peso - 50;
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
            setAirGuide(0);
        }
    }

    useEffect(() => {
        getLandGuide();
        getAirGuide();

        if (weight > 40) {
            setShowAir('none')
        }else {
            setShowAir('flex')
        }
    }, [weight])


    return (
        <div className="container">
            <div className="head_table">
                <div>
                    <p>Tipo de envió: </p>
                    <span>{type ? "Paquete" : "Sobre"}</span>
                </div>
                <div>
                    <p>Origen:</p>
                    <span>{places.origin}</span>
                </div>
                <div>
                    <p>Destino:</p>
                    <span>{places.destiny}</span>
                </div>
            </div>
            <div className='delivery'>
                <h4>Dias de entrega:</h4>
                <div className="days">
                    <span>Lunes</span>
                    <span>Martes</span>
                    <span>Miércoles</span>
                    <span>Jueves</span>
                    <span>Viernes</span>
                    <span>Sabado</span>
                    <span>Domingo</span>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className='concept'>Conceptos</th>
                        <th className='send_type'>Terrestre</th>
                        <th className='send_type send_air' style={{ display: `${showAir}` }} >Aéreo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Peso</td>
                        <td className='land'>{weight ? `${weight} kgs` : `No Aplica`}</td>
                        <td className='air' style={{display: `${showAir}`}} >{weight ? `${weight} kgs` : `No Aplica`}</td>
                    </tr>
                    <tr>
                        <td>Coste de Guía</td>
                        <td className='land'>{`$ ${landGuide.toFixed(2)}`}</td>
                        <td className='air' style={{ display: `${showAir}` }} >{airGuide ? `$ ${airGuide.toFixed(2)}` : "Peso excedido"}</td>
                    </tr>
                    <tr>
                        <td>Coste de peso excedente</td>
                        <td className='land'>{`$ ${landExtra.toFixed(2)}`}</td>
                        <td className='air' style={{ display: `${showAir}` }} >$ 0.00</td>
                    </tr>
                    <tr>
                        <td className='total_ceil'>
                            Total
                            <span>(Cotización Aproximada)</span>
                        </td>
                        <td>$ {(landGuide + landExtra).toFixed(2)}</td>
                        <td className='air' style={{ display: `${showAir}` }} >$ {airGuide.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <ul className='notes'>
                <li>*Costos de embalaje y tramites ya incluidos</li>
                <li>*IVA no incluido</li>
                <li>*Se aplica peso volumétrico cuando este es superior al peso físico</li>
                <li>*En caso de que sea zona extendida puede aplicar cargo extra en sucursal</li>
                <li>*Los sobres no de deben sobre pasar la cantidad de 30 hojas</li>
            </ul>
        </div>
    );
};

export default Table;