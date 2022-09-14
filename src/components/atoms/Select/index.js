import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'

function Select (props) {
    const { label, name, options, ...rest } = props
    return (

        <div class="form-group">
            <label htmlFor={name} className="font-weight-bold">{label}</label>

            <Field as='select' id={name} name={name} {...rest} className="form-control">
                <option value="">
                Pilih ---
                </option>
                {options.map(option => {
                return (
                    <option key={option.id ? option.id : option.value} value={option.id ? option.id : option.value}>
                        {option.title ? option.title : option.category}
                    </option>
                )
                })}
            </Field>
        </div>

    )
}

export default Select