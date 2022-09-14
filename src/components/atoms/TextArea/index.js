import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'

function TextArea (props) {
    const { label, name, ...rest } = props
    return (

        <div class="form-group">
            <label htmlFor={name} className="font-weight-bold">{label}</label>
            {/* <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
            <Field as='textarea' id={name} name={name} {...rest} className="form-control" />
        </div>

        // <div className='form-control'>
        //     <label htmlFor={name}>{label}</label>
        //     <Field as='textarea' id={name} name={name} {...rest} />
        //     {/* <ErrorMessage component={TextError} name={name} /> */}
        // </div>
    )
}

export default TextArea