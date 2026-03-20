import './AvailableSavingsCard.css'

/**
 * Figma: node 60-28443
 * https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28443
 */
export default function AvailableSavingsCard() {
  return (
    <section className="savings-card" aria-labelledby="savings-heading">
      <div className="savings-card__top">
        <div className="savings-card__header">
          <h2 className="savings-card__title" id="savings-heading">
            Available savings
          </h2>
          <span className="savings-card__badge">DSIRE</span>
        </div>
        <div className="savings-card__divider" aria-hidden />
      </div>

      <div className="savings-card__body">
        <div className="savings-card__hero">
          <p className="savings-card__amount">$500</p>
          <p className="savings-card__hero-caption">utility rebate available</p>
        </div>
        <div className="savings-card__divider" aria-hidden />
        <dl className="savings-card__rows">
          <div className="savings-card__row">
            <dt className="savings-card__label">Rebate type</dt>
            <dd className="savings-card__value">Utility rebate</dd>
          </div>
          <div className="savings-card__row">
            <dt className="savings-card__label">Expires</dt>
            <dd className="savings-card__value savings-card__value--warning">June 30, 2026</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
