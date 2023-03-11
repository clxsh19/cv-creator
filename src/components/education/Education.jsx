import { Link } from "react-router-dom";
import { createEmpElm, Back } from "../helper"
import "../employment/emp.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'

const Education = (props) => {

	function handelChange(e, index) {
		props.handleInputChange(e, index)
	}
  
  function addForm() {
  	props.addForm()
  }

	function removeForm(index) {
		console.log(index);
		props.removeForm(index)
	}

	return (
		<>
		<div id="form-wrapper">
		<div className='collapse-title'>Education Details</div>
		{props.forms.map((form, index) => {
		  return (
		  	<div key={index} className="collapse-container">
		  	  <input id={index} className="toggle" type="checkbox"/>
          <label htmlFor={index} className="lbl-toggle" >
            <FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={()=>removeForm(index)} />
            {form.school?form.school:'Not Specified'}
          </label>
		      <form className="collapse-form">
		        <div className="form-grp">
		          {createEmpElm(form.school, handelChange, 'school', 'School', 'text', index)}
		          {createEmpElm(form.degree, handelChange, 'degree', 'Degree', 'text', index)}
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
    {Back('drop-back-btn')}
    <Link to="/form/preview" className={["drop-next-btn", "glow-btn"].join(' ')} > 
    <span></span><span></span>
    <span></span><span></span>
    Next
    </Link>
  </div>
  </>
	)
}

export default Education;


