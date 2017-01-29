import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import generateHash from 'random-hash';
import pick from 'lodash/pick';

const FormInput = (props) => {
  const id = generateHash();
  return (
    <div>
      <label htmlFor={id} className={css(styles.label)}>
        {props.label}
      </label>
      <input
        {...(pick(props, 'name', 'value', 'type'))}
        placeholder={props.label}
        onChange={e => props.onChange(props.name, e.target.value)}
        id={id}
        className={css(styles.input)}
      />
    </div>
  );
};

const styles = StyleSheet.create({
  label: {
    display: 'none'
  },
  input: {
    width: '100%'
  }
});

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
