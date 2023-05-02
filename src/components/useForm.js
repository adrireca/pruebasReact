import React from 'react';

export const useForm = ({ type }) => {
    const [value, setValue] = React.useState('');

    const onChange = event => {
        setValue(event.target.value);
    }

  return (
    type,
    value,
    onChange
  )
}
