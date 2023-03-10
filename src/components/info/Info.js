import { Link } from "react-router-dom";
import { createFormElm , Back } from "../helper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'

import "./info.css"

const Info = (props) => {
	function handelChange(e) {
		props.handleInputChange(e)
	}
	return (
		<div className="form-container">
		  <div className='form-title'>
		  <FontAwesomeIcon icon={faIdBadge} className="info-icon" />General Info</div>
		  <form className="form">
		    <div className="form-grp">
		      {createFormElm(props.f_name, handelChange, 'f_name', 'First Name', 'text')}
		      {createFormElm(props.l_name, handelChange, 'l_name', 'Last Name', 'text')}
		    </div>
		    <div className="form-grp">
		      {createFormElm(props.email, handelChange, 'email', 'Email', 'text')}
		      {createFormElm(props.p_number, handelChange, 'p_number', 'Phone', 'text')}
        </div>
        <div className="form-grp">
		      {createFormElm(props.location, handelChange, 'location', 'Location', 'text')}
		      {createFormElm(props.job_title, handelChange, 'job_title', 'Job Title', 'text')}
        </div>
        <div className="form-grp">
            <textarea className="info_text" onChange={handelChange} value={props.description} name="description" placeholder="Summary..."></textarea>
        </div>
        {Back('form-back-btn')}
        <Link to="/form/emplyoment" className={['form-next-btn', 'glow-btn'].join(' ')}> 
          <span></span><span></span>
          <span></span><span></span>
          Next 
        </Link>
      </form>

    </div>
	)
}

export default Info;


