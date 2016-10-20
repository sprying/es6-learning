function wrapper(generatorFunction) {
  return function () {
    let generatorObject = generatorFunction();
    generatorObject.next();
    return generatorObject;
  };
}

const wrapped = wrapper(function* () {
  console.log(`First input: ${ yield }`);
  return 'DONE';
});

wrapped().next('hello!');