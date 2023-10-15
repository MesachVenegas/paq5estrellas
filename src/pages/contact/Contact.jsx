import laptop from '../../assets/email_laptop.svg';
import { lazy, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

const Toast = lazy( () => import('../../components/toast/Toast'));

const Contact = () => {
    const form = useRef();
    const [sended, setSended] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_5b6t7as", "template_lgq69cv", form.current, "VVPqZdnXne9fptChI")
            .then( res =>  {
                console.info(res.text);
                setSended(true);
                setTimeout( () => {
                    setSended(false);
                    location.reload();
                }, 4000)
            })
            .catch( error => {
                console.error(error);
            });
        }

    return (
        <section className="contact_container">
            <h2>Contacto</h2>
            <div className="content_contact">
                <div className="contact-head">
                    <figure className='contact-figure'>
                        <div >
                            <img src={laptop} alt="email_laptop" />
                        </div>
                        <figcaption>
                            <h4>Envíanos tus dudas!</h4>
                            <p>Si tienes alguna duda en especifico no dudes en enviarnos un mensaje, con tus dudas</p>
                        </figcaption>
                    </figure>
                </div>
                <div className="form_container">
                    <form
                        id='email_form'
                        className='box'
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <div className="input_wrapper">
                            <input
                                id='name'
                                type="text"
                                name='name'
                                className='input_field'
                                placeholder='john Doe'
                                required
                            />
                            <label
                                htmlFor="name"
                                className='input_label'
                            >
                                Nombre
                            </label>
                            <i className="fa-solid fa-user input_icon"></i>
                        </div>
                        <div className="input_wrapper">
                            <input
                                id='subject'
                                type="text"
                                name='subject'
                                className='input_field'
                                placeholder='consult'
                            />
                            <label
                                htmlFor="subject"
                                className='input_label'
                            >
                                Asunto
                            </label>
                            <i className="fa-solid fa-pen-to-square input_icon"></i>
                        </div>
                        <div className="input_wrapper">
                            <input
                                id='email'
                                type="email"
                                name='email'
                                className='input_field'
                                placeholder='example@example.com'
                                required
                            />
                            <label
                                htmlFor="email"
                                className='input_label'
                            >
                                Correo
                            </label>
                            <i className="fa-solid fa-at input_icon"></i>
                        </div>
                        <div className="input_wrapper">
                            <textarea
                                className='input_textarea'
                                name="message"
                                id="message"
                                cols="30"
                                required
                            >
                            </textarea>
                            <label
                                htmlFor="email"
                                className='input_label'
                            >
                                Mensaje
                            </label>
                        </div>
                        <button className='contact_btn'>
                            Enviar
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
                {
                    sended && <Toast />
                }
            </div>
        </section>
    );
};

export default Contact;