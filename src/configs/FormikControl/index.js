import React from 'react'
import {Input, RadioButtons, Checkbox, TextArea} from '../../components'

function FormikControl (props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
        return <Input {...rest} />
        case 'textarea':
        return <TextArea {...rest} />
        case 'radioButton':
        return <RadioButtons {...rest} />
        case 'checkbox':
        return <Checkbox {...rest} />
        default:
        return null
    }
}

export default FormikControl