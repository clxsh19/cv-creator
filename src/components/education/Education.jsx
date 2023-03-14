import { Link } from "react-router-dom";
import { createEmpElm, Back } from "../helper"
import "./education.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faSchool } from '@fortawesome/free-solid-svg-icons'

const Education = (props) => {

	function handelChange(e, index) {
		props.handleInputChange(e, index)
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
			<FontAwesomeIcon icon={faSchool} className="collapse-icon" />
			Education Details
		</div>
		{props.forms.map((form, index) => {
		  return (
		  	<div key={index} className="collapse-container">
          <Link to={"/form/education/"+index} className="job-container">   
            {form.school?form.school:'Not Specified'}
          </Link>
          <FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={()=>removeForm(index)} />
        </div>
      )
    })}
    <FontAwesomeIcon icon={faPlus} className="edu-add-icon" onClick={addForm} />
    {Back('drop-back-btn')}
    <Link to="/form/skill" className={["drop-next-btn", "glow-btn"].join(' ')} > 
    <span></span><span></span>
    <span></span><span></span>
    Next
    </Link>
  </div>
  </>
	)
}

export default Education;


