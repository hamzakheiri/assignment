import { Button } from '@mui/material'
import axios from 'axios';
import React, { useCallback } from 'react'

const FileDownload = (children, {documentId}) => {

  const downloadBinaryDocument = useCallback(async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/documents/${documentId}`);
      console.log('data', data);
      const response = await axios.get(`http://localhost:5000/documents/full/${documentId}`, {
        responseType: 'arraybuffer', 
      });

      const blob = new Blob([response.data], { type: 'application/octet-stream' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = data.title;
      document.body.appendChild(link);
      
      link.click();

      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading document:', error);
    }
  }, [documentId]);
  
  return (
    
    <div>
      <Button variant='contained' className="File-download" onClick={downloadBinaryDocument}> Download Binary Document </Button>
    </div>
  )
}

export default FileDownload