import { HiOutlineArrowDown } from 'react-icons/hi';

export default function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__badge">
                        <span className="hero__badge-dot"></span>
                        Propuesta de Automatización Hotelera
                    </div>
                    <h1 className="hero__title">
                        Automatización{' '}
                        <span className="hero__title-highlight">Inteligente</span>
                        <br />
                        para tu Hotel
                    </h1>
                    <p className="hero__subtitle">
                        Sistema modular de IA para atender llamadas, gestionar reservas,
                        procesar pagos y optimizar las operaciones de tu establecimiento —
                        todo de forma automatizada y sin perder la calidez del servicio.
                    </p>
                    <a href="#modulos" className="hero__cta">
                        Ver Módulos y Precios
                        <HiOutlineArrowDown />
                    </a>
                </div>
            </div>
            <div className="hero__scroll-indicator">
                <span>Scroll</span>
                <div className="hero__scroll-line"></div>
            </div>
        </section>
    );
}
