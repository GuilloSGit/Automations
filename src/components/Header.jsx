import { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currencyOpen, setCurrencyOpen] = useState(false);
    const { currency, setCurrency, currencies } = useCurrency();

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
                <nav style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Currency Selector */}
                    <div className="currency-selector">
                        <button
                            className="currency-selector__btn"
                            onClick={() => setCurrencyOpen(!currencyOpen)}
                        >
                            <span>{currency.icon}</span> {currency.code}
                        </button>
                        {currencyOpen && (
                            <div className="currency-selector__dropdown">
                                {currencies.map((curr) => (
                                    <button
                                        key={curr.code}
                                        className={`currency-selector__option ${currency.code === curr.code ? 'currency-selector__option--active' : ''}`}
                                        onClick={() => {
                                            setCurrency(curr);
                                            setCurrencyOpen(false);
                                        }}
                                    >
                                        <span>{curr.icon}</span> {curr.code}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

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
