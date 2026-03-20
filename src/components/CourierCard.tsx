import './CourierCard.css'

function MobileIcon() {
  return (
    <svg width={18} height={24} viewBox="0 0 18 24" fill="none" aria-hidden>
      <path
        d="M12 21H6a2 2 0 01-2-2V5a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2z"
        stroke="white"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 18h.01" stroke="white" strokeWidth={2} strokeLinecap="round" />
    </svg>
  )
}

/**
 * Figma: node 60-28501 — Courier Card
 * https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28501
 */
export default function CourierCard() {
  return (
    <div className="courier-card">
      <div className="courier-card__customer">
        <span className="courier-card__label">Customer</span>
        <span className="courier-card__value">Sarah Mitchell</span>
      </div>
      <div className="courier-card__phone-wrap">
        <div className="courier-card__phone">
          <span className="courier-card__label">Phone</span>
          <span className="courier-card__value">+1 122 123 1423</span>
        </div>
      </div>
      <div className="courier-card__icon" aria-hidden>
        <MobileIcon />
      </div>
    </div>
  )
}
