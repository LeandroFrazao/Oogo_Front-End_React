import React from "react";
import "./uploadFiles.css";

const UploadFiles = ({ data, update }) => {
  const { certFiles, picture } = data;
  return (
    <div className="oogo__uploadFiles">
      <div className="oogo__uploadFiles_content">
        <h2>Become a Minder</h2>
        <h3>We are excited to welcome you to öogo</h3>
        <p>
          Please send us your certificates, and a nice smiling photo of
          yourself.
        </p>
      </div>
      <div className="oogo__uploadFiles_form">
        <form action="#">
          <div className="oogo__uploadFiles_form-input">
            <label>Upload your Certificates</label>
            <input
              type="file"
              multiple
              id="certFiles"
              name="certFiles"
              value={certFiles}
              onChange={update("certFiles")}
            />
            <label>Upload your picture</label>
            <input
              type="file"
              id="picture"
              name="picture"
              value={picture}
              onChange={update("picture")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadFiles;
