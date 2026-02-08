import React from 'react';
import './carousel.css';
import config from '../config/config.json';

const images = config.certificates.map((src, index) => {
  const url = config.imgSrc.source === 'url' ? config.imgSrc.url : import.meta.env.BASE_URL + src;
  const descriptions = [
    'เข้าร่วมการทดสอบ TOEIC',
    'เกียรติบัตร UX/UI Design',
    'Transcript / Certificate'
  ];
  const additionalDetails = [
    'การทดสอบ TOEIC เป็นการวัดทักษะภาษาอังกฤษสำหรับการทำงาน',
    'เกียรติบัตรจากการอบรม UX/UI ซึ่งประกอบด้วยการออกแบบประสบการณ์ผู้ใช้และต้นแบบ',
    'เอกสารรับรองผลการศึกษา'
  ];
  return { src: url, filename: src, isPdf: src.toLowerCase().endsWith('.pdf'), description: descriptions[index] || '', details: additionalDetails[index] || '' };
});

const CertificateCarousel: React.FC = () => {
  const handleCertificateClick = (certUrl: string) => {
    window.open(certUrl, '_blank');
  };

  return (
    <div className="certificate-container">
      {images.map((image, index) => (
        <div key={index} className="certificate-item">
          <div 
            onClick={() => handleCertificateClick(image.src)}
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCertificateClick(image.src);
              }
            }}
            aria-label={`Open ${image.description}`}
          >
            {image.isPdf ? (
              <object data={image.src} type="application/pdf" className="certificate-img">
                <a href={image.src} target="_blank" rel="noreferrer">เปิดไฟล์เกียรติบัตร (PDF)</a>
              </object>
            ) : (
              <img
                src={image.src}
                alt={`certificate-${index + 1}`}
                className="certificate-img"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/480x320?text=Image+Not+Found';
                }}
              />
            )}
          </div>

          <div className="certificate-description">
            <p style={{ fontWeight: 700 }}>{image.description}</p>
            <p>{image.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificateCarousel;

