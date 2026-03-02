import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const currencies = [
    { code: 'EUR', symbol: '€', label: 'Euro (España)', icon: '🇪🇸' },
    { code: 'USD', symbol: '$', label: 'Dólar (EE.UU.)', icon: '🇺🇸' },
    { code: 'ARS', symbol: '$', label: 'Peso Argentino', icon: '🇦🇷' },
];

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState(currencies[0]); // Default EUR
    const [rates, setRates] = useState({ USD: 1.05, ARS: 1100 }); // Default fallbacks
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch('https://open.er-api.com/v6/latest/EUR');
                const data = await response.json();
                if (data && data.rates) {
                    setRates({
                        USD: data.rates.USD,
                        ARS: data.rates.ARS,
                    });
                }
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRates();
    }, []);

    const convertPrice = (amount) => {
        if (currency.code === 'EUR') return amount;
        return amount * (rates[currency.code] || 1);
    };

    const formatPrice = (amount) => {
        const converted = convertPrice(amount);

        // Formateo específico por moneda
        const options = {
            style: 'currency',
            currency: currency.code,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        };

        // Ajuste para ARS para que se vea más natural
        if (currency.code === 'ARS') {
            options.maximumFractionDigits = 0;
        }

        return new Intl.NumberFormat(currency.code === 'ARS' ? 'es-AR' : currency.code === 'EUR' ? 'es-ES' : 'en-US', options).format(converted);
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, loading, currencies }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
};
