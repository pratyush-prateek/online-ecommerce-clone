import React from "react";
import "./form-input.styles.scss";

const FormInput = (props) => {
  const { handleChange, label, ...attrs } = props;
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
    </div>
  );
};

export default FormInput;
