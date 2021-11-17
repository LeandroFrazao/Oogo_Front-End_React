import React from "react";
import "./location.css";
const Location = ({ data, update, register, errors }) => {
  return (
    <div className="oogo__location">
      <div className="oogo__location_content">
        <h2>Become a Minder</h2>
        <h3>We are excited to welcome you to öogo</h3>
        <p>
          As you complete your sign up process, ask us questions anytime by
          using our chat box below. Typical time for completion is around 5
          minutes.
        </p>
      </div>
      <div className="oogo__location_form">
        <div className="oogo__location_form-input">
          <label htmlFor="fname">What is your address?</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="49 O'connel street"
            {...register("address", {
              required: {
                value: true,
                message: "Please type your address",
              },
            })}
            onChange={update("address")}
          />
          {errors.address && <p>{errors.address.message}</p>}
          <label htmlFor="stype">What is your town?</label>
          <input
            type="text"
            id="town"
            name="town"
            placeholder="e.g. Dublin"
            {...register("town", {
              required: {
                value: true,
                message: "Please type your town",
              },
            })}
            onChange={update("town")}
          />
          {errors.town && <p>{errors.town.message}</p>}
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            {...register("country", {
              required: {
                value: true,
                message: "Please select your country",
              },
            })}
            onChange={update("country")}
          >
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="ireland">Ireland</option>
            <option value="uk">UK</option>
            <option value="usa">USA</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Location;
