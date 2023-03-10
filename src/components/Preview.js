import "./preview.css"

const Preview = (props) => {
	let info = props.info;
	let emp = props.employment;
	let edu = props.education;

	return (
		<div className="container">
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
      <div class="details">
        <div class="section">
          <div class="section__title">Experience</div>
          <div class="section__list">
            {emp.map((form, index) => {
              return (
              <div key={"emp"+index} class="section__list-item">
                <div class="left">
                  <div class="name">{form.employer}</div>
                  <div class="addr">San Fr, CA</div>
                  <div class="duration">{form.start_date} - {form.end_date}</div>
                </div>
                <div class="right">
                  <div class="name">{form.job}</div>
                  <div class="desc">{form.description}</div>
                </div>
              </div> 
              )})
            }
          </div>
        </div>
        <div class="section">
          <div class="section__title">Education</div>
          <div class="section__list">
          {edu.map((form, index) => {
              return (
              <div key={"edu"+index} class="section__list-item">
                <div class="left">
                  <div class="name">{form.school}</div>
                  <div class="addr">{form.degree}</div>
                  <div class="duration">{form.end_date} - {form.end_date}</div>
                </div>
                <div class="right">
                  <div class="desc">{form.description}</div>
                </div>
              </div>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
	)
}

export default Preview;