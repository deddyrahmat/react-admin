import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import { Card, Col, Row } from 'react-bootstrap'


// button bank for donasi
function RadioButtonsDonasi (props) {
  const { label, name, options, ...rest } = props
  return (
    <div>
      <Card.Body>
        <Row>
          <Field name={name} >
            {({ field }) => {
              return options.map(option => {
                return (
                  <React.Fragment key={option.key}>
                    <Col  md='4'>
                      <input
                        type='radio'
                        id={option.value}
                        {...field}
                        {...rest}
                        value={option.value}
                        checked={field.value === option.value}
                        className="d-none"
                      />
                      <label htmlFor={option.value} className="w-100">
                        <Card className={field.value === option.value ? "card-payment active" : "card-payment"}>
                            <Card.Body>
                                <img src={option.image} alt={option.key} className="img-payment" />
                            </Card.Body>
                        </Card>   
                      </label>
                    </Col>
                  </React.Fragment>
                )
              })
            }}
          </Field>
        </Row>
      </Card.Body>
      {/* <ErrorMessage component={TextError} name={name} /> */}
    </div>
  )
}

export default RadioButtonsDonasi