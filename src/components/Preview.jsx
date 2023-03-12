import "./preview.css"
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useRef } from 'react';

const Preview = (props) => {
	let info = props.info;
	let emp = props.employment;
	let edu = props.education;
  let skills = props.skills;
  const printRef = useRef();

  const handleDownload = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  }

	return (
    <div>
    <button type="button" onClick={handleDownload}>
        Download as PDF
    </button>
		<div ref={printRef} className="container">
		  <div className="header">
        <div className="full-name">
          <span className="first-name">{info.f_name}</span> 
          <span className="last-name">{info.l_name}</span>
        </div>
        <div className="contact-info">
          <span className="email">Email: </span>
          <span className="email-val">{info.email}</span>
          <span className="separator"></span>
          <span className="phone">Phone: </span>
          <span className="phone-val">{info.p_number}</span>
        </div>
        <div className="about">
          <span className="position">{info.job_title}</span>
          <span className="desc">{info.location}</span>
        </div>
      </div>
      <div className="details">
        <div className="section">
          <div className="section__title">Experience</div>
          <div className="section__list">
            {emp.map((form, index) => {
              return (
              <div key={"emp"+index} className="section__list-item">
                <div className="left">
                  <div className="name">{form.employer}</div>
                  <div className="addr">San Fr, CA</div>
                  <div className="duration">{form.start_date} - {form.end_date}</div>
                </div>
                <div className="right">
                  <div className="name">{form.job}</div>
                  <div className="desc">{form.description}</div>
                </div>
              </div> 
              )})
            }
          </div>
        </div>
        <div className="section">
          <div className="section__title">Education</div>
          <div classNAme="section__list">
          {edu.map((form, index) => {
              return (
              <div key={"edu"+index} class="section__list-item">
                <div className="left">
                  <div className="name">{form.school}</div>
                  <div className="addr">{form.degree}</div>
                  <div className="duration">{form.end_date} - {form.end_date}</div>
                </div>
                <div className="right">
                  <div className="desc">{form.description}</div>
                </div>
              </div>
              )
            })
          }
          </div>
        </div>
        <div className="section">
          <div className="section__title">Skills</div>
          <div classNAme="section__list">
          {skills.map((form, index) => {
              return (
              <div key={"skill"+index} class="section__list-item">
                <div className="left">
                  <div className="name">{form.skill}</div>
                  <div className="addr">{form.level}</div>
                  <div className="duration"></div>
                </div>
                <div className="right">
                  <div className="desc">{form.level}</div>
                </div>
              </div>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
    </div>
	)
}

export default Preview;