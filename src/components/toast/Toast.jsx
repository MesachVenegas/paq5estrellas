import sended from '../../assets/sended.gif';
import { useState } from 'react';
import './toast.css';


const Toast = () => {
    const [btnClose, setBtnClose] = useState(false);

    return (
        <div className='toast_wrapper'>
                <figure className="toast_box">
                    <img src={sended} alt="sended_img" />
                    <figcaption>Mensaje Enviado</figcaption>
                </figure>
        </div>
    );
};

export default Toast;