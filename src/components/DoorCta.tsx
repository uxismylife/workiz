import './DoorCta.css'

/**
 * Figma node 60-28527 — primary CTA under right column (598×60 @ x=688, y=933)
 * https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28380
 */
export default function DoorCta() {
  return (
    <div className="door-cta" role="presentation">
      <span className="door-cta__label">I’m at the door</span>
      <span className="door-cta__icon-wrap" aria-hidden>
        <svg
          className="door-cta__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5l7 7-7 7M21 12H3"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  )
}
