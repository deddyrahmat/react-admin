import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'

function Checkbox (props) {
    const { label, name, options, ...rest } = props
    return (
        <div class="form-group form-check">
            {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"> */}
            <Field name={name}>
                {({ field }) => {
                    return options.map(option => {
                        // console.log("option value", option)
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                type='checkbox'
                                id={option.value}
                                {...field}
                                {...rest}
                                value={option.value}
                                checked={field.value === option.value}
                                // checked={field.value.includes(option.value)}
                                // className="check-donasi"
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
            {/* <label class="form-check-label" for="exampleCheck1">{label}</label> */}
            {/* Donasi sebagai Hamba Allah SWT */}
        </div>

    )
}

export default Checkbox