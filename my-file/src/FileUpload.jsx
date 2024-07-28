import React, { useState } from 'react';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        setUploading(true);
        const formData = new FormData();
        formData.append('file', selectedFile);

        fetch('/api/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setUploadedFile(data.file);
                setUploading(false);
            })
            .catch((error) => {
                setError(error.message);
                setUploading(false);
            });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {selectedFile && (
                <button onClick={handleUpload} disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Upload File'}
                </button>
            )}
            {uploadedFile && (
                <div>
                    <h2>Uploaded File:</h2>
                    <p>{uploadedFile.name}</p>
                    <p>{uploadedFile.size} bytes</p>
                </div>
            )}
            {error && (
                <div style={{ color: 'red' }}>
                    <p>Error:</p>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default FileUpload;