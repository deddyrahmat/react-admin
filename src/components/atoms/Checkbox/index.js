import {Fragment} from 'react'
import { Field, ErrorMessage } from 'formik'

function Checkbox (props) {
    const { label, name, options, ...rest } = props
    return (
        <div className="form-group form-check">
            {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"> */}
            <Field name={name}>
                {({ field }) => {
                    return options.map(option => {
                        // console.log("option value", option)
                        return (
                            <Fragment key={option.key}>
                                <input
                                type='checkbox'
                                id={option.value}
                                {...field}
                                {...rest}
                                value={option.value}
                                checked={field.value === option.value}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </Fragment>
                        )
                    })
                }}
            </Field>
        </div>

    )
}

export default Checkbox