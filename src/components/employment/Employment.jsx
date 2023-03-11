import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { createEmpElm, Back } from "../helper"
import "./emp.css"

const Experience = (props) => {

	function handelChange(e, index) {
		props.handleInputChange(e,  index)
	}
  
  function addForm() {
  	props.addForm()
  }

	function removeForm(index) {
		props.removeForm(index)
	}

	return (
		<>
		<div id="form-wrapper">
		<div className='collapse-title'>Work Experience</div>
		{props.forms.map((form, index) => {
		  return (
		  	<div key={index} className="collapse-container">
		  	  <input id={index} className="toggle" type="checkbox" />
          <label htmlFor={index} className="lbl-toggle" >
            <FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={()=>removeForm(index)} />{form.job?form.job:'Not Specified'}
          </label>
		      <form className="collapse-form">
		        <div className="form-grp">
		          {createEmpElm(form.job, handelChange, 'job', 'Job Title', 'text', index)}
		          {createEmpElm(form.employer, handelChange, 'employer', 'Employer', 'text', index)}
		        </div>
		        <div className="form-grp">
		          {createEmpElm(form.start_date, handelChange, 'start_date', 'Start Date', 'date', index)}
		          {createEmpElm(form.end_date, handelChange, 'end_date', 'End Date', 'date', index)}
            </div>
            <div className="form-grp">
              <textarea className="exp_text" onChange={event => handelChange(event, index)} value={form.description} name="description" placeholder="Description..."></textarea>
            </div>

          </form>
        </div>
      )
    })}
    <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={addForm} />
    </div>
    {Back('drop-back-btn')}
    <Link to="/form/education" className={["glow-btn", "drop-next-btn"].join(' ')}> 
    <span></span><span></span>
    <span></span><span></span>
    Next
    </Link>
    </>
	)
}

export default Experience;


