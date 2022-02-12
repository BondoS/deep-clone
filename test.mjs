export const test = (desc, cb) => {
  // test success if the return of the callback is true
  if (cb()) {
    return console.log(`%c - ${desc} test success`, 'color:green;');
  }
  return console.log(`%c - ${desc} test failed`, 'color:green;');
};
