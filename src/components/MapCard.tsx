import './MapCard.css'

/**
 * Figma: node 60-28481 — Map Card
 * https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28481
 */
function ZoomPlusIcon() {
  return (
    <svg className="map-card__control-icon" width={18} height={18} viewBox="0 0 18 18" aria-hidden>
      <path
        d="M9 3v12M3 9h12"
        stroke="#101828"
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export default function MapCard() {
  return (
    <div className="map-card">
      <div className="map-card__basemap-wrap">
        <img
          className="map-card__basemap"
          src="/elements/map/basemap.png"
          alt=""
          draggable={false}
        />
      </div>

      <div className="map-card__address-pill">
        <img
          className="map-card__pin-icon"
          src="/elements/map/pin-icon.svg"
          alt=""
          width={18}
          height={18}
        />
        <p className="map-card__address-text">2507 Harris Blvd, Austin TX 78703</p>
      </div>

      <div className="map-card__controls" aria-hidden>
        <div className="map-card__control-btn">
          <ZoomPlusIcon />
        </div>
        <div className="map-card__control-btn">
          <img src="/elements/map/locate-icon.svg" alt="" width={18} height={18} />
        </div>
      </div>
    </div>
  )
}
