import './PropertyDetailsCard.css'

/**
 * Figma: node 60-28393
 * https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28393
 */
export default function PropertyDetailsCard() {
  return (
    <section className="property-details-card" aria-labelledby="property-details-heading">
      <div className="property-details-card__header">
        <h2 className="property-details-card__title" id="property-details-heading">
          Property details
        </h2>
        <span className="property-details-card__badge">Attom</span>
      </div>
      <div className="property-details-card__divider" aria-hidden />
      <dl className="property-details-card__rows">
        <div className="property-details-card__row">
          <dt className="property-details-card__label">Property type</dt>
          <dd className="property-details-card__value">Single family home</dd>
        </div>
        <div className="property-details-card__row">
          <dt className="property-details-card__label">Size</dt>
          <dd className="property-details-card__value">1,840 sqft</dd>
        </div>
        <div className="property-details-card__row">
          <dt className="property-details-card__label">Year built</dt>
          <dd className="property-details-card__value">1998</dd>
        </div>
      </dl>
    </section>
  )
}
