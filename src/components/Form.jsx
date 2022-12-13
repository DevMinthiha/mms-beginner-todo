import React, { useRef } from 'react';

const Form = ({ addHandler }) => {
  const inputRef = useRef();
  const addList = (value) => {
    addHandler(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div className="row">
      <div className="col-7">
        <input ref={inputRef} type="text" className="form-control" />
      </div>
      <div className="col-4">
        <button
          onClick={addList}
          className="btn btn-primary"
        >
          <i class="bi bi-plus-circle-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Form;
