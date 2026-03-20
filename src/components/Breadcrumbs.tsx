import { Fragment } from 'react'
import './Breadcrumbs.css'

export type BreadcrumbItem = {
  label: string
  current?: boolean
}

const DEFAULT_ITEMS: BreadcrumbItem[] = [
  { label: 'Property brief', current: true },
  { label: 'Site assessment' },
  { label: 'Kitchen table moment' },
  { label: 'The handshake' },
]

function Chevron() {
  return (
    <span className="breadcrumbs__chevron" aria-hidden>
      <img
        src="/elements/header/arrow-right.svg"
        alt=""
        width={9}
        height={20}
        className="breadcrumbs__chevron-img"
      />
    </span>
  )
}

type Props = {
  items?: BreadcrumbItem[]
}

/**
 * Figma: node 60-28470
 * https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28470
 */
export default function Breadcrumbs({ items = DEFAULT_ITEMS }: Props) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="breadcrumbs__inner">
        {items.map((item, index) => (
          <Fragment key={item.label}>
            {index > 0 ? <Chevron /> : null}
            <span
              className={
                item.current
                  ? 'breadcrumbs__crumb breadcrumbs__crumb--current'
                  : 'breadcrumbs__crumb'
              }
              {...(item.current ? { 'aria-current': 'page' as const } : {})}
            >
              {item.label}
            </span>
          </Fragment>
        ))}
      </div>
    </nav>
  )
}
