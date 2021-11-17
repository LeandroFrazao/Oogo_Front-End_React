import React from "react";
import "./experience.css";

const Experience = ({ data, update, register, errors }) => {
  return (
    <div className="oogo__experience">
      <div className="oogo__experience_content">
        <h2>Become a Minder</h2>
        <h3>We are excited to welcome you to öogo</h3>
        <p>
          As you complete your sign up process, ask us questions anytime by
          using our chat box below. Typical time for completion is around 5
          minutes.
        </p>
        <p>Tell us more about you!</p>
      </div>
      <div className="oogo__experience_form">
        <div className="oogo__experience_form-input">
          <label>How many years of experience?</label>
          <input
            type="text"
            id="yearsExp"
            name="yearsExp"
            placeholder="e.g. 4"
            {...register("yearsExp", {
              required: {
                value: true,
                message: "Please type year of experience",
              },
              pattern: {
                value: /^[0-9]*$/,
                message: "Only numbers",
              },
            })}
            onChange={update("yearsExp")}
          />
          {errors.yearsExp && <p>{errors.yearsExp.message}</p>}
          <label>What certificates do you have?</label>
          <input
            type="text"
            id="certNames"
            name="certNames"
            placeholder="e.g. BA Childcare"
            {...register("certNames", {
              required: {
                value: true,
                message: "Please type your certificates",
              },
            })}
            onChange={update("certNames")}
          />
          {errors.certNames && <p>{errors.certNames.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Experience;
