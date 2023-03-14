import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { createEmpElm, Back } from "../helper";
import "./emp.css"

const Experience = (props) => {
  let info = props.info;
	let emp = props.employment;
	let edu = props.education;
  let skills = props.skills;
  let intrest = props.intrest;
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
		<div className='collapse-title'>
      <FontAwesomeIcon icon={faBriefcase} className="collapse-icon" />
		  Work Experience
		</div>
		{props.forms.map((form, index) => {
		  return (
		  	<div key={index} className="collapse-container">
          <Link to={"/form/emplyoment/"+index} className="job-container"> 
            {form.job?form.job:'Not Specified'}
          </Link>
          <FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={()=>removeForm(index)} />
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


