// size: 355 (min) 220 (brotli)
const $define_content__y__script = _._script("a1", ($scope, { 7: y }) =>
    _._on($scope[2], "click", function () {
      $define_content__y($scope, ++y);
    }),
  ),
  $define_content__y = _._let(7, ($scope, y) => {
    (_._text($scope[1], y),
      _._text($scope[3], y),
      $define_content__y__script($scope));
  }),
  $define_content__setup = _._child_setup(($scope) =>
    $define_content__y($scope, 1),
  ),
  $define_content__name = _._const(6, ($scope, name) =>
    _._text($scope[0], name),
  ),
  $define_content__$params = _._const(4, ($scope, $params2) =>
    $define_content__$temp($scope, $params2?.[0]),
  ),
  $define_content__$temp = _._const(5, ($scope, $temp) =>
    $define_content__name($scope, $temp.name),
  );
(_._content_resume(
  "a0",
  "<div>Hello <!> <!></div><button> </button>",
  "Db%c%l D l",
  $define_content__setup,
  $define_content__$params,
),
  init());
