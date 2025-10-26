// size: 225 (min) 123 (brotli)
(_._resume("b0", function ({ 2: input_valueChange }) {
  return function () {
    input_valueChange(1);
  };
}),
  _._script("a0", ({ 2: input_valueChange }) => input_valueChange(1)),
  _._var_resume("c2", _._const(3)),
  _._resume("c1", function ({ _: { 3: setter } }) {
    return function () {
      setter();
    };
  }),
  _._resume("c0", function ($scope) {
    return (_new_value) => {};
  }),
  init());
