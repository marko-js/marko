// size: 276 (min) 191 (brotli)
const $setup = () => {},
  $input = _._const(2, ($scope) =>
    _._text($scope[0], JSON.stringify($scope[2])),
  );
const tags = [_._template("a", "<div> </div>", "D l", $setup, $input)],
  $dynamicTag = _._dynamic_tag(2, 0, 0, 1),
  $x__script = _._script("b0", ($scope) =>
    _._on($scope[0], "click", function () {
      $x($scope, $scope[6] + 1);
    }),
  ),
  $x = _._let(6, ($scope) => {
    (_._text($scope[1], $scope[6]),
      $dynamicTag($scope, tags[0], () => [$scope[6], "foo"]),
      $x__script($scope));
  });
init();
