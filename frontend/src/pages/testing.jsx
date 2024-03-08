import React, { useState } from 'react'

const Testing = () => {
    const [selectedFile, setSelectedFile] = useState('what');
  return (
    <div>{selectedFile}</div>
  )
}

export default Testing