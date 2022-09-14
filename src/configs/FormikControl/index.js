import React from 'react'
import {Input, RadioButtonsDonasi, RadioButtons, Checkbox, TextArea, Select} from '../../components'

function FormikControl (props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
        return <Input {...rest} />
        case 'textarea':
        return <TextArea {...rest} />
        case 'select':
        return <Select {...rest} />
        case 'radioButton':
        return <RadioButtons {...rest} />
        case 'radio':
        return <RadioButtonsDonasi {...rest} />
        case 'checkbox':
        return <Checkbox {...rest} />
        // case 'date':
        // return <DatePicker {...rest} />
        // case 'chakraInput':
        // return <ChakraInput {...rest} />
        default:
        return null
    }
}

export default FormikControl