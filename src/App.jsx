import Header from './components/Header';
import Hero from './components/Hero';
import ModuleCard from './components/ModuleCard';
import PricingTable from './components/PricingTable';
import Footer from './components/Footer';
import { modules } from './data/modulesData';

export default function App() {
  return (
    <>
      <Header />
      <Hero />

      <section className="module-section section" id="modulos">
        <div className="container">
          <div className="module-section__header">
            <span className="module-section__label">Soluciones Modulares</span>
            <h2 className="module-section__title">
              Elige lo que tu hotel necesita
            </h2>
            <p className="module-section__subtitle">
              Cada módulo funciona de forma independiente o como parte de un pack
              integral. Seleccioná los que mejor se adapten a tu operación.
            </p>
          </div>

          {modules.map((mod, index) => (
            <ModuleCard key={mod.id} module={mod} index={index} />
          ))}
        </div>
      </section>

      <PricingTable />
      <Footer />
    </>
  );
}
