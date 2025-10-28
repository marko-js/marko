// size: 143 (min) 85 (brotli)
(_._script("a0", ({ 2: input_valueChange }) => input_valueChange(1)),
  _._resume("b1", function ({ _: { 1: setter } }) {
    return function () {
      setter();
    };
  }),
  _._resume("b0", function ($scope) {
    return function () {};
  }),
  init());
