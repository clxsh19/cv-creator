import { useNavigate } from 'react-router-dom';

const Back = (name) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={[name, 'glow-btn'].join(' ')} onClick={goBack}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Back
      </div>
    </>
  );
};

const createFormElm = (value, handelChange, name, text, type) => {
  return (
    <div className="form-elm">
      <label>{text}</label>
      <input type={type} value={value} onChange={handelChange} name={name} />
    </div>
  );
};

const createSkillElm = (value, handelChange, name, text, type, index) => {
  return (
    <div className="form-elm">
      <label>{text}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => handelChange(event, index)}
        name={name}
      />
    </div>
  );
};

const createEmpElm = (value, handelChange, name, text, type, index) => {
  return (
    <div className="form-elm">
      <label>{text}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => handelChange(event, index)}
        name={name}
      />
    </div>
  );
};

export { createFormElm, createEmpElm, Back, createSkillElm };
