import { type ReactNode, useLayoutEffect, useState } from 'react'
import { DESIGN_HEIGHT, DESIGN_WIDTH } from './canvasSize'

export { DESIGN_HEIGHT, DESIGN_WIDTH } from './canvasSize'

type Props = { children: ReactNode }

/**
 * Scales the fixed-size design so it always fits inside the window.
 * No minimum scale — a floor was making the logical canvas wider/taller than
 * the viewport and the UI looked “outside the frame”. Use scroll in #root if needed.
 */
export function ViewportCanvas({ children }: Props) {
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const update = () => {
      const root = document.getElementById('root')
      // Use #root’s *content* box so scale matches visible area (not window chrome)
      const w = root?.clientWidth ?? window.innerWidth
      const h = root?.clientHeight ?? window.innerHeight
      const s = Math.min(1, w / DESIGN_WIDTH, h / DESIGN_HEIGHT)
      setScale(s)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div
      className="viewport-canvas"
      style={{
        width: DESIGN_WIDTH * scale,
        height: DESIGN_HEIGHT * scale,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}
