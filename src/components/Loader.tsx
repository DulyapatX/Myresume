import { useEffect } from 'react'

type Props = {
  state: 'visible' | 'fading'
}

export default function Loader({ state }: Props) {
  useEffect(() => {
    // ensure keyboard focus is not trapped on load screen
    return () => {}
  }, [])

  return (
    <div className={"loading-page" + (state === 'fading' ? ' fade-out' : '')} role="status" aria-live="polite">
      <div className="loading-container">
        <div className="loading-logo">
          <div className="loading-title glitch" data-text="My Resume">
            <span>My Resume</span>
          </div>
          <div className="loading-subtitle">Loading resume...</div>
        </div>
      </div>
    </div>
  )
}
