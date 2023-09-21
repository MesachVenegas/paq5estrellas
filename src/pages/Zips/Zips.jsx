import './zips.css';

const Zips = () => {

    return (
        <section className="container">
            <h2>Consulta aquí tu Código Postal</h2>
            <div className="cp_frame">
                <iframe
                    id="miFrame"
                    src="https://codigospostalessitecorecms.azurewebsites.net/?lang=0"
                    width="100%"
                    height="500"
                    style={{
                        border: '0',
                    }}
                    transparency="transparency"
                >
                </iframe>
            </div>
        </section>
    );
};

export default Zips;