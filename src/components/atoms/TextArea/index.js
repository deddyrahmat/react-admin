import React from 'react'
import { Field, ErrorMessage } from 'formik'

function TextArea (props) {
    const { label, name, error, ...rest } = props
    return (

        <div className="mb-3 row">
            <label htmlFor={name} className="col-sm-2 col-form-label">{label}</label>
            <div className='col-sm-10'>
                <Field as='textarea' id={name} name={name} {...rest} className="form-control" />
                <p className='text-danger'>{error}</p>
            </div>
        </div>
    )
}

export default TextArea