import { useForm } from 'react-hook-form';
import './quotes.css';

const Quotes = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(data => {
        console.log(data);
    })

    return (
        <section className='container'>
            <div className="section_head">
                <h2>Cual es el costo de mi envió?, sigue los siguientes pasos.</h2>
                <ol>
                    <li>Ingresa el codigo postal de origen y destino.</li>
                    <li>Indica si es un sobre o paquete.</li>
                    <li>En caso de ser paquete ingresa sus dimensiones.</li>
                    <li>Da click en calcular.</li>
                </ol>
            </div>
            <form className="quote_form" onSubmit={onSubmit}>
                <div className="form_group">
                    <label htmlFor="origin">Codigo postal origen:</label>
                    <div className="input_box">
                        <input
                            type="text"
                            id='origin'
                            {...register("origin", {
                                required: true,
                                pattern: /^[0-9]{5}$/
                            })}
                        />
                        {
                            errors.origin?.type === "required" && <small className='error_msg'>Ingrese un codigo postal primero</small>
                        }
                        {
                            errors.origin?.type === "pattern" && <small className='error_msg'>Ingrese un codigo postal valido</small>
                        }
                    </div>
                </div>
                <div className="form_group">
                    <label htmlFor="destiny">Codigo postal destino:</label>
                    <div className="input_box">
                        <input type="text" id='destiny' {...register("destiny", {
                            required: true,
                            pattern: /^[0-9]{5}$/
                        })} />
                        {
                            errors.destiny?.type === "required" && <small className='error_msg'>Ingrese un codigo postal primero</small>
                        }
                        {
                            errors.destiny?.type === "pattern" && <small className='error_msg'>Ingrese un codigo postal valido</small>
                        }
                    </div>
                </div>
                <div className="radio_container">
                    <p>Tipo:</p>
                    <div className="radio_group">
                        <input type="radio" id='upon' value='upon' />
                        <label htmlFor="upon">Sobre</label>
                        <input type="radio" id='package' value='package' />
                        <label htmlFor="package">Paquete</label>
                    </div>
                </div>
                <div className='package_details'>
                    <div className="form_group-head">
                        <h4>Proporcione los datos del paquete.</h4>
                    </div>
                    <div className="form_group-package">
                        <div className="form_group-package-item">
                            <label htmlFor="weight">Peso en Kg:</label>
                            <input type="text" id='weight' {...register("weight")} />
                        </div>
                        <div className="form_group-package-item">
                            <label htmlFor="high">Alto en cms:</label>
                            <input type="text" id='high'  {...register("high")} />
                        </div>
                        <div className="form_group-package-item">
                            <label htmlFor="width">Ancho en cms:</label>
                            <input type="text" id='width' {...register("width")} />
                        </div>
                        <div className="form_group-package-item">
                            <label htmlFor="long">Largo en cms:</label>
                            <input type="text" id='long'  {...register("long")} />
                        </div>
                    </div>
                </div>

                <div className="form_actions">
                    <button>Calcular <i className="fa-solid fa-calculator"></i></button>
                    <small>Limpiar Formulario</small>
                </div>
            </form>
        </section>
    );
};

export default Quotes;