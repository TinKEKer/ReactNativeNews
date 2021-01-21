export const updateInput = (data, callback, destination) => {
  callback((prevValue) => ({
    ...prevValue,
    [destination]: data,
  }));
};
