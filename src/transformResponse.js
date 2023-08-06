export const transformList = ({ results }) =>
  results.map((result, index) => ({
    ...result,
    id: index + 1,
  }));

// TODO: create attribute list
export const transformDetail = ({
  name,
  height,
  weight,
  types,
  sprites,
}) => ({
  name,
  height,
  weight,
  types: types.map(item => item.type.name),
  image: sprites['front_default'],
});
