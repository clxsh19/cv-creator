import { Link } from 'react-router-dom';
import { Back } from '../helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPlus,
  faCog,
  faHeart,
  faChevronDown,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import './skill.css';

const Skill = (props) => {
  const { skillForm, intrestForm } = props;

  function handleSkillChange(e, index) {
    props.handleSkillChange(e, index);
  }

  function handleIntrestChange(e, index) {
    props.handleIntrestChange(e, index);
  }

  function addSkill() {
    props.addSkill();
  }

  function addIntrest() {
    props.addIntrest();
  }

  function removeSkill(index) {
    props.removeSkill(index);
  }

  function removeIntrest(index) {
    props.removeIntrest(index);
  }

  return (
    <div className="skills-page-container">
      {/* Subtle Background Grid */}
      <div className="skills-bg-grid"></div>

      <div className="skills-content">
        {/* Skills Section */}
        <div className="skills-section">
          <div className="section-header">
            <div className="header-icon-wrapper">
              <FontAwesomeIcon icon={faCog} className="header-icon" />
            </div>
            <h2 className="section-title">Technical Skills</h2>
            <div className="title-underline"></div>
          </div>

          <div className="items-grid">
            {skillForm.map((form, index) => (
              <div key={index} className="skill-item">
                <input
                  id={`skill-${index}`}
                  className="toggle-checkbox"
                  type="checkbox"
                />
                <label htmlFor={`skill-${index}`} className="item-toggle">
                  <div className="item-header">
                    <span className="item-name">
                      {form.skill || 'Not Specified'}
                    </span>
                    <div className="item-actions">
                      <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="expand-icon"
                      />
                    </div>
                  </div>
                  {form.level && (
                    <div className="skill-level">Level: {form.level}</div>
                  )}
                </label>

                <div className="collapse-form">
                  <div className="form-content">
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Skill Name</label>
                        <input
                          type="text"
                          className="form-input"
                          value={form.skill || ''}
                          onChange={(e) => handleSkillChange(e, index)}
                          name="skill"
                          placeholder="e.g. JavaScript, Python, React"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Proficiency Level</label>
                        <select
                          className="form-select"
                          value={form.level || ''}
                          onChange={(e) => handleSkillChange(e, index)}
                          name="level"
                        >
                          <option value="">Select Level</option>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Expert">Expert</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeSkill(index)}
                    type="button"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    Remove Skill
                  </button>
                </div>
              </div>
            ))}

            {/* Add Skills Button */}
            <div className="add-item-card" onClick={addSkill}>
              <FontAwesomeIcon icon={faPlus} className="add-icon" />
              <span className="add-text">Add Skill</span>
            </div>
          </div>
        </div>

        {/* Interests/Hobbies Section */}
        <div className="interests-section">
          <div className="section-header">
            <div className="header-icon-wrapper">
              <FontAwesomeIcon icon={faHeart} className="header-icon" />
            </div>
            <h2 className="section-title">Hobbies & Interests</h2>
            <div className="title-underline"></div>
          </div>

          <div className="items-grid">
            {intrestForm.map((form, index) => (
              <div key={index + 100} className="interest-item">
                <input
                  id={`interest-${index + 100}`}
                  className="toggle-checkbox"
                  type="checkbox"
                />
                <label
                  htmlFor={`interest-${index + 100}`}
                  className="item-toggle"
                >
                  <div className="item-header">
                    <span className="item-name">
                      {form.intrest || 'Not Specified'}
                    </span>
                    <div className="item-actions">
                      <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="expand-icon"
                      />
                    </div>
                  </div>
                </label>

                <div className="collapse-form">
                  <div className="form-content">
                    <div className="form-group">
                      <label className="form-label">Interest/Hobby</label>
                      <input
                        type="text"
                        className="form-input"
                        value={form.intrest || ''}
                        onChange={(e) => handleIntrestChange(e, index)}
                        name="intrest"
                        placeholder="e.g. Photography, Reading, Gaming"
                      />
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeIntrest(index)}
                    type="button"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    Remove Interest
                  </button>
                </div>
              </div>
            ))}

            {/* Add Interest Button */}
            <div className="add-item-card" onClick={addIntrest}>
              <FontAwesomeIcon icon={faPlus} className="add-icon" />
              <span className="add-text">Add Interest</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="navigation-controls">
          {Back('nav-back-btn')}
          <Link to="/form/preview" className="nav-next-btn">
            <span className="btn-bg"></span>
            <span className="btn-bg"></span>
            <span className="btn-bg"></span>
            <span className="btn-bg"></span>
            <span className="btn-text">Next</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skill;

