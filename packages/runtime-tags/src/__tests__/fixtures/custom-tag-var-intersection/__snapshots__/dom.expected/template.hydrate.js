// size: 340 (min) 219 (brotli)
const $expr_input_extra_x = _$.intersection(6, ($scope) => {
    const { 4: input_extra, 5: x } = $scope;
    _$.tagVarSignal($scope, x + input_extra);
  }),
  $x_effect = _$.effect("a0", ($scope, { 5: x }) =>
    _$.on($scope[0], "click", function () {
      $x($scope, x + 1);
    }),
  ),
  $x = _$.state(5, ($scope, x) => {
    _$.data($scope[1], x), $expr_input_extra_x($scope), $x_effect($scope);
  }),
  $expr_name_data = _$.intersection(
    5,
    ($scope) => {
      const { 3: name, 4: data } = $scope;
      $message($scope, `${name} ${data}`);
    },
    1,
    1,
  ),
  $message = _$.value(6, ($scope, message) => _$.data($scope[2], message));
_$.registerBoundSignal("b0", _$.value(4, $expr_name_data)), init();
