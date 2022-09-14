import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import { Card, Col, Row } from 'react-bootstrap'


// button bank for donasi
function RadioButtons (props) {
  const { label, name, options, ...rest } = props
  return (
    <div class="form-group form-check">
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='radio'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                  // className="d-none"
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
    </div>
  )
}

export default RadioButtons