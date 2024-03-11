import styled from '@emotion/styled';
import { Button } from '@mui/material'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import FileDownload from '../components/FileDownload';

const TestingUpload = () => {
    const [selectedFile, setSelectedFile] = useState();
    const mounted = useRef(false);

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  

    useEffect(() => {
        if (!mounted.current){ 
            mounted.current = true;
          return;
        }
        const handleFileSubmit = async () => {
            try {
              const formData = new FormData();
              formData.append('file', selectedFile);
        
              const response = await axios.post('http://localhost:5000/documents', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
              
              console.log('File uploaded successfully:', response.data);
            } catch (error) {
              console.error('Error uploading file:', error);
            }
          }
          handleFileSubmit();
    }, [selectedFile]);

    return (
        <div style={{
            width: "500px",
            height: "500px",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<FaCloudUploadAlt />}
            >
                Upload file
                <VisuallyHiddenInput type="file" onChange={handleFileChange}/>
            </Button>

            <FileDownload> </FileDownload>

            
        </div>
    )
}

export default TestingUpload;