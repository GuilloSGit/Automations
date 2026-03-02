import { useCurrency } from '../context/CurrencyContext';
import {
    modules,
    PACK_DISCOUNT,
    getTotalDevelopment,
    getTotalMaintenance,
    getPackPrice,
    getPackMaintenance,
} from '../data/modulesData';

export default function PricingTable() {
    const { formatPrice } = useCurrency();
    const totalDev = getTotalDevelopment();
    const totalMaint = getTotalMaintenance();
    const packPrice = getPackPrice();
    const packMaint = getPackMaintenance();

    return (
        <section className="pricing-section section" id="precios">
            <div className="container">
                <div className="pricing-section__header">
                    <h2 className="pricing-section__title">Resumen de Inversión</h2>
                    <p className="pricing-section__subtitle">
                        Todos los módulos y el pack completo con descuento incluido
                    </p>
                </div>

                <div className="pricing-table-wrapper">
                    <table className="pricing-table">
                        <thead>
                            <tr>
                                <th>Módulo</th>
                                <th>Desarrollo</th>
                                <th>Mantenimiento / mes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {modules.map((mod) => (
                                <tr key={mod.id}>
                                    <td>
                                        <span className="module-name">{mod.title}</span>
                                        <span className="module-code">{mod.id}</span>
                                    </td>
                                    <td className="price-cell">
                                        {formatPrice(mod.price)}
                                    </td>
                                    <td className="price-cell">
                                        {formatPrice(mod.maintenance)}
                                    </td>
                                </tr>
                            ))}

                            {/* Sum row */}
                            <tr className="pricing-table__sum-row">
                                <td>
                                    <span className="module-name" style={{ fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
                                        Suma individual
                                    </span>
                                </td>
                                <td className="price-cell">
                                    {formatPrice(totalDev)}
                                </td>
                                <td className="price-cell">
                                    {formatPrice(totalMaint)}
                                </td>
                            </tr>

                            {/* Pack row */}
                            <tr className="pricing-table__pack-row">
                                <td>
                                    <span className="module-name">🏆 Pack Completo</span>
                                    <span className="module-code">PACK-FULL</span>
                                    <span className="pricing__discount-badge">
                                        Ahorro de {formatPrice(PACK_DISCOUNT)}
                                    </span>
                                </td>
                                <td className="price-cell">
                                    {formatPrice(packPrice)}
                                </td>
                                <td className="price-cell">
                                    {formatPrice(packMaint)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
