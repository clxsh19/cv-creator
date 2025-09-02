import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Info from './components/info/Info';
import Home from './components/Home';
import Employment from './components/employment/Employment';
import Education from './components/education/Education';
import Job from './components/employment/Add_emp';
import Edu from './components/education/Add_edu';
import Skill from './components/skill/Skill';
import Preview from './components/preview/Preview';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/cv-creator';

  const [infoField, setInfoField] = useState({
    f_name: '',
    l_name: '',
    location: '',
    job_title: '',
    email: '',
    p_number: '',
    description: '',
  });

  const [empForms, setEmpField] = useState([
    {
      job: '',
      employer: '',
      start_date: '',
      end_date: '',
      description: '',
    },
  ]);

  const [eduForms, setEduField] = useState([
    {
      school: '',
      degree: '',
      start_date: '',
      end_date: '',
      description: '',
    },
  ]);

  const [skillForms, setSkillField] = useState([
    {
      skill: '',
      level: '',
    },
  ]);

  const [intrestForms, setIntrestField] = useState([
    {
      intrest: '',
    },
  ]);

  const handleInfoChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setInfoField({
      ...infoField,
      [name]: value,
    });
  };

  const handleEmpChange = (event, index) => {
    let newForms = [...empForms];
    newForms[index][event.target.name] = event.target.value;
    setEmpField(newForms);
  };

  const handleEduChange = (event, index) => {
    let newForms = [...eduForms];
    newForms[index][event.target.name] = event.target.value;
    setEduField(newForms);
  };

  const handleSkillChange = (event, index) => {
    let newForms = [...skillForms];
    newForms[index][event.target.name] = event.target.value;
    setSkillField(newForms);
  };

  const handleIntrestChange = (event, index) => {
    let newForms = [...intrestForms];
    newForms[index][event.target.name] = event.target.value;
    setIntrestField(newForms);
  };

  function addEmpForm() {
    let newForm = {
      job: '',
      employer: '',
      start_date: '',
      end_date: '',
      description: '',
    };
    setEmpField([...empForms, newForm]);
  }

  function addEduForm() {
    let newForm = {
      school: '',
      degree: '',
      start_date: '',
      end_date: '',
      description: '',
    };
    setEduField([...eduForms, newForm]);
  }

  function addSkillForm() {
    let newForm = {
      skill: '',
      level: '',
    };
    setSkillField([...skillForms, newForm]);
  }

  function addIntrestForm() {
    let newForm = {
      intrest: '',
    };
    setIntrestField([...intrestForms, newForm]);
  }

  function removeEmpForm(index) {
    let newForms = [...empForms];
    newForms.splice(index, 1);
    setEmpField(newForms);
  }

  function removeEduForm(index) {
    let newForms = [...eduForms];
    newForms.splice(index, 1);
    setEduField(newForms);
  }

  function removeSkillForm(index) {
    let newForms = [...skillForms];
    newForms.splice(index, 1);
    setSkillField(newForms);
  }

  function removeIntrestForm(index) {
    let newForms = [...intrestForms];
    newForms.splice(index, 1);
    setIntrestField(newForms);
  }

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <header className="app-header">
        <div className="nav-container">
          {!isHomePage && (
            <Link to="/cv-creator" className="home-nav-link">
              <div className="home-icon-container">
                <FontAwesomeIcon icon={faHouse} className="home-icon" />
                <span className="home-text">Home</span>
              </div>
            </Link>
          )}

          {/* Progress indicator for forms */}
          {!isHomePage && (
            <div className="progress-indicator">
              <div className="progress-step-container">
                <div
                  className={`progress-step ${location.pathname.includes('/info') ? 'active' : location.pathname.includes('/employment') || location.pathname.includes('/education') || location.pathname.includes('/skill') || location.pathname.includes('/preview') ? 'completed' : ''}`}
                >
                  <span>1</span>
                  <div className="step-label">Info</div>
                </div>
                <div className="progress-line"></div>
                <div
                  className={`progress-step ${location.pathname.includes('/employment') ? 'active' : location.pathname.includes('/education') || location.pathname.includes('/skill') || location.pathname.includes('/preview') ? 'completed' : ''}`}
                >
                  <span>2</span>
                  <div className="step-label">Work</div>
                </div>
                <div className="progress-line"></div>
                <div
                  className={`progress-step ${location.pathname.includes('/education') ? 'active' : location.pathname.includes('/skill') || location.pathname.includes('/preview') ? 'completed' : ''}`}
                >
                  <span>3</span>
                  <div className="step-label">Education</div>
                </div>
                <div className="progress-line"></div>
                <div
                  className={`progress-step ${location.pathname.includes('/skill') ? 'active' : location.pathname.includes('/preview') ? 'completed' : ''}`}
                >
                  <span>4</span>
                  <div className="step-label">Skills</div>
                </div>
                <div className="progress-line"></div>
                <div
                  className={`progress-step ${location.pathname.includes('/preview') ? 'active' : ''}`}
                >
                  <span>5</span>
                  <div className="step-label">Preview</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        <Routes>
          <Route path="/cv-creator" element={<Home />} />
          <Route
            path="/form/info"
            element={
              <Info
                handleInputChange={handleInfoChange}
                f_name={infoField.f_name}
                l_name={infoField.l_name}
                email={infoField.email}
                p_number={infoField.p_number}
                location={infoField.location}
                job_title={infoField.job_title}
                description={infoField.description}
              />
            }
          />
          <Route
            path="/form/employment/"
            element={
              <Employment
                handleInputChange={handleEmpChange}
                forms={empForms}
                addForm={addEmpForm}
                removeForm={removeEmpForm}
                info={infoField}
                education={eduForms}
                employment={empForms}
                skills={skillForms}
                intrest={intrestForms}
              />
            }
          />
          <Route
            path="/form/employment/:id"
            element={
              <Job handleInputChange={handleEmpChange} forms={empForms} />
            }
          />
          <Route
            path="/form/education"
            element={
              <Education
                handleInputChange={handleEduChange}
                forms={eduForms}
                addForm={addEduForm}
                removeForm={removeEduForm}
              />
            }
          />
          <Route
            path="/form/education/:id"
            element={
              <Edu handleInputChange={handleEduChange} forms={eduForms} />
            }
          />
          <Route
            path="/form/skill"
            element={
              <Skill
                handleSkillChange={handleSkillChange}
                handleIntrestChange={handleIntrestChange}
                skillForm={skillForms}
                intrestForm={intrestForms}
                addSkill={addSkillForm}
                addIntrest={addIntrestForm}
                removeSkill={removeSkillForm}
                removeIntrest={removeIntrestForm}
              />
            }
          />
          <Route
            path="/form/preview"
            element={
              <Preview
                info={infoField}
                education={eduForms}
                employment={empForms}
                skills={skillForms}
                intrest={intrestForms}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
