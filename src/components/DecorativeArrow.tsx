interface DecorativeArrowProps {
  direction?: 'left' | 'right'
  className?: string
}

export function DecorativeArrow({ direction = 'right', className = '' }: DecorativeArrowProps) {
  return (
    <span
      className={`decor-arrow decor-arrow--${direction}${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className="decor-arrow__line"
          d="M5 12h13"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          className="decor-arrow__head"
          d="M14 7l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
