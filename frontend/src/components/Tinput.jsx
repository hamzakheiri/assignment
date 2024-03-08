import React from 'react'
import { TextField } from '@mui/material';
const Tinput = ({ children, change, fieldName, value, error }) => {
    return (
        <div className='t-input'>
            <TextField className="text-field"
                id="outlined-basic" value={value}
                label={children} variant="outlined"
                error={error === fieldName}
                helperText={error === fieldName ? "Incorrect entry." : ""}
                onChange={(e) => {
                    change(fieldName, e.target.value);
                }} />
        </div>
    )
}
export default Tinput