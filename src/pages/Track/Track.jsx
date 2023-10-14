import paquetexpress from '../../assets/paquetexpress.svg';

const Track = () => {
    return (
        <section className="container">
            <div>
                <div className="section_head">
                    <h2>Rastreo de Envíos</h2>
                    <p>Elige una de las opciones de rastro disponibles a continuacion para realizar el seguimiento de tu envió</p>
                    <p>Si tu paquete fue enviado ingresa a paqueteria express para el rastreo de tu paquete.</p>
                    <figure>
                        <a href="https://www.paquetexpress.com.mx/">
                            <img src={paquetexpress} alt="paquetexpress_logo" />
                        </a>
                    </figure>
                </div>
                <iframe
                    src="https://rastreositecorecms.azurewebsites.net/"
                    width="100%"
                    style={{
                        border: "0",
                        minHeight: "600px"
                    }}
                >
                </iframe>
            </div>
        </section>
    );
};

export default Track;