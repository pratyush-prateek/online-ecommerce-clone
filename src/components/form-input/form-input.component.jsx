import React from "react";
import "./form-input.styles.scss";

const FormInput = (props) => {
  const { handleChange, label, errorMessage, ...attrs } = props;
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...attrs} />
      {label ? (
        <label
          className={`${attrs.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
      {errorMessage ? (
        <span className="form-input-error">{errorMessage}</span>
      ) : null}
    </div>
  );
};

export default FormInput;
