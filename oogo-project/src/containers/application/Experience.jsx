import React from "react";
import "./experience.css";

const Experience = ({ data, update }) => {
  const { yearsExp, certNames } = data;

  return (
    <div className="oogo__experience">
      <div className="oogo__experience_content">
        <h2>Become a Minder</h2>
        <h3>We are excited to welcome you to öogo</h3>
        <p>Tell us more about you!</p>
      </div>
      <div className="oogo__experience_form">
        <form action="#">
          <div className="oogo__experience_form-input">
            <label>How many years of experience?</label>
            <input
              type="text"
              id="yearsExp"
              name="yearsExp"
              placeholder="e.g. 4"
              value={yearsExp}
              onChange={update("yearsExp")}
            />
            <label>What certificates do you have?</label>
            <input
              type="text"
              id="certNames"
              name="certNames"
              placeholder="e.g. BA Childcare"
              value={certNames}
              onChange={update("certNames")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Experience;
