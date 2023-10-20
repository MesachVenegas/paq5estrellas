import { useEffect } from 'react';
import envios from '../../assets/earth_fly.png';
import guide from '../../assets/guide.svg';
import cross from '../../assets/cross.png';
import recollection from '../../assets//recoleccion.svg';
import cobertura from '../../assets/cobertura.png';
import './about.css';

const About = () => {

    useEffect( () => {
        const title = document.title;
        if(title !== "Paqueteria 5 Estrellas | About" ){
            document.title = 'Paqueteria 5 Estrellas | About'
        }
    },[])

    return (
        <section className='about_section'>
            <h3>Paqueteria 5 Estrellas</h3>
            <article>
                <div className="presentation">
                    <h4>Quienes Somos?</h4>
                    <p>Somos una empresa 100% mexicana en el mercado, encargada de la logística de envíos nacionales, contamos con asociación de empresas con una logística solida y Buscamos ser la solución de tus envíos!</p>
                </div>
                <div className="card_container">
                    <div className="card_item">
                        <h4>Mision</h4>
                        <p>Nuestra mision es brindar el mejor servicio para tus envíos dandote la seguridad, facilidad y control de todo el tramite y proceso.</p>
                    </div>
                    <div className="card_item">
                        <h4>Vision</h4>
                        <p>Ser reconocidos en todo Mexico como la mejor opción de transporte y logística de tu mercancía y artículos personales. Crecer como negocio y esparcirnos en toda la republica siendo el mejor en brindarte este servicio.</p>
                    </div>
                    <div className="card_item">
                        <h4>Logística</h4>
                        <p>Contamos con una red logística sólida y asociaciones estratégicas que nos permiten ofrecer un servicio ágil y eficiente. Esto nos convierte en tu socio ideal en logística de envíos.</p>
                    </div>
                </div>
            </article>
            <article className='service_container'>
                <h4>Nuestros Servicios</h4>
                <div className="service_head">
                    <p>Contamos con una amplia variedad de servicios para su comodidad</p>
                </div>
                <div className="card_container">
                    <div className="card_item-services">
                        <h4>Cobertura</h4>
                        <p>Contamos con cobertura a nivel nacional.</p>
                        <figure className='card_figure'>
                            <img className='card_img' src={cobertura} alt="planeta" width="100%" height="100%" />
                        </figure>
                    </div>
                    <div className="card_item-services">
                        <h4>Recolecion y Tramites</h4>
                        <p>Realizamos todo los tramites necesarios para el envió y embalaje.</p>
                        <figure className='card_figure'>
                            <img className='card_img' src={recollection} alt="planeta" width="100%" height="100%" />
                        </figure>
                    </div>
                    <div className="card_item-services">
                        <h4>Cruce de Mercancía</h4>
                        <p>Te apoyamos con el cruce de tus mercancías de USA a Mexico</p>
                        <figure className='card_figure'>
                            <img className='card_img' src={cross} alt="planeta" width="100%" height="100%" />
                        </figure>
                    </div>
                    <div className="card_item-services">
                        <h4>Guías Pre-pagadas</h4>
                        <p>Contamos con recolecciones a domicilio para mayor comodidad y ahorro de tiempo.</p>
                        <figure className='card_figure'>
                            <img className='card_img' src={guide} alt="planeta" width="100%" height="100%" />
                        </figure>
                    </div>
                    <div className="card_item-services">
                        <h4>Envíos Terrestres - Aéreos</h4>
                        <p>Contamos con recolecciones a domicilio para mayor comodidad y ahorro de tiempo.</p>
                        <figure className='card_figure'>
                            <img className='card_img' src={envios} alt="planeta" width="100%" height="100%" />
                        </figure>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default About;