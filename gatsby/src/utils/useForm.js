import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // check if its a number, convert
    let { value } = e.target.value;
    if (e.target.type === 'number') {
      value = parseInt(value);
    }
    setValues({
      // copy existing values into it
      ...values,
      // update new value that changed
      [e.target.name]: e.target.value,
    });
  }
  return { values, updateValue };
}
