import React from "react";
import styles from "./ResumeUpload.module.css";

function ResumeUpload() {
  return (
    <div className={styles.container}>
  {/* Left Section - Image */}
  <div className={styles.leftSection}>
    <img src="src\assets\model2.jpg" alt="Upload Illustration" />
  </div>

  {/* Right Section - Upload Box */}
  <div className={styles.rightSection}>
    <div className={styles.uploadContainer}>
      <input type="file" className={styles.fileInput} capture="user"/>
      <p>Drag & Drop your resume here or</p>
      <button className={styles.uploadButton}>Upload</button>
    </div>
  </div>
</div>

  );
}

export default ResumeUpload;
