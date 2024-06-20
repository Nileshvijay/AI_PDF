import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }
  
    const formData = new FormData();
    formData.append('image', selectedFile); // Ensure 'file' matches the field name expected by multer
  
    try {
      const response = await axios.post('http://localhost:8080/api/nilesh/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Log the complete response to understand its structure
      console.log('Server Response:', response.data);
  
      // Check if response.data.file and response.data.file.filename exist
      if (response.data.file && response.data.file.filename) {
        setUploadedFileUrl(`http://localhost:8080/uploads/${response.data.file.filename}`);
        alert('File uploaded successfully!');
      } else {
        throw new Error('Invalid response structure');
      }
    } catch (error) {
      console.error('Error uploading file:', error.response ? error.response.data : error.message);
      alert('Failed to upload file.');
    }
  };
  

  const handleFileRemove = () => {
    setSelectedFile(null);
    setUploadedFileUrl(null);
  };

  return (
    <div className="navbar">
      <div className="logo">
        Logo {/* Replace with your actual logo component or image */}
      </div>
      <div className="upload-section">
        <div className="upload-icon">
          <FontAwesomeIcon icon={faFileUpload} /> {/* Use FontAwesomeIcon component */}
        </div>
        <div className="upload-text">
          {selectedFile ? selectedFile.name : 'Upload PDF'}
        </div>
        <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="fileInput" />
        <label htmlFor="fileInput" className="circle-icon" style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faPlusCircle} /> {/* Use FontAwesomeIcon component */}
        </label>
        <button onClick={handleFileUpload}>Upload</button>
      </div>
      {selectedFile && (
        <div className="uploaded-file">
          <div className="file-info">
            <span>{selectedFile.name}</span>
            <FontAwesomeIcon icon={faTimesCircle} onClick={handleFileRemove} style={{ cursor: 'pointer', marginLeft: '10px' }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
