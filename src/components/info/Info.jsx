import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './info.css';

const Info = (props) => {
  function handleChange(e) {
    props.handleInputChange(e);
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <FontAwesomeIcon icon={faIdBadge} className="info-icon" />
        <h2 className="form-title">General Information</h2>
      </div>

      <div className="form">
        <div className="form-grid">
          <div className="form-row">
            {createFormElm(
              props.f_name,
              handleChange,
              'f_name',
              'First Name',
              'text',
            )}
            {createFormElm(
              props.l_name,
              handleChange,
              'l_name',
              'Last Name',
              'text',
            )}
          </div>

          <div className="form-row">
            {createFormElm(
              props.email,
              handleChange,
              'email',
              'Email',
              'email',
            )}
            {createFormElm(
              props.p_number,
              handleChange,
              'p_number',
              'Phone Number',
              'tel',
            )}
          </div>

          <div className="form-row">
            {createFormElm(
              props.location,
              handleChange,
              'location',
              'Location',
              'text',
            )}
            {createFormElm(
              props.job_title,
              handleChange,
              'job_title',
              'Job Title',
              'text',
            )}
          </div>

          <div className="form-row full-width">
            <div className="form-elm">
              <label htmlFor="description">Professional Summary</label>
              <textarea
                id="description"
                className="info-text"
                onChange={handleChange}
                value={props.description || ''}
                name="description"
                placeholder="Brief description of your professional background and career objectives..."
                rows="4"
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          {Back('form-back-btn')}
          <Link to="/form/employment" className="form-next-btn">
            Next →
          </Link>
        </div>
      </div>
    </div>
  );
};

// Helper function for creating form elements
const createFormElm = (value, onChange, name, placeholder, type) => (
  <div className="form-elm" key={name}>
    <label htmlFor={name}>{placeholder}</label>
    <input
      id={name}
      type={type}
      name={name}
      value={value || ''}
      onChange={onChange}
      placeholder={`Enter your ${placeholder.toLowerCase()}`}
    />
  </div>
);

// Helper function for Back button
const Back = (className) => (
  <button type="button" className={className}>
    ← Back
  </button>
);

export default Info;
