import React, { PropTypes } from 'react';
import pick from 'lodash/pick';

const FormInput = (props) => (
  <label>
    {props.label}
    <input
      {...(pick(props, 'name', 'value', 'type'))}
      placeholder={props.label}
      onChange={e => props.onChange(props.name, e.target.value)}
    />
  </label>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  type: PropTypes.string,
  onChange: PropTypes.func
};

FormInput.defaultProps = {
  type: 'text',
  onChange: () => {}
};

export default FormInput;
