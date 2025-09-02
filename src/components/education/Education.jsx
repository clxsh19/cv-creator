import { Link } from 'react-router-dom';
import { Back } from '../helper';
import './education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPlus,
  faSchool,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';

const Education = (props) => {
  function addForm() {
    props.addForm();
  }

  function removeForm(index) {
    props.removeForm(index);
  }

  return (
    <div className="education-container">
      <div className="education-content">
        {/* Header Section */}
        <div className="section-header">
          <div className="header-icon-wrapper">
            <FontAwesomeIcon icon={faSchool} className="header-icon" />
          </div>
          <h2 className="section-title">Education Details</h2>
          <div className="title-underline"></div>
        </div>

        {/* Education Cards */}
        <div className="education-grid">
          {props.forms.map((form, index) => (
            <div key={index} className="education-card">
              <div className="card-content">
                <Link
                  to={`/form/education/${index}`}
                  className="education-link"
                >
                  <div className="education-info">
                    <h3 className="school-name">
                      {form.school || 'Not Specified'}
                    </h3>
                    <p className="degree-info">
                      {form.degree || 'Degree not specified'}
                    </p>
                    <div className="education-duration">
                      {form.start_date && form.end_date
                        ? `${form.start_date} - ${form.end_date}`
                        : form.start_date
                          ? `Started ${form.start_date}`
                          : 'Duration not specified'}
                    </div>
                  </div>
                  <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                </Link>
                <button
                  className="delete-btn"
                  onClick={() => removeForm(index)}
                  aria-label="Delete education entry"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}

          {/* Add New Card */}
          <div className="add-education-card" onClick={addForm}>
            <div className="add-card-content">
              <FontAwesomeIcon icon={faPlus} className="add-icon" />
              <span className="add-text">Add Education</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="navigation-controls">
          {Back('nav-back-btn')}
          <Link to="/form/skill" className="nav-next-btn">
            <span className="btn-bg"></span>
            <span className="btn-bg"></span>
            <span className="btn-bg"></span>
            <span className="btn-bg"></span>
            <span className="btn-text">Next</span>
          </Link>
        </div>
      </div>

      <div className="bg-grid"></div>
    </div>
  );
};

export default Education;
