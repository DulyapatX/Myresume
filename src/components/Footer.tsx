export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">My Resume</div>
          <div className="footer-tag">Portfolio — Projects & Certificates</div>
        </div>

        <div className="footer-links">
          <a href="mailto:dulyapatj@gmail.com">Contact</a>
          <a href="https://github.com/DulyapatX" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top</a>
        </div>
      </div>

      <div className="footer-bottom">© {new Date().getFullYear()} ดุลยพัฒน์ จิรายุพัฒนา — Portfolio — Projects &amp; Certificates</div>
    </footer>
  )
}
