import './AiCoachCard.css'

/**
 * Figma: node 60-28517
 * https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28517
 */
export default function AiCoachCard() {
  return (
    <section className="ai-coach-card" aria-label="AI Coach">
      <div className="ai-coach-card__badge">
        <img
          className="ai-coach-card__badge-icon"
          src="/elements/header/magic.svg"
          alt=""
          width={16}
          height={16}
        />
        <span className="ai-coach-card__badge-text">AI Coach</span>
      </div>
      <div className="ai-coach-card__divider" aria-hidden />
      <ol className="ai-coach-card__list">
        <li>1998 homes usually need replacement</li>
        <li>
          <span className="ai-coach-card__emph">Then say</span>
          <span>: you qualify for $500 rebate</span>
        </li>
        <li>
          <span className="ai-coach-card__emph">Avoid</span>
          <span>: talking about price first</span>
        </li>
      </ol>
    </section>
  )
}
