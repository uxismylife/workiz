import './EnergyProfileCard.css'

/**
 * Figma: node 60-28422
 * https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28422
 */
export default function EnergyProfileCard() {
  return (
    <section className="energy-profile-card" aria-labelledby="energy-profile-heading">
      <div className="energy-profile-card__header">
        <h2 className="energy-profile-card__title" id="energy-profile-heading">
          Energy profile
        </h2>
        <div className="energy-profile-card__badges">
          <span className="energy-profile-card__badge">Arcadia</span>
          <span className="energy-profile-card__badge">Genability</span>
        </div>
      </div>
      <div className="energy-profile-card__divider" aria-hidden />
      <dl className="energy-profile-card__rows">
        <div className="energy-profile-card__row">
          <dt className="energy-profile-card__label">Utility provider</dt>
          <dd className="energy-profile-card__value">Austin Energy</dd>
        </div>
        <div className="energy-profile-card__row">
          <dt className="energy-profile-card__label">Rate</dt>
          <dd className="energy-profile-card__value">$0.12 per kWh</dd>
        </div>
      </dl>
    </section>
  )
}
