import './track.css';

const Track = () => {
    return (
        <section className="container">
            <div>
                <div className="track_head">
                    <h2>Rastreo de Envíos</h2>
                    <p>Elige una de las opciones de rastro disponibles a continuacion para realizar el seguimiento de tu envió</p>
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