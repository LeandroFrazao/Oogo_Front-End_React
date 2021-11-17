import React from "react";
import "./userdetail.css";
const Userdetail = ({ data, update }) => {
  const { name, typeService } = data;
  return (
    <div className="oogo__userdetail">
      <div className="oogo__userdetail_content">
        <h2>Become a Minder</h2>
        <h3>We are excited to welcome you to öogo</h3>
        <p>
          As you complete your sign up process, ask us questions anytime by
          using our chat box below. Typical time for completion is around 5
          minutes.
        </p>
      </div>
      <div className="oogo__userdetail_form">
        <form action="#">
          <div className="oogo__userdetail_form-input">
            <label>What should we call you?</label>
            <input
              type="text"
              id="firstName"
              name="name"
              placeholder="e.g. Wally Michael"
              value={name}
              onChange={update("name")}
            />
            <label>Type of service</label>
            <input
              type="text"
              id="typeService"
              name="typeService"
              placeholder="e.g. Activity Based Childcare"
              value={typeService}
              onChange={update("typeService")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Userdetail;
