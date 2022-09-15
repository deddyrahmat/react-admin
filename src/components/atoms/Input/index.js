import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { Form, FormLabel } from 'react-bootstrap'

function Input (props) {
    const { label, name, error,  ...rest } = props;


    return (
        <>
            <div className="mb-3 row">
                <label htmlFor={name} className="col-sm-2 col-form-label">{label}</label>
                <div className='col-sm-10'>
                    <Field id={name} name={name} {...rest} className="form-control" />
                    <p className='text-danger'>{error}</p>
                </div>
            </div>
        </>
    )
}

export default Input