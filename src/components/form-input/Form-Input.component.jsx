import {Group, Input, FormInputLabel} from './Form-input.styles';

const FormInput = ({label, ...otherProps}) => {

  return (
    <Group>

      <Input className="form-input" {...otherProps} required />
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>

    </Group>
  )
}

export default FormInput;