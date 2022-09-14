import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import { Form, FormLabel } from 'react-bootstrap'

function Input (props) {
    const { label, name,  ...rest } = props;


    return (
        
        <div>
            <div className="form-group">
                <label htmlFor={name} className="font-weight-bold">{label}</label>
                <Field id={name} name={name} {...rest} className="form-control" />
            </div>
            {/* <ErrorMessage component={TextError} name={name} /> */}
        </div>
    )
}

export default Input