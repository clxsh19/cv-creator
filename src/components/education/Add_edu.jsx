import { createEmpElm, Back } from "../helper";
import { useParams, Link } from "react-router-dom";

const Edu = (props) => {
	const { id } = useParams();
	let form = props.forms[id]; 
	function handelChange(e, index) {
		props.handleInputChange(e, index);
	}
	return (
		<div>
		<div className="form-container">
		  <form className="form">
		    <div className="form-grp">
		      {createEmpElm(form.school, handelChange, 'school', 'School', 'text',  id)}
		      {createEmpElm(form.degree, handelChange, 'degree', 'Degree', 'text', id)}
		    </div>
		    <div className="form-grp">
		      {createEmpElm(form.start_date, handelChange, 'start_date', 'Start Date', 'date', id)}
		      {createEmpElm(form.end_date, handelChange, 'end_date', 'End Date', 'date', id)}
        </div>
        <div className="form-grp">
            <textarea className="exp_text" onChange={event => handelChange(event, id)} value={props.description} name="description" placeholder="Description..."></textarea>
        </div>
        {Back('form-back-btn')}
        <Link to="/form/emplyoment" className={['form-next-btn', 'glow-btn'].join(' ')}> 
          <span></span><span></span>
          <span></span><span></span>
          Save
        </Link>
      </form>
      </div>
	  </div>
	)
}

export default Edu;