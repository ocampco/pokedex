export const transformList = ({ results }) =>
  results.map((result, index) => ({
    ...result,
    id: index + 1,
  }));
