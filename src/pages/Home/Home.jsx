import { Carousel } from '../../components/Index';
import { Link } from 'react-router-dom';
import slider1 from '../../assets/paqueteria_layer.jpg';
import slider3  from '../../assets/slider3.jpg';
import slider4  from '../../assets/slider4.jpg';
import slider5  from '../../assets/slider5.jpg';
import './home.css'

const Home = () => {
    const imgs = [slider1, slider3, slider4, slider5];

    return (
        <div className='container'>
            <Carousel images={imgs} />
            <section className='utils'>
                <div className="titles">
                    <h1>Paqueteria 5 Estrellas</h1>
                    <h2>Acciones Rapidas</h2>
                </div>
                <ul className="actions_container">
                    <li>
                        <Link to="/quote" className='action_link'>
                            <i className="fa-solid fa-calculator"></i>
                            Cotizar un envió
                        </Link>
                    </li>
                    <li>
                        <Link to="tracking" className='action_link'>
                            <i className="fa-solid fa-location-dot"></i>
                            Rastrear mi envió
                        </Link>
                    </li>
                    <li>
                        <Link to="/zips" className='action_link'>
                            <i className="fa-solid fa-envelopes-bulk"></i>
                            Códigos Postales
                        </Link>
                    </li>
                </ul>
            </section>

            <section className='findUs'>
                    <h2>Encuentranos</h2>
                    <div className='map'>
                        <iframe
                            loading="lazy"
                            // allowfullscreen
                            style={{
                                width: '100%',
                                height: '100%',
                                border: '0'
                            }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.7031415449956!2d-116.98505936052196!3d32.50736259782801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d947384d6ac6cb%3A0xf3d7423ec662b295!2sPaqueteria%205%20Estrellas!5e0!3m2!1ses-419!2smx!4v1695099541511!5m2!1ses-419!2smx"
                            >
                        </iframe>
                    </div>
            </section>
        </div>
    );
};

export default Home;