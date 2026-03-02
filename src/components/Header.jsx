import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navItems = [
        { label: 'Módulos', href: '#modulos' },
        { label: 'Precios', href: '#precios' },
        { label: 'Contacto', href: '#contacto' },
    ];

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="container">
                <div className="header__logo">
                    GA Software <span>| Automatización</span>
                </div>
                <nav>
                    <ul className={`header__nav ${menuOpen ? 'open' : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    className="header__menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menú"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
