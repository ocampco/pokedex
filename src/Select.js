import React from 'react';

export const SelectPlaceholder = () =>
  <select disabled>
    <option>loading...</option>
  </select>;

const Option = ({
  name,
  id,
}) =>
  <option value={name}>
    {id} - {name}
  </option>;

const Select = ({
  handleChange,
  selectedName = 'default',
  list,
}) =>
  <select
    onChange={(e) => handleChange(e.target.value)}
    value={selectedName}
  >
    <option disabled value='default'>
      please select
    </option>
    { list.map(({ name, id }) => (
        <Option
          key={id}
          name={name}
          id={id}
        />
    ))}
  </select>;

export default Select;
