import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPlus,
  faBriefcase,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { Back } from '../helper';
import './emp.css';

const Experience = (props) => {
  const { info, employment, education, skills, intrest, forms } = props;

  function addForm() {
    props.addForm();
  }

  function removeForm(index) {
    props.removeForm(index);
  }

  return (
    <div className="experience-container">
      <div className="experience-content">
        {/* Header Section */}
        <div className="section-header">
          <div className="header-icon-wrapper">
            <FontAwesomeIcon icon={faBriefcase} className="header-icon" />
          </div>
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
        </div>

        {/* Experience Cards */}
        <div className="experience-grid">
          {forms.map((form, index) => (
            <div key={index} className="experience-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <Link to={`/form/employment/${index}`} className="job-link">
                  <div className="job-info">
                    <h3 className="job-title">{form.job || 'Not Specified'}</h3>
                    <p className="job-company">
                      {form.company || 'Company Name'}
                    </p>
                    <div className="job-duration">
                      {form.startDate && form.endDate
                        ? `${form.startDate} - ${form.endDate}`
                        : 'Duration not specified'}
                    </div>
                  </div>
                  <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                </Link>
                <button
                  className="delete-btn"
                  onClick={() => removeForm(index)}
                  aria-label="Delete experience"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}

          {/* Add New Card */}
          <div className="add-experience-card" onClick={addForm}>
            <div className="add-card-content">
              <FontAwesomeIcon icon={faPlus} className="add-icon" />
              <span className="add-text">Add New Experience</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="navigation-controls">
          {Back('nav-back-btn')}
          <Link to="/form/education" className="nav-next-btn">
            <span className="btn-bg"></span>
            <span className="btn-bg"></span>
            <span className="btn-bg"></span>
            <span className="btn-bg"></span>
            <span className="btn-text">Next</span>
          </Link>
        </div>
      </div>

      {/* Background Effects */}
      <div className="bg-grid"></div>
      <div className="floating-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
