import { Back } from '../helper';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSave,
  faSchool,
  faGraduationCap,
  faCalendar,
  faFileText,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './Edu.css';

const Edu = (props) => {
  const { id } = useParams();
  const form = props.forms[id] || {};

  function handleChange(e, index) {
    props.handleInputChange(e, index);
  }

  // Validation helpers
  const isFormValid = () => {
    return form.school && form.degree && form.start_date;
  };

  const getFieldStatus = (fieldName) => {
    if (!form[fieldName]) return 'empty';
    return 'valid';
  };

  return (
    <div className="edu-page-container">
      <div className="edu-bg-grid"></div>

      <div className="edu-content">
        {/* Header */}
        <div className="edu-header">
          <div className="header-icon-container">
            <FontAwesomeIcon icon={faSchool} className="edu-header-icon" />
          </div>
          <h1 className="edu-title-header">Education Details</h1>
        </div>

        {/* Form Container */}
        <div className="edu-form-container">
          <form className="edu-form">
            {/* Basic Information Section */}
            <div className="form-section">
              <h3 className="section-title">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="section-icon"
                />
                Academic Information
              </h3>

              <div className="form-row">
                <div className="enhanced-form-group">
                  <label className="form-label">
                    <FontAwesomeIcon icon={faSchool} className="label-icon" />
                    School/University *
                  </label>
                  <div className={`input-wrapper ${getFieldStatus('school')}`}>
                    <input
                      type="text"
                      className="enhanced-input"
                      value={form.school || ''}
                      onChange={(e) => handleChange(e, id)}
                      name="school"
                      placeholder="e.g. University of Technology"
                      required
                    />
                    <div className="input-border"></div>
                    <FontAwesomeIcon
                      icon={form.school ? faCheck : faTimes}
                      className={`validation-icon ${form.school ? 'valid' : 'invalid'}`}
                    />
                  </div>
                </div>

                <div className="enhanced-form-group">
                  <label className="form-label">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="label-icon"
                    />
                    Degree/Program *
                  </label>
                  <div className={`input-wrapper ${getFieldStatus('degree')}`}>
                    <input
                      type="text"
                      className="enhanced-input"
                      value={form.degree || ''}
                      onChange={(e) => handleChange(e, id)}
                      name="degree"
                      placeholder="e.g. Bachelor of Computer Science"
                      required
                    />
                    <div className="input-border"></div>
                    <FontAwesomeIcon
                      icon={form.degree ? faCheck : faTimes}
                      className={`validation-icon ${form.degree ? 'valid' : 'invalid'}`}
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
                      (Leave empty if ongoing)
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
                Additional Details
              </h3>

              <div className="enhanced-form-group full-width">
                <label className="form-label">
                  Courses, achievements, or relevant details
                </label>
                <div className="textarea-wrapper">
                  <textarea
                    className="enhanced-textarea"
                    onChange={(event) => handleChange(event, id)}
                    value={form.description || ''}
                    name="description"
                    placeholder="• Relevant coursework: Data Structures, Algorithms, Web Development&#10;• GPA: 3.8/4.0 (if applicable)&#10;• Academic achievements or honors&#10;• Projects or research work"
                    rows="6"
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
        <div className="edu-navigation">
          {Back('edu-back-btn')}
          <Link
            to="/form/education"
            className={`edu-save-btn ${isFormValid() ? 'valid' : 'invalid'}`}
          >
            <div className="btn-content">
              <FontAwesomeIcon icon={faSave} className="btn-icon" />
              <span className="btn-text">Save Education</span>
            </div>
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

export default Edu;
