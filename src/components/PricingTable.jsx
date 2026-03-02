import {
    modules,
    CURRENCY,
    PACK_DISCOUNT,
    getTotalDevelopment,
    getTotalMaintenance,
    getPackPrice,
    getPackMaintenance,
} from '../data/modulesData';

export default function PricingTable() {
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
                                        {mod.price}
                                        {CURRENCY}
                                    </td>
                                    <td className="price-cell">
                                        {mod.maintenance}
                                        {CURRENCY}
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
                                    {totalDev}
                                    {CURRENCY}
                                </td>
                                <td className="price-cell">
                                    {totalMaint}
                                    {CURRENCY}
                                </td>
                            </tr>

                            {/* Pack row */}
                            <tr className="pricing-table__pack-row">
                                <td>
                                    <span className="module-name">🏆 Pack Completo</span>
                                    <span className="module-code">PACK-FULL</span>
                                    <span className="pricing__discount-badge">
                                        Ahorro de {PACK_DISCOUNT}{CURRENCY}
                                    </span>
                                </td>
                                <td className="price-cell">
                                    {packPrice}
                                    {CURRENCY}
                                </td>
                                <td className="price-cell">
                                    {packMaint}
                                    {CURRENCY}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
