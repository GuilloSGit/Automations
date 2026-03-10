import { HiOutlineMail, HiOutlineGlobe } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer" id="contacto">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <div className="footer__logo">GA Software</div>
                        <p className="footer__description">
                            Desarrollo de soluciones de automatización con IA para el sector
                            hotelero y empresas europeas. Transformamos la atención al cliente
                            con tecnología de vanguardia.
                        </p>
                    </div>

                    <div className="footer__contact">
                        <div className="footer__contact-title">Contacto</div>
                        <div className="footer__contact-item">
                            <FaWhatsapp />
                            <span>+54 387 629 5801</span>
                        </div>
                        <div className="footer__contact-item">
                            <HiOutlineGlobe />
                            <a href="https://ga-software.dev" target="_blank" rel="noopener noreferrer">
                                ga-software.dev
                            </a>
                        </div>
                        <div className="footer__contact-item">
                            <HiOutlineMail />
                            <span>guillermoandrada@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <span>© 2026 GA Software. Todos los derechos reservados.</span>
                </div>
            </div>
        </footer>
    );
}
