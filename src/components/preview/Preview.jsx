import './preview.css';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useRef } from 'react';

const Preview = (props) => {
  let info = props.info;
  let emp = props.employment;
  let edu = props.education;
  let skills = props.skills;
  let intrest = props.intrest;
  const printRef = useRef();

  const handleDownload = async () => {
    const element = printRef.current;

    // Configure html2canvas for better PDF generation
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
      allowTaint: true,
    });

    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  return (
    <div className="preview-page-container">
      {/* Background Grid */}
      <div className="preview-bg-grid"></div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button
          type="button"
          className="back-btn"
          onClick={() => window.history.back()}
        >
          <svg
            className="back-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <button type="button" className="download-btn" onClick={handleDownload}>
          <svg
            className="download-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* Resume Container */}
      <div className="resume-wrapper">
        <div ref={printRef} className="resume-container">
          {/* Header Section */}
          <div className="resume-header">
            <div className="header-overlay"></div>

            <div className="header-content">
              <div className="full-name">
                <span className="first-name">{info.f_name}</span>{' '}
                <span className="last-name">{info.l_name}</span>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <svg
                    className="contact-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{info.email}</span>
                </div>
                <div className="contact-item">
                  <svg
                    className="contact-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{info.p_number}</span>
                </div>
              </div>

              <div className="position-info">
                <div className="job-title">{info.job_title}</div>
                <div className="location">
                  <svg
                    className="location-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{info.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="details">
            {/* Experience Section */}
            {emp && emp.length > 0 && (
              <div className="section">
                <div className="section__title">Experience</div>
                <div className="section__list">
                  {emp.map((form, index) => (
                    <div key={'emp' + index} className="section__list-item">
                      <div className="left">
                        <div className="name">{form.employer}</div>
                        <div className="duration">
                          {form.start_date} - {form.end_date}
                        </div>
                      </div>
                      <div className="right">
                        <div className="name">{form.job}</div>
                        <div className="desc">{form.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Section */}
            {edu && edu.length > 0 && (
              <div className="section">
                <div className="section__title">Education</div>
                <div className="section__list">
                  {edu.map((form, index) => (
                    <div key={'edu' + index} className="section__list-item">
                      <div className="left">
                        <div className="name">{form.school}</div>
                        <div className="addr">{form.degree}</div>
                        <div className="duration">
                          {form.start_date} - {form.end_date}
                        </div>
                      </div>
                      <div className="right">
                        <div className="desc">{form.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Section */}
            {skills && skills.length > 0 && (
              <div className="section">
                <div className="section__title">Skills</div>
                <div className="section__list">
                  {skills.map((form, index) => (
                    <div key={'skill' + index} className="section__list-item">
                      <div className="left">
                        <div className="name">{form.skill}</div>
                      </div>
                      <div className="right">
                        <div className="desc">{form.level}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hobbies Section */}
            {intrest && intrest.length > 0 && (
              <div className="section">
                <div className="section__title">Hobbies</div>
                <div className="section__list">
                  {intrest.map((intrests, index) => (
                    <div key={'int' + index} className="section__list-item">
                      <div className="left">
                        <div className="name">{intrests.intrest}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;

