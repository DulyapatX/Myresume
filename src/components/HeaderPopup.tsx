import { useEffect, useState } from 'react'

type Props = {
  enabled?: boolean
}

export default function HeaderPopup({ enabled = false }: Props) {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('resume_header_popup_dismissed') === '1'
    if (!enabled || dismissed) return
    const t = setTimeout(() => setVisible(true), 700)
    return () => clearTimeout(t)
  }, [enabled])

  function close() {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
      localStorage.setItem('resume_header_popup_dismissed', '1')
    }, 260)
  }

  if (!visible) return null

  return (
    <div className={"header-popup" + (closing ? ' closing' : '')} role="dialog" aria-label="Announcement">
      <div className="header-popup-inner">
        <div className="popup-left">
          <div className="popup-title">Welcome to My Resume</div>
          <div className="popup-sub">Interactive version — scroll or click certificates to explore.</div>
        </div>
        <div className="popup-actions">
          <button className="close-btn" aria-label="Close" onClick={close}>✕</button>
        </div>
      </div>
    </div>
  )
}
