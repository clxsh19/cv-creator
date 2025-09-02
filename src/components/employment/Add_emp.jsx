import { Back } from '../helper';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSave,
  faBuilding,
  faBriefcase,
  faCalendar,
  faFileText,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './job.css';

const Job = (props) => {
  const { id } = useParams();
  const form = props.forms[id] || {};

  function handleChange(e, index) {
    props.handleInputChange(e, index);
  }

  const isFormValid = () => {
    return form.job && form.employer && form.start_date;
  };

  const getFieldStatus = (fieldName) => {
    if (!form[fieldName]) return 'empty';
    return 'valid';
  };

  return (
    <div className="job-page-container">
      <div className="job-bg-grid"></div>
      <div className="job-floating-orbs">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`floating-orb orb-${i + 1}`}></div>
        ))}
      </div>

      <div className="job-content">
        {/* Header */}
        <div className="job-header">
          <div className="header-icon-container">
            <FontAwesomeIcon icon={faBriefcase} className="job-header-icon" />
          </div>
          <h1 className="job-title-header">Work Experience Details</h1>
          <div className="form-progress">
            <div className="progress-step active">
              <FontAwesomeIcon icon={faBriefcase} />
              <span>Basic Info</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step">
              <FontAwesomeIcon icon={faFileText} />
              <span>Description</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="job-form-container">
          <form className="job-form">
            {/* Basic Information Section */}
            <div className="form-section">
              <h3 className="section-title">
                <FontAwesomeIcon icon={faBuilding} className="section-icon" />
                Basic Information
              </h3>

              <div className="form-row">
                <div className="enhanced-form-group">
                  <label className="form-label">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="label-icon"
                    />
                    Job Title *
                  </label>
                  <div className={`input-wrapper ${getFieldStatus('job')}`}>
                    <input
                      type="text"
                      className="enhanced-input"
                      value={form.job || ''}
                      onChange={(e) => handleChange(e, id)}
                      name="job"
                      placeholder="e.g. Senior Frontend Developer"
                      required
                    />
                    <div className="input-border"></div>
                    <FontAwesomeIcon
                      icon={form.job ? faCheck : faTimes}
                      className={`validation-icon ${form.job ? 'valid' : 'invalid'}`}
                    />
                  </div>
                </div>

                <div className="enhanced-form-group">
                  <label className="form-label">
                    <FontAwesomeIcon icon={faBuilding} className="label-icon" />
                    Company *
                  </label>
                  <div
                    className={`input-wrapper ${getFieldStatus('employer')}`}
                  >
                    <input
                      type="text"
                      className="enhanced-input"
                      value={form.employer || ''}
                      onChange={(e) => handleChange(e, id)}
                      name="employer"
                      placeholder="e.g. TechCorp Solutions"
                      required
                    />
                    <div className="input-border"></div>
                    <FontAwesomeIcon
                      icon={form.employer ? faCheck : faTimes}
                      className={`validation-icon ${form.employer ? 'valid' : 'invalid'}`}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="enhanced-form-group">
                  <label className="form-label">
                    <FontAwesomeIcon icon={faCalendar} className="label-icon" />
                    Start Date *
                  </label>
                  <div
                    className={`input-wrapper ${getFieldStatus('start_date')}`}
                  >
                    <input
                      type="date"
                      className="enhanced-input date-input"
                      value={form.start_date || ''}
                      onChange={(e) => handleChange(e, id)}
                      name="start_date"
                      required
                    />
                    <div className="input-border"></div>
                  </div>
                </div>

                <div className="enhanced-form-group">
                  <label className="form-label">
                    <FontAwesomeIcon icon={faCalendar} className="label-icon" />
                    End Date
                    <span className="optional-text">
                      (Leave empty if current)
                    </span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="date"
                      className="enhanced-input date-input"
                      value={form.end_date || ''}
                      onChange={(e) => handleChange(e, id)}
                      name="end_date"
                    />
                    <div className="input-border"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="form-section">
              <h3 className="section-title">
                <FontAwesomeIcon icon={faFileText} className="section-icon" />
                Job Description
              </h3>

              <div className="enhanced-form-group full-width">
                <label className="form-label">
                  Describe your role, responsibilities, and achievements
                </label>
                <div className="textarea-wrapper">
                  <textarea
                    className="enhanced-textarea"
                    onChange={(event) => handleChange(event, id)}
                    value={form.description || ''}
                    name="description"
                    placeholder="• Developed and maintained web applications using React and Node.js&#10;• Collaborated with cross-functional teams to deliver high-quality products&#10;• Implemented responsive designs and optimized performance&#10;• Mentored junior developers and conducted code reviews"
                    rows="8"
                  ></textarea>
                  <div className="textarea-border"></div>
                  <div className="character-count">
                    {(form.description || '').length} characters
                  </div>
                </div>
              </div>
            </div>

            {/* Form Validation Summary */}
            <div className="validation-summary">
              {!isFormValid() && (
                <div className="validation-warning">
                  <FontAwesomeIcon icon={faTimes} />
                  Please fill in all required fields (*)
                </div>
              )}
              {isFormValid() && (
                <div className="validation-success">
                  <FontAwesomeIcon icon={faCheck} />
                  All required information completed
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Navigation */}
        <div className="job-navigation">
          {Back('job-back-btn')}
          <Link
            to="/form/employment"
            className={`job-save-btn ${isFormValid() ? 'valid' : 'invalid'}`}
          >
            <div className="btn-content">
              <FontAwesomeIcon icon={faSave} className="btn-icon" />
              <span className="btn-text">Save Experience</span>
            </div>
            <div className="btn-glow"></div>
            <span className="btn-bg"></span>
            <span className="btn-bg"></span>
            <span className="btn-bg"></span>
            <span className="btn-bg"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
