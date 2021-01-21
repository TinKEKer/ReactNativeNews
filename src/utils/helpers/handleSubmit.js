export const handleSubmit = (data, callback, logIn) => {
  const error =
    data.email === 'User' &&
    (data.password === '123456' || data.password === 123456)
      ? false
      : true;
  callback(error);
  if (!error) {
    logIn();
  }
};
