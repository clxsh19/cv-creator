import { useState } from 'react';
import Info from "./components/info/Info"
import Home from "./components/Home"
import Employment from "./components/employment/Employment"
import Education from "./components/education/Education"
// import ErrorPage from "./components/error-page";
import Preview from "./components/Preview";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  const [infoField, setInfoField] = useState({
    f_name: '', l_name: '',
    location: '', job_title: '',
    email: '', p_number: '',
    description: '',
  });

  const [empForms, setEmpField] = useState([{
    job: '', employer: '',
    start_date: '',
    end_date: '',
    description: '',
  }]);

  const [eduForms, setEduField] = useState([{
    school: '', degree: '',
    start_date: '',
    end_date: '',
    description: '',
  }])

  const handleInfoChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setInfoField({
      ...infoField,
      [name]: value
    });
  };

  const handleEmpChange = (event, index) => {
    let newForms = [...empForms];
    newForms[index][event.target.name] = event.target.value;
    setEmpField(newForms);
  }

  const handleEduChange = (event, index) => {
    let newForms = [...eduForms];
    newForms[index][event.target.name] = event.target.value;
    setEduField(newForms);
  }

  function addEmpForm() {
    let newForm = {
      job: '', employer: '',
      start_date: '',
      end_date: '',
      description: '',
    }
    setEmpField([...empForms, newForm])
  }

  function addEduForm() {
    let newForm = {
      school: '', degree: '',
      start_date: '',
      end_date: '',
      description: '',
    }
    setEduField([...eduForms, newForm])
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

  return (
    <>
      <Link to="/"> <button>Home</button> </Link>
      <Link to="/form/info"> <button>Info</button> </Link>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/info" 
               element={<Info handleInputChange={handleInfoChange}
                         f_name={infoField.f_name}  l_name={infoField.l_name}
                         email={infoField.email}  p_number={infoField.p_number}
                         location={infoField.location}  job_title={infoField.job_title} 
                         description={infoField.description}
                        />} 
        />
        <Route path="/form/emplyoment" 
               element={<Employment handleInputChange={handleEmpChange}
                         forms={empForms}
                         addForm={addEmpForm}
                         removeForm={removeEmpForm} 
                        />}
        />
        <Route path="/form/education" 
               element={<Education handleInputChange={handleEduChange}
                         forms={eduForms}
                         addForm={addEduForm}
                         removeForm={removeEduForm} 
                        />} 
        />
        <Route path="/form/preview" 
               element={<Preview 
                         info={infoField}
                         education={eduForms}
                         employment={empForms} 
                        />} 
        />
      </Routes>
    </>
  );
}

export default App;
