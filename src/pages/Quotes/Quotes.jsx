import Table from '../../components/quoteTable/Table';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './quotes.css';

const Quotes = () => {
    const [packageRadio, setPackageRadio] = useState(false);
    const [displayQuote, setDisplayQuote] = useState(false);
    const [weight, setWeight] = useState(0);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(data => {
        const { destiny, high, long, origin, weight, width } = data;
        let calc = undefined;
        if(high && long && width) {
            const preCalc = Math.ceil(long * width * high / 5000);

            if(preCalc > weight) {
                calc = preCalc;
            } else {
                calc = weight;
            }
        }
        setWeight(calc);
        setDisplayQuote(true);
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
                                required: {
                                    value: true,
                                    message: "Ingrese un codigo postal primero"
                                },
                                pattern: {
                                    value: /^[0-9]{5}$/,
                                    message: "Ingrese un codigo postal valido"
                                }
                            })}
                        />
                        {
                            errors.origin?.type === "required" && <small className='error_msg'>{errors.origin.message}</small>
                        }
                    </div>
                </div>
                <div className="form_group">
                    <label htmlFor="destiny">Codigo postal destino:</label>
                    <div className="input_box">
                        <input type="text" id='destiny' {...register("destiny", {
                            required: {
                                value: true,
                                message: "Ingrese un codigo destino primero",
                            },
                            pattern: {
                                value: /^[0-9]{5}$/,
                                message: "Ingrese un codigo postal valido"
                            }
                        })} />
                        {
                            errors.destiny && <small className='error_msg'>{errors.destiny.message}</small>
                        }
                    </div>
                </div>
                <div className="radio_container">
                    <p>Tipo:</p>
                    <div className="radio_group">
                        <input type="radio" name='type' id='upon' value='upon' onChange={() => setPackageRadio(false)} defaultChecked />
                        <label htmlFor="upon">Sobre</label>
                        <input type="radio" name='type' id='package' value='package' onChange={() => setPackageRadio(true)} />
                        <label htmlFor="package">Paquete</label>
                    </div>
                </div>
                {
                    packageRadio && (
                        <div className='package_details'>
                            <div className="form_group-head">
                                <h4>Proporcione los datos del paquete.</h4>
                            </div>
                            <div className="form_group-package">
                                <div className="form_group-package-item">
                                    <label htmlFor="weight">Peso en Kg:</label>
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            id='weight'
                                            {...register("weight", {
                                                validate: (value) => {
                                                    if (packageRadio) {
                                                        if (!value || value.trim() === '') {
                                                            return "Este campo es requerido"
                                                        }
                                                    }
                                                }
                                            })}
                                        />
                                        {
                                            errors.weight && <small className='error_msg'>{errors.weight.message}</small>
                                        }
                                    </div>
                                </div>
                                <div className="form_group-package-item">
                                    <label htmlFor="high">Alto en cms:</label>
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            id='high'
                                            {...register("high", {
                                                validate: (value) => {
                                                    if (packageRadio) {
                                                        if (!value || value.trim() === '') {
                                                            return "Este campo es requerido"
                                                        }
                                                    }
                                                }
                                            })}
                                        />
                                        {
                                            errors.high && <small className='error_msg'>{errors.high.message}</small>
                                        }
                                    </div>
                                </div>
                                <div className="form_group-package-item">
                                    <label htmlFor="width">Ancho en cms:</label>
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            id='width'
                                            {...register("width", {
                                                validate: (value) => {
                                                    if (packageRadio) {
                                                        if (!value || value.trim() === '') {
                                                            return "Este campo es requerido"
                                                        }
                                                    }
                                                }
                                            })}
                                        />
                                        {
                                            errors.width && <small className='error_msg'>{errors.width.message}</small>
                                        }
                                    </div>
                                </div>
                                <div className="form_group-package-item">
                                    <label htmlFor="long">Largo en cms:</label>
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            id='long'
                                            {...register("long", {
                                                validate: (value) => {
                                                    if (packageRadio) {
                                                        if (!value || value.trim() === '') {
                                                            return "Este campo es requerido"
                                                        }
                                                    }
                                                }
                                            })}
                                        />
                                        {
                                            errors.long && <small className='error_msg'>{errors.long.message}</small>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                <div className="form_actions">
                    <button>Calcular <i className="fa-solid fa-calculator"></i></button>
                    <small>Limpiar Formulario</small>
                </div>
            </form>
            <div className="table_box">
                {
                    displayQuote && <Table weight={weight}/>
                }
            </div>
        </section>
    );
};

export default Quotes;