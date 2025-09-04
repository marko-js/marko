// size: 346 (min) 215 (brotli)
const $setup = () => {},
  $input = _._const(2, ($scope, input) => {
    (_._text($scope[0], input), _._return($scope, input));
  });
const tags = [
    _._template("a", "<div>Child: <!></div>", "Db%l", $setup, $input),
  ],
  $dynamicTag = _._dynamic_tag(2, 0, () => $y, 1),
  $x__script = _._script("b0", ($scope, { 5: x }) =>
    _._on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(5, ($scope, x) => {
    (_._text($scope[1], x),
      $dynamicTag($scope, tags[0], () => [x]),
      $x__script($scope));
  }),
  $y = _._var_resume(
    "b1",
    _._const(6, ($scope, y) => _._text($scope[4], y)),
  );
init();
