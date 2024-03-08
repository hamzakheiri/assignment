import React, { useRef } from 'react'
import '../css/checkBoxInput.css'
const CheckBoxInput = ({children, field, change}) => {
    const ref = useRef({});
    
    return (
        <div className="check-box">
            <label>{children}</label>
            <input className="check-box-input" type="checkbox" name={field} ref={ref} onChange={() => {
                if (!change || !field) return;
                change(field, ref.current.checked);
            }} />
        </div>
    )
}

export default CheckBoxInput