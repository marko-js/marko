// size: 311 (min) 193 (brotli)
const $define_content__number = _._const(3, ($scope, number) =>
    _._text($scope[0], number),
  ),
  $define_content__setup = _._child_setup(),
  $define_content__$params = _._const(1, ($scope, $params2) =>
    $define_content__$temp($scope, $params2?.[0]),
  ),
  $define_content__$temp = _._const(2, ($scope, $temp) =>
    $define_content__number($scope, $temp.number),
  );
_._content_resume(
  "a0",
  "<div> </div>",
  "D l",
  $define_content__setup,
  $define_content__$params,
);
const $x__script = _._script("a1", ($scope, { 3: x }) =>
    _._on($scope[1], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(3, ($scope, x) => {
    ($define_content__number($scope[0], x),
      _._text($scope[2], x),
      $x__script($scope));
  });
init();
