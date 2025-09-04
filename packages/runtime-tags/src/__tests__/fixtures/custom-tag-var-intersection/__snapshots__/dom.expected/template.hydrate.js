// size: 298 (min) 212 (brotli)
const $input_extra__OR__x = _._or(6, ($scope) => {
    let { 4: input_extra, 5: x } = $scope;
    _._return($scope, x + input_extra);
  }),
  $x__script = _._script("a0", ($scope, { 5: x }) =>
    _._on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(5, ($scope, x) => {
    (_._text($scope[1], x), $input_extra__OR__x($scope), $x__script($scope));
  }),
  $message = _._const(6, ($scope, message) => _._text($scope[2], message)),
  $name__OR__data = _._or(
    5,
    ($scope) => {
      let { 3: name, 4: data } = $scope;
      $message($scope, `${name} ${data}`);
    },
    1,
    1,
  );
(_._var_resume("b0", _._const(4, $name__OR__data)), init());
