import { Link } from "react-router-dom";
import { createSkillElm , Back } from "../helper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import './skill.css'
const Skill = (props) => {

	let skillForm = props.skillForm;
	let intrestForm = props.intrestForm;

	function handelSkillChange(e, index) {
		props.handleSkillChange(e, index)
	}

	function handelIntrestChange(e, index) {
		props.handleIntrestChange(e, index)
	}

	function addSkill() {
		props.addSkill()
	}

	function addIntrest() {
		props.addIntrest()
	}

	function removeSkill() {
		props.removeSkill()
	}

	function removeIntrest() {
		props.removeIntrest()
	}

	return (
		<>
		<div className="skill-wrapper">
		  <div className='skill-title'>Skill</div>
		  { skillForm.map((form, index) => {
		  	return (
		  	<div key={index} className="collapse-container">
		  	  <input id={index} className="toggle" type="checkbox"/>
          <label htmlFor={index} className="lbl-toggle" >
            <FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={()=>removeSkill(index)} />
            {form.skill?form.skill:'Not Specified'}
          </label>
		      <form className="collapse-form">
		        <div className="form-grp">
		          {createSkillElm(form.skill, handelSkillChange, 'skill', 'Skill', 'text', index)}
		          {createSkillElm(form.level, handelSkillChange, 'level', 'Level', 'text', index)}
		        </div>
          </form>
        </div>
        )
      })}
    <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={addSkill} />
  </div>
  <div className="skill-wrapper">
	  <div className='skill-title'>Hobbies</div>
	  { intrestForm.map((form, index) => {
	  	return (
	  	<div key={index+100} className="collapse-container">
	  	  <input id={index+100} className="toggle" type="checkbox"/>
        <label htmlFor={index+100} className="lbl-toggle" >
          <FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={()=>removeIntrest(index)} />
          {form.intrest?form.intrest:'Not Specified'}
        </label>
	      <form className="collapse-form">
	        <div className="form-grp">
	          <div className="intrest-elm">
	            <label>Intrest</label>
              <input type='text' value={form.intrest} onChange={event => handelIntrestChange(event, index)} name='intrest'/>
             </div>
	        </div>
        </form>
      </div>
      )
      })}
    <FontAwesomeIcon icon={faPlus} className="intrest-add-icon" onClick={addIntrest} />
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

export default Skill;