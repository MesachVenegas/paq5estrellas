import build from '../../assets/build-lego.gif';
import './work.css';

const Work = () => {
    return (
        <section>
            <figure className='process'>
                <figcaption>Estamos trabajando para poder brindarte mejores servicios, esperalos pronto</figcaption>
                <img src={build} alt="under_construction" />
            </figure>
        </section>
    );
};

export default Work;