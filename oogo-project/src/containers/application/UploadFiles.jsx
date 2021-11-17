import React from "react";
import "./uploadFiles.css";

const UploadFiles = ({ data, update, register, errors }) => {
  return (
    <div className="oogo__uploadFiles">
      <div className="oogo__uploadFiles_content">
        <h2>Become a Minder</h2>
        <h3>We are excited to welcome you to öogo</h3>
        <p>
          As you complete your sign up process, ask us questions anytime by
          using our chat box below. Typical time for completion is around 5
          minutes.
        </p>
        <p>
          Please send us your certificates, and a nice smiling photo of
          yourself.
        </p>
      </div>
      <div className="oogo__uploadFiles_form">
        <div className="oogo__uploadFiles_form-input">
          <label>Upload your Certificates</label>
          <input
            type="file"
            multiple
            id="certFiles"
            name="certFiles"
            {...register("certFiles", {
              required: {
                value: true,

                message: "Please upload your certificate files",
              },
            })}
            onChange={update("certFiles")}
          />
          {errors.certFiles && <p>{errors.certFiles.message}</p>}
          <label>Upload your picture</label>
          <input
            type="file"
            id="picture"
            name="picture"
            {...register("picture", {
              required: {
                value: true,
                message: "Please upload your picture",
              },
            })}
            onChange={update("picture")}
          />
          {errors.picture && <p>{errors.picture.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;
