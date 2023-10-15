import { useState } from 'react';
import paquetexpress from '../../assets/paquetexpress.svg';
import estafeta from '../../assets/estafeta.svg';

const Track = () => {
    const [tracking, setTracking] = useState(false);

    return (
        <section className="container">
            <div>
                <div className="section_head">
                    <h2>Rastreo de Envíos</h2>
                    <p>Elige una de las opciones de rastreo disponibles a continuacion para realizar el seguimiento de tu envió</p>
                    <div className="shipping">
                        <a href="https://www.paquetexpress.com.mx/">
                            <img src={paquetexpress} alt="paquetexpress_logo" />
                        </a>
                        <span onClick={() => setTracking(!tracking)}>
                            <img src={estafeta} alt="paquetexpress_logo" />
                        </span>
                    </div>
                </div>
                <div className="frame_tracking">
                    {
                        tracking && (
                        <iframe
                            className='frame_tracking'
                            src="https://rastreositecorecms.azurewebsites.net/"
                            width="100%"
                            style={{
                                border: "0",
                                minHeight: "600px"
                            }}
                        >
                        </iframe>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Track;