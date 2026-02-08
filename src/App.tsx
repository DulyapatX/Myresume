
import './resume.css'
import './superGif.css'
import AuroraBackground from './components/AuroraBackground'
import { useEffect, useState } from 'react'
import CertificateCarousel from './components/CertificateCarousel'
import Loader from './components/Loader'
import Footer from './components/Footer'
import HeaderPopup from './components/HeaderPopup'
import config from './config/config.json'

function Resume() {
  const [loadingState, setLoadingState] = useState<'visible' | 'fading' | 'done'>('visible')
  // เลือกรูปจาก config.imgSrc: source = 'local' ใช้ไฟล์ใน public, source = 'url' ใช้ลิงก์เต็ม
  const avatarSrc = (() => {
    if (config.imgSrc?.source === 'url' && config.imgSrc.url) {
      return config.imgSrc.url
    }

    if (config.imgSrc?.source === 'local' && config.imgSrc.local) {
      return import.meta.env.BASE_URL + config.imgSrc.local
    }

    return import.meta.env.BASE_URL + 'profile.jpg'
  })()

  useEffect(() => {
    // minimum visible time then fade then remove
    const minVisible = setTimeout(() => setLoadingState('fading'), 700)
    const finish = setTimeout(() => setLoadingState('done'), 1500)
    return () => {
      clearTimeout(minVisible)
      clearTimeout(finish)
    }
  }, [])

  useEffect(() => {
    if (loadingState === 'done') {
      document.body.classList.add('content-loaded')
    } else {
      document.body.classList.remove('content-loaded')
    }
  }, [loadingState])

  return (
    <>
      <AuroraBackground
        colorStops={['#5227FF', '#2563EB', '#5227FF']}
        amplitude={0.8}
        blend={0.6}
        speed={1.2}
      />
      {/* loader overlay (Hype Macro style) */}
      {loadingState !== 'done' && <Loader state={loadingState === 'fading' ? 'fading' : 'visible'} />}
      <HeaderPopup enabled={loadingState === 'done'} />

      {/* ปุ่ม Download PDF ถูกลบออกแล้ว */}
      <div className="resume-container" style={{ visibility: loadingState === 'done' ? 'visible' : 'hidden', opacity: loadingState === 'done' ? 1 : 0 }}>
      <header className="resume-header" id="profile">
        <img
          className="resume-avatar"
          src={avatarSrc}
          alt="avatar"
          onError={e => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://via.placeholder.com/120?text=No+Image';
          }}
        />
        <div>
          <h1 className="resume-title">ดุลยพัฒน์ จิรายุพัฒนา</h1>
          <div className="resume-role">Data Analyst , Data Scientist , Web Developer</div>
          <div className="resume-contact">📧 dulyapatj@gmail.com</div>
          <div className="resume-contact">📞 084-013-1577</div>
          <div className="resume-contact">นนทบุรี, ประเทศไทย</div>
        </div>
      </header>

      <nav className="card-nav" aria-label="Section navigation">
        <a className="card-nav-item" href="#profile">
          <span className="nav-icon" aria-hidden>
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.6-4 14.4-4 16 0" />
            </svg>
          </span>
          <span className="nav-text">โปรไฟล์</span>
        </a>
        <a className="card-nav-item" href="#experience">
          <span className="nav-icon" aria-hidden>
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <rect x="3" y="6" width="18" height="14" rx="2" />
              <path d="M8 6V4h8v2" />
            </svg>
          </span>
          <span className="nav-text">ประสบการณ์</span>
        </a>
        <a className="card-nav-item" href="#projects">
          <span className="nav-icon" aria-hidden>
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <rect x="4" y="4" width="7" height="7" rx="1" />
              <rect x="13" y="4" width="7" height="7" rx="1" />
              <rect x="4" y="13" width="7" height="7" rx="1" />
              <rect x="13" y="13" width="7" height="7" rx="1" />
            </svg>
          </span>
          <span className="nav-text">โปรเจค</span>
        </a>
        <a className="card-nav-item" href="#certificates">
          <span className="nav-icon" aria-hidden>
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <circle cx="9" cy="9" r="5" />
              <path d="M14 14l3 6 2-2 2 2-3-6" />
            </svg>
          </span>
          <span className="nav-text">เกียรติบัตร</span>
        </a>
      </nav>

      <section className="resume-section" id="experience">
        <div className="resume-section-title">ประสบการณ์ทำงาน</div>
        <ul className="resume-list">
          <li className="resume-list-item">
            <div className="resume-project-title">พนักงานขายรองเท้า Breaker (Part-time | Central)</div>
            <div className="resume-project-desc">
              <ul style={{margin:0, paddingLeft: '1.2em'}}>
                <li>แนะนำและจำหน่ายสินค้าให้ตรงตามความต้องการของลูกค้า</li>
                <li>ดูแลลูกค้าและแก้ไขปัญหาเฉพาะหน้า</li>
                <li>จัดเรียง ตรวจนับ และดูแลสต๊อกสินค้า</li>
                <li>ทำงานร่วมกับทีมภายใต้เวลางานที่จำกัด</li>
              </ul>
            </div>
          </li>
        </ul>
      </section>

      <section className="resume-section" id="projects">
        <div className="resume-section-title">โปรเจคที่เคยทำ</div>
        <div className="projects-list">
          <div className="project-row">
            <div className="project-content">
              <div className="resume-project-title">เว็บไซต์ขายเมาส์ (Web Server Project)</div>
              <div className="resume-project-desc">
                <ul style={{margin:0, paddingLeft: '1.2em'}}>
                  <li>ออกแบบและพัฒนาเว็บไซต์ขายเมาส์ด้วย HTML และ Tailwind CSS</li>
                  <li>พัฒนา Web Server และเชื่อมต่อฐานข้อมูล MongoDB</li>
                  <li>จดโดเมนเนมและเช่า Hosting สามารถใช้งานจริงบนอินเทอร์เน็ต</li>
                  <li>ติดตั้งและใช้งาน HTTPS (SSL Certificate) เพื่อความปลอดภัยของเว็บไซต์</li>
                </ul>
              </div>
            </div>
            <div className="project-image" aria-hidden style={{backgroundImage: `linear-gradient(135deg, #f8fafc, #eef2ff)`}}>
              <div className="project-badge">Demo</div>
              <img
                src={import.meta.env.BASE_URL + 'mouse.gif'}
                alt="project demo"
                className="project-gif"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              <div className="project-caption">เว็บไซต์ขายเมาส์ — ตัวอย่าง</div>
            </div>
          </div>

          <div className="project-row reverse">
            <div className="project-image" aria-hidden style={{backgroundImage: `linear-gradient(135deg, #fef3f2, #fff7ed)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div className="project-badge">Demo</div>
              <img
                src={import.meta.env.BASE_URL + 'super_battle_city.gif'}
                alt="Super Battle City demo"
                className="project-gif"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              <div className="project-caption">Super Battle City — Gameplay preview</div>
            </div>
            <div className="project-content">
              <div className="resume-project-title">Super Battle City (Game Project)</div>
              <div className="resume-project-desc">
                <ul style={{margin:0, paddingLeft: '1.2em'}}>
                  <li>พัฒนาเกมโดยได้รับแรงบันดาลใจจากเกม Battle City</li>
                  <li>ออกแบบระบบการเล่น ตัวละคร และการควบคุมพื้นฐาน</li>
                  <li>เขียนโปรแกรมด้วยภาษา C#</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-row">
            <div className="project-content">
                  <div className="resume-project-title">ระบบขายผงชา ผงกาแฟ และเครื่องชงเครื่องดื่ม (E-Commerce - Tea & Coffee Powders)</div>
                  <div className="resume-project-desc">
                    <ul style={{margin:0, paddingLeft: '1.2em'}}>
                      <li>พัฒนาระบบสำหรับจำหน่ายผงชา ผงกาแฟ และอุปกรณ์การชง</li>
                      <li>ผู้ใช้สามารถเลือกสินค้า เพิ่มลงตะกร้า และชำระเงินผ่านระบบ</li>
                      <li>ผู้ดูแลระบบสามารถจัดการสินค้าและเรียกดูรายงานการขาย</li>
                      <li>แสดงตัวอย่างรูปสินค้าเพื่อช่วยในการเลือกซื้อ</li>
                    </ul>
                  </div>
            </div>
            <div className="project-image" aria-hidden style={{backgroundImage: `linear-gradient(135deg, #eef2ff, #f8fafc)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div className="project-badge">Demo</div>
              <img
                src={import.meta.env.BASE_URL + 'assets/products_screenshot.png'}
                alt="product grid screenshot"
                className="project-gif"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = import.meta.env.BASE_URL + 'assets/products_screenshot.svg' }}
                style={{maxWidth: '92%', maxHeight: 260, borderRadius: 12, boxShadow: '0 12px 32px rgba(2,6,23,0.08)'}}
              />
              <div className="project-caption">E‑Commerce — Product grid preview</div>
            </div>
          </div>

          <div className="project-row">
            <div className="project-content">
              <div className="resume-project-title">การออกแบบเว็บโรงพยาบาล แผนกรังสี (Hospital system)</div>
              <div className="resume-project-desc">
                <ul style={{margin:0, paddingLeft: '1.2em'}}>
                  <li>ออกแบบและพัฒนาเว็บแอปพลิเคชันสำหรับจัดการผู้ป่วยแผนกรังสี</li>
                  <li>รองรับการค้นหาผู้ป่วย การแสดงข้อมูลการตรวจเอกซเรย์ และการจัดการสถานะ</li>
                  <li>ออกแบบ UI/UX เพื่อให้ใช้งานง่ายสำหรับบุคลากรทางการแพทย์</li>
                  <li>สร้างระบบการรายงานและบันทึกผลการตรวจ</li>
                </ul>
              </div>
            </div>
            <div className="project-image" aria-hidden style={{backgroundImage: `linear-gradient(135deg, #ecf0f1, #bdc3c7)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div className="project-badge">Demo</div>
              <img
                src={import.meta.env.BASE_URL + 'hospital.gif'}
                alt="hospital radiology web design"
                className="project-gif"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                style={{maxWidth: '92%', maxHeight: 260, borderRadius: 12, boxShadow: '0 12px 32px rgba(2,6,23,0.08)'}}
              />
              <div className="project-caption">Hospital Radiology System — Dashboard preview</div>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section" id="certificates">
        <div className="resume-section-title">เกียรติบัตร</div>
        <CertificateCarousel />
      </section>
      </div>

      {loadingState === 'done' && <Footer />}
    </>
  )
}

export default Resume
