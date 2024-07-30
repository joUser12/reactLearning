import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const handleChange = (event) => {
        debugger;
        if (event.target.files.length > 0) {
            const file = URL.createObjectURL(event.target.files[0]);
            setFile(file);
            console.log(file);
        }
    }

    return (
        <div>
            <input type="file" onChange={handleChange} id="upload" accept="image/*" />
            <label htmlFor="upload">
                <div>
                    <img alt="uploadImage" src={file} />
                </div>
            </label>
        </div>
    )
}

export default FileUpload