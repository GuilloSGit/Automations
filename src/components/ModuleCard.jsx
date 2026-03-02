import { HiOutlineCheck } from 'react-icons/hi';
import { CURRENCY } from '../data/modulesData';

export default function ModuleCard({ module, index }) {
    const isReverse = index % 2 !== 0;

    return (
        <article
            className={`module-card ${isReverse ? 'module-card--reverse' : ''}`}
            id={module.slug}
        >
            <div className="module-card__image-wrapper">
                <img
                    className="module-card__image"
                    src={module.image}
                    alt={module.title}
                    loading="lazy"
                />
            </div>

            <div className="module-card__content">
                <div className="module-card__code">
                    <span>⚙</span> {module.id}
                </div>

                <h3 className="module-card__title">{module.title}</h3>
                <p className="module-card__subtitle">{module.subtitle}</p>
                <p className="module-card__description">{module.description}</p>

                {/* Features */}
                <div className="module-card__features">
                    {module.features.map((feat, i) => (
                        <div className="module-card__feature" key={i}>
                            <div className="module-card__feature-icon">
                                <HiOutlineCheck />
                            </div>
                            <div className="module-card__feature-text">
                                <h4>{feat.name}</h4>
                                <p>{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pricing */}
                <div className="module-card__pricing">
                    <div className="module-card__price-item">
                        <div className="module-card__price-label">Desarrollo</div>
                        <div className="module-card__price-value">
                            {module.price}{CURRENCY}
                        </div>
                    </div>
                    <div className="module-card__price-item">
                        <div className="module-card__price-label">Mantenimiento</div>
                        <div className="module-card__price-value">
                            {module.maintenance}{CURRENCY}
                            <small>/mes</small>
                        </div>
                    </div>
                </div>

                {/* Fixed costs */}
                <div className="module-card__costs">
                    <div className="module-card__costs-title">
                        Gastos fijos del cliente
                    </div>
                    {module.fixedCosts.map((cost, i) => (
                        <div className="module-card__cost-item" key={i}>
                            <span>{cost.name}</span>
                            <span>{cost.cost}</span>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
